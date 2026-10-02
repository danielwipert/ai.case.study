# Project guide — Applied AI Case Study Library

**Current as of 2026-10-02.** Read this first, in any session, in either repo.
It says what the project is, which documents govern it, where the work stands,
and which older instructions to ignore.

This file exists in **both** repos with identical text. When it changes, change
both copies in the same session and update the date above.

---

## 1. What the project is

A library of evidence-graded case studies of real AI deployments, failures,
evaluations and rulings. Each case is a **living record**: every statement in
it traces to an exact quote in an archived copy of a source, and the case is
updated when new evidence arrives.

Cases are level 1 of a five-level ladder. Everything above rests on cases.

| Level | What it claims | What it must rest on |
| --- | --- | --- |
| 1. Case | What the sources support, statement by statement | Archived sources, quoted exactly |
| 2. Pattern (the site's "propositions") | One falsifiable claim across cases | Two or more graded cases sharing a mechanism |
| 3. Essay | What one pattern means | One recurrent pattern and its cases |
| 4. Meta-essay | What several essays share | Two or three published essays |
| 5. Thesis | What the meta-essays jointly support | Two or three converging meta-essays |

**The principle: evidence leads.** No claim appears at a level until the level
below has produced it. No level is skipped. There is no thesis yet, and none is
written ahead of its evidence.

---

## 2. The two repos

| Repo | Visibility | Holds | Role today |
| --- | --- | --- | --- |
| `danielwipert/ai.case.study` | **Public** | The live site (Astro, GitHub Pages): 21 published cases, 2 of them rebuilt in the **new** format, the rest still **legacy**; the propositions; the validator | **Publishes released cases.** A rebuilt case replaces its legacy page at the same address. No new cases in the legacy format |
| `danielwipert/ai.case.study.private` | **Private, always** | Captured copies of sources, the specs, and every case's working record | **Where the work happens** |

- Captured copies are private because most sources are copyrighted. At
  publication, quotes and fingerprints go public; the full copies stay private
  unless their licence allows otherwise.
- `main` on the public repo is protected: no force pushes, no deletion, no
  bypass. Its history can only grow, which is what lets a reader trust it.
- A second copy of the private repo is kept outside GitHub, on Google Drive.
  It passed a restore test on 2026-09-22.

---

## 3. The governing documents

All current specs live in the private repo, in `planning/`.

| Document | Version | Governs | Status |
| --- | --- | --- | --- |
| Output Plan and Publishing Spec | v3 | The ladder, the ten rules, the channels | Current |
| **Case Study Spec** | **v0.8** (2026-10-01) | Level 1: what a case is, the codes, the Docket, the Record of Fact | **Current.** v0.7 plus the pilot's findings; "Open after v0.8" lists what is undecided |
| Pilot Contract | v0.7 | Running the first cases by hand, in private, to test the spec | **Done in substance:** both pilot cases are live. One item open (the label-test readers, §4) |

**When they disagree:** the Case Study Spec beats the Pilot Contract, and the
disagreement gets logged. The Output Plan sits above both.

**What the pilot is testing, in one paragraph.** A case is built in three
layers that trace to each other by code: a **document** (an archived capture,
fingerprinted), a **claim** (an exact quote from it, with a locator), and a
**row** (one plain sentence the library states, with a basis and a label set by
rule, never by feel). Example trace: `CS021.F009` → `CS021.D01.C09` →
`CS021.D01` capture `V01`. An independent checker (a separate Claude session) checks every row against its quote; Dan reviews the high-stakes rows and a random 1 in 10, and approves each release.

---

## 4. Where the work stands

**The pilot is done in substance; the rebuild of the live cases has begun.**

| Case | What | Status |
| --- | --- | --- |
| CS001 / AAI-2026-001 | The OpenAI agents' intrusion into Hugging Face (the paradigm) | **Live** 2026-10-01, grade A |
| CS021 / AAI-2026-021 | The LungIMPACT trial (the control) | **Live** 2026-10-01, grade B (graded A under the legacy method; propositions P1 and P4 updated) |
| CS005 / AAI-2026-005 | Mobley v. Workday: the May 2026 ruling on bias-test data | **Started.** Charter drafted, boundary decided (the ruling). Waiting on Dan's captures (`planning/CS005_capture_lead_list.md`) |
| The other 18 | Legacy pages, still live | To rebuild one at a time, in the spec's order: P6's cases (009, 010, 011, 016, 019), then P5's (006, 013, 014, 022), then the rest. 004 is an unpublished lead |

**How each case is rebuilt** (the process the pilot settled):

1. Dan captures the sources from his browser into `inbox/`; `tools/ingest.py` fingerprints them.
2. Claude drafts claims (exact quotes) and rows (plain sentences).
3. An independent checker session checks every link.
4. Dan reviews the high-stakes rows and a random 1 in 10.
5. Claude drafts the narrative and the plain-English story (`story.yaml`); the checker checks them.
6. A lawyer reviews (Claude prepares the pack, Dan sends it).
7. Dan approves the release (`python3 tools/sign.py release CASE --by DW`).
8. Claude opens the public pull request, using the case's public-data script, and merges it when Dan says so.

**Still open:**

- **The label-test readers**: who the 3–5 readers are (pilot decision 4).
- Reuters' two policy links, for CS001's publisher grade.

**Case numbering:** `CSnnn` is the same number as the live site's
`AAI-2026-nnn`, and numbers never restart.

**Decided against** (2026-10-01, Dan): a legacy banner on the old pages, and
restyling them before they are rebuilt. Each is rebuilt in full instead.

**Not to be started without Dan:** the two cheap fixes to all live cases,
archiving every source (J4) and re-checking every Verified label (J5); any new
case in the legacy format.

---

## 5. Rules every session follows

1. **Evidence leads.** A case is never picked, and a fact never kept or dropped,
   to support a conclusion.
2. **Dan decides; Claude drafts.** Claude may propose claims, rows, entries and
   grades. An independent checker session marks rows; Dan reviews the
   high-stakes rows and a 1-in-10 sample, and approves each release. Captures
   are Dan's, from his browser.
3. **Nothing is published before a legal review and Dan's release approval.**
   A case's files stay in the private repo until then. Only reader-facing text
   goes public: no initials, decision notes or internal comments (each case's
   public-data script refuses to run if any are left).
4. **Append-only.** Rows and claims are superseded, never deleted. Codes are
   never reused or renumbered. A correction is a new dated line in a changelog.
5. **Record discrepancies; do not resolve them by judgment.**
6. **Blind tests stay blind.** During a seeded-error test, nobody opens the
   planter's branch or the hostile reader's branch before the reveal. The
   stage 2 test was revealed on 2026-09-30; its branches, `claude/cs021-seed`
   and `claude/cs021-hostile` in the private repo, stay as the record.
7. **Whatever breaks is the result.** A rule that fails on real material is
   logged as a finding (`pilot/log/findings.md`), not worked around quietly.

---

## 6. Superseded — ignore these

| Where | What | Why it is wrong now | Use instead |
| --- | --- | --- | --- |
| Public `docs/library-spec-v3.md` | The v3 library specification, 2026-09-10 | Describes the **legacy** case format. The live site and its validator still use it, so it stays; it does not govern new work | Case Study Spec v0.8 |
| Public `README.md`, "Add a case" | Steps to add a case from the template | Adds a legacy-format case, which is paused | §4 above |
| Public `HANDOFF.md`, before 2026-09-25 | "The better next move is probably … another case" | Superseded by pilot-first (spec decision 20) | §4 above |
| Public `CLAUDE.md`, before 2026-09-25 | Work on `claude/loving-ride-c4lddg` | Branches are assigned per session | The branch the session names |
| Private `planning/Case_Study_Spec_v0.5.md` and `_v0.7.md` | Specs v0.5 and v0.7 | Superseded: v0.7 changed the label model, v0.8 added the pilot's findings | v0.8 |
| Public `HANDOFF.md` and `CLAUDE.md`, "maintenance only" | The public repo takes no new work | It now publishes rebuilt cases | §2 and §4 above |
| Private `planning/Review_2026-09-22.md` | The first review and its questions | A dated snapshot. Every question in it has since been answered | `pilot/log/decisions.md` |

**Still good in the public repo:** the network and PDF notes in `CLAUDE.md`,
`docs/source-policy.md`, `docs/methodology.md` (both linked from the live site),
and `docs/taxonomy.yml` (the validator reads it).
