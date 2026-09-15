---
case_id: AAI-2026-021
title: "Thirteen hours sooner to the report, not one day sooner to the diagnosis"
summary: "A randomized trial across five NHS trusts gave half its chest X-ray sessions to AI worklist prioritization and half to none, with the same AI available to reporters in both arms. Prioritization cut the median time from X-ray to report from 47 to 34.1 hours and moved nothing else: median time to CT was 53 days in both arms, against a national standard of 72 hours."
organization:
  - Nottingham University Hospitals NHS Trust
  - University Hospitals of Leicester NHS Trust
  - Qure.ai Technologies
case_type: evaluation
secondary_case_types:
  - deployment
industry:
  - healthcare
business_function:
  - clinical-care
  - operations
deployment_stage: scaled-production
outcome: negative
evidence_grade: A
status: published
created: 2026-09-15
published: 2026-09-15
last_verified: 2026-09-15
next_review: 2027-03-15
geography:
  - United Kingdom
environment: production
deployment_pattern:
  - decision-support
  - human-in-the-loop-workflow
causal_strength: causal
related_cases:
  - AAI-2026-020
  - AAI-2026-006
sources:
  - id: lungimpact
    author: "Nick Woznitza; Lesley Smith; Janette Rawlinson; Iain Au-Yong; Bindu George; Madava G. Djearaman; Arjun Nair; Richard W. Lee; Neal Navani; Siyabonga Ndwandwe; Caroline S. Clarke; Andrew Creeden; Josh Newsome; Indrajeet Das; Sylvia Abaokporo; Richard Tucker; James Hathorn; David R. Baldwin"
    title: "AI-based chest X-ray prioritization in the lung cancer diagnostic pathway: the LungIMPACT randomized controlled trial"
    publisher: "Nature Medicine"
    published: 2026-03-24
    url: "https://www.nature.com/articles/s41591-026-04253-5"
    accessed: 2026-09-15
    roles:
      - direct-evidence
      - primary-investigation
    source_family: lungimpact-trial
    access: "The complete article, read end to end from nature.com: abstract, main text, all reported results, the full discussion including its review of comparable studies, the methods, the ethics and data availability statements, funding, acknowledgements and competing interests. Extended Data tables are referenced in the text but were not separately retrieved."
    method: "A prospective, multicentre randomized controlled trial across five NHS Trusts in England, 17 July 2023 to 31 December 2024, with follow-up to 5 June 2025. Whole-day imaging sessions were block-randomized 1:1 by day and site to AI worklist prioritization or none. The AI ran on every image in both arms, so the randomized variable is prioritization alone, not the presence of AI. Coprimary outcomes, both pre-registered: time from X-ray to CT, and time from X-ray to lung cancer diagnosis. Non-consenting design, approved on the basis that health service delivery rather than patients was being evaluated. Statistical analysis by an independent statistician without input from the investigators."
    conflicts: "Disclosed and, for a study of a commercial product, unusually clean. The trial was publicly funded through SBRI Healthcare; the acknowledgements state that Qure.ai Technologies had no influence on study design or analysis, and that the analysis was done by a statistician independent of the investigators. The first author declares a travel grant from Qure.ai Technologies to attend the European Congress of Radiology in 2023, and consultancy fees from three other companies unrelated to the study. The senior author declares honoraria from two pharmaceutical companies unrelated to the study. The vendor assisted with deployment of its own product, which the paper states."
    corroboration: "Its pre-registration is independently hosted and was checked for this case: the two primary outcomes reported are the two registered, in the same order, with no substitution. Its finding is not independently replicated — no second trial of CXR AI prioritization exists — but the adjacent intervention it is compared against, immediate human reporting, was tested by a separate randomized trial from an overlapping team, read here in full."
    accountability: "Registered before recruitment (ISRCTN 78987039, 21 March 2023), ethics reference 23/EE/0014 from the East of England – Cambridge East Research Ethics Committee, CONSORT and Good Clinical Practice adherence stated, a named sponsor with a published address for anonymised data requests, and the statistical analysis code published. The AI's own code is not available and the paper says so plainly, giving the reason."
    notes: "Read in full from nature.com, which serves complete article text from this sandbox. The trial's most quotable result is one the abstract does not contain: report turnaround improved significantly while every clinical outcome stayed flat."
  - id: isrctn
    author: "Nottingham University Hospitals NHS Trust (sponsor); Nick Woznitza and David R. Baldwin (investigators)"
    title: "ISRCTN78987039 — Does triage of chest X-rays with artificial intelligence shorten the time to lung cancer diagnosis: a randomised controlled trial"
    publisher: "ISRCTN registry"
    published: 2023-03-21
    updated: 2026-03-25
    url: "https://www.isrctn.com/ISRCTN78987039"
    accessed: 2026-09-15
    roles:
      - direct-evidence
    source_family: isrctn-registry
    access: "The full registry record, retrieved as XML: title, hypothesis, primary and secondary outcomes as registered, ethics approval, sponsor, funders, participating centres, target enrolment, recruitment dates and document list."
    method: "Not an investigation. A trial registration entered by the sponsor before recruitment and versioned by the registry — this is version 54, last updated 25 March 2026, the day after the paper appeared. Its value here is as a timestamped statement of what the trial said it would measure, against which the published paper can be checked."
    conflicts: "The record is written by the investigators and their sponsor, so it is not an independent account of the trial. It is independently hosted and versioned, which is what makes it useful: the investigators cannot revise it silently."
    corroboration: "It confirms the paper on the two primary outcomes, the ethics reference and the sponsor, and differs from it on the number of participating trusts, the recruitment start date and the enrolment target."
    accountability: "A public, versioned, timestamped registry entry with a permanent identifier, listing the protocol and patient information sheet as deposited documents."
    notes: "Retrieved through the registry's XML API at `isrctn.com/api/query/format/default?q=ISRCTN78987039`. The registry's own web page asks users not to scrape it and directs them to this API, which is the route taken here. Registered secondary outcome 7 is cost-effectiveness; it has not been published, and the paper says a health economics evaluation will appear separately."
  - id: radiox
    author: "Nick Woznitza; Bhagabati Ghimire; Anand Devaraj; Sam M. Janes; Keith Piper; Susan Rowe; Angshu Bhowmik; Natasha Hayes; Daniel Togher; Nikita Arumalla; Erik Skyllberg; Iain T. H. Au-Yong; Susan Geary; Bindu George"
    title: "Impact of radiographer immediate reporting of X-rays of the chest from general practice on the lung cancer pathway (radioX): a randomised controlled trial"
    publisher: "Thorax (BMJ)"
    published: 2022-11-08
    url: "https://doi.org/10.1136/thorax-2022-219210"
    accessed: 2026-09-15
    roles:
      - primary-investigation
    source_family: radiox-trial
    access: "The full abstract including methods, numbers, statistical result and trial registration, read from the PubMed Central record."
    method: "A randomized controlled trial at a single London district general hospital, 21 June 2017 to 4 August 2018, randomizing imaging sessions to immediate radiographer reporting or standard reporting within 24 hours, with the same primary outcome as LungIMPACT — time from chest X-ray to lung cancer diagnosis. Registered as ISRCTN21818068."
    conflicts: "Not an independent check on LungIMPACT: its first author is LungIMPACT's first author, and three further authors appear on both. It is included as the comparator the later trial measures itself against, not as corroboration."
    corroboration: "It is the source of the 63-day baseline LungIMPACT used for its own power calculation, and of the contrast the present case turns on: the same measure, the same pathway, a human intervention rather than an algorithmic one, and a halving."
    accountability: "A registered randomized trial in a peer-reviewed respiratory journal, publicly funded by Cancer Research UK, with its discordance review reported."
    notes: "Retrieved through NCBI E-utilities. The full text was not read for this case; the abstract carries the design, the numbers and the statistical result, and every claim drawn from it here is in the abstract."
  - id: nejm-ai-swlondon
    author: "Mathew Storey; Jack Packer; Nora Sangvik Grandal; Anita Rhodes; Jo Moon; Daniel Togher; Ziyad Abubacker; Simon Rickaby; Geraldine Dean; Susan C. Shelmerdine"
    title: "Early Clinical Evaluation of AI Triage of Chest Radiographs: Time to Diagnosis for Suspected Cancer and Number of Urgent CT Referrals"
    publisher: "NEJM AI"
    published: 2026-01-01
    url: "https://ai.nejm.org/doi/full/10.1056/AIcs2500539"
    accessed: 2026-09-15
    roles:
      - primary-investigation
      - participant-account
    source_family: swlondon-deployment
    access: "The abstract only. The publisher's own site returns 403 from this sandbox; the abstract was read in full through Ovid, which hosts it. The full text has not been read and no claim here rests on anything outside the abstract."
    method: "A before-and-after service evaluation, published as a case study rather than a trial: 56,257 chest radiographs across a five-hospital NHS trust in South West London over three years, one year before and two years after a real-world AI deployment that also introduced a radiographer-led same-day CT pathway. The deploying trust is the evaluating party."
    conflicts: "The organisation reporting the improvement is the organisation that made it, which is the ordinary position for a service evaluation and is why its design cannot separate the AI from the pathway change introduced alongside it. LungIMPACT's authors make exactly that criticism of this study by name, and additionally that it used suspected rather than confirmed lung cancer as its reference standard."
    corroboration: "It is not corroborated here and is not used as corroboration. It is cited as the contrasting claim that a randomized trial then failed to reproduce for the component it isolated."
    accountability: "A named, peer-reviewed publication in a journal of record with a DOI, whose stated limitation about pathway redesign is acknowledged by its own authors according to the trial that critiques it."
    notes: "Read as an abstract, and labelled as such wherever it is used. Its reported fall from 6.0 to 3.6 days is characterised in LungIMPACT's discussion as 'from 6 to 3.6 days', a source I did read in full, so the figure does not rest on the abstract alone."
  - id: ryai-silent-trial
    author: "Mathew Storey; A. Chung; Jack Packer; A. M. Bartsch; Anita Rhodes; R. Colta; Simon Rickaby; Christina Malamateniou; Geraldine Dean; Susan Shelmerdine"
    title: "AI Triage of Normal Chest Radiographs: A Silent Trial and Failure Analysis"
    publisher: "Radiology: Artificial Intelligence (RSNA)"
    published: 2026-05-01
    url: "https://doi.org/10.1148/ryai.250964"
    accessed: 2026-09-15
    roles:
      - primary-investigation
      - participant-account
    source_family: swlondon-deployment
    access: "The structured abstract only, read through PubMed. The publisher returns 403 from this sandbox and the article is not in PubMed Central, confirmed against Europe PMC, which reports it as not open access with no full text available."
    method: "A prospective multicentre silent trial across the same five NHS hospital sites over 12 months, in which the AI scored 63,083 adult chest radiographs without its output being acted on, followed by expert review of discordant cases. Reported by the deploying trust."
    conflicts: "Same organisation and overlapping authorship with the NEJM AI evaluation, and filed in the same source family for that reason. The deploying trust evaluating a commercial product it had chosen."
    corroboration: "Not corroborated here. It is cited for one narrow purpose: that this trust ran the AI silently before switching it on, and what the silent period reported about the product's operating point."
    accountability: "A named peer-reviewed publication with a DOI and a stated failure analysis, which is more than most deployment reports offer."
    notes: "Abstract only, and labelled as such. Its 97% sensitivity against 35% specificity is the operating point the deploying trust accepted, and is reported here as the trust's own figure, not as a verified property of the product."
