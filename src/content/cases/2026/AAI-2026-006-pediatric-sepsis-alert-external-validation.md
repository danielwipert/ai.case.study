---
case_id: AAI-2026-006
title: "The sepsis alert that reached one case in five"
summary: "A pediatric health system deployed a vendor-built sepsis prediction model across two emergency departments, then measured it: sensitivity fell from the vendor's reported 91% to 64% locally, 41% at the threshold the hospital chose, and 18% as the alert actually fired in practice."
organization:
  - Children's Healthcare of Atlanta
  - Epic Systems
case_type: evaluation
secondary_case_types:
  - deployment
industry:
  - healthcare
business_function:
  - clinical-care
  - operations
deployment_stage: scaled-production
outcome: mixed
evidence_grade: B
status: published
created: 2026-09-12
published: 2026-09-12
last_verified: 2026-09-12
next_review: 2027-03-12
geography:
  - United States
environment: production
deployment_pattern:
  - decision-support
  - human-in-the-loop-workflow
causal_strength: associational
related_cases:
  - AAI-2026-002
evidence_upgrade_path: "Grade A needs corroboration that does not currently exist: another health system publishing a comparable staged breakdown for the same pediatric model, the vendor publishing its PPV, AUC, and validation population, or a design with a concurrent control — an interrupted time series or a stepped-wedge rollout — that could separate the care-process improvements from secular trends. Release of the supplementary threshold analysis underlying the choice of 8 would let a reader check the trade-off the sepsis committee actually made."
single_chain_rationale: "One peer-reviewed study is the entire evidentiary base here, and no second chain is reasonably available: the performance figures are measurements of one health system's own deployment, which nobody outside it can reproduce, and the vendor has not published the PPV or AUC that would allow a comparison. The case is published because a staged, quantified account of how a vendor's reported performance degrades through local configuration and clinical workflow is rare and useful, not because it has been independently confirmed."
sources:
  - id: jamia
    author: "Swaminathan Kandaswamy, Evan W Orenstein, Naveen Muthu, Andrea McCarter, Nikolay Braykov, Jonathan M Beus, and colleagues"
    title: "Early clinical evaluation of a vendor developed pediatric artificial intelligence sepsis model in the emergency department"
    publisher: "Journal of the American Medical Informatics Association, volume 32, issue 10, pages 1542-1551"
    published: 2025-07-22
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12451933/"
    accessed: 2026-09-12
    roles:
      - primary-investigation
      - direct-evidence
      - analysis
    source_family: chla-jamia-evaluation
    access: "The health system's own electronic health record data for 599,163 emergency department visits across two of its sites between 2021-01-01 and 2024-04-01, including model scores filed every 15 minutes, alert firings, and clinical outcomes."
    method: "Retrospective cross-sectional pre/post comparison. Sepsis cases identified by IPSO criteria through an automated query validated by two clinicians at 95% sensitivity and 100% positive predictive value on manual review. Performance measured at the encounter level, reported separately at the vendor's recommended threshold, the locally implemented threshold, and as the alert actually fired in practice."
    conflicts: "Written by the implementing institution about its own deployment, which is an interest in the result, and by informatics staff who configured the model. It is also the reason the paper can report what an outside evaluator could not observe: alert suppression by clinical workflow."
    corroboration: "None available for this deployment. The paper notes that the same vendor's adult model produced widely different results across health systems, one reporting alert fatigue without outcome improvement and another reporting reduced mortality, which is context rather than confirmation."
    accountability: "Peer-reviewed, published open access with a DOI, institutional review board approval recorded with a study number, and author contributions listed individually."
    notes: "Read in full for this case, including Table 2. The vendor's reported figures come from the model's development at Nationwide Children's Hospital on 116,419 encounters, in a population with a sepsis incidence of 0.12% against 0.34% locally — a difference the authors flag as material to the comparison."
tags:
  - alert-fatigue
  - clinical-decision-support
  - external-validation
  - sepsis
  - vendor-claims
---

## Case in one sentence

A pediatric health system implemented the sepsis prediction model built into its electronic health record, measured it against its own records, and found that the vendor's reported 91% sensitivity became 18% by the time the alert was actually reaching clinicians at the bedside.

## Executive summary

