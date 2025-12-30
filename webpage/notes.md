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