tags:
  - randomized-controlled-trial
  - radiology
  - lung-cancer
  - triage
  - pre-registration
  - null-result
  - nhs
---

## Case in one sentence

A randomized controlled trial across five NHS trusts, covering 93,326 chest X-rays from 86,945 patients, tested whether letting an AI push suspicious radiographs to the front of the reporting queue shortened the lung cancer diagnostic pathway, and found that it made the report arrive about thirteen hours sooner and the diagnosis arrive no sooner at all.

## Executive summary

England's National Optimal Lung Cancer Pathway says that a patient with a suspicious chest X-ray should have a CT scan within 72 hours, preferably the same day.[^lungimpact] The trial in this case measured a median of **53 days** from X-ray to CT, in both of its arms.[^lungimpact] Holding that number in mind is the only way the result makes sense.

The intervention was worklist prioritization. Every chest X-ray requested by primary care at five NHS trusts was scored by qXR, a CE-certified commercial algorithm from Qure.ai.[^lungimpact] On randomly allocated days, images the AI thought abnormal were pushed to the top of the reporting queue with an active notification. On the other days they were not. **The AI ran on every image in both arms**, and reporters could see its markings either way.[^lungimpact] So the trial did not ask whether AI helps. It asked whether prioritizing the queue helps, which is a narrower and more answerable question.

