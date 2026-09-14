---
case_id: AAI-2026-018
title: "Amsterdam debiased the model and the bias changed direction"
summary: "A city built a welfare fraud model with every safeguard the field recommends, measured false positives by demographic group, found bias against migrants, reweighted it away — and when the corrected model ran live for three months the bias reappeared pointing at women and Dutch nationals, while investigations went up rather than down. The official in charge stopped it in the council chamber."
organization:
  - Gemeente Amsterdam
  - Lighthouse Reports
case_type: deployment
secondary_case_types:
  - evaluation
  - failure-incident
industry:
  - public-sector
business_function:
  - operations
deployment_stage: retired
outcome: negative
evidence_grade: B
status: published
created: 2026-09-14
published: 2026-09-14
last_verified: 2026-09-14
next_review: 2027-03-14
geography:
  - Netherlands
environment: production
deployment_pattern:
  - decision-support
  - human-in-the-loop-workflow
causal_strength: associational
related_cases:
  - AAI-2026-009
  - AAI-2026-014
evidence_upgrade_path: "Grade A needs the row-level data the investigators never had. European data protection law is the obstacle, and the city's remote-analysis arrangement — it ran the journalists' tests and returned aggregates — is a workable template rather than a substitute. The specific candidates: a privacy-preserving audit environment in which an outside party executes its own code against the real records; the city resolving why it could not replicate its own train/test split or reproduce its published bias report; and the pilot-period outcome data compared against a concurrent analogue arm, which this deployment destroyed by replacing the analogue process entirely. The city's internal reports, which the investigators say their results align with, are not public."
sources:
  - id: amsterdam-register
    author: "Gemeente Amsterdam"
    title: "Onderzoekswaardigheid: Slimme check levensonderhoud, entry in the Amsterdam Algorithm Register"
    publisher: "Algoritmeregister Gemeente Amsterdam"
    updated: 2025-09-10
    url: "https://algoritmeregister.amsterdam.nl/"
    accessed: 2026-09-14
    roles:
      - direct-evidence
    source_family: amsterdam-algorithm-register
    access: "The operator's own public register of its algorithms, giving each one a description, a publication category, the impact assessments performed, and a lifecycle status. The Smart Check entry is the city's own statement of what the tool was and where it now stands."
    method: "Not an evaluation. A disclosure register maintained under Dutch public-sector algorithm transparency practice, listing algorithms including those no longer running. The entry records the tool as a high-impact algorithm assessed under a DPIA, an IAMA — the Dutch fundamental-rights impact assessment — and the city's Ethische Bijsluiter, and gives its status as Buiten gebruik, out of use."
    conflicts: "The deploying organisation describing its own system. Against that, a register that lists decommissioned algorithms alongside running ones is disclosing against interest, and the entry survives the project's failure rather than disappearing with it."
    corroboration: "The status agrees with the independent investigation's account that the pilot was stopped in late November 2023, and the three named impact assessments agree with the investigation's description of how much process the city put in."
    accountability: "A named municipality publishing under a stated publication standard, with a last-modified timestamp, in a register that is itself a public commitment."
    notes: "The register is a client-rendered application: every entry URL returns the same shell to a plain fetch, so the entry was read from the listing payload rather than from its own page. Read for the description, the impact assessments, the publication category and the status. The register is in Dutch; the status term Buiten gebruik is rendered here as out of use."
  - id: lighthouse-method
    author: "Justin-Casimir Braun, Gabriel Geiger, Eileen Guo, Eva Constantaras and Amanda Silverman"
    title: "How we investigated Amsterdam's attempt to build a 'fair' fraud detection model"
    publisher: "Lighthouse Reports"
    published: 2025-06-11
    url: "https://www.lighthousereports.com/methodology/amsterdam-fairness/"
    accessed: 2026-09-14
    roles:
      - primary-investigation
      - analysis
    source_family: lighthouse-amsterdam-investigation
    access: "Code, technical documentation and internal documents obtained by public records request in 2023, plus something rarer: analyses the investigators designed and the city executed on the real records, returning confusion matrices for eight demographic groups across three datasets — the training and test set, the pre-pilot set and the pilot set — for the model both before and after reweighting."
    method: "Eight months of testing, set out chapter by chapter with the reasoning shown: how the model works, how it was trained, which fairness definition the city chose, what the first model did, what reweighting changed, what the pilot showed, and where the trade-offs sit. The analysis code and data are published. The limitations section is unusually direct about what the arrangement could not rule out."
    conflicts: "A newsroom that had investigated welfare fraud algorithms in five European countries and found discrimination in each, examining a sixth — an expectation that cuts toward finding bias. Against that, it is the only source here that ran its own tests, it published its code, and it reports the analogue human process as biased too, in a direction that complicates the story it went in expecting."
    corroboration: "Its results align, on its own account, with internal city reports that are not public. The register's status and the reporting's account of the shutdown agree with it. Nobody has re-run its analysis against the underlying records, which is the check that does not exist."
    accountability: "Five named authors, a dated methodology page separate from the narrative, published code and data, and a limitations section naming the fabrication risk its own method carries."
    notes: "Read in full for the method, the pre-pilot and pilot findings, model performance, technical details and limitations. The published code sits on github.com, which returns 403 from this sandbox, so the code itself was not inspected — only the account of it."
  - id: mit-tr
    author: "Eileen Guo"
    title: "Inside Amsterdam's high-stakes experiment to create fair welfare AI"
    publisher: "MIT Technology Review"
    published: 2025-06-11
    url: "https://www.technologyreview.com/2025/06/11/1118233/amsterdam-fair-welfare-ai-discriminatory-algorithms-failure/"
    accessed: 2026-09-14
    roles:
      - independent-reporting
    source_family: mit-technology-review-reporting
    access: "Interviews the technical analysis does not contain: the project manager who wanted twelve more months, the city official who stopped it, council members, and a member of the Participation Council that had opposed the pilot. Also the city's answers to direct questions about cost, given to three newsrooms."
    method: "Narrative reporting published alongside the Lighthouse methodology as part of the same investigation, drawing on the same records plus original interviews."
    conflicts: "Co-published with Lighthouse Reports and built on the same document set, so it is not an independent check on the analysis — it is the same investigation in a different register. Its interviews are its own."
    corroboration: "Its account of the shutdown is consistent with the city's register status; its cost figures come from the city itself in response to questions."
    accountability: "A named reporter at an outlet with a masthead and corrections process, dated, with the city given an opportunity to respond and its response quoted."
    notes: "Read in full. It is the source for the council-chamber shutdown, for the city's projected benefit, and for the fact that councillors were never told the cost. Filed as a separate source family for mechanical purposes while being, as the evidence assessment says, the same investigation as the methodology."
