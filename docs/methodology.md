# Research methodology

## Editorial aim

The library asks a practical question: what happened when AI met a real organization, workflow, market, or institution? It favors operational evidence over technological novelty and records failures as carefully as successes.

## Minimum publication standard

A published case must:

- describe a concrete intervention, event, or organizational decision;
- identify who did what, where, and at what stage of deployment;
- separate reported facts, source claims, and author inference;
- document outcomes, including unknown or unavailable economic results;
- address alternative explanations and limits to generalization;
- for any system that classifies, flags, or scores, report both sides of its error rate or record the missing side as a gap;
- include at least two materially independent sources when feasible;
- assign an evidence grade and a causal-strength label;
- provide claim-level citations for consequential facts;
- include short, contextualized quotations only when wording itself matters; and
- state what the case does and does not demonstrate.

## Evidence grades

| Grade | Meaning | Publication rule |
| --- | --- | --- |
| A | Strong, triangulated evidence: primary records plus credible independent corroboration, with methods or data sufficient to assess major claims. | Publishable |
| B | Good evidence with meaningful corroboration, but incomplete access, limited replication, or material unanswered questions. | Publishable with limitations |
| C | Useful but constrained evidence: largely self-reported, indirect, or only partly corroborated. | Publishable only when clearly caveated |
| D | Lead-level evidence: rumor, anonymous assertion without corroboration, promotional claim, or unresolved provenance. | Not publishable |

The grade evaluates the evidence supporting this case, not the reputation of a publisher.

## Claim labels

Grades assess a case; labels assess a single claim. Apply them to material outcome, scale, cost, causal, harm, and forecast claims in the case's `## Material claims` table, alongside the evidence behind the claim and what would change the label. Do not build a ledger for trivial background facts.

| Label | Meaning |
| --- | --- |
| **Verified** | Directly supported by strong evidence and corroborated where reasonable. |
| **Supported** | Credible evidence supports the claim, but proof, precision, or causality is incomplete. |
| **Attributed** | A named participant made the claim; the library has not independently verified it. |
| **Disputed** | Credible sources materially disagree. |
| **Inference** | The case author derived the conclusion from cited facts. |
| **Unknown** | Available evidence does not resolve the question. |

A claim labelled verified, supported, attributed, or disputed must cite at least one source recorded in the front matter. Validation enforces the vocabulary, the citation, and the presence of a falsifier.

## Causal-strength labels

- **Descriptive:** documents what was observed; makes no causal claim.
- **Associational:** reports a relationship but cannot isolate AI's contribution.
- **Plausibly causal:** timing, mechanism, and evidence support causation, while important confounders remain.
- **Causal:** a credible design isolates the intervention's effect, such as a well-run randomized or quasi-experimental study.

## Reading a reported error rate

Three cases in this library, from three unrelated industries and three unrelated evidence bases, turn on the same omission. A pediatric hospital's vendor published its sepsis model's sensitivity and no positive predictive value. A disk-media manufacturer published its leak detector's recall and no precision. A pharmacy chain ran facial recognition for eight years and, on its regulator's account, kept no procedure for tracking false positives at all.

That recurrence is a finding about the field rather than an accident of case selection, and it is the single most reliable question to ask of a deployment claim: **which half of the error rate is missing, and who benefits from its absence?**

### The four quantities, and why the omission travels unnoticed

Any system that flags things produces four outcomes — true and false positives, true and false negatives. Two ratios matter operationally, and every field has its own name for them, which is part of why the gap crosses domains without anyone noticing.

| Question | Names in use | What it measures |
| --- | --- | --- |
| Of the real events, how many did we catch? | sensitivity, recall, true positive rate, detection rate | the value the system claims |
| Of the things it flagged, how many were real? | precision, positive predictive value, PPV | the cost the system imposes |
| Of the non-events, how many did we correctly ignore? | specificity, true negative rate | usually reported alongside sensitivity, and insufficient on its own |

A clinical paper says PPV, an engineering paper says precision, a vendor datasheet says accuracy without saying of what. Treat them as the same question and the pattern becomes visible.

### Which half is missing is informative

The party reporting a metric tends to publish the one describing the value it claims and omit the one describing the cost it imposes. A vendor selling detection reports sensitivity, because catching things is what it sells. The operator needs precision, because false alerts consume the attention of whoever receives them.

Ask who bears each error. A false negative is usually borne by the deploying organization — a missed case, a missed leak, a missed loss. A false positive is borne by whoever is on the receiving end of the alert: a clinician's interrupted attention, an engineer's wasted inspection, or, where the system points at people, a member of the public who is searched, accused, or refused. **Where the cost of a false positive falls outside the organization, expect precision to be missing, and say so in the case.**

### A high sensitivity at a low base rate is not a good system

Rates that sound excellent produce mostly false alerts when the thing being detected is rare, and this arithmetic defeats intuition often enough to be worth doing explicitly in the case.

Take pediatric sepsis in an emergency department, which ran at 0.34% of visits. Per thousand encounters that is about three cases and 997 non-cases, so a model with 97% specificity produces around thirty false positives against at most three true ones — before sensitivity is considered at all. Measured locally at the threshold its vendor recommended, that model's positive predictive value was 7%: about ninety-three alerts in a hundred were wrong.

The vendor's published headline was 91.25% sensitivity at 95% specificity, from a development population with less than half the local incidence. Both numbers were real and neither was the one a buyer needed, because the vendor published no positive predictive value at all. Sensitivity and specificity together do not yield precision without a prevalence, and prevalence changes between sites.

Where prevalence is known, compute the implied precision and put it in the case. Where prevalence is not known, say that the reported rate cannot be interpreted.

### Interrogate the denominator

A detection rate needs a count of events that actually occurred, and that count often comes from somewhere unexamined. "Fifteen of sixteen leaks" invites the question of how the sixteen was established. If events become known partly because the detector finds them, the denominator is generated by the system under evaluation and the rate is closer to a tautology than a measurement.

Record how the denominator was constructed. Where the source does not say, that is an evidence gap, not a rounding detail.

### What a case must do

- Reconstruct as much of the confusion matrix as the sources allow, and state plainly which cells are missing.
- Never let a one-sided rate stand unqualified in a summary or an executive summary. Name the metric precisely — "recall", not "accuracy" — and note its complement's absence in the same sentence.
- Label a one-sided rate `Attributed` where the reporter both produced and assessed it, and put the missing complement in the material claims table as `Unknown` with a falsifier.
- Say who bears each error type.
- Compute implied precision from prevalence where the figures allow it, and show the arithmetic.
- Put the missing measurement in `evidence_upgrade_path`, because it is usually the cheapest thing that would raise the grade.

This check is editorial and is not enforced by `scripts/validate-content.mjs`; it depends on judgments a script cannot make.

### A related but distinct problem

Do not force every gap into this shape. A system can report both sides of its error rate and still leave the *composition* of its errors uncharacterized — a chatbot assessed at 90% accuracy whose residual 10% is described only as "often" answering some but not all of a question is a different failure, of error taxonomy rather than of the confusion matrix. Both belong in a case; they are not the same finding and should not be written as though they were.

## Workflow

Cases move through `lead → research → review → published → archived`. Draft states remain in Git but are excluded from the public site. Review checks sourcing, quote accuracy, taxonomy, fairness, and whether conclusions fit the evidence. Every published record has a `last_verified` date and a scheduled review date.

## Corrections

Material updates are recorded in the case's revision notes and Git history. Corrections preserve the prior version in Git. A case may be archived when its core evidence has been withdrawn, superseded, or rendered misleading by later information.