Prioritization worked, in the sense that it did what it was designed to do. The median time from X-ray to report fell significantly, from 47 hours to 34.1 hours.[^lungimpact]

Nothing downstream moved:

- Time to CT: 53 days with prioritization, 53 days without. Ratio of geometric means 0.97, 95% CI 0.93–1.02, P = 0.31.[^lungimpact]
- Time to lung cancer diagnosis: 44 days against 46. Ratio 0.98, 95% CI 0.83–1.16, P = 0.84.[^lungimpact]
- Urgent referral, treatment start, and stage at diagnosis: no differences.[^lungimpact]
- No significant difference at any of the five sites, or in any quarter of the trial.[^lungimpact]

The trial was adequately powered for this. It needed 265 cancers per arm and got 269 and 289, out of 558 lung cancers in 86,945 patients.[^lungimpact]

The authors' conclusion is unusually direct for a null result:

> AI prioritization of CXR requested by UK primary care has no significant impact on the lung cancer pathway. Therefore, CXR AI deployments should not include worklist prioritization in this context.[^lungimpact]

What makes the finding interpretable rather than merely disappointing is that an overlapping team had already run the adjacent experiment. In radioX, a randomized trial at a single London hospital, having a radiographer report the X-ray **immediately**, with direct triage to same-day CT, cut median time to lung cancer diagnosis from 63 days to 32.[^radiox] Same pathway, same outcome measure, same country. The human intervention halved it. The algorithmic reordering of a queue did not touch it.

## Research question

When an AI is inserted into a clinical pathway and the step it accelerates is not the step that is slow, what happens?

## Organization and operating context

Five NHS trusts in England took part: University Hospitals of Leicester performed 54% of the study's X-rays, Nottingham University Hospitals 15%, a trust the paper names as "East Sussex and North Essex Foundation Trust" 11%, University College London Hospital 11%, and University Hospitals of Birmingham 9%.[^lungimpact] Nottingham University Hospitals NHS Trust was the sponsor.[^isrctn] The population was ordinary: mean age 59, 46% male, everyone attending for a chest X-ray requested by their GP.[^lungimpact]