Children's Healthcare of Atlanta deployed a vendor-developed pediatric sepsis prediction model across two emergency departments, wired to a nurse-facing interruptive alert that prompts staff to call a sepsis huddle. It then ran an independent evaluation across 599,163 ED visits spanning 2021 to 2024.[^jamia]

The performance degraded in three identifiable steps. At the vendor's recommended threshold of 6, the model caught 64% of sepsis cases locally, against the 91.25% the vendor reported from its development site. The hospital's sepsis committee had raised the threshold to 8 to keep the positive predictive value above 10%, which cut sensitivity to 41%. And as the alert actually fired in clinical practice — after the workflow exclusions that suppress it — sensitivity was 18%, or 207 of 1,114 sepsis cases.[^jamia]

Care processes still improved. Time to first fluid bolus fell by 16.7 minutes and time to first antibiotic fell from 112 to 102 minutes. Thirty-day mortality, ICU admission rate, and ICU-free days all moved in the favourable direction and none of those changes reached statistical significance.[^jamia]

The authors' own summary of the lesson is that local workflows, documentation patterns, and patient populations make published model performance hard to generalise. The specific gap this case adds to the library is that each step of the degradation is attributable and none of it would be visible to a buyer reading the vendor's number.

## Research question

When a health system deploys a prediction model that came with its electronic health record, how much of the vendor's reported performance survives local configuration and the clinical workflow it fires into?

## Organization and operating context

Children's Healthcare of Atlanta runs the two emergency departments studied, one of them an academic quaternary care centre with 45 ED beds and over 70,000 visits a year, on an enterprise-wide Epic installation.[^jamia] Pediatric sepsis is a low-incidence, high-stakes target: 0.34% of ED visits in this population met the IPSO sepsis definition, and pediatric sepsis carries roughly 4% in-hospital mortality nationally with an estimated $7 billion in annual US hospitalisation costs.[^jamia]

The model is Epic's, a scaled linear model fitted with a non-linear reduced gradient method and developed on 116,419 emergency encounters from Nationwide Children's Hospital. Its reported performance was 91.25% sensitivity at 95% specificity, at a threshold of 6.[^jamia]

## The situation before AI

Sepsis recognition in a paediatric ED is a timing problem. The condition is rare per visit, deteriorates fast, and the clinical signs overlap with far more common presentations. The existing answer is human vigilance supported by screening protocols, and the metric that matters operationally is how fast treatment starts once someone suspects it.

That baseline matters for reading this case: the model was not replacing a measurement, it was added on top of clinicians who already recognise most sepsis. As the paper's own alert-suppression logic shows, many alerts never fire precisely because the care team has already acted.

## The AI intervention or event

The model scored patients continuously, filing a score to the database every 15 minutes as new data arrived. When a score crossed the threshold, a nurse-facing interruptive alert fired, prompting a sepsis huddle.[^jamia] Alerts were suppressed for patients over 18, those with a sepsis order set already started, those with a documented huddle outcome, those in a trauma room, and those already discharged.[^jamia]

Before going live, each site ran the model silently for months while stakeholders watched its behaviour. After roughly ten months of background operation, the sepsis committee reviewed the data and chose a threshold of 8 rather than the vendor's 6, to hold the positive predictive value at 10% or better.[^jamia] Hospital A went live on 2022-01-13; Hospital B, after its own background period, on 2023-03-13.[^jamia]

That threshold decision is the case in miniature. The committee was trading sensitivity for precision because at the vendor's threshold the alert would have been wrong roughly 93 times in 100 — a positive predictive value of 7% locally.[^jamia]

## Outcomes and economics

Measured against 1,114 sepsis cases in the post-implementation cohort:[^jamia]

| Measure | Vendor reported, threshold 6 | Local, threshold 6 | Local, threshold 8 | As implemented in practice |
| --- | --- | --- | --- | --- |
| Sensitivity | 91.25% | 64% (717/1,114) | 41% (467/1,114) | 18% (207/1,114) |
| Specificity | 95% | 97% | 99% | 99% |
| Positive predictive value | Not published | 7% (717/9,395) | 24% (467/1,994) | 11% (207/1,820) |

Area under the curve post-implementation was 0.9, falling to 0.88 when only alerts firing before sepsis onset counted as true positives.[^jamia]