tags:
  - welfare
  - algorithmic-fairness
  - debiasing
  - public-records
  - decommissioned
  - algorithm-register
  - responsible-ai
---

## Case in one sentence

Amsterdam built a welfare fraud model the way the responsible-AI literature says to build one — explainable architecture, three impact assessments, bias testing by demographic group, consultation with the people affected — found it biased against applicants with a migration background, corrected that, ran the corrected model live for three months, and found the bias had reappeared pointing at women and Dutch nationals while the investigation rate went up instead of down.

## Executive summary

The tool was called Slimme Check — Smart Check — and its job was to predict *onderzoekswaardigheid*, investigation-worthiness, for applications for basic income support. A flagged application was not rejected. It went to an investigator who could demand bank statements, summon the applicant to meetings, and visit their home.[^lighthouse-method]

The city's own goal, in its internal documentation, was to investigate **fewer** applicants while finding a **higher** share of genuine errors, without bias against vulnerable groups, and to beat its human caseworkers. It projected that the system would keep up to 125 Amsterdammers out of debt collection and save €2.4 million a year.[^mit-tr]

**The first model was worse than the humans.** Run against applications from April 2021 to March 2022 and checked by investigators without consequence to the applicants, it flagged people without Dutch citizenship wrongly 30% more often than Dutch citizens, and people of non-Western nationality almost twice as often as Western. Against the analogue process it replaced, it showed *greater* bias toward vulnerable groups. The analogue process was itself biased — but differently: it wrongly investigated women more often, and non-Dutch applicants *less* often than Dutch.[^lighthouse-method]

