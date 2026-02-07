# Notes

## Git

- Use [`git worktree`](https://git-scm.com/docs/git-worktree) for referring to a branch containing a prototype or when performing a code review.
- It lets you check out the branch into a separate directory and open it up alongside the current development branch in the editor.

## Code Example

This is a coding example:

```yaml
jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v6
        with:
          submodules: recursive
          fetch-depth: 0
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Install pandoc
        run: sudo apt-get update && sudo apt-get install -y pandoc
      - name: Build `index.html` from `notes.md` using template
        run: |
          pandoc webpage/notes.md -o webpage/index.html --template=webpage/index.template.html -s
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: ./webpage
```

## Agents

Source: <https://dev.to/orenme/stop-waiting-start-building-my-practical-dive-into-github-copilot-agent-mode-1644>

```txt
I want to build a <ADD DESCRIPTION HERE>. Please generate a comprehensive Product Requirements Document (PRD) and a Detailed Design Document (DDD) for this app. The PRD should outline the problem statement, target users, key features, user flows, and success criteria. The DDD should cover the system architecture, technology stack, data models, API design, and
potential scalability considerations. Do not generate any code
—just provide structured documentation
```

Keep commits atomic:

```txt
Keep commits atomic: commit only the files you touched and list each path explicitly. For tracked files run `git commit -m "<scoped message>" -- path/to/file1 path/to/file2`. For brand-new files, use the one-liner `git restore --staged :/ && git add "path/to/file1" "path/to/file2" && git commit -m "<scoped message>" -- path/to/file1 path/to/file2`
```

## VS Code

- Use `copilot-instructions.md`: <https://code.visualstudio.com/docs/copilot/customization/overview>
  - <https://code.visualstudio.com/docs/copilot/customization/custom-instructions#_specify-custom-instructions-in-settings>
- <https://github.com/github/awesome-copilot/tree/main>

```json
  "github.copilot.chat.reviewSelection.instructions": [
      {
          "file": ".copilot-review-instructions.md"
      },
      {
          "text": "Resolve all TODO tasks."
      }
  ],
  "github.copilot.chat.testGeneration.instructions": [],
  "github.copilot.chat.codeGeneration.instructions": [],
  "github.copilot.chat.commitMessageGeneration.instructions": []
```
