---
case_id: AAI-2026-020
title: "A dialysis forecast ran twice in shadow mode and disagreed with itself"
summary: "Four Toronto hospitals ran a seven-day forecast of urgent dialysis demand live, twice, without showing it to anyone. In the first silent period it exactly matched the static average it was meant to beat; in the second it beat it comfortably. The published paper reports the two periods combined as a 26.7% improvement and does not mention the tie."
organization:
  - University Health Network
  - Sinai Health System
case_type: evaluation
secondary_case_types:
  - deployment
industry:
  - healthcare
business_function:
  - operations
deployment_stage: evaluation
outcome: inconclusive
evidence_grade: C
status: published
created: 2026-09-15
published: 2026-09-15
last_verified: 2026-09-15
next_review: 2027-03-15
geography:
  - Canada
environment: shadow-mode
deployment_pattern:
  - decision-support
causal_strength: descriptive
related_cases:
  - AAI-2026-015
  - AAI-2026-006
evidence_upgrade_path: "Three things would move this case, and only the first is in anyone's gift but the investigators'. A silent deployment long enough to contain both a calm month and a busy one would settle whether the model beats a static average in general or only when demand is unusual — the two periods here point different ways and neither is long enough to decide. Second, the staffing figures presented at the Annual Dialysis Conference in March 2025 and absent from the November 2025 paper should be either published with their method or withdrawn; as things stand the only public account of what the model would have done to nurse rostering is a trade-press paragraph. Third, and decisively, an evaluation by somebody who does not hold the patent: every number in this case comes from the team that built the model and filed for its intellectual property."
sources:
  - id: ajn-paper
    author: "Bryant Lim; Kevin Zhu; Katarina Zorcic; Christopher T.M. Chan; Michael Fralick"
    title: "Building and Prospectively Evaluating a Prediction Model to Forecast Urgent Dialysis Needs across Four Tertiary Hospitals"
    publisher: "American Journal of Nephrology (Karger)"
    published: 2025-11-24
    url: "https://doi.org/10.1159/000549256"
    accessed: 2026-09-15
    roles:
      - direct-evidence
      - primary-investigation
    source_family: uhn-dialysis-forecast
    access: "The full peer-reviewed article, read end to end including both results tables and the figure caption, the ethics statement, the conflict of interest statement and the funding statement. Published under CC BY-NC."
    method: "A retrospective cohort (1 April 2018 to 31 March 2023, 37,388 dialysis procedures) used to train and test ARIMA and temporal convolutional network models, followed by two prospective silent deployment periods in which seven-day forecasts were generated weekly and compared against actual volumes. The comparator is the mean daily procedure count from the retrospective dataset. The outcome measured is mean absolute error in procedures per day. No staffing decision was taken on any forecast and no clinical or financial outcome was measured."
    conflicts: "Material and disclosed by the authors. Three of the five — M.F., B.L. and C.C. — hold a provisional patent for a model that predicts acute dialysis needs, which is the subject of the paper. M.F. is an advisor to Signal1, a start-up that implements machine-learned solutions into clinical practice, and was a paid editor at NEJM Evidence. C.C. was a member of the journal's editorial board at the time of submission. The study was funded by the division that ran it, and the ethics requirement was waived by that division's own leadership team after the institutional quality improvement committee deemed the work quality assurance."
    corroboration: "None independent. The only other public account of this work, a trade-press report of the authors' conference presentation, comes from the same investigators and disagrees with the paper on several figures rather than confirming them."
    accountability: "A named peer-reviewed journal article with a DOI, a complete methods section, both benchmark rows and both prospective periods reported separately in Table 2, and a conflicts statement that discloses the patent without being obliged to volunteer it."
    notes: "Read as JATS XML through the NCBI E-utilities endpoint (efetch, db=pmc, id=PMC12700581), because the PMC article page serves a reCAPTCHA challenge and the publisher's own page at karger.com returns 403 from this sandbox. The DOI is given as the citation URL; it resolves to the publisher page. The separation of the two silent periods in Table 2 is what this case turns on, and it is not discussed anywhere in the paper's text."
  - id: healio
    author: "Shawn M. Carter (fact-checked by Richard Smith)"
    title: "AI deep learning can help predict hospitals' acute dialysis needs"
    publisher: "Healio"
    published: 2025-03-27
    url: "https://www.healio.com/news/nephrology/20250327/ai-deep-learning-can-help-predict-hospitals-acute-dialysis-needs"
    accessed: 2026-09-15
    roles:
      - independent-reporting
    source_family: annual-dialysis-conference-2025
    access: "The full trade-press report, read in full, including the key-takeaways box, the direct quotations from the senior author, the source line naming the conference presentation and the disclosure line."
    method: "Not an investigation. A reporter's account of a presentation given at the Annual Dialysis Conference, Las Vegas, 13-16 March 2025, with an interview. Its figures are the presenters' own, eight months before the peer-reviewed paper appeared."
    conflicts: "The reporting is independent of the investigators but the content is not: every figure originates with the same team, and the outlet is nephrology trade press whose readership is the specialty being addressed. Filed as a separate source family from the paper because it is a different document reporting a different version of the work, not because it is an independent measurement."
    corroboration: "It does not corroborate the paper. It differs from it on the headline error figure, on the modelling family credited, and on whether any staffing effect was estimated at all. Those differences are the reason it is cited here."
    accountability: "A bylined article with a named fact-checker, a dated conference citation for the underlying presentation, a contact address for the senior author and a funding disclosure."
    notes: "Read in full. It is the only public source found for the staffing figures — a 67% reduction in overstaffing and a 79% reduction in understaffing — which do not appear in the peer-reviewed paper published eight months later. The conference presentation it reports is titled 'Using deep learning to forecast acute dialysis needs in hospital'; the paper's best-performing model is ARIMA, not a deep learning model."