**The correction worked, on the thing it was aimed at.** The city reweighted the training data by nationality. Most of the bias against applicants with a migration background disappeared. No attempt was made to correct any other demographic bias, and the gender gap survived untouched.[^lighthouse-method]

**Then it ran for real.** From June to August 2023 the model screened every incoming application, fully replacing the analogue process, with consequences. New bias appeared, mostly pointing the opposite way: women wrongly flagged 22% more often than men, Dutch nationals more often than non-Dutch. Performance deteriorated — the pilot produced mostly *more* investigations, with the chance of finding a problem barely changed. And because the model had replaced the analogue process entirely, the city no longer had anything to compare against.[^lighthouse-method]

In late November 2023, Rutger Groot Wassink, the city official responsible for social affairs, told the council chamber: "I have decided to stop the pilot." The project team had wanted twelve more months.[^mit-tr] Amsterdam's own algorithm register now lists Smart Check as *Buiten gebruik* — out of use.[^amsterdam-register]

## Research question

If an organisation does everything the responsible-AI field currently recommends, what does it get — and what does it still not know?

## Organization and operating context

Amsterdam's welfare administration screens applications for basic income support for errors and possible fraud. Screening is consequential at the point of the investigation, not the point of the flag: an investigation can mean producing bank statements, attending meetings, and receiving a home visit, and previous reporting has described that experience as stressful or traumatising.[^lighthouse-method]

The city approached this as an unusually careful deployer. Smart Check is filed in its public algorithm register as a high-impact algorithm, assessed under a data protection impact assessment, an IAMA — the Dutch fundamental-rights impact assessment — and the city's own Ethische Bijsluiter.[^amsterdam-register] It chose an Explainable Boosting Machine rather than a black-box model. It consulted the Participation Council, the body representing benefit recipients. It ran bias tests, defined fairness in advance as equality of false positive shares between groups, and measured against it.

And when journalists filed a public records request in 2023 for the code, the documentation and the data, the city complied immediately — which the investigators, who had spent over a year fighting for equivalent material elsewhere, found surprising enough to remark on.[^lighthouse-method]

## The situation before AI

The analogue process was human caseworkers screening applications and referring some for investigation. Two facts about it matter.

First, it was **biased already**. The city's own comparison found the human process wrongly investigated women more often than men, and — counter to the expectation the whole project was built around — wrongly investigated applicants with Dutch nationality *more* often than those without.[^lighthouse-method]

Second, that baseline was measured. The pre-pilot design compared the model's false positive shares against the analogue process's, group by group, which is why the finding that the first model was *worse* than the humans could be made at all. Most deployments in this library cannot say what their predecessor's error rate was. This one could, until the pilot destroyed the comparison by replacing the analogue process entirely.

## The AI intervention or event

**The model.** An Explainable Boosting Machine predicting investigation-worthiness from features describing an applicant's behaviour and characteristics, trained on past investigations.[^lighthouse-method]

**The pre-pilot, April 2021 to March 2022.** The model scored recent applications; investigators re-checked the flagged ones to separate true from false positives, with no consequences for the people flagged. This is the measurement almost nobody does — a live-fidelity test with the harm switched off.[^lighthouse-method]

**The first finding.** Non-Dutch citizens wrongly selected 30% more often than Dutch citizens; non-Western nationality almost twice as often as Western; overall, more biased against vulnerable groups than the process it was meant to improve on.[^lighthouse-method]

