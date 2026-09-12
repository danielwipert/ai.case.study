# Session handoff

**This file is a snapshot, not a log.** Replace it wholesale at the end of every session, keep it to about a page, and delete anything the next session does not need. Durable rules belong in `CLAUDE.md`, not here.

*Last updated: 2026-09-12*

## Where the library stands

Live at <https://danielwipert.github.io/ai.case.study/> — six published cases and one unpublished lead.

| ID | Subject | Type | Grade |
| --- | --- | --- | --- |
| AAI-2026-001 | OpenAI evaluation agents breached Hugging Face | failure-incident | A |
| AAI-2026-002 | Customer-support copilot productivity | economic-case | B |
| AAI-2026-003 | Uber's AI coding budget overrun | economic-case | C |
| AAI-2026-004 | Microsoft pulls internal Claude Code licences | — | `research` lead, off-site |
| AAI-2026-005 | Workday bias-testing data held privileged | governance-regulatory | B |
| AAI-2026-006 | Pediatric sepsis model against vendor claims | evaluation | B |
| AAI-2026-007 | Klarna's AI workforce reduction | organizational-transformation | B |

All six case types, all six claim labels, and grades A through C are now in use.

## What this session built

- **Evidence became machinery.** Sources are structured front-matter data with roles, evidentiary chains, and the source policy's admission test; the case page renders them as an evidence ledger; `npm run build` fails on taxonomy, citation, quotation-locator, triangulation, or claim-label breaches. A second tier prints "evidence gaps" without failing, so honest gaps never have to be faked to pass.
- **Editorial vocabulary in use:** controlled claim labels, `single_chain_rationale`, `evidence_upgrade_path`, `clinical-care` added to business functions.
- **Five cases written** (003–007), and 001 raised to grade A on review.
- **Three bugs fixed:** the explore filters never worked (`.case-card { display: flex }` beat `[hidden]`), the deploy workflow raced two triggers and cancelled one at random, and `related_cases` validated but rendered nowhere.

## Open items

1. **Archive snapshots.** Every source reports a missing `archive_url`; archive.org is unreachable from the sandbox. Needs a normal browser — roughly ten minutes of work that clears the largest standing gap.
2. **AAI-2026-004 is blocked.** It stays at `research` until The Verge's original report can be read or Microsoft or Anthropic says something on the record.
3. **Editorial calls worth revisiting:** grade C on 003, `associational` on 006 against the paper's own causal language, and `descriptive` plus grade B on 007.

## Suggested next step

Pick the next case to fill a real gap rather than the next available story. The library has no public-sector organisation, nothing outside the US, UK, and Sweden, and no case centred on the people whose work changed rather than on the organisation's economics.