tags:
  - forecasting
  - shadow-mode
  - silent-deployment
  - staffing
  - proxy-measurement
  - conflict-of-interest
---

## Case in one sentence

A seven-day forecast of urgent dialysis demand was run live at four Toronto hospitals during two separate silent deployment periods in which its predictions were deliberately withheld from the people who would have used them, and the two periods disagreed: at the busiest hospital the model exactly matched the static average it was built to beat in the first period and beat it by 42% in the second.

## Executive summary

Urgent dialysis needs a specialised nurse. The four hospitals in this case staff it the way most hospitals do — a fixed number of nurses every day, ten of them covering all four sites, set by a manager's sense of the average.[^ajn-paper] Demand is not fixed, so the roster is wrong in one direction or the other most days.

A team at University Health Network and Sinai Health built a forecast of the next seven days' procedure count. It is a deliberately plain model: daily counts for the previous 365 days, ambient temperature from a single Environment Canada station, holiday indicators and day-of-week dummies. No patient-level data at all — no creatinine, no electrolytes, no urine output — a choice the authors make explicitly to keep the thing implementable.[^ajn-paper]

They then did something this library has not previously recorded. They ran it live, twice, and told nobody what it said.

> During the silent deployment periods, predictions were not sent to the end-user. The purpose of the silent deployment periods was to monitor model performance and identify potential data issues without impacting the end-user.[^ajn-paper]

That is shadow mode stated plainly by the operators: a real system, on real data, in real time, with the output going nowhere. The first period ran for the 30 days of November 2023. The second ran for 28 days from 31 May to 27 June 2024.[^ajn-paper]

The paper reports the result as a success. For the hospital carrying about 80% of the volume, mean absolute error fell from a benchmark of 3.0 procedures per day to 2.2 — "a 26.7% improvement." For the other three hospitals combined, 2.0 to 1.5, "a 25% improvement."[^ajn-paper]

Table 2 reports the two silent periods separately, and they do not agree.

| Hospital A, mean absolute error | Static benchmark | ARIMA | Deep learning (TCN) |
| --- | --- | --- | --- |
| Silent period 1 (Nov 2023) | 2.1 | 2.1 | 2.6 |
| Silent period 2 (May–Jun 2024) | 4.0 | 2.3 | 2.4 |
| The two combined, as published | 3.0 | 2.2 | 2.5 |

In the first silent deployment the model did not beat the static average. It equalled it, to the reported precision, and the deep learning model was worse than both. The headline improvement is carried entirely by the second period, when the benchmark degraded from 2.1 to 4.0 while the model stayed close to where it had been.[^ajn-paper] The paper's text does not mention the first period's result.

