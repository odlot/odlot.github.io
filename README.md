# README.md

This repository contains the source code of `odlot.github.io`.

This webpage is built using [`pandoc`](https://pandoc.org) and hosted via [GitHub Pages](https://docs.github.com/en/pages).

---

## Locally testing the webpage

To locally test the webpage, navigate into the `root` folder and execute:

```bash
pandoc webpage/notes.md -o webpage/index.html --template=webpage/index.template.html -s
open webpage/index.html
```