**The correction.** Reweighting the training data: among applicants judged investigation-worthy, Western nationalities weighted up and non-Western weighted down; among those not judged investigation-worthy, the reverse. It achieved its aim — after reweighting, Western and non-Western applicants had almost the same false positive share. The gender gap was not addressed and did not move.[^lighthouse-method]

**The pilot, June to August 2023.** The reweighted model screened all incoming applications, with consequences, replacing the analogue process. Women were wrongly flagged 22% more often than men. Dutch nationals were wrongly flagged more often than non-Dutch — the mirror image of the problem the reweighting had fixed. The share of false positives relative to false negatives rose sharply, which the investigators read as a threshold set too low for a real-world population in which far fewer applications are investigation-worthy than in the training data.[^lighthouse-method]

**The decision.** Late November 2023, in the council chamber. The project manager and others did not think the result was necessarily a reason to scrap Smart Check and wanted roughly twelve more months of testing; they knew it would be a hard sell.[^mit-tr]

## Outcomes and economics

The economics are a clean instance of a pattern this library keeps recording, and an unusually sharp one.

| | |
| --- | --- |
| Projected benefit, from internal documentation | Up to 125 Amsterdammers kept out of debt collection; €2.4m saved annually[^mit-tr] |
| Measured benefit | None. Mostly more investigations, with the likelihood of finding an investigation-worthy application barely changed from the analogue process[^lighthouse-method] |
| Cost, as disclosed to the city council | Never told[^mit-tr] |
| Cost, as estimated by the city when three newsrooms asked | About €500,000, plus €35,000 for a Deloitte contract — and the city cautioned the total was only an estimate, since the work was done in house by existing teams[^mit-tr] |
| Duration | Pre-pilot data from April 2021; pilot June–August 2023; stopped November 2023 |
| Current status | Out of use[^amsterdam-register] |

The projection was specific to the euro and to the individual. The cost was never put in front of the body that authorised the work, and only became a number because journalists asked. The benefit was measured and was negative.

There is one more cost the record names and does not quantify. For three months the model screened every application with consequences attached, and during those months women were wrongly flagged 22% more often than men. The people wrongly investigated in that window are the price of finding out.

## Causal assessment and competing explanations

This case is labelled **associational**. The city changed one thing it can name — the reweighting — and the bias changed direction. But between the pre-pilot and the pilot at least three other things changed at once: the model went from advisory to consequential, it replaced rather than supplemented the analogue process, and it met a live population whose base rate of investigation-worthiness is far lower than the training data's. No design here separates those.

Three readings.

**"Reweighting caused the flip."** The most natural reading, and the investigators' framing: correcting for nationality moved the error burden onto groups the correction did not protect. It is consistent with the gender gap surviving the reweighting untouched and then widening.

**"The threshold was wrong, and bias is a symptom."** The investigators note the false-positive-to-false-negative ratio rose sharply, and that a model trained on data where investigation-worthiness was much more common than in reality will be miscalibrated. They say plainly that this part "could have easily been resolved by raising the threshold" — and that the direction of the bias is the part that is *not* straightforward.[^lighthouse-method]

**"The pilot measured something the pre-pilot did not."** In the pre-pilot, flagged applications were re-checked by investigators specifically to label true and false positives. In the pilot, the model replaced the analogue process, so the ground truth came from a different route. A measured change in bias between two differently-constructed ground truths is not necessarily a change in the model's behaviour.

The single most consequential design decision in the case is the one that closed off the answer: because the model fully replaced the analogue process during the pilot, the city could no longer compare model decisions against human ones on the same applications.[^lighthouse-method] The comparison that had made the first finding possible was switched off exactly when the stakes became real.

## Failures, limitations, and governance