Eight months before the paper, the same work was presented at a conference and reported by the nephrology trade press under the headline "AI deep learning can help predict hospitals' acute dialysis needs." That account carries a staffing estimate the paper does not: that AI-forecast schedules "would have reduced overstaffing by 67% and understaffing by 79%."[^healio] The paper makes no such claim and ends by saying the question is open.[^ajn-paper]

## Research question

When a system is run in shadow mode to decide whether it is worth deploying, what does the shadow period actually establish — and what survives into the account that others will read?

## Organization and operating context

The deploying organisation is a division, not a company. The work was done in the Division of Nephrology at University Health Network in Toronto, with authors also at Sinai Health System and the University of Toronto, and funded by that division.[^ajn-paper]

The operating context is unusually tight, and the paper is candid about it. Roughly 80% of urgent dialysis happens at one hospital, referred to as hospital A; the remaining 20% is spread across three others, treated together as hospital B. And the four are not really four:

> Notably, it is the same 10 nurses that cover all of the four hospitals for urgent dialysis and each hospital is within walking distance.[^ajn-paper]

That matters in both directions. It weakens any claim to multicentre generalisability — this is one staffing pool in one city, not four independent sites. It also sharpens the operational question, because a single pool of ten people is exactly the kind of resource a good forecast could allocate.

The governance arrangement is worth stating precisely. The institutional quality improvement committee deemed the study low risk and quality assurance, and the requirement for ethics approval and consent was then waived by the Division of Nephrology leadership team — the same division that ran the study and funded it.[^ajn-paper] Nothing here suggests that was improper for a study in which nothing was done to any patient. It is recorded because the chain of review is short and internal, and because the same division's members hold a provisional patent on the model.[^ajn-paper]

## The situation before AI

The baseline is not a worse algorithm. It is a number in a manager's head.

The hospitals schedule a fixed number of nurses each day, and the paper says the number comes from "the nurse manager's past experience of the average number of urgent dialysis procedures each day."[^ajn-paper] Ten nurses cover a mean daily demand of 20.5 procedures across the four sites.[^ajn-paper]

The study's comparator is the formalised version of that practice: the mean daily procedure count from the retrospective dataset, applied as a flat prediction for every day. This is the right comparator to choose, and choosing it is a genuine strength of the study — a great many forecasting papers compare against nothing at all. It is also a demanding one, because a flat average is hard to beat over a short window when demand is close to its long-run mean, which is precisely what the first silent period turns out to show.

There is a subtlety in how the comparator was built that the paper does not flag. The models were trained on data to 31 March 2022 and tested on the held-out year to 31 March 2023, but the benchmark average is computed over the whole retrospective dataset to 31 March 2023 — so the benchmark was derived partly from the period the models were tested on.[^ajn-paper] If anything this favours the benchmark, so it does not undermine the reported result; it is noted because a reader reconstructing the comparison would otherwise assume the two were built on the same data.

## The AI intervention or event

**April 2018 to March 2023.** Retrospective data assembled: 37,388 dialysis procedures, mean 20.5 per day across the four hospitals.[^ajn-paper]

**Model selection.** ARIMA, fitted with `auto_arima` on the previous 365 days plus temperature, holiday and calendar variables, against a six-layer dilated causal temporal convolutional network. On the retrospective test set the two tied exactly — 3.0 procedures for hospital A and 1.5 for hospital B, against a benchmark of 4.4 and 1.9.[^ajn-paper]

**13–16 March 2025, Las Vegas — presented before publication.** The work is presented at the Annual Dialysis Conference under the title "Using deep learning to forecast acute dialysis needs in hospital," and reported by Healio under a headline crediting deep learning.[^healio]

**1–30 November 2023 — first silent deployment.** Forecasts generated weekly for the next seven days, compared with actual volumes, and shown to nobody. Hospital A: benchmark 2.1, ARIMA 2.1, TCN 2.6. Hospital B: benchmark 1.7, ARIMA 1.2, TCN 1.7.[^ajn-paper]

**31 May to 27 June 2024 — second silent deployment.** Hospital A: benchmark 4.0, ARIMA 2.3, TCN 2.4. Hospital B: benchmark 2.3, ARIMA 1.7, TCN 2.0.[^ajn-paper] Mean daily volume at hospital A had risen from 15.2 in the first period to 18.4 in the second.[^ajn-paper]

