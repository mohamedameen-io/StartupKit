#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");
const crypto = require("crypto");
const { spawnSync } = require("child_process");

const command = process.argv[2];
const args = process.argv.slice(3);
const pkgRoot = path.resolve(__dirname, "..");
const pkgJson = JSON.parse(fs.readFileSync(path.join(pkgRoot, "package.json"), "utf8"));
const pkgVersion = pkgJson.version;

function hasFlag(flag) {
  return args.includes(flag);
}

function printUsage() {
  console.log(`
  startupkit - Interactive startup ideation kit for Claude Code

  Usage:
    npx startupkit init               Install skills globally and templates locally
    npx startupkit init --upgrade     Update changed files, preserving local edits
    npx startupkit init --force       Overwrite all changed files
    npx startupkit init --dry-run     Preview install actions without writing
    npx startupkit init --verbose     Print per-file decisions
    npx startupkit doctor             Run repository contract checks
    npx startupkit uninstall           Remove installed skills and templates
    npx startupkit help                Show this help message

  Skills and templates are installed globally (~/.claude/skills/) so they work
  in any project. Session output is saved in the current working directory.

  After installing, open Claude Code and run /startupkit to begin.
  `);
}

function listFilesRecursively(baseDir) {
  const files = [];
  const stack = [baseDir];

  while (stack.length > 0) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile()) {
        files.push(fullPath);
      }
    }
  }

  return files.sort();
}

