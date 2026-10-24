# Handoff

*Replaced wholesale 2026-10-24. Read `PROJECT_GUIDE.md` first; this file only
covers this repo. The case work lives in the private repo; its `HANDOFF.md` has
the detail.*

## Where things stand

The whole site has been redesigned in three steps (Dan's gates of 2026-10-24,
all logged in the private repo's `pilot/log/decisions.md` on branch
`claude/dazzling-pascal-lbbtpt`; see `CLAUDE.md`, "The library style"):

1. A mock-up: claude.ai/artifact/YAgnJLpQtaXKpfSQc5nvGH.
2. The four rebuilt cases' pages: PR #43.
3. Home, Explore, Methodology and the 17 legacy case pages, on the six themes:
   the PR after #43. Home has the theme mosaic (each tile opens Explore filtered
   by `?theme=`); Explore gained a Theme filter; legacy pages carry an "Older
   format" note.

`magazine.css`, `MagazineLayout` and the Archivo and Source Serif font packages
are gone; `LibraryLayout`, `LibraryCard` and `legacy.css` replace them.

## Still open

- Per-case charts (bar charts, pictograms) and a pull quote: new per-case data,
  and the pull quote is an editorial choice. Later, case by case.
- Pre-existing: the full-record page shows literal `**` around bold text in
  bulleted narrative lists (seen in CS016 headings 2, 5, 6, 8, 10).
- The propositions page is still withdrawn; when it returns it needs the
  library style.
- From before: the 3–5 readers for the label test; Reuters' two policy links
  for CS001's publisher grade; P6's review warning. Not to start without Dan:
  J4, J5, any new legacy-format case.

## Branch

Written on `claude/dazzling-pascal-lbbtpt`. Branches are assigned per session.
