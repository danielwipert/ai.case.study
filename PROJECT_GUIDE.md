# Project guide — Applied AI Case Study Library

**Current as of 2026-09-25.** Read this first, in any session, in either repo.
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
| `danielwipert/ai.case.study` | **Public** | The live site (Astro, GitHub Pages), 22 case records in the **legacy** format, the propositions page, the validator | **Maintenance only.** No new cases in the legacy format (see §4) |
| `danielwipert/ai.case.study.private` | **Private, always** | Captured copies of sources, the specs, and all pilot work | **Where the current work happens** |

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
| **Case Study Spec** | **v0.7** | Level 1: what a case is, the codes, the Docket, the Record of Fact | **Current.** Half-finished on purpose; §17 lists what is open |
| Pilot Contract | v0.7 | Running one case by hand, in private, to test the spec | **Current, in progress** |

**When they disagree:** the Case Study Spec beats the Pilot Contract, and the
disagreement gets logged. The Output Plan sits above both.

**What the pilot is testing, in one paragraph.** A case is built in three
layers that trace to each other by code: a **document** (an archived capture,
fingerprinted), a **claim** (an exact quote from it, with a locator), and a
**row** (one plain sentence the library states, with a basis and a label set by
rule, never by feel). Example trace: `CS021.F009` → `CS021.D01.C09` →
`CS021.D01` capture `V01`. Only Dan checks a row against its quote and signs it.

---

## 4. Where the work stands

**The pilot runs on the control case first, then the Hugging Face case.** Both
decided by Dan on 2026-09-22.

| Stage | What | Status |
| --- | --- | --- |
| 0 | Stabilize the evidence: private repo, protected `main`, Hugging Face sources captured, second copy, restore test | **Done** 2026-09-22 |
| 1 | Five pilot decisions (numbering, second copy, scripts, readers, hostile reader) | **4 of 5 done.** Still open: who the 3–5 readers are for the label test. Needed by stage 3 |
| 2 | The slice: one document of the control case, CS021 (the LungIMPACT trial), from capture to narrative | **In progress.** Steps 1–8 done: charter, capture, publisher grade, docket entry, 10 claims, 12 rows, seeded-error planting, hostile read. **Step 9, Dan's timed review, is under way** |
| 3 | The full control Record: all twelve headings, the registry record | Not started |
| 4 | The paradigm: the OpenAI agents' intrusion into Hugging Face, CS001 | Captures done and safe (8 files in the private repo's `inbox/`). Record not started |

**Case numbering:** `CSnnn` is the same number as the live site's
`AAI-2026-nnn`, and numbers never restart.

**Not yet done, and not to be started without Dan:**

- The legacy banner on the live cases (spec items H3, J7).
- The two cheap fixes to all live cases: archive every source (J4) and
  re-check every Verified label against the new basis rule (J5).
- Any new case in the legacy format. Spec v0.7 §13: *"Every new case is written
  in the new format only."* The new format is not finished until the pilot is.

---

## 5. Rules every session follows

1. **Evidence leads.** A case is never picked, and a fact never kept or dropped,
   to support a conclusion.
2. **Dan decides; Claude drafts.** Claude may propose claims, rows, entries and
   grades. Only Dan accepts them, signs check marks, and signs sections.
   Captures are Dan's, from his browser.
3. **Nothing from the pilot is published.** Pilot files stay in the private
   repo until publication, and a legal review comes before that.
4. **Append-only.** Rows and claims are superseded, never deleted. Codes are
   never reused or renumbered. A correction is a new dated line in a changelog.
5. **Record discrepancies; do not resolve them by judgment.**
6. **Blind tests stay blind.** During a seeded-error test, nobody opens the
   planter's branch or the hostile reader's branch before the reveal. The
   current test's branches are `claude/cs021-seed` and `claude/cs021-hostile`
   in the private repo.
7. **Whatever breaks is the result.** A rule that fails on real material is
   logged as a finding (`pilot/log/findings.md`), not worked around quietly.

---

## 6. Superseded — ignore these

| Where | What | Why it is wrong now | Use instead |
| --- | --- | --- | --- |
| Public `docs/library-spec-v3.md` | The v3 library specification, 2026-09-10 | Describes the **legacy** case format. The live site and its validator still use it, so it stays; it does not govern new work | Case Study Spec v0.7 |
| Public `README.md`, "Add a case" | Steps to add a case from the template | Adds a legacy-format case, which is paused | §4 above |
| Public `HANDOFF.md`, before 2026-09-25 | "The better next move is probably … another case" | Superseded by pilot-first (spec decision 20) | §4 above |
| Public `CLAUDE.md`, before 2026-09-25 | Work on `claude/loving-ride-c4lddg` | Branches are assigned per session | The branch the session names |
| Private `planning/Case_Study_Spec_v0.5.md` | Spec v0.5 | Superseded by v0.7, which changed the label model | v0.7 |
| Private `planning/Review_2026-09-22.md` | The first review and its questions | A dated snapshot. Every question in it has since been answered | `pilot/log/decisions.md` |

**Still good in the public repo:** the network and PDF notes in `CLAUDE.md`,
`docs/source-policy.md`, `docs/methodology.md` (both linked from the live site),
and `docs/taxonomy.yml` (the validator reads it).
