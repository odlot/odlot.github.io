Create local PR reviews in chat using read-only GitHub CLI data.

Scope:

- Keep reviews local in chat.
- Do not submit GitHub review comments unless explicitly requested.
- Focus on changed lines and nearby context. Avoid speculative repo-wide rewrites.

Input workflow:

- Prefer VS Code tasks in `.vscode/tasks.json`: `gh: pr view (summary json)`, `gh: pr files (number)`, `gh: pr diff (number)`, `gh: pr checks required (number)`.
- If tasks are unavailable, run equivalent commands:
```bash
gh pr view <pr_number> --json number,title,body,baseRefName,headRefName,changedFiles,additions,deletions,reviewDecision,mergeable
gh pr diff <pr_number> --name-only
gh pr diff <pr_number>
gh pr checks <pr_number> --required
```

Review priorities:

- Correctness and behavior regressions first.
- Security, memory-safety, concurrency, and API or ABI compatibility risks.
- Maintainability and expressibility: clear intent, coherent names, and understandable control flow.
- Conciseness: report only material findings and avoid duplicate or purely stylistic comments.

Output format:

- `Findings` ordered by severity: `high`, `medium`, `low`.
- One issue per finding with `file:line`, impact, and minimal fix direction.
- `Test Gaps` for missing or weak coverage tied to changed behavior.
- `Open Questions` only when a blocker depends on missing context.
- If no blocking issues exist, state `No blocking findings` and list residual risks.