function discoverSkills(skillsDir) {
  return fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function discoverTemplates(templatesDir) {
  return fs
    .readdirSync(templatesDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort();
}

function hashFile(filePath) {
  const digest = crypto.createHash("sha256");
  digest.update(fs.readFileSync(filePath));
  return digest.digest("hex");
}

function readInstallManifest(manifestPath) {
  if (!fs.existsSync(manifestPath)) {
    return { version: null, files: {} };
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const files = {};
    for (const item of parsed.files || []) {
      files[item.relPath] = item.sha256;
    }
    return { version: parsed.version || null, files };
  } catch (error) {
    return { version: null, files: {} };
  }
}

function runDoctor() {
  const doctorScript = path.join(pkgRoot, "scripts", "doctor", "index.js");
  if (!fs.existsSync(doctorScript)) {
    console.log("Doctor checks are not available yet (scripts/doctor/index.js missing).");
    process.exit(1);
  }

  const result = spawnSync(process.execPath, [doctorScript, ...args], {
    stdio: "inherit",
    cwd: pkgRoot,
  });
  process.exit(result.status === null ? 1 : result.status);
}

function init(options) {
  const home = os.homedir();
  const skillsSrc = path.join(pkgRoot, "skills");
  const templatesSrc = path.join(pkgRoot, "templates");
  const skillsDest = path.join(home, ".claude", "skills");
  const templatesDest = path.join(skillsDest, "startupkit", "templates");
  const manifestPath = path.join(skillsDest, "startupkit", ".install-manifest.json");

  const { files: previousHashes } = readInstallManifest(manifestPath);
  const stats = { added: 0, updated: 0, skipped: 0, conflict: 0, unchanged: 0 };
  const manifestFiles = [];

  const skills = discoverSkills(skillsSrc);
  const templates = discoverTemplates(templatesSrc);

  const operations = [];

  for (const skill of skills) {
    const srcDir = path.join(skillsSrc, skill);
    const srcFiles = listFilesRecursively(srcDir);
    for (const srcFile of srcFiles) {
      const relativeWithinSkill = path.relative(srcDir, srcFile);
      if (skill === "startupkit" && relativeWithinSkill.startsWith(`templates${path.sep}`)) {
        // Root templates/ is canonical for install payloads.
        continue;
      }
      const relPath = path.join("skills", skill, relativeWithinSkill);
      const destFile = path.join(skillsDest, skill, relativeWithinSkill);
      operations.push({ srcFile, destFile, relPath });
    }
  }

  for (const template of templates) {
    const srcFile = path.join(templatesSrc, template);
    const relPath = path.join("templates", template);
    const destFile = path.join(templatesDest, template);
    operations.push({ srcFile, destFile, relPath });
  }

  for (const op of operations) {
    const srcHash = hashFile(op.srcFile);
    const destExists = fs.existsSync(op.destFile);
    const destHash = destExists ? hashFile(op.destFile) : null;
    const prevHash = previousHashes[op.relPath] || null;
    let action = "unchanged";

    if (!destExists) {
      action = "added";
      if (!options.dryRun) {
        fs.mkdirSync(path.dirname(op.destFile), { recursive: true });
        fs.copyFileSync(op.srcFile, op.destFile);
      }
    } else if (destHash === srcHash) {
      action = options.upgrade ? "unchanged" : "skipped";
    } else if (!options.upgrade && !options.force) {
      action = "skipped";
    } else {
      const localModified = prevHash !== null && destHash !== prevHash;
      if (localModified && !options.force) {
        action = "conflict";
      } else {
        action = "updated";
        if (!options.dryRun) {
          fs.mkdirSync(path.dirname(op.destFile), { recursive: true });
          fs.copyFileSync(op.srcFile, op.destFile);
        }
      }
    }

    stats[action] += 1;
    if (options.verbose || action !== "unchanged") {
      const dryRunLabel = options.dryRun ? "dry-run " : "";
      console.log(`  ${dryRunLabel}${action.padEnd(8)} ${op.relPath}`);
    }

    const manifestHash = action === "conflict" ? destHash : srcHash;
    manifestFiles.push({
      relPath: op.relPath,
      sha256: manifestHash || srcHash,
      action,
    });
  }

  if (!options.dryRun) {
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
    fs.writeFileSync(
      manifestPath,
      JSON.stringify(
        {
          version: pkgVersion,
          installedAt: new Date().toISOString(),
          files: manifestFiles,
        },
        null,
        2
      ) + "\n"
    );
  }

  console.log(`
  StartupKit install report (v${pkgVersion})
    added:    ${stats.added}
    updated:  ${stats.updated}
    skipped:  ${stats.skipped}
    conflict: ${stats.conflict}
    unchanged:${stats.unchanged}
  `);

  if (stats.conflict > 0) {
    console.log("  Conflicts detected. Re-run with --force to overwrite local edits.\n");
  }

  if (options.dryRun) {
    console.log("  Dry run complete. No files were written.\n");
    return;
  }

  console.log(`
  Skills and templates installed globally to ~/.claude/skills/.
  Available in any Claude Code session.

  Next steps:
    1. Open Claude Code in any directory
    2. Run /startupkit to create a new brainstorming session
    3. Follow the phases: /sk-diverge -> /sk-niche -> /sk-competitors -> ...
  `);
}

function uninstall() {
  const home = os.homedir();
  const skillsSrc = path.join(pkgRoot, "skills");
  const skills = discoverSkills(skillsSrc);
  let removed = 0;

  for (const skill of skills) {
    const dir = path.join(home, ".claude", "skills", skill);
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`  remove  ~/.claude/skills/${skill}/`);
      removed++;
    }
  }

  const templateDir = path.join(home, ".claude", "skills", "startupkit", "templates");
  if (fs.existsSync(templateDir)) {
    fs.rmSync(templateDir, { recursive: true, force: true });
    console.log(`  remove  ~/.claude/skills/startupkit/templates/`);
    removed++;
  }

  const manifestPath = path.join(home, ".claude", "skills", "startupkit", ".install-manifest.json");
  if (fs.existsSync(manifestPath)) {
    fs.rmSync(manifestPath, { force: true });
  }

  console.log(`\n  Done! ${removed} files removed.\n`);
}

switch (command) {
  case "init":
    console.log("\n  Installing StartupKit skills and templates...\n");
    init({
      upgrade: hasFlag("--upgrade"),
      force: hasFlag("--force"),
      dryRun: hasFlag("--dry-run"),
      verbose: hasFlag("--verbose"),
    });
    break;
  case "doctor":
    runDoctor();
    break;
  case "uninstall":
    console.log("\n  Removing StartupKit skills and templates...\n");
    uninstall();
    break;
  case "help":
  case "--help":
  case "-h":
  case undefined:
    printUsage();
    break;
  default:
    console.log(`\n  Unknown command: ${command}`);
    printUsage();
    process.exit(1);
}
