# Handoff

*Replaced wholesale 2026-11-08. Read `PROJECT_GUIDE.md` first; this file only
covers this repo. The case work lives in the private repo; its `HANDOFF.md` has
the detail.*

## Where things stand

**Domain move prepared, not live.** Dan chose https://casestudy.aioperationsmanagement.ai
as the permanent address (2026-11-08; logged in the private repo's
`pilot/log/decisions.md` on its branch `claude/elegant-fermat-qbocpr`). On this branch:
`astro.config.mjs` (`site` = new address, `base` = `/`), the five one-pagers
and five reports rebuilt with the new address, `docs/domain-move.md` (the
step-by-step switch), and notes in `CLAUDE.md`, `README.md` and the guide.
The build passes and all 4,204 internal links resolve.

**Do not merge until DNS resolves** (step 3 of `docs/domain-move.md`), or the
site goes to an address that does not exist yet.

The library redesign of 2026-10-24 is done (see `CLAUDE.md`, "The library style").

## Still open

- Dan: the DNS record and the switch in `docs/domain-move.md`; then check an
  old github.io link redirects.
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

Written on `claude/elegant-fermat-qbocpr`. Branches are assigned per session.
