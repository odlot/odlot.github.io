# Copilot + VS Code Template

This template is for repos that use GitHub Copilot in VS Code with predictable, reusable behavior.

## Design goals

- Keep global policy in `.github/copilot-instructions.md`.
- Put language and area rules in `.github/instructions/*.instructions.md` using `applyTo` globs.
- Use VS Code chat customization keys only for workflows that benefit from stricter output shape (`review`, `commit message`, `PR description`).
- Do not use deprecated keys:
  - `github.copilot.chat.codeGeneration.instructions`
  - `github.copilot.chat.testGeneration.instructions`

## Best-practice guardrails

- Keep instructions short and specific; prefer one directive per bullet.
- Avoid conflicting directives across instruction files.
- Prefer path-specific instruction files for language or domain rules.
- Custom instructions affect chat and generation flows, not inline suggestions.
- Start small and iterate with real pull requests.
- Use Chat diagnostics in VS Code to verify loaded instruction files.

## Copy into a target repo

```bash
cp -R templates/copilot-vscode/. <target-repo>/
```

Then tune only these parts:

- `applyTo` globs in `.github/instructions/*.instructions.md`
- wording in `.github/copilot-instructions.md`
- optional lines in `.vscode/settings.json` (`chat.instructionsFilesLocations` and per-feature review/commit/PR instructions)

## Suggested baseline

- Keep `.github/copilot-instructions.md` short.
- Add project-specific detail in instruction files.
- Keep commands safe and repeatable through `.vscode/tasks.json`.