The constraint the trial ran into is systemic and the paper states it plainly. As of April 2025, median reporting time for a primary-care chest X-ray was 2 days and the waiting time for a chest CT was 15 days, against a pathway standard of 72 hours from abnormal X-ray to CT.[^lungimpact] The authors attribute the gap to fewer CT scanners per capita than comparable countries and a chronic shortage of radiologists and radiographers.[^lungimpact]

Two numbers from the trial show how far practice sits from the standard. Of 13,347 CT scans, **172 happened on the same day as the X-ray** — the NOLCP's preferred option — and **477 happened within 72 hours**, its maximum.[^lungimpact] The pathway the AI was inserted into was missing its own target by a factor of roughly seventeen on the median.

The product was qXR v4.0, a class IIb CE-certified deep learning tool detecting 29 classes of abnormality, already in routine use at some NHS hospitals.[^lungimpact] Images went to the vendor's cloud and returned to the local PACS with markings. The algorithm was frozen for the trial's duration.[^lungimpact]

## The situation before AI

Before this trial, the evidence base for chest X-ray AI in England was thin enough that NICE declined to recommend any product, concluding there was insufficient evidence to say anything beyond that products should be carefully evaluated — and naming LungIMPACT as the only study it considered potentially capable of answering the clinical question.[^lungimpact]

What did exist was radioX: the same outcome, in the same national pathway, changed decisively by a change in who reads the image and when. Immediate radiographer reporting cut time to diagnosis from 63 to 32 days, P = 0.03, in 8,682 X-rays yielding 49 cancers.[^radiox] That trial also found radiographer reports as accurate as local radiologist reports, with blinded thoracic radiologists equally likely to side with either in discordant cases.[^radiox]

So the prior was favourable, and the trial's own power calculation was built on it: a conservative 10-day reduction against radioX's 63-day baseline.[^lungimpact] The team expected the AI to do something.

## The AI intervention or event

**21 March 2023.** The trial is registered as ISRCTN78987039, sponsored by Nottingham University Hospitals NHS Trust, with two primary outcomes: time from chest X-ray to lung cancer diagnosis, and time from chest X-ray to CT.[^isrctn] Ethics approval 23/EE/0014 had been granted a month earlier.[^isrctn][^lungimpact]

**17 July 2023 to 31 December 2024.** 97,731 chest X-rays are performed across the five trusts. Monday-to-Friday whole-day sessions are block-randomized 1:1 by day and site, so that staffing and capacity variation is spread across both arms.[^lungimpact] On prioritization days, any qXR-suspected-abnormal case raises an active notification on the reporting worklist. On other days it does not. In both arms, radiographers may flag abnormalities at their discretion and may arrange same-day CT under local procedure — a deliberate choice, so that the trial tested prioritization rather than a pathway change.[^lungimpact]

**Data cleaning.** 93,326 X-rays from 86,945 patients enter the analysis; 45,987 of them (49.3%) on prioritization days.[^lungimpact]

**Follow-up to 5 June 2025.** 13,347 patients have a valid CT; 558 are diagnosed with lung cancer.[^lungimpact]

**Discordance review, both arms.** Every disagreement between the AI and the radiology report is reviewed: 26,505 of 28,261 discordant reports, 94% of discordances and 28.4% of randomized X-rays, by local thoracic radiologists or reporting radiographers.[^lungimpact] The paper notes this is peer review at a scale seldom, if ever, attempted.

**24 March 2026.** The result is published in Nature Medicine.[^lungimpact]

## Outcomes and economics

| | With AI prioritization | Without |
| --- | --- | --- |
| Median time to CT | 53 days (IQR 17–145) | 53 days (IQR 19–141) |
| Ratio of geometric means, time to CT | 0.97 (95% CI 0.93–1.02), P = 0.31 | — |
| Median time to lung cancer diagnosis | 44 days (IQR 26–90) | 46 days (IQR 24–105) |
| Ratio of geometric means, time to diagnosis | 0.98 (95% CI 0.83–1.16), P = 0.84 | — |
| Median time to urgent referral | 14 days | 15 days (P = 0.13) |
| Median time to treatment start | 76 days | 73 days (P = 0.99) |
| Stage at diagnosis | no difference (P = 0.34) | — |
| Median time from X-ray to report | 34.1 hours | 47 hours (significant) |
| CT on the same day as the X-ray | 88 | 84 |
| CT within 72 hours | 241 | 236 |
| Lung cancers | 269 | 289 |

The economics are registered and unpublished, which is itself worth recording. Cost-effectiveness is secondary outcome 7 in the trial registration, to be measured as difference in cost per patient diagnosed, per percentage increase in early-stage diagnosis, and potentially per quality-adjusted life year.[^isrctn] The paper states that a detailed health economics evaluation will be published separately, and characterises the costs of the prioritization function as "both considerable and avoidable, given the results reported in this study" — without giving a figure.[^lungimpact]