**24 November 2025.** The paper appears, reporting the two periods combined, and concluding that a dynamic approach to staffing "is feasible and potentially cost saving" while stating that whether it would actually save anything is unestablished.[^ajn-paper]

At no point did a forecast reach a nurse manager. No roster was changed. The intervention, in the sense this library usually means, never happened.

## Outcomes and economics

There are no economics in this case, and the gap between that fact and how the work was described publicly is the case.

The paper measures one thing: mean absolute error in procedures per day. It does not measure nurse hours, overtime, agency cover, backfill decisions, cost, patient waiting time for urgent dialysis, or any clinical outcome. It says so:

> Future prospective work is needed to identify whether implementing such a model could result in improved efficiency and cost savings.[^ajn-paper]

| | |
| --- | --- |
| Retrospective procedures analysed | 37,388 (1 Apr 2018 – 31 Mar 2023) |
| Mean daily volume, four hospitals | 20.5 (SD 6.1) |
| Nurses rostered daily for urgent dialysis | 10, covering all four hospitals |
| Silent deployment periods | Two: 30 days (Nov 2023) and 28 days (31 May – 27 Jun 2024) |
| Procedures during the silent periods | Approximately 1,200 — about 3% of the retrospective set |
| Published prospective result, hospital A | MAE 2.2 vs benchmark 3.0 — a 26.7% improvement |
| Published prospective result, hospital B | MAE 1.5 vs benchmark 2.0 — a 25% improvement |
| Silent period 1 alone, hospital A | MAE 2.1 vs benchmark 2.1 — no improvement |
| Staffing effect measured in the paper | None |
| Staffing effect reported at conference | Overstaffing reduced 67%, understaffing reduced 79% |
| Cost saving established | None |
| Rosters changed as a result | None |

The staffing figures deserve their own paragraph, because they are the only quantities in this entire record that speak to the thing the model was built for. They appear in a trade-press report of a conference talk, attributed to the researchers, with a stated assumption — "assuming hospitals maintain a staff of 10 nurses daily to meet an average demand of 20.5 patients."[^healio] They do not appear in the peer-reviewed paper. No method for deriving them is public. This case does not adopt them as facts and does not repeat them as findings; it records that they were said, where, and that the published work says the question is open.

## Causal assessment and competing explanations

This case is labelled **descriptive**, and the label is not a hedge. Nothing was done, so nothing can have been caused. No forecast reached a decision-maker, no roster moved, and there is no outcome to attribute to anything.

What the record does support is a narrower comparison: over 58 days of live running, how close two forecasting methods and a flat average came to the actual count. Even that comparison has competing readings.

**"The model beats the status quo by about a quarter."** This is the paper's reading, and over the two periods combined it is what the arithmetic gives.

**"The model beats the status quo when demand departs from its long-run average, and not otherwise."** The benchmark's own error nearly doubled between the two periods, from 2.1 to 4.0 at hospital A, while the model's error barely moved, 2.1 to 2.3.[^ajn-paper] A flat average fails when the level shifts; mean daily volume at hospital A was 15.2 in the first window and 18.4 in the second.[^ajn-paper] On this reading the model's value is insurance against unusual months, which is a real but different proposition from a standing 26.7% gain — and it implies the measured benefit depends heavily on which months you happen to run the shadow period in.

The record cannot separate these, because two windows of a month each is not enough to. That is the honest finding, and it is one a longer silent deployment could have settled.

A third reading is worth naming and rejecting. It is not the case that the deep learning model was vindicated: TCN lost to ARIMA in three of the four hospital-period cells and tied it in none, and lost to the static benchmark outright at hospital B in the first period.[^ajn-paper] The simplest method won.

## Failures, limitations, and governance

