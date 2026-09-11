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

## Workflow

Cases move through `lead → research → review → published → archived`. Draft states remain in Git but are excluded from the public site. Review checks sourcing, quote accuracy, taxonomy, fairness, and whether conclusions fit the evidence. Every published record has a `last_verified` date and a scheduled review date.

## Corrections

Material updates are recorded in the case's revision notes and Git history. Corrections preserve the prior version in Git. A case may be archived when its core evidence has been withdrawn, superseded, or rendered misleading by later information.
