# Copilot Instructions

Use repository instruction files under `.github/instructions` as the primary source of coding constraints.

- Respect file-scoped instructions via `applyTo` globs.
- When multiple instruction files apply, prioritize the most specific `applyTo` scope.
- Keep directives additive and non-conflicting across files.
- Keep edits minimal and targeted; avoid broad rewrites.
- Preserve behavior unless the task explicitly requests behavior changes.
- For cross-boundary changes, verify interfaces and tests end-to-end.
- If constraints are unclear, list assumptions before finalizing code.
- Note: these instructions guide chat and generation workflows, not inline completions.

## Command Safety

Use `.vscode/tasks.json` tasks for standard repo inspection commands when possible.

- Prefer read-only commands during analysis and review.
- Propose new tasks for recurring commands instead of ad-hoc shell snippets.