On care processes, time to first fluid bolus fell 16.7 minutes and time to first antibiotic fell from 112 to 102 minutes.[^jamia] On patient outcomes, 30-day mortality moved from 6% to 4%, ED-to-ICU admission from 87% to 84%, and ICU-free days from 6 to 5 — none statistically significant.[^jamia]

No cost figures are reported: not the licence, not the configuration and validation effort across roughly a year of background running per site, not the clinical time spent on huddles triggered by the nine-in-ten alerts that were not sepsis at the implemented threshold.

## Causal assessment and competing explanations

This case is labelled associational, and that is a deliberate downgrade from how the finding is often described. The design is a retrospective pre/post comparison with no concurrent control: everything that changed in paediatric sepsis care between 2021 and 2024 at these hospitals is bundled into the "after" period alongside the model. The two sites also went live fourteen months apart, so the post-intervention cohort mixes one site with the model and one without for part of its span.

Sepsis care was a national quality-improvement target throughout this period, and the IPSO collaborative the sepsis definition comes from is itself an improvement programme. A secular trend toward faster fluids and antibiotics is a live competing explanation for a 16.7-minute change that the study cannot exclude.

On the performance gap, the authors attribute the shortfall to local workflows, documentation patterns, and patient population, and they flag that the vendor's validation population had a sepsis incidence of 0.12% against 0.34% locally.[^jamia] That base-rate difference cuts in an awkward direction: a higher local incidence should, other things equal, *raise* the positive predictive value, so the 7% local PPV at the vendor's threshold is not explained by rarity.

## Failures, limitations, and governance

- **The number a buyer sees is not the number a patient gets.** The vendor's single reported figure, 91.25% sensitivity, described neither the threshold the hospital would choose nor the workflow the alert would fire into.
- **Unpublished metrics:** the vendor reported no positive predictive value and no AUC, so the two measures that determine alert burden and discrimination were unavailable for comparison at purchase.[^jamia]
- **The precision-sensitivity trade was made locally and quietly.** A sepsis committee, reading ten months of silent-mode data, moved the threshold and halved sensitivity to make the alert tolerable. That is good governance and it is invisible outside the institution.
- **Alert suppression is not a bug:** most of the drop from 41% to 18% is the alert correctly staying silent when clinicians had already acted. A sensitivity figure that ignores this flatters the model; one that includes it understates the model and describes the system.
- **No outcome signal:** the changes in mortality and ICU use were not significant, and the study was not designed to detect them.
- **Single system, no replication:** the same vendor's adult model has produced opposite findings at different health systems, one reporting alert fatigue without benefit and another reduced mortality.[^jamia]

## What this case demonstrates

1. Vendor-reported model performance is an upper bound measured under the vendor's conditions, and the distance to delivered performance can be a factor of five.
2. Degradation happens in identifiable stages — population shift, local threshold choice, workflow suppression — and each stage can be measured separately by the deploying institution, which is the only party that can see all three.
3. A buyer cannot evaluate alert burden without a positive predictive value, and a vendor is not obliged to publish one.
4. Silent-mode running before go-live is what made the threshold decision evidence-based here; ten months of it produced the local data the committee needed.
5. Process measures move before outcome measures do, and a deployment can be genuinely useful on the first while showing nothing on the second.
6. The honest denominator for a clinical alert includes the cases where it stayed quiet because humans got there first.

## What this case does not demonstrate

- It does not show the model caused the faster fluids and antibiotics; there is no concurrent control and sepsis care was improving nationally.
- It does not show the model changed mortality, ICU admission, or ICU-free days, in either direction.
- It does not establish that the vendor's reported figure was wrong in its own setting.
- It does not quantify the deployment's cost, or the clinical time consumed by false alerts.
- It does not generalise to adult sepsis models, other paediatric systems, or other vendors, and the paper's own citations show the same vendor's adult model behaving differently across institutions.

## Evidence assessment

**Grade B — a rigorous evaluation with no corroboration available.** The single source is peer-reviewed, published open access, read in full for this case, and unusually candid: it reports its model's performance four ways, including the least flattering one, and states plainly that the vendor's PPV and AUC were unavailable for comparison.[^jamia] The sepsis case definition was validated by two clinicians against the automated query. The institution had every incentive to report the version of sensitivity that made its deployment look best and did not.