For scale, the paper reports that a Scottish before-and-after service evaluation of a different chest X-ray AI increased cost by £3.59 per X-ray.[^lungimpact] That figure is LungIMPACT's characterisation of a study not read for this case.

So the best-designed evaluation in this library measured its benefit to a confidence interval and has not yet published its cost. The benefit half arrived first, because this time somebody ran the experiment.

## Causal assessment and competing explanations

This case is labelled **causal**, and it is one of the few in this library that earns the label. Sessions were randomized, allocation was by day and site to balance staffing, the analysis was performed by a statistician independent of the investigators, the outcomes were registered before recruitment and reported as registered, and the trial was powered for the effect it sought.[^lungimpact][^isrctn] A null result from that design is evidence of absence, not absence of evidence.

The interesting causal question is not whether prioritization worked but **why it did not**, and the paper is careful to separate the candidates.

**"The AI is not accurate enough."** The authors reject this, and their reasoning is strong: the vast majority of cancers occurred where the AI was abnormal, so prioritization was tested on a large number of true cases, and "even modest differences in accuracy are unlikely to change the primary outcome."[^lungimpact] A better algorithm would reorder the same queue.

**"The step it accelerated was not the bottleneck."** This is the explanation the evidence supports. Report turnaround improved by about thirteen hours; the pathway's median is 53 days to CT. The authors put it as a capacity problem: trusts lack the ability to both report immediately and organise downstream tests and appointments, even though the pathway recommends it.[^lungimpact]

**"The trial should have mandated a pathway change in the intervention arm."** The authors consider this and decline it, on the grounds that mandating immediate radiologist review before the patient leaves is a pathway change with an effect of its own and "has little to do with AI-based prioritization."[^lungimpact] That is the right call for isolating the variable, and it is also the finding: the AI's contribution is separable from the pathway change, and it is the pathway change that carries the effect.

The comparison with radioX makes this concrete. Immediate human reporting with direct triage to same-day CT halved time to diagnosis.[^radiox] Immediate algorithmic prioritization, without the triage pathway, did nothing. The active ingredient in "immediate reporting" appears to be the *immediacy of the downstream action*, not the ordering of the queue.

One post hoc finding cuts the other way and must be reported. Among patients later diagnosed with cancer, those whose X-ray was called normal by both the radiologist and the AI took a median of 177 days to diagnosis, against 38 days when both called it abnormal — seven times longer to CT and three times longer to diagnosis, both P < 0.001.[^lungimpact] More pointedly, 53 cancers sat in the group where the radiologist said normal and the AI said abnormal, with a median 106 days to diagnosis, while only 22 sat in the reverse group.[^lungimpact] That asymmetry hints that the AI's *detection* may catch something human reporting misses, even though its *prioritization* changes nothing. It is post hoc, it is not what the trial randomized, and the authors call for detailed evaluation of those cases rather than claiming the finding. This case does the same.

## Failures, limitations, and governance

- **The bottleneck was never the reading queue.** A 53-day median to CT against a 72-hour standard is a capacity problem, and no reordering of a worklist addresses it.
- **The trial tested prioritization, not AI.** The AI ran in both arms, so this case says nothing about whether having qXR present is better than not having it. The authors state this limitation and explain why a non-consenting design required it.[^lungimpact]
- **One product, one version.** qXR v4.0, frozen for the trial. The authors note that other algorithms will have different characteristics and that this matters less for prioritization than it would for accuracy.[^lungimpact]
- **False positives are a real load.** Across 254,349 discordant findings reviews, 11.6% were false positives against expert review, and the paper raises "vigilance fatigue" and the cry-wolf effect as concerns, noting this is part of why NICE has recommended no CXR AI product.[^lungimpact] Reporter feedback was that most false positives are dismissed quickly, which is a self-reported mitigation rather than a measured one.
- **False negatives are few but not harmless.** In the nodule category, 343 AI false negatives contained 20 subsequent lung cancers, 5% of the cancers in that category.[^lungimpact]
- **The cost half is unpublished.** Registered as secondary outcome 7, deferred to a separate paper.[^isrctn][^lungimpact]
- **The registry and the paper disagree on scope.** The registration lists seven participating trusts; the paper reports five, with United Lincolnshire and Mid Yorkshire absent.[^isrctn][^lungimpact] Registered target enrolment was 150,000; 97,731 X-rays were performed, and the paper's own power calculation judged 100,000 sufficient without mentioning the registered target.[^isrctn][^lungimpact] Registered recruitment start was 1 August 2023; the paper reports 17 July 2023.[^isrctn][^lungimpact]
- **A site name appears to be wrong in the paper.** It reports "East Sussex and North Essex Foundation Trust"; the registry lists East Suffolk and North Essex NHS Foundation Trust.[^lungimpact][^isrctn] Recorded, not resolved.
- **The AI's code is unavailable.** The paper says so and gives the reason — it is a commercial product — which is a disclosure, not a remedy.[^lungimpact]

