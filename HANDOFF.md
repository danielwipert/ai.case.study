# Handoff

*Replaced wholesale 2026-10-31. Read `PROJECT_GUIDE.md` first; this file only
covers this repo. The case work lives in the private repo; its `HANDOFF.md` has
the detail.*

## Where things stand

**AAI-2026-023 version 2 is live** (PR #54, merged 2026-10-31): OpenAI's
29 October monitoring post (D15) and METR's red-teaming post (D16) added after
the cutoff by dated amendments; 55 new rows; grade B unchanged; both PDFs
rebuilt (the one-page summary at 75% type).

**New site feature:** a case may carry `src/record/cases/CSnnn/superseded.yaml`,
rows published earlier and since superseded. The loader (`record.mjs`,
`loadSuperseded`) fails the build if one is still a live row, names a
replacement that is not a row, or lacks a reason or a YYYY-MM-DD date; the full
record page lists them under "Superseded rows" with links to their
replacements (DW 2026-10-31: append-only in public as in private). Only CS023
uses it so far (F033, F096).

## Still open

- Per-case charts and a pull quote; the literal `**` in bulleted narrative on
  the full-record page; the propositions page (all from before).
- Not to start without Dan: J4, J5, any new legacy-format case.

## Branch

Written on `claude/wonderful-fermat-mggeqz`, restarted from `main` after #54.
Decisions of 2026-10-30/31 are in the private repo's `pilot/log/decisions.md`.