- **The two silent periods disagree, and only the combined figure is discussed.** Table 2 reports them separately; the text, abstract and conclusion do not mention that the first showed no improvement at the main site.[^ajn-paper]
- **A month is not a season.** Fifty-eight days of live running, about 1,200 procedures, against a retrospective set of 37,388. The evidence for deployment is roughly 3% the size of the evidence for development.
- **The public account and the published account differ on what was found.** The conference title and trade-press headline credit deep learning; the paper's winning model is ARIMA, and its deep learning model underperformed.[^healio][^ajn-paper]
- **The staffing numbers travelled and the caveat did not.** Overstaffing and understaffing reductions were reported eight months before publication; the paper contains neither figure and says the question is unresolved.[^healio][^ajn-paper]
- **The evaluators hold the patent.** Three authors hold a provisional patent for a model predicting acute dialysis needs, disclosed in the paper.[^ajn-paper]
- **The review chain is internal and short.** Quality improvement committee, then a waiver from the leadership team of the division running and funding the study.[^ajn-paper]
- **"Four tertiary hospitals" is one staffing pool.** The same ten nurses, hospitals within walking distance.[^ajn-paper]
- **Table 2 carries a second benchmark the methods do not describe.** A "Benchmark (date)" row appears alongside "Benchmark (static)" with no corresponding definition in the text.[^ajn-paper]
- **The silent deployment found no data problems worth reporting.** Identifying data issues is given as half the purpose of running silently; whether any were found is not stated either way.[^ajn-paper]

## What this case demonstrates

1. Shadow mode is the cheapest honest test an operator has, and this team ran it — twice, deliberately, with the output withheld. That is the practice worth copying, independently of what it found here.
2. A single shadow period can mislead in either direction. Run once in November 2023, this model looks like it adds nothing; run once in June 2024, it looks like a 42% improvement. Both readings would have been drawn from a real live deployment.
3. Reporting the combined figure across heterogeneous periods can conceal that the periods disagree, without anyone misstating a number.
4. A forecast's measured advantage depends on how badly the thing it replaces is doing, and that varies by month. A benchmark is not a constant.
5. The simplest model can win. A 1970s time-series method beat a temporal convolutional network in three of four live comparisons, having tied it in retrospective testing.
6. Excluding patient-level data can be a deployment decision rather than a modelling compromise — here taken explicitly to make the system implementable.
7. Figures presented at a conference can be more specific and more favourable than those that survive peer review, and the conference version is what the trade press records and indexes.
8. Silent running tests the model. It does not test the workflow, because nobody ever had to act on an output, be wrong because of one, or ignore one.

## What this case does not demonstrate

- It does not establish that the model would improve staffing. No roster was changed and no staffing outcome was measured in the published work.
- It does not establish any cost saving. The paper says explicitly that this is unestablished.
- It does not establish the 67% and 79% staffing figures. They appear only in a trade-press report of a conference presentation, with no published method, and this case does not adopt them.
- It does not establish that the model generalises. Four hospitals sharing ten nurses in one city, all academic and adult, as the authors note.
- It does not show that the first silent period's tie was concealed. The figures are in the paper's own table; the case's finding is that the text discusses only the combined result.
- It does not establish that the model would have failed in November 2023. Matching a static average is not failing; it is finding nothing to add in a month when the average happened to be right.
- It does not establish whether the silent deployment surfaced data problems, which was half its stated purpose.
- It says nothing about patient outcomes. Urgent dialysis demand was forecast; no patient's care depended on the forecast.

## Evidence assessment

**Grade C — a complete and unusually candid primary paper, reporting a system measured only by the people who own it.**

The primary source is good for what it is. It is peer-reviewed, published under an open licence, read here in full, and it reports enough to be argued with: both benchmark rows, both silent periods separately, the modelling parameters, the ethics waiver, the funding source and a conflicts statement disclosing a provisional patent that nobody compelled the authors to volunteer. This case's central finding — that the two silent deployments disagree — exists only because the paper published the disaggregated table. A less honest paper would have made the finding impossible.

What holds it at C is what the evidence *is*, not how well it is presented. Every number describing this model's performance was produced by the team that built the model and filed for its intellectual property, funded by their own division, with the ethics requirement waived by that division's leadership. No independent party has evaluated the system, and the sample of live running is 58 days.

The second source family is real but it is not corroboration, and this is the judgment call in the case. A mechanical reading of the source-family count would put two chains behind this case and allow a promotion to B. It should not, for the reason this library has settled three times before: a second chain lifts a grade when it independently tests the first one's numbers. The Healio report tests nothing. It relays the same investigators' earlier account of the same work to a different audience, and it disagrees with the paper — on the error figure, on which modelling family deserves the credit, and on whether a staffing effect was estimated at all. That makes it valuable evidence about how the result travelled, and no evidence at all about whether the result is right. The grade stays at C and the second source earns its place by contradiction rather than confirmation.