## What this case demonstrates

1. Accelerating a step does not accelerate a pathway. The measured gain was thirteen hours inside a process whose median is 53 days.
2. A feature can work exactly as designed and deliver nothing. Prioritization prioritized; the queue moved; the patient did not.
3. Randomization can settle a question that observational deployment reports cannot, and the two can point in opposite directions about the same technology in the same health service.
4. The active ingredient may be organisational rather than algorithmic. The intervention that halved time to diagnosis in the same pathway was a person reading the image immediately and a CT scanner being available.
5. Pre-registration is checkable, and checking it is cheap. The two primary outcomes reported here are the two registered, which a reader can verify in a minute against an independently hosted record.
6. A vendor can be kept out of the evaluation of its own product. Public funding, an independent statistician, and a published statement that the vendor had no influence on design or analysis.
7. A well-powered null is a result, and this one is stated as an instruction: do not deploy this function in this context.
8. Detection and prioritization are different claims about the same product, and a trial of one is not a trial of the other.

## What this case does not demonstrate

- It does not show that chest X-ray AI is useless. Only prioritization was randomized; the AI was present in both arms, and the post hoc discordance findings suggest its detection may have value the trial did not test.
- It does not show that the South West London deployment's reported improvement was wrong. That deployment changed its pathway at the same time, which is a different intervention from the one randomized here.
- It does not establish cost. The economics were registered and have not been published.
- It does not generalise to every algorithm. One product, one version, one country, one pathway.
- It does not establish that the 53-day median is typical of the NHS in general, only of these five trusts over this period.
- It does not resolve whether AI-flagged, radiologist-dismissed findings should be acted on. 53 cancers sat in that group; the authors call for evaluation rather than a rule.
- It does not tell you what prioritization costs to run, which is precisely what an operator deciding against it would want.

## Evidence assessment

**Grade A — a pre-registered, publicly funded, vendor-excluded randomized trial, read in full, with its registration checked against it.**

This is the best-evidenced case in the library, and it is worth being explicit about why, because the library's grade A cases have until now come from a different kind of source entirely — regulators, courts, prosecutors and audited filings, bodies that convene when something has gone wrong. This one comes from a trial that would have run whatever it found.

The design does the work. Randomization by session removes the confounding that defeats before-and-after service evaluations. The AI in both arms isolates the variable. The outcomes were registered in March 2023 and the two reported are the two registered — I checked, through the registry's own API, and there is no substitution, no reordering, no quiet promotion of a secondary outcome that happened to reach significance.[^isrctn] The analysis was done by a statistician independent of the investigators, the funder is a public innovation programme, and the paper states that the vendor had no influence on design or analysis.[^lungimpact] The trial is powered for the effect it sought and reports its confidence intervals.

The accountability is correspondingly good: a named ethics committee and reference, a named sponsor with a published route to anonymised data, CONSORT adherence, published statistical code, and an honest statement that the algorithm's code is proprietary and unavailable.

Three things keep this at A rather than beyond it, none of them a defect in the trial.

*It is not replicated.* No second randomized trial of chest X-ray AI prioritization exists. A single trial, however good, is one trial. The radioX comparison is not corroboration — same first author, different intervention — and is used here only as the contrast that makes the null interpretable.[^radiox]

*It tests prioritization, not AI.* A reader who wants to know whether qXR should be installed at all will not find the answer, and the authors say so.

*Two of its five sources here are abstracts.* The South West London studies were read only as abstracts, because RSNA and NEJM AI both refuse this sandbox. Every claim drawn from them is labelled, and the one that matters most — the fall from 6.0 to 3.6 days — is also reported inside LungIMPACT's discussion, which I did read in full, so it does not rest on an abstract alone.[^lungimpact][^nejm-ai-swlondon]

That last point deserves its own note, because it is where this case could have gone wrong. The tempting story is that a rigorous trial debunked an enthusiastic deployment report. It did not, and saying so would be a misreading of both. The South West London trust deployed AI triage *and* built a radiographer-led same-day CT pathway around it; LungIMPACT randomized the prioritization function alone and deliberately left the pathway untouched. These are different interventions. LungIMPACT's authors make precisely this criticism of that study by name, adding that it used suspected rather than confirmed lung cancer as its reference standard.[^lungimpact] The honest synthesis is not that one study is wrong, but that the two together point at the pathway rather than the algorithm — which is what the trial's own closing recommendation says.