- **Fairness was defined once, on one axis, and the unprotected axes absorbed the error.** The city chose equality of false positive shares and corrected for nationality. Gender was measured, was already unequal, was not corrected, and got worse.[^lighthouse-method]
- **The correction was validated on the wrong data.** Reweighting was confirmed to work on the pre-pilot set. It was not re-validated in live conditions before the pilot carried consequences.
- **The control arm was destroyed at deployment.** Replacing the analogue process entirely removed the comparison the whole evaluation had depended on.[^lighthouse-method]
- **The cost never reached the decision-makers.** Councillors authorised and oversaw the project without being told what it cost; the figure exists because reporters asked.[^mit-tr]
- **The city could not reproduce its own work.** When it re-ran parts of the analysis for the investigators it could not replicate its train/test split, and the post-reweighting figures did not match its own published bias report by more than rounding.[^lighthouse-method]
- **The people most exposed had said so in advance.** A Participation Council member told reporters that the possibility of a discriminatory system was "precisely one of the reasons" her group had not wanted the pilot.[^mit-tr]
- **Stopping was a political act, not a procedural one.** No threshold, gate or pre-agreed stopping rule ended this. One official decided, in a council chamber, against the project team's wish for another twelve months.[^mit-tr]

## What this case demonstrates

1. Debiasing along one protected attribute can move the error burden onto another rather than remove it, and an organisation that measures only the attribute it corrected will not see this.
2. A fairness definition chosen in advance is a governance improvement and a blind spot at the same time: it determines which harms get counted.
3. The honest test is the one run with consequences switched off. Amsterdam's pre-pilot — flag, re-investigate, compare against the human baseline, no effect on the applicant — is the most transferable thing in this case.
4. Deploying a model as a *replacement* rather than alongside the process it replaces destroys the comparison that tells you whether it works.
5. Doing everything right is not a guarantee of a good system; it is a guarantee of finding out. Every safeguard here worked as a detector and none worked as a preventer.
6. A projected benefit will be specific and a realised cost will be vague, and the gap between them is usually invisible to whoever authorised the spending.
7. An algorithm register that keeps decommissioned entries is worth more than one that lists only what is running, because the failures are where the learning is.
8. Publishing the failure is a choice an organisation can make after the fact: Amsterdam handed over its code, documentation and data to journalists who were always going to find what they found.

## What this case does not demonstrate

- It does not establish that reweighting caused the reversal. Too much changed at once between the pre-pilot and the pilot, and this case carries `associational` for that reason.
- It does not show the model was worse than the humans overall. It shows the first model was more biased than the analogue process on the city's chosen measure, and that the pilot model increased investigations without improving the hit rate — the human baseline in the pilot period does not exist.
- It does not show that fair welfare-fraud models are impossible. One city, one architecture, one fairness definition, one population.
- It does not quantify harm to the people wrongly flagged during the pilot. The rate is known; the consequences for the individuals are not recorded anywhere in this record.
- It does not establish the project's true cost. The city's own figure is an estimate it declined to stand behind, for work done in house.
- It does not verify the published analysis code. It sits on github.com, which is unreachable from this sandbox, so the code was not inspected — only the investigators' account of it.

## Evidence assessment

**Grade B — an operator that disclosed everything and an investigation that could not touch the underlying data.**

The two chains have opposing interests and converge, which is the pattern that usually earns an A here. The city had every reason to present the project well and instead handed over its code, its documentation and its internal analyses, and it keeps the decommissioned entry in its public register today.[^amsterdam-register] Lighthouse Reports had investigated welfare algorithms in five countries and found discrimination in every one — an expectation pointing squarely at the finding — and published its code, its reasoning chapter by chapter, and a limitations section most newsrooms would cut.[^lighthouse-method]

Three things hold it at B, and the first is the investigators' own.

*Nobody outside the city ever touched the data.* European data protection law prevented row-level disclosure, so Lighthouse designed tests and **the city ran them**, returning confusion matrices for eight demographic groups across three datasets. The investigators state the exposure directly: the arrangement "innately carries the risk that the city may have provided us with incorrect or even fabricated numbers," while adding that they saw nothing to suggest it and that the results align with the city's own non-public internal reports.[^lighthouse-method] That is the correct way to disclose a dependency, and it is still a dependency. Case AAI-2026-001 in this library carries a similar one at grade A, but there the independent investigators worked on the premises with the logs in front of them; here they never saw a record.