What holds it at B is that nothing here can be checked by anyone else. These are measurements of one health system's own deployment against its own records; no outside party can reproduce them, no second institution has published a comparable staged breakdown for this model, and the vendor has published nothing that would support a like-for-like comparison. The conflict is structural rather than suspicious: the implementer is also the evaluator, which is what makes the alert-suppression analysis possible and what makes independent verification impossible.

Two internal inconsistencies in the paper are worth recording rather than smoothing over. The narrative text gives the positive predictive value at the implemented threshold as 22% (395/1,820) while Table 2 gives 24% (467/1,994); this case cites the table, which is labelled by column. And the reported confidence interval for the as-implemented AUC, "0.88 (95% CI, 0.86-0.87)", does not contain its own point estimate, so the third decimal place of those AUCs should not be relied on.

Finally, the design bounds what the outcome figures can mean. A retrospective pre/post across a period when sepsis care was a national quality target cannot separate the intervention from the trend, which is why this case carries `associational` rather than the causal language the abstract uses.

## Material claims

Each claim carries a controlled label, the evidence behind it, and what would change the label.

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| As the alert actually fired in practice, it reached 18% of sepsis cases. | Verified | Table 2: 207 of 1,114 cases[^jamia] | A correction to the paper, or re-analysis under a different sepsis definition |
| At the vendor's recommended threshold, local sensitivity was 64% against the 91.25% reported. | Verified | Table 2, with the vendor figure from the model's development site[^jamia] | The vendor publishing validation details that change the comparison |
| The vendor published no positive predictive value or AUC for comparison. | Verified | Stated in the results[^jamia] | Publication of those metrics by the vendor |
| The hospital raised the threshold from 6 to 8, halving sensitivity, to hold PPV at 10% or better. | Verified | Implementation section and Table 2[^jamia] | A correction, or release of the underlying threshold analysis showing otherwise |
| Time to first fluid bolus fell by 16.7 minutes after implementation. | Supported | Pre/post comparison, P = .03, CI −31.8 to −1.5, with no concurrent control[^jamia] | An interrupted time series or controlled design separating the model from secular trends |
| Time to first antibiotic fell from 112 to 102 minutes. | Supported | Pre/post comparison, P = .05, CI −19.1 to 0.1 — borderline by the authors' own account[^jamia] | A controlled design, or a larger sample resolving the borderline result |
| The model changed 30-day mortality, ICU admission, or ICU-free days. | Unknown | All three moved favourably; none reached statistical significance and the study was not powered for them[^jamia] | A powered outcome study, or pooled data across institutions |
| The performance gap reflects population and workflow differences rather than an error in the vendor's own figure. | Inference | The authors attribute it to local workflows, documentation, and population; the base-rate difference they flag does not by itself explain the local PPV | Vendor disclosure of its validation population and method, or an independent audit of the original figure |
| The deployment was worth its cost. | Unknown | No licence, configuration, or clinical-time cost is reported, and no outcome benefit was established | Cost disclosure alongside a powered outcome measure |

## Direct quotations

> “When implementing an externally developed model, local workflows, documentation patterns, and patient populations make it challenging to generalize published or reported model performance metrics to real world performance.”

— Kandaswamy and colleagues[^jamia] · locator: abstract, Discussion

> “Vendor reported PPV and AUC are not available for comparison.”

— Kandaswamy and colleagues[^jamia] · locator: Results, Predictive performance

## Revision notes

- 2026-09-12 — Initial publication at Grade B. Single peer-reviewed source, read in full and cited with `single_chain_rationale` because no second chain is reasonably available for measurements of one institution's own deployment. Labelled `associational` rather than causal: the design is a retrospective pre/post with no concurrent control, during a period when paediatric sepsis care was a national quality-improvement target. Two internal inconsistencies in the source — a PPV that differs between narrative and table, and a confidence interval that excludes its own point estimate — are recorded in the evidence assessment. Added `clinical-care` to the controlled business functions, which had no value for patient care.

[^jamia]: Kandaswamy, Orenstein, Muthu, McCarter, Braykov, Beus, and colleagues, [“Early clinical evaluation of a vendor developed pediatric artificial intelligence sepsis model in the emergency department”](https://pmc.ncbi.nlm.nih.gov/articles/PMC12451933/), Journal of the American Medical Informatics Association 32(10):1542-1551, 2025-07-22, doi:10.1093/jamia/ocaf105.