A note on the outcome label, which is an editor's call. This case is filed `negative` rather than `inconclusive` or `mixed`. `Inconclusive` would be wrong: the trial was powered, the intervals are tight, and the question was settled. `Mixed` is arguable, because report turnaround did improve significantly and the post hoc detection signal is real. It is filed `negative` because the deployment under test — worklist prioritization — delivered none of the clinical benefit it was installed for, added cost the authors call avoidable, and ends with its own investigators recommending against it.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| AI prioritization produced no significant difference in time from chest X-ray to CT. | Verified | Ratio of geometric means 0.97, 95% CI 0.93–1.02, P = 0.31, in a randomized trial of 13,347 CT scans[^lungimpact] | A reanalysis of the trial data, obtainable from the named sponsor |
| AI prioritization produced no significant difference in time to lung cancer diagnosis. | Verified | Ratio of geometric means 0.98, 95% CI 0.83–1.16, P = 0.84, across 558 lung cancers[^lungimpact] | A reanalysis of the trial data, or a second randomized trial reaching a different result |
| Median time from X-ray to report fell from 47 to 34.1 hours, significantly. | Verified | Reported in the trial's discussion[^lungimpact] | A correction to the published paper |
| Median time from X-ray to CT was 53 days in both arms, against a national standard of 72 hours. | Verified | Reported results and the paper's statement of the NOLCP standard[^lungimpact] | A correction, or a different reading of the pathway standard |
| The two primary outcomes reported were the two registered before recruitment. | Verified | The ISRCTN record retrieved and compared against the paper for this case[^isrctn][^lungimpact] | A registry version history showing the outcomes were changed |
| The trial was funded publicly and the vendor had no influence on design or analysis. | Verified | Acknowledgements and competing interests statements[^lungimpact] | Evidence contradicting the published statements |
| Immediate radiographer reporting with direct triage to same-day CT halved time to lung cancer diagnosis in the same pathway. | Verified | A separate randomized trial, 32 days against 63, P = 0.03[^radiox] | A failed replication of radioX |
| Only 172 of 13,347 CT scans took place on the same day as the X-ray. | Verified | Reported in the trial's results[^lungimpact] | A correction to the published paper |
| A South West London NHS trust reported time from chest radiograph to CT report falling from 6.0 to 3.6 days after deploying AI triage. | Attributed | Reported in the NEJM AI abstract, read here without its full text, and characterised the same way in LungIMPACT's discussion[^nejm-ai-swlondon][^lungimpact] | Reading the full text, or an independent analysis of that trust's data |
| That reported improvement can be attributed to the AI. | Disputed | LungIMPACT's authors state the study involved extensive pathway redesign in the "after" period, which its own authors recognised as a significant limitation, and used a weaker reference standard[^lungimpact] | A design that separates the AI from the pathway change |
| The AI achieved 97% sensitivity and 35% specificity in a 12-month silent trial at that trust. | Attributed | The deploying trust's own reported figures, read as an abstract only[^ryai-silent-trial] | Reading the full text, or an independent evaluation at that operating point |
| A different chest X-ray AI increased cost by £3.59 per radiograph in a Scottish service evaluation. | Attributed | Reported inside LungIMPACT's discussion; the underlying study was not read for this case[^lungimpact] | Reading the Scottish evaluation directly |
| AI prioritization costs more than it returns in this pathway. | Unknown | The paper calls the costs considerable and avoidable but gives no figure; cost-effectiveness is registered as secondary outcome 7 and unpublished[^lungimpact][^isrctn] | Publication of the trial's health economics evaluation |
| The AI's detection, as distinct from its prioritization, shortens the pathway. | Unknown | Not randomized. A post hoc finding shows 53 cancers where the AI was abnormal and the radiologist normal, with a median 106 days to diagnosis[^lungimpact] | A trial randomizing AI presence rather than prioritization |
| The finding generalises to other chest X-ray algorithms. | Unknown | One product, one frozen version; the authors argue accuracy differences are unlikely to matter for prioritization but do not test it[^lungimpact] | A trial using a different algorithm |

## Direct quotations

> AI prioritization of CXR requested by UK primary care has no significant impact on the lung cancer pathway. Therefore, CXR AI deployments should not include worklist prioritization in this context.

— Woznitza and colleagues, stating the trial's conclusion as an instruction[^lungimpact] · locator: Abstract, final sentences

> Future research should differentiate between primary pathway changes and the direct impact of AI.

— Woznitza and colleagues, on the confound that defeats before-and-after evaluations of the same technology[^lungimpact] · locator: Abstract, closing sentence

> A significant reduction in the median time from CXR acquisition to report was observed, from 47 h to 34.1 h; however, no significant differences were detected in any of the timings measured as primary or secondary outcomes

— Woznitza and colleagues, the proxy moving and the outcome not[^lungimpact] · locator: Discussion, paragraph beginning "A significant reduction"

> It has been shown conclusively that AI prioritization had no impact on time to CT or time to lung cancer diagnosis.

— Woznitza and colleagues[^lungimpact] · locator: Discussion, paragraph beginning "The LungIMPACT study has examined"

> do not meet the NOLCP standards (72 h from abnormal CXR to CT)

— Woznitza and colleagues, on national reporting and CT waiting times as of April 2025[^lungimpact] · locator: Discussion, second paragraph

> there was extensive pathway redesign within the 'after' pathway, which the authors recognized as a significant limitation in attributing improvements to AI

— Woznitza and colleagues, on the before-and-after study that reported a fall from 6 to 3.6 days[^lungimpact] · locator: Discussion, paragraph reviewing comparable studies