*The city could not reproduce its own analysis.* It was unable to replicate its train/test split, and the post-reweighting data it supplied differs from its published bias report by margins the investigators say rounding cannot explain.[^lighthouse-method] Nobody has resolved this. It is a small discrepancy with a large implication: the numbers underpinning the central finding come from a process the organisation could not re-run.

*The pilot has no comparison arm.* The most important measurement — did the model do better than the humans, under real conditions — cannot be made, because the deployment design removed the humans.

The third source is not a third chain. MIT Technology Review's reporting was co-published with the Lighthouse methodology, built from the same records, as part of the same investigation. What it independently adds is interviews — the official who stopped it, the manager who wanted to continue, the council members, the Participation Council — and the city's own answers on cost. It is filed as its own source family and it should not be counted as corroboration of the analysis.[^mit-tr]

Grade B here is a judgment call worth stating, because a mechanical reading of the chain count and the source quality would support A. What decides it is that the central quantitative findings all pass through the deploying organisation's own hands on their way to the people reporting them, and that the organisation demonstrably could not reproduce part of that work.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| Amsterdam's algorithm register lists Smart Check as out of use. | Verified | The city's own register entry, status Buiten gebruik, last modified 2025-09-10[^amsterdam-register] | The city restarting the project and updating the entry |
| The first model wrongly flagged non-Dutch citizens 30% more often than Dutch citizens, and non-Western nationalities almost twice as often as Western. | Supported | Confusion matrices computed by the city on its own pre-pilot data at the investigators' request; no outside party saw the records[^lighthouse-method] | An audit with row-level access, or the city resolving why it could not replicate its own analysis |
| The first model was more biased against vulnerable groups than the analogue process it was meant to improve on. | Supported | The city's own group-by-group comparison against the analogue process, reported by the investigators[^lighthouse-method] | Row-level access allowing the comparison to be recomputed, or a different fairness measure reversing the ranking |
| Reweighting removed most of the bias against applicants with a migration background. | Supported | Post-reweighting false positive shares nearly equal between Western and non-Western applicants[^lighthouse-method] | Resolution of why the city's post-reweighting figures did not match its own published bias report, or an independent recomputation |
| In the live pilot, women were wrongly flagged 22% more often than men, and Dutch nationals more often than non-Dutch. | Supported | Pilot-set confusion matrices, same access route[^lighthouse-method] | An independent recomputation, or pilot data released under a privacy-preserving audit regime |
| The pilot increased investigations without materially improving the rate at which problems were found. | Supported | Reported from the pilot data against the project's stated goal of fewer investigations and a higher hit rate[^lighthouse-method] | Release of the pilot outcome data, or a city account contradicting it |
| Reweighting for nationality caused the bias to reappear along gender and citizenship. | Inference | The sequence is documented and the gender gap was never corrected; but consequence, process replacement and population base rate all changed between the two measurements | A design that varies the reweighting while holding deployment conditions constant |
| The city official responsible for social affairs stopped the pilot in late November 2023. | Verified | Quoted in the council chamber: "I have decided to stop the pilot"[^mit-tr] | A correction by the outlet or the city |
| The city estimated the project cost at about €500,000 plus €35,000 for a Deloitte contract. | Attributed | The city's own estimate, given in response to questions from three newsrooms, which it cautioned was only an estimate because the work was done in house[^mit-tr] | An audited figure, or a council report stating the spend |
| City councillors were told what the project cost while it was running. | Disputed | Reporting states councillors were never told exactly what the effort cost; no source read here records a disclosure to the council[^mit-tr] | A council document showing the cost was reported |
| The projected saving of €2.4 million a year was ever realised. | Unknown | The projection appears in internal documentation; the pilot was stopped before any saving was measured, and the measured effect was more investigations[^mit-tr][^lighthouse-method] | A retrospective the city has not published |
| The published analysis code supports the reported findings. | Unknown | The code and data are published, on a host unreachable from this sandbox; only the investigators' account of the method was read[^lighthouse-method] | Inspecting the repository |

