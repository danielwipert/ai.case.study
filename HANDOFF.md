# Session handoff

**This file is a snapshot, not a log.** Replace it wholesale at the end of every session, keep it to about a page, and delete anything the next session does not need. Durable rules belong in `CLAUDE.md`, not here.

*Last updated: 2026-09-13*

## Where the library stands

Live at <https://danielwipert.github.io/ai.case.study/> — eight published cases and one unpublished lead.

| ID | Subject | Type | Grade |
| --- | --- | --- | --- |
| AAI-2026-001 | OpenAI evaluation agents breached Hugging Face | failure-incident | A |
| AAI-2026-002 | Customer-support copilot productivity | economic-case | B |
| AAI-2026-003 | Uber's AI coding budget overrun | economic-case | C |
| AAI-2026-004 | Microsoft pulls internal Claude Code licences | — | `research` lead, off-site |
| AAI-2026-005 | Workday bias-testing data held privileged | governance-regulatory | B |
| AAI-2026-006 | Pediatric sepsis model against vendor claims | evaluation | B |
| AAI-2026-007 | Klarna's AI workforce reduction | organizational-transformation | B |
| AAI-2026-008 | METR's randomized trial on experienced developers | evaluation | B |
| AAI-2026-009 | DUO's student-grant fraud risk profile | failure-incident | A |

All six case types, all six claim labels, and all four causal-strength labels are now in use.

## What this session added

- **AAI-2026-008 (METR).** A randomized trial: 16 experienced open-source maintainers were 19% slower on their own repository issues with AI allowed, and estimated afterwards that AI had made them 20% faster. Carried through to February 2026, when METR abandoned the design because developers would no longer accept a no-AI arm. First `causal` case, scoped in the causal assessment to the trial's internal validity.
- **AAI-2026-009 (DUO).** The Dutch student finance agency scored fraud risk on age, education type, and distance to the parental address for eleven years; students with a non-European migration background received unjustified home visits 3.0x as often. The data protection regulator found the scoring itself unlawful; €80m was set aside in April 2026 for roughly 25,000 people. First public-sector case, first outside the US/UK/Sweden, second grade A.
- **`CLAUDE.md` gained three durable sections:** European public-body reachability (including that the Dutch DPA needs a browser User-Agent), how to read PDFs here (`pymupdf`; `pdftotext` absent and `pypdf` broken), and the blockquote rule for non-English quotations.

## Open items

1. **Archive snapshots.** Every source in all nine cases reports a missing `archive_url`; archive.org is unreachable from the sandbox. Needs a normal browser — still the largest standing gap, now across seventeen more sources.
2. **AAI-2026-004 is blocked.** It stays at `research` until The Verge's original report can be read or Microsoft or Anthropic says something on the record.
3. **Two claims in 009 rest on press relays.** The April 2026 compensation scheme is cited to NL Times because the ministerial letter behind it could not be retrieved. A browser, or a working route into rijksoverheid.nl document search, would move those from Supported to Verified.
4. **Editorial calls worth revisiting:** grade C on 003; `associational` on 006 against the paper's own causal language; `descriptive` plus grade B on 007; grade B on 008 despite an exceptional design, on the ground that METR's three source families are one institution; `plausibly-causal` rather than `causal` on 009.

## Suggested next step

The taxonomy gaps that remain are narrower than they were. Nothing in the library is set in Asia, Africa, or Latin America. No case covers a physical system — `physical-system` is the only unused deployment pattern, and `manufacturing`, `energy-utilities`, `transportation-logistics`, and `supply-chain` are unused facets. And every case so far is about a system that was studied after something went wrong or after someone asked; a case where governance worked *before* deployment — an impact assessment that stopped or reshaped a rollout — would be the hardest gap to fill and the most useful.
