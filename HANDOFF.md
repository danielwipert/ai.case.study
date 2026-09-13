# Handoff

## Where things stand

Fifteen published cases, AAI-2026-001 through 015 (004 is an unpublished lead). The site builds clean and deploys to https://danielwipert.github.io/ai.case.study/. The design pass — colour, grade-keyed cards, claim-label chips, tables breaking into the gutter — merged as PR #15 and is live.

This session did a **source review across the whole library** rather than adding cases. Eleven of the fifteen cases were changed. No grade moved.

## What the review changed

| Case | What was added | Grade |
| --- | --- | --- |
| 005 Workday | The discovery order itself, from Duane Morris' copy | B → **A** |
| 010 Cruise | The deferred prosecution agreement, from the court docket | A, deepened |
| 011 PIPC | Korea's financial regulator recommending a ₩15bn fine | B |
| 002 Support copilot | A randomized replication at Alibaba/Taobao | B |
| 003 Uber | A relay that block-quotes Bloomberg; a date corrected | C |
| 006 Sepsis alert | Multicentre validation of the same vendor's adult model | B |
| 007 Klarna | The CEO's on-the-record reversal, via a named relay | B |
| 008 METR | An enterprise trial at Google pointing the other way | B |
| 012 GOV.UK Chat | **It launched.** Stage corrected from `pilot` | C |
| 014 Rite Aid | The company's own account, disputing the FTC's scale | B |
| 015 NESO | MIT-licensed PVNet weights on Hugging Face | C |

Unchanged: **001** (already A; the one new thing found was a Cloud Security Alliance synthesis that adds no primary evidence and misdates the exploitation window), **013 Seagate** (nothing exists), **009 DUO**, **004** (still an unpublished lead).

Three corrections are worth knowing about, because they were errors this library published:
- **012** said "nothing read here confirms a public launch". It had launched two months earlier, announced on `gds.blog.gov.uk` rather than the `insidegovuk` blog every other source came from.
- **006**'s `single_chain_rationale` said no second chain was reasonably available. One was, in the adjacent adult literature, and had simply not been looked for. Same for **002**.
- **003** said the Uber cap began in June. Bloomberg's own wording is "instituted in recent months" as of 3 June.

## The principle the review settled

Three cases (002, 006, 008) gained a second chain that corroborates the *lesson* but cannot test the *headline numbers* — different firm, different population, different outcome measure. All three stayed where they were, and each evidence assessment says why. A mechanical reading of the source-family count would have promoted all three. Written up in CLAUDE.md under "Grading against a second chain that does not reach the numbers"; follow it rather than re-deciding it.

## Gaps that stayed shut

Recorded in each case's `evidence_upgrade_path` so nobody re-runs the search:
- **008** — no independent re-analysis of either METR dataset exists, and no replication of the task-level design. Both datasets are public, so this could appear at any time.
- **012** — no NAO or PAC work names this deployment. The **AI Security Institute's pre-release testing is now named in two GDS posts and has produced nothing public**; that is the most specific outside assessment known to exist and the one to ask for.
- **013** — the other half of the confusion matrix. One arXiv version, no journal, no follow-up.
- **010** — NHTSA's consent order (nhtsa.gov 403) and the DMV's Order of Suspension. The Information and penalty sheet are behind PACER on the same docket.
- **014** — a 2020 Reuters investigation reportedly names Rite Aid's two vendors. reuters.com is blocked and the only readable account is two relays deep, so **the names are deliberately not in the case**. A future editor with Reuters access closes this in one step.
- **007** — no union or works-council reporting, no independent measurement of the assistant, no KCO transfer headcount.
- **001** — openai.com still returns 403, so one quotation locator stays `unrecorded`. That is the library's only non-`archive_url` evidence gap.

## New technique, now in CLAUDE.md

A new section, "Routes around a blocked host", covers how most of this session's sources were actually obtained: CourtListener docket pages and free RECAP PDFs instead of its authenticated API; rendering scanned filings to grayscale PNGs and reading them with vision, since no OCR is installed; NCBI E-utilities instead of PMC web pages, which now serve a reCAPTCHA; the Hugging Face API to verify an open-source claim github.com would have answered; arXiv abstract pages instead of its rate-limiting API; and relays that block-quote rather than paraphrase.

## Branch

Work is on **`claude/optimistic-goodall-s4n0c4`**, not the `claude/loving-ride-c4lddg` named in CLAUDE.md's git workflow — the branch is assigned per session, so read the session's own instruction before starting. Eight commits are pushed and ahead of `main`; **no PR is open yet**. The workflow itself still holds: PRs merge with rebase, so restart the branch from `main` after every merge.

## Next

Back to adding cases. The unused taxonomy values are worth checking before picking a story, and 004 is still a lead that cannot be published until a source closer than The Verge is in hand.