Three discrepancies between the two accounts are recorded rather than resolved, because this case cannot determine which version is correct:

- **Error figures.** Healio reports a single mean absolute error of 3.1 procedures per day across the two prospective evaluations and 3.2 retrospectively.[^healio] The paper reports no combined figure and gives 2.2 and 1.5 prospectively for hospitals A and B, and 3.0 and 1.5 on the retrospective test set.[^ajn-paper] The aggregations differ and the accounts cannot be reconciled from what is public.
- **Which method is credited.** The conference presentation is titled "Using deep learning to forecast acute dialysis needs in hospital" and the trade-press headline follows it.[^healio] The paper's best-performing model is ARIMA, and the deep learning model lost to it in every live comparison.[^ajn-paper]
- **Funding.** Healio's disclosure names "University Health Network (UHN) and Fralick Lab"; the paper names the UHN Division of Nephrology.[^healio][^ajn-paper]

One further limitation is structural rather than evidentiary. Because the system never left shadow mode, there is no deployment to assess — only a model's arithmetic. A reader wanting to know whether AI helps a nurse manager will not find it here, and the paper does not claim otherwise.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| The model was run live during two periods in which its predictions were withheld from end-users. | Verified | Stated in the paper's methods, with both date ranges[^ajn-paper] | A correction to the published methods |
| In the first silent period at hospital A, ARIMA's mean absolute error equalled the static benchmark's, at 2.1. | Verified | Table 2, prospective 2023 column[^ajn-paper] | A corrected table |
| The published 26.7% improvement for hospital A is the figure for both silent periods combined. | Verified | The 2.2 and 3.0 figures are the combined columns of Table 2; the results text quotes them as the prospective result[^ajn-paper] | A different reading of the table's column headings |
| The paper's text does not report the first silent period's result separately. | Verified | The abstract, results and discussion give only combined prospective figures; the separation appears only in Table 2[^ajn-paper] | Any passage in the paper discussing the 2023 period alone |
| ARIMA outperformed the temporal convolutional network in the live periods. | Verified | Table 2: ARIMA equal or lower MAE in all four hospital-period cells[^ajn-paper] | A corrected table |
| The four hospitals are covered by the same ten nurses and are within walking distance of each other. | Verified | Stated in the paper's methods[^ajn-paper] | A correction from the institutions |
| Three authors hold a provisional patent for a model that predicts acute dialysis needs. | Verified | The paper's conflict of interest statement[^ajn-paper] | A corrected disclosure |
| Approximately 1,200 dialysis procedures occurred during the two silent periods. | Inference | Calculated from the reported mean daily volumes and window lengths: 18.4 × 30 days plus 23.6 × 28 days[^ajn-paper] | The investigators publishing the actual counts |
| Researchers estimated that AI-forecast schedules would have reduced overstaffing by 67% and understaffing by 79%. | Attributed | Reported by Healio from the authors' conference presentation; absent from the peer-reviewed paper[^healio][^ajn-paper] | Publication of the estimate with its method, or its withdrawal |
| The model improves urgent dialysis staffing efficiency. | Unknown | No roster was changed and no staffing outcome was measured; the paper states the question is open[^ajn-paper] | A prospective study in which forecasts reach schedulers and staffing outcomes are measured |
| The model saves money. | Unknown | No cost was measured at any point[^ajn-paper] | A costed evaluation |
| The model's advantage over a static average holds across seasons. | Unknown | Two windows of 30 and 28 days, disagreeing with each other, with the benchmark's own error nearly doubling between them[^ajn-paper] | A silent deployment spanning a full year |
| The silent deployment identified data problems. | Unknown | Named as half the stated purpose of running silently; no finding is reported either way[^ajn-paper] | The investigators reporting what the silent periods surfaced |

## Direct quotations

> During the silent deployment periods, predictions were not sent to the end-user. The purpose of the silent deployment periods was to monitor model performance and identify potential data issues without impacting the end-user.

