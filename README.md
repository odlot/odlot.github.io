# README.md

This repository contains the source code of `odlot.github.io`.

---

## Locally testing the webpage

To locally test the webpage, navigate into the `webpage` folder and execute:

```bash
# Build `index.html` from `notes.md` using the template:

```bash
pandoc webpage/notes.md -o webpage/index.html --template=webpage/index.template.html -V title="Notes" -s --toc
open webpage/index.html
```
```

Note: GitHub Actions will run this conversion automatically during the Pages deployment.
