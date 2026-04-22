# StartupKit File Contracts

This file defines the repository contract for installable StartupKit assets.

## Canonical Sources

- `skills/<name>/SKILL.md` is the only source of truth for each skill.
- `skills/<name>/references/*.md` are optional per-skill reference assets.
- `templates/*.md` are the shared templates installed into `~/.claude/skills/startupkit/templates/`.

No duplicate skill content should be tracked in `.claude/`, `resources/`, or other mirror directories.

## Reference Rules

- References inside any `SKILL.md` must be relative and portable.
- Absolute local paths are forbidden (for example `/Users/...`, `/home/...`, `C:\...`).
- A skill may only reference files in:
  - Its own skill directory (`references/...`), or
  - Session output paths under `workspace/sessions/{name}/...`.

## Installer Expectations

- `startupkit init` and `startupkit init --upgrade` read assets from `skills/` and `templates/`.
- Install-manifest and contract checks must validate the same canonical sources described above.