— Lim, Zhu, Zorcic, Chan and Fralick, defining the shadow deployment in their own words[^ajn-paper] · locator: Methods, first paragraph

> Notably, it is the same 10 nurses that cover all of the four hospitals for urgent dialysis and each hospital is within walking distance.

— Lim and colleagues, on what "four tertiary hospitals" means operationally[^ajn-paper] · locator: Methods, second paragraph

> Future prospective work is needed to identify whether implementing such a model could result in improved efficiency and cost savings.

— Lim and colleagues, the paper's final sentence before the ethics statement[^ajn-paper] · locator: Discussion, closing paragraph

> The study protocol was reviewed, and the needs for ethics approval and consent were waived by the Division of Nephrology Leadership team at UHN.

— Lim and colleagues, on who approved the study[^ajn-paper] · locator: Statement of Ethics

> M.F., B.L., and C.C. hold a provisional patent for a model that predicts acute dialysis needs.

— Lim and colleagues, disclosing an interest in the system being evaluated[^ajn-paper] · locator: Conflict of Interest Statement

> we could predict plus or minus two urgent dialyses. So, we thought, 'That is good enough. Let us see what happens in real life.'

— Michael Fralick, on the decision to move from retrospective testing to live silent running, quoted eight months before the paper appeared[^healio] · locator: Healio, paragraph beginning "Using the AI model"

> assuming hospitals maintain a staff of 10 nurses daily to meet an average demand of 20.5 patients, implementing AI-forecast schedules would have reduced overstaffing by 67% and understaffing by 79%, the researchers found.

— Shawn M. Carter, reporting figures that do not appear in the peer-reviewed paper[^healio] · locator: Healio, paragraph beginning "Further, assuming hospitals"

## Revision notes

- 2026-09-15 — Initial publication at Grade C. The library's first `shadow-mode` case, added after a deliberate search of the clinical "silent trial" literature, which is the one field where running a system live with its output withheld has a name, a method and a publication route. Three candidates were read in full or in part before this one was chosen: a chest radiograph silent trial across five NHS hospitals is better shaped but its full text is unreachable from this sandbox and an abstract cannot carry a case; a UCSD silent-mode deployment of a ventilation prediction model has a pre-committed performance threshold, but the threshold fired only in a simulated external setting. This case was preferred because its shadow deployment is unambiguous, stated by the operators, and never became anything else — the system was run live twice and switched off, which is what `shadow-mode` is meant to denote. The finding is not in the paper's text but in its Table 2: the two silent periods disagree, and the published 26.7% improvement is their average. Grade C because every performance number comes from the team that built the model, three of whom hold a provisional patent on it, funded by their own division, with ethics waived by that division's leadership. The second source family is a trade-press report of the authors' conference presentation eight months earlier; it is cited for contradiction, not corroboration, and the case argues explicitly why a mechanical two-chain count should not promote this to B. Three discrepancies between the conference account and the paper are recorded and not resolved: the error figures, whether deep learning or ARIMA deserves the credit, and the staffing estimates that appear only in the earlier account. Related to AAI-2026-015 as a second forecasting system whose accuracy improved while the cost it existed to reduce went unmeasured, and to AAI-2026-006 as a second healthcare case in which a proxy moved and the outcome behind it did not.

[^ajn-paper]: Bryant Lim, Kevin Zhu, Katarina Zorcic, Christopher T.M. Chan and Michael Fralick, [“Building and Prospectively Evaluating a Prediction Model to Forecast Urgent Dialysis Needs across Four Tertiary Hospitals”](https://doi.org/10.1159/000549256), *American Journal of Nephrology*, 2025-11-24, doi:10.1159/000549256. Read in full as JATS XML via NCBI E-utilities (PMC12700581); the PMC article page serves a reCAPTCHA and the publisher's page returns 403 from this sandbox.

[^healio]: Shawn M. Carter, [“AI deep learning can help predict hospitals' acute dialysis needs”](https://www.healio.com/news/nephrology/20250327/ai-deep-learning-can-help-predict-hospitals-acute-dialysis-needs), *Healio*, 2025-03-27. Reporting Lim B, et al., “Using deep learning to forecast acute dialysis needs in hospital: A retrospective and prospective multicentre study,” presented at the Annual Dialysis Conference, Las Vegas, 13–16 March 2025.