> Qure.ai Technologies had no influence on the study design or analysis.

— Woznitza and colleagues, in the acknowledgements[^lungimpact] · locator: Acknowledgements

> Immediate reporting of CXRs from primary care reduces time to diagnosis of lung cancer by half, likely due to rapid progress to CT.

— Woznitza and colleagues, the conclusion of the earlier randomized trial of the human intervention[^radiox] · locator: radioX abstract, Conclusions

## Revision notes

- 2026-09-15 — Initial publication at Grade A, the library's fifth and the first whose evidence comes from a trial rather than from a regulator, a court, a prosecutor or an audited filing. Found while searching for a shadow-mode case; recorded in the previous session's handoff as the stronger story left on the table, and written next because the access problem turned out to be one-sided in the right direction: the randomized trial is fully readable at nature.com while the deployment reports it critiques are not. Sources span five families. The trial itself was read end to end; its pre-registration was retrieved through the ISRCTN XML API — the registry's own web page asks users not to scrape it and directs them there — and compared against the paper, confirming that the two primary outcomes reported are the two registered, and surfacing three discrepancies of scope that are recorded rather than resolved. The comparator trial, radioX, was read as an abstract carrying its full design and result. The two South West London deployment reports were read as abstracts only, because RSNA and NEJM AI both refuse this sandbox, and every claim taken from them is labelled `Attributed` accordingly. The case deliberately does not adopt the tempting reading that a rigorous trial debunked an enthusiastic deployment report: the two tested different interventions, and saying otherwise would repeat the confound the trial's authors warn about. `causal` is the correct strength here and is used sparingly in this library. The outcome is filed `negative` rather than `mixed` or `inconclusive`, argued in the evidence assessment. Related to AAI-2026-020 as the case where a proxy improved and the outcome went unmeasured, against this one where the outcome was measured and did not follow; and to AAI-2026-006 as a second healthcare case in which a proxy moved and the clinical outcome behind it did not.

[^lungimpact]: Nick Woznitza, Lesley Smith, Janette Rawlinson, Iain Au-Yong, Bindu George, Madava G. Djearaman, Arjun Nair, Richard W. Lee, Neal Navani, Siyabonga Ndwandwe, Caroline S. Clarke, Andrew Creeden, Josh Newsome, Indrajeet Das, Sylvia Abaokporo, Richard Tucker, James Hathorn and David R. Baldwin, [“AI-based chest X-ray prioritization in the lung cancer diagnostic pathway: the LungIMPACT randomized controlled trial”](https://www.nature.com/articles/s41591-026-04253-5), *Nature Medicine*, 2026-03-24, doi:10.1038/s41591-026-04253-5. Read in full.

[^isrctn]: ISRCTN registry, [ISRCTN78987039 — “Does triage of chest X-rays with artificial intelligence shorten the time to lung cancer diagnosis: a randomised controlled trial”](https://www.isrctn.com/ISRCTN78987039), registered 2023-03-21, record version 54, last updated 2026-03-25. Retrieved as XML through the registry's public API.

[^radiox]: Nick Woznitza, Bhagabati Ghimire, Anand Devaraj, Sam M. Janes, Keith Piper, Susan Rowe, Angshu Bhowmik, Natasha Hayes, Daniel Togher, Nikita Arumalla, Erik Skyllberg, Iain T. H. Au-Yong, Susan Geary and Bindu George, [“Impact of radiographer immediate reporting of X-rays of the chest from general practice on the lung cancer pathway (radioX): a randomised controlled trial”](https://doi.org/10.1136/thorax-2022-219210), *Thorax*, 2022-11-08, doi:10.1136/thorax-2022-219210. Abstract read in full; full text not read.

[^nejm-ai-swlondon]: Mathew Storey, Jack Packer, Nora Sangvik Grandal, Anita Rhodes, Jo Moon, Daniel Togher, Ziyad Abubacker, Simon Rickaby, Geraldine Dean and Susan C. Shelmerdine, [“Early Clinical Evaluation of AI Triage of Chest Radiographs: Time to Diagnosis for Suspected Cancer and Number of Urgent CT Referrals”](https://ai.nejm.org/doi/full/10.1056/AIcs2500539), *NEJM AI* 3(1), January 2026, doi:10.1056/AIcs2500539. **Abstract only** — the publisher returns 403 from this sandbox; the abstract was read through Ovid.

[^ryai-silent-trial]: Mathew Storey, A. Chung, Jack Packer, A. M. Bartsch, Anita Rhodes, R. Colta, Simon Rickaby, Christina Malamateniou, Geraldine Dean and Susan Shelmerdine, [“AI Triage of Normal Chest Radiographs: A Silent Trial and Failure Analysis”](https://doi.org/10.1148/ryai.250964), *Radiology: Artificial Intelligence*, 2026-05-01, doi:10.1148/ryai.250964. **Abstract only** — the publisher returns 403 and the article is not in PubMed Central.
