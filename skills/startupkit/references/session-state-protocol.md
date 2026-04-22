# Session State Protocol

Use the YAML frontmatter in `workspace/sessions/{name}/00-session.md` as the source of truth.

## Update Rules

When a phase is completed:

1. Set the current phase row in `phases[]` to `status: complete`.
2. Set `session.activePhase` to the next phase number.
3. Set `session.nextPhase` to the same next phase number (or `11` after pitch).
4. Set `session.updated` to today's date (`YYYY-MM-DD`).

For in-progress work:

- Use `status: in_progress` for the active phase.

For not-started phases:

- Use `status: not_started`.

Export phase:

- On `/sk-export` completion, set `phases[id=11].status: complete`, `export.generated: true`, and `session.status: completed`.

## Legacy Fallback

If a session file has no YAML frontmatter, migrate it once by:

1. Parsing the status table.
2. Creating the frontmatter block with equivalent values.
3. Keeping the markdown table for human readability.
