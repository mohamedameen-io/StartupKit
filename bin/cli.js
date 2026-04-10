#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const SKILLS = [
  "startupkit",
  "sk-diverge",
  "sk-niche",
  "sk-offer",
  "sk-validate",
  "sk-money",
  "sk-leads",
  "sk-skills",
  "sk-export",
];

const TEMPLATES = [
  "session-template.md",
  "diverge-template.md",
  "niche-template.md",
  "offer-template.md",
  "validation-template.md",
  "money-model-template.md",
  "lead-strategy-template.md",
  "skills-match-template.md",
  "one-pager-template.md",
];

const command = process.argv[2];

function printUsage() {
  console.log(`
  startupkit - Interactive startup ideation kit for Claude Code

  Usage:
    npx startupkit init       Install skills and templates into current directory
    npx startupkit uninstall  Remove installed skills and templates
    npx startupkit help       Show this help message

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
  const pkgRoot = path.resolve(__dirname, "..");
  const skillsSrc = path.join(pkgRoot, "skills");
  const templatesSrc = path.join(pkgRoot, "templates");

  let installed = 0;
  let skipped = 0;

  // Install skills
  for (const skill of SKILLS) {
    const src = path.join(skillsSrc, skill);
    const dest = path.join(cwd, ".claude", "skills", skill);
    if (fs.existsSync(path.join(dest, "SKILL.md"))) {
      console.log(`  skip  .claude/skills/${skill}/SKILL.md (already exists)`);
      skipped++;
    } else {
      copyDir(src, dest);
      console.log(`  add   .claude/skills/${skill}/SKILL.md`);
      installed++;
    }
  }

  // Install templates
  const templatesDest = path.join(cwd, "workspace", "templates");
  fs.mkdirSync(templatesDest, { recursive: true });
  for (const template of TEMPLATES) {
    const src = path.join(templatesSrc, template);
    const dest = path.join(templatesDest, template);
    if (fs.existsSync(dest)) {
      console.log(`  skip  workspace/templates/${template} (already exists)`);
      skipped++;
    } else {
      fs.copyFileSync(src, dest);
      console.log(`  add   workspace/templates/${template}`);
      installed++;
    }
  }

  // Create sessions directory
  const sessionsDir = path.join(cwd, "workspace", "sessions");
  fs.mkdirSync(sessionsDir, { recursive: true });

  console.log(`
  Done! ${installed} files installed, ${skipped} skipped.

  Next steps:
    1. Open Claude Code in this directory
    2. Run /startupkit to create a new brainstorming session
    3. Follow the phases: /sk-diverge -> /sk-niche -> /sk-offer -> ...
  `);
}

function uninstall() {
  const cwd = process.cwd();
  let removed = 0;

  for (const skill of SKILLS) {
    const dir = path.join(cwd, ".claude", "skills", skill);
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true });
      console.log(`  remove  .claude/skills/${skill}/`);
      removed++;
    }
  }

  for (const template of TEMPLATES) {
    const file = path.join(cwd, "workspace", "templates", template);
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`  remove  workspace/templates/${template}`);
      removed++;
    }
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