## Direct quotations

> “I have decided to stop the pilot.”

— Rutger Groot Wassink, the Amsterdam official responsible for social affairs, in the council chamber in late November 2023[^mit-tr] · locator: MIT Technology Review, the passage beginning "In late November 2023"

> “This approach involves a certain level of trust and innately carries the risk that the city may have provided us with incorrect or even fabricated numbers.”

— Lighthouse Reports, on the arrangement by which the city ran the investigators' tests on data they could not see[^lighthouse-method] · locator: Limitations, first paragraph

> “For example, the city was unable to replicate its train and test split. Furthermore, the data related to the model after reweighting is not identical to what the city published in its bias report and although the results are substantively the same, the differences cannot be explained by mere rounding errors.”

— Lighthouse Reports, on what it calls a more concerning limitation[^lighthouse-method] · locator: Limitations, second paragraph

> “City council members were never told exactly how much the effort cost.”

— MIT Technology Review[^mit-tr] · locator: the passage on opportunity cost, following the Participation Council interview

## Revision notes

- 2026-09-14 — Initial publication at Grade B. Written in response to a request for a `paused` deployment and published as `retired` instead, because the operator's own register records the status as Buiten gebruik, out of use; the taxonomy gap for `paused` is therefore still open. The case earns its place on a different ground: it is the library's first record of an organisation that measured its own system honestly, found it wanting, and stopped — and the first in which a *debiasing intervention* is documented well enough to see it move the harm rather than remove it. Three source families, of which two are genuinely distinct: the city's own algorithm register, and the Lighthouse Reports investigation. The MIT Technology Review reporting was co-published with the methodology from the same records and is filed separately for mechanical purposes while the evidence assessment says plainly that it is not a third chain. Grade B rather than A is a judgment call and is argued in the evidence assessment: the interests oppose and the accounts converge, which is usually the A pattern, but every quantitative finding passes through the deploying organisation's hands — the investigators never saw a row of data and say so, naming the fabrication risk themselves — and the city could not replicate its own train/test split or reproduce its published bias report. `causal_strength: associational` because consequence, process replacement and population base rate all changed between the two measurements alongside the reweighting. The €535,000 figure that circulates in secondary accounts is not used: the primary reporting gives about €500,000 plus €35,000 for a Deloitte contract, as a city estimate it declined to stand behind. Cited under P4, and added to P2 as a counter-case — this is the clearest instance in the library of a deployer measuring both sides of the error rate, by demographic group, across three datasets.

[^amsterdam-register]: Gemeente Amsterdam, [“Onderzoekswaardigheid: Slimme check levensonderhoud”](https://algoritmeregister.amsterdam.nl/), Algoritmeregister Gemeente Amsterdam, entry last modified 2025-09-10, status *Buiten gebruik*, impact assessments DPIA, IAMA and De Ethische Bijsluiter. Read from the register listing payload, since entry pages are client-rendered.

[^lighthouse-method]: Justin-Casimir Braun, Gabriel Geiger, Eileen Guo, Eva Constantaras and Amanda Silverman, [“How we investigated Amsterdam's attempt to build a 'fair' fraud detection model”](https://www.lighthousereports.com/methodology/amsterdam-fairness/), Lighthouse Reports, 2025-06-11. Analysis code and data are published on GitHub, which is unreachable from this sandbox and was not inspected.

[^mit-tr]: Eileen Guo, [“Inside Amsterdam's high-stakes experiment to create fair welfare AI”](https://www.technologyreview.com/2025/06/11/1118233/amsterdam-fair-welfare-ai-discriminatory-algorithms-failure/), MIT Technology Review, 2025-06-11. Co-published with the Lighthouse Reports investigation.
