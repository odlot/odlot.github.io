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
I want to build a simple cross-platform task management app called 'TaskFlow' that helps users create, track, and prioritize their daily tasks. Please generate a comprehensive Product Requirements Document (PRD) and a Detailed Design Document (DR) for this app. The PRD should outline the problem statement, target users, key features, user flows, and success criteria. The DR should cover the system architecture, technology stack, data models, API design, and
potential scalability considerations. Do not generate any code
—just provide structured documentation
```
