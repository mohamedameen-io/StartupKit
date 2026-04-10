#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const SKILLS = [
  "startupkit",
  "sk-diverge",
  "sk-niche",
  "sk-competitors",
  "sk-positioning",
  "sk-offer",
  "sk-validate",
  "sk-money",
  "sk-leads",
  "sk-skills",
  "sk-pitch",
  "sk-export",
];

const TEMPLATES = [
  "session-template.md",
  "diverge-template.md",
  "niche-template.md",
  "competitors-template.md",
  "positioning-template.md",
  "offer-template.md",
  "validation-template.md",
  "money-model-template.md",
  "lead-strategy-template.md",
  "skills-match-template.md",
  "pitch-template.md",
  "one-pager-template.md",
];

const command = process.argv[2];

function printUsage() {
  console.log(`
  startupkit - Interactive startup ideation kit for Claude Code

  Usage:
    npx startupkit init       Install skills globally and templates locally
    npx startupkit uninstall  Remove installed skills and templates
    npx startupkit help       Show this help message

  Skills and templates are installed globally (~/.claude/skills/) so they work
  in any project. Session output is saved in the current working directory.

  After installing, open Claude Code and run /startupkit to begin.
  `);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function init() {
  const cwd = process.cwd();
  const home = os.homedir();
  const pkgRoot = path.resolve(__dirname, "..");
  const skillsSrc = path.join(pkgRoot, "skills");
  const templatesSrc = path.join(pkgRoot, "templates");

  let installed = 0;
  let skipped = 0;

  // Install skills globally (~/.claude/skills/)
  const skillsDest = path.join(home, ".claude", "skills");
  for (const skill of SKILLS) {
    const src = path.join(skillsSrc, skill);
    const dest = path.join(skillsDest, skill);
    if (fs.existsSync(path.join(dest, "SKILL.md"))) {
      console.log(`  skip  ~/.claude/skills/${skill}/SKILL.md (already exists)`);
      skipped++;
    } else {
      copyDir(src, dest);
      console.log(`  add   ~/.claude/skills/${skill}/SKILL.md`);
      installed++;
    }
  }

  // Install templates into startupkit skill directory
  const templatesDest = path.join(skillsDest, "startupkit", "templates");
  fs.mkdirSync(templatesDest, { recursive: true });
  for (const template of TEMPLATES) {
    const src = path.join(templatesSrc, template);
    const dest = path.join(templatesDest, template);
    if (fs.existsSync(dest)) {
      console.log(`  skip  ~/.claude/skills/startupkit/templates/${template} (already exists)`);
      skipped++;
    } else {
      fs.copyFileSync(src, dest);
      console.log(`  add   ~/.claude/skills/startupkit/templates/${template}`);
      installed++;
    }
  }

  console.log(`
  Done! ${installed} files installed, ${skipped} skipped.

  Skills and templates installed globally to ~/.claude/skills/.
  Available in any Claude Code session.

  Next steps:
    1. Open Claude Code in any directory
    2. Run /startupkit to create a new brainstorming session
    3. Follow the phases: /sk-diverge -> /sk-niche -> /sk-competitors -> ...
  `);
}

function uninstall() {
  const cwd = process.cwd();
  const home = os.homedir();
  let removed = 0;

  // Remove global skills
  for (const skill of SKILLS) {
    const dir = path.join(home, ".claude", "skills", skill);
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true });
      console.log(`  remove  ~/.claude/skills/${skill}/`);
      removed++;
    }
  }

  // Remove templates from startupkit skill directory
  const templateDir = path.join(home, ".claude", "skills", "startupkit", "templates");
  if (fs.existsSync(templateDir)) {
    fs.rmSync(templateDir, { recursive: true });
    console.log(`  remove  ~/.claude/skills/startupkit/templates/`);
    removed++;
  }

  console.log(`\n  Done! ${removed} files removed.\n`);
}

switch (command) {
  case "init":
    console.log("\n  Installing StartupKit skills and templates...\n");
    init();
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
