---
case_id: AAI-2026-015
title: "A million pounds of solar forecasting and a rule of thumb"
summary: "Britain's electricity system operator spent four years and roughly £1.04m putting a deep-learning solar forecast into its control room, cutting national forecast error from 650 MW to a fraction of that. Its own success criteria required a measured change in balancing costs and carbon. What it published instead was an extrapolation from a rule of thumb."
organization:
  - National Energy System Operator (NESO)
  - Open Climate Fix
case_type: deployment
secondary_case_types:
  - evaluation
industry:
  - energy-utilities
business_function:
  - operations
  - research-development
deployment_stage: scaled-production
outcome: positive
evidence_grade: C
status: published
created: 2026-09-13
published: 2026-09-13
last_verified: 2026-09-13
next_review: 2027-03-13
geography:
  - United Kingdom
environment: production
deployment_pattern:
  - decision-support
causal_strength: descriptive
related_cases:
  - AAI-2026-012
  - AAI-2026-013
evidence_upgrade_path: "Grade B needs the measurement the project's own third success criterion demanded and did not deliver: an observed change in balancing costs and carbon attributable to the forecast, rather than a rule-of-thumb multiplication. Failing that, three cheaper things would each help — the underlying error series so the reported MAE improvements can be recomputed, an evaluation by a party that neither built nor commissioned the system, and the staff and training costs the published running-cost estimate explicitly excludes. Verification of the open-source claim would also strengthen the record; github.com is unreachable from this sandbox, so the code's existence, licence, and completeness were not checked here."
sources:
  - id: nia-closedown
    author: "National Energy System Operator"
    title: "NIA Project Close Down Report: Solar PV Nowcasting, NIA2_NGESO002"
    publisher: "National Energy System Operator, published under Ofgem's Network Innovation Allowance reporting obligations"
    published: 2026-01-01
    url: "https://www.neso.energy/document/375656/download"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - direct-evidence
      - participant-account
    source_family: nia2-ngeso002
    access: "The project's own record: four years of model development, the error figures measured against NESO's incumbent forecasts, the control-room deployment, the cost of each extension, and a net benefit statement."
    method: "A regulator-mandated close-down report. Network licensees must publish project progress information under the Network Innovation Allowance governance framework, which makes this a filing rather than a marketing document — but the measurements in it were taken by the parties that built the system, and the report carries a disclaimer stating that viewers should not place any reliance on its contents and should verify the information independently."
    conflicts: "Written by the funding licensee about a project it commissioned and part-designed, with its delivery partner. NIA funding is recovered from consumers through network charges, which gives a licensee an interest in reporting benefit. The disclaimer disowning reliance on the report's own contents is unusual enough to be worth weighing."
    corroboration: "None. No party outside NESO and Open Climate Fix has published a measurement of this service."
    accountability: "Published on the licensee's site with a project reference number, a submission date, a named contact, a stated funding mechanism, and itemised costs; also required to appear on the Smarter Networks Portal."
    notes: "Read in full, 8 pages. Source of the MAE figures, the extension costs, the lessons learnt, and the net benefit statement. The report states the project 'successfully met its primary objectives and key success criteria' while its third success criterion asked for a measured change in balancing costs and CO2 emissions that the report does not supply."
  - id: neso-project
    author: "National Energy System Operator"
    title: "PV Nowcasting — innovation project record, NIA2_NGESO002"
    publisher: "National Energy System Operator"
    published: 2025-09-01
    url: "https://www.neso.energy/about/innovation/our-innovation-projects/pv-nowcasting"
    accessed: 2026-09-13
    roles:
      - participant-account
    source_family: nia2-ngeso002
    access: "The project register entry: reference number, status, dates, funding mechanism, headline expenditure, collaborators, and a summary of outcomes and lessons."
    method: "A structured register entry rather than an evaluation. It restates the close-down report's outcomes in summary form."
    conflicts: "Same as above — the licensee's own record of its own project."
    corroboration: "Consistent with the close-down report on every figure they share."
    accountability: "Published in a searchable public register of innovation projects with a reference number and stated expenditure."
    notes: "Read in full. Source of the £500,000 headline expenditure, the September 2021 start and September 2025 proposed end, the 'Complete' status, and the identification of Open Climate Fix as the third-party collaborator. Its benefits field reads 'Not required.'"
  - id: ocf-feasibility
    author: "Open Climate Fix"
    title: "Solar PV Nowcasting Using Deep Learning: Feasibility of Running ML-powered PV Nowcasts in Real Time"
    publisher: "Open Climate Fix, project deliverable for NIA2_NGESO002"
    published: 2022-06-01
    url: "https://www.neso.energy/document/353531/download"
    accessed: 2026-09-13
    roles:
      - participant-account
      - analysis
    source_family: nia2-ngeso002
    access: "The delivery partner's own costing of the service it was building: data feed prices, cloud compute and storage estimates, and the operating assumptions behind them."
    method: "A feasibility report written midway through the project. The running costs are estimates produced with the AWS cost calculator against a then-current understanding of hardware requirements, assuming three environments with test and development sized at half of production. It states plainly that training costs and staff costs are excluded."
    conflicts: "Written by the supplier, about the service it was contracted to deliver, at a point when continued funding depended on feasibility being demonstrated."
    corroboration: "None. The costs are not restated or updated in the close-down report."
    accountability: "A named organisation's report published as a project deliverable through the licensee's document register, dated, with costs itemised by line."
    notes: "Read for the cost sections. Its figures are the only running-cost disclosure in this record, they are estimates rather than actuals, they date from June 2022, and they exclude the two largest likely cost lines."
tags:
  - solar-forecasting
  - grid-operations
  - deep-learning
  - cost-benefit
  - self-reported-evaluation
  - open-source
  - innovation-funding
---

## Case in one sentence

Britain's electricity system operator and a non-profit built a deep-learning solar forecast, ran it on a control-room screen for over two years, cut national forecast error by a documented margin — and monetised the benefit by multiplying a rule of thumb.

## Executive summary

Solar output is hard to predict and expensive to get wrong: an operator that cannot forecast it must hold more reserve generation, which costs money and carbon. In September 2021 National Grid ESO, now the National Energy System Operator, registered an innovation project to find out whether machine learning on satellite imagery could forecast it better. The partner was Open Climate Fix, a non-profit. The project reference is NIA2_NGESO002 and the funding mechanism is Ofgem's Network Innovation Allowance, which is recovered from consumers through network charges.[^neso-project]

The results on forecast error are specific and large. NESO's incumbent national solar forecast had a mean absolute error of 650 MW in 2021. The best model from the first work package brought that to 233 MW — a 64% improvement, described as 2.8 times better for horizons up to two hours. The second work package took the national error to 190 MW and halved the error at grid supply point level. A later version, PVNet 2.0, cut MAE by a further 29%.[^nia-closedown]

By the end of the third work package the service — branded Quartz — was running errors 38% and 39% below the two forecasts it was measured against, and the tail had shrunk more than the average: errors above 1 GW occurred on 23% of days with the incumbent PEF forecast and 5% of days with Quartz.[^nia-closedown]

It went into production. PVNet served 0–6 hour horizons, a blend covered 6–8 hours, and a gradient-boosted national model handled the rest. Availability exceeded 99.5%, the forecast sat on a large screen in the control room for over two years and was consulted daily by engineers, and the API is public and used by eight energy traders and smart home operators.[^nia-closedown]

The project cost £500,000, then £355,000, then £80,000, then £103,500 across three extensions — about £1.04m.[^neso-project][^nia-closedown] Running costs were estimated in 2022 at roughly £3,753 a month, excluding training and staff.[^ocf-feasibility]

And the benefits? The project's third success criterion was a "Measured change in balancing costs & CO2 emissions."[^nia-closedown] What the close-down report supplies instead is a rule of thumb from an internal planning annexe — reducing the daily demand forecast by 10 MW is worth about £20m a year — multiplied by an 8% error reduction to reach "over £40M per year", plus "up to £30 million" and "100,000s of Tonnes of CO2" projected from a backtest of a separate reserve-setting model. The report nonetheless records that the project "successfully met its primary objectives and key success criteria."[^nia-closedown]

## Research question

When a system operator can measure a model's accuracy precisely, what stops it measuring the money and carbon that accuracy was supposed to deliver?

## Organization and operating context

NESO is the public corporation responsible for operating Great Britain's electricity system, balancing supply and demand in real time. Its control room engineers decide how much reserve generation to hold, and that decision is priced: reserve held is generation paid for and often carbon burned.

Solar is the awkward case. Britain has around a million PV systems, most of them small and embedded in the distribution network rather than metered centrally, so the operator infers national solar output rather than reading it. Cloud moves faster than the half-hourly settlement period. A forecast that is wrong by a gigawatt is a real operational problem.

The Network Innovation Allowance is the funding route: licensees may recover a defined allowance for innovation projects from consumers, on condition that they register each project and publish its learning. That condition is what produces the documents this case rests on, and it is also what makes them a filing rather than a press release.

Open Climate Fix, the delivery partner, is a non-profit that develops open-source forecasting models.[^neso-project]

## The situation before AI

The baseline is stated numerically, which is rare enough to note: NESO's existing national solar PV forecast model had a mean absolute error of 650 MW in 2021.[^nia-closedown] Two other forecasts appear as comparators through the project — PEF, and the Balancing Mechanism Reporting Service forecast.[^nia-closedown]

The operational consequence of that error is the case's premise. The project summary states the hypothesis plainly: more accurate solar predictions would let the operator hold less spinning reserve, cutting emissions and cost and letting the grid absorb more solar.[^neso-project]

That hypothesis is what the third success criterion was written to test.

## The AI intervention or event

**Data.** Numerical weather predictions from the Met Office, satellite imagery from EUMETSAT, live PV output from pvoutput.org, and grid supply point output from PVLive — all landed into AWS storage by separate ingestion services.[^nia-closedown]

**Models.** Work package one trained four models and tested them against 2021 data after training on 2020. Work package two developed PVNet, a convolutional network, alongside a more experimental model called Power Perceiver; PVNet went to production. Work package three added a gradient-boosted national model that predicts the aggregate directly rather than summing grid supply point forecasts — motivated by a specific data quirk, that PVLive's national estimate does not equal the sum of its own GSP estimates. An extension added probabilistic forecasts across all horizons and extended the national forecast from 8 to 36 hours.[^nia-closedown]

**Architecture.** Microservices on AWS with infrastructure defined in Terraform, which the team credits with letting the production service run uninterrupted while new versions were tested elsewhere.[^nia-closedown]

**Operation.** Two models in production — PVNet for 0–6 hours, a blend for 6–8, a gradient-boosted model beyond. Over 99.5% availability. A user interface with a dashboard and probabilistic display, query times cut from 20 seconds to under one. Displayed on a control room screen for over two years and consulted daily.[^nia-closedown]

**What was researched and not deployed.** A fourth work package integrated weather ensembles, improving deterministic accuracy by 5% and reducing large errors by up to 12% — and was not integrated into the running service, which the report says would need further research.[^nia-closedown]

## Outcomes and economics

**Forecast accuracy**, all figures self-measured:[^nia-closedown]

| Measure | Value |
| --- | --- |
| NESO incumbent national forecast MAE, 2021 | 650 MW |
| Best model, end of work package 1 | 233 MW (64% better; 2.8x for horizons ≤2 hours) |
| Best model, end of work package 2 | 190 MW nationally; GSP error halved |
| PVNet 2.0 | further 29% MAE reduction |
| 4–8 hour GSP and national forecasts | ~30% improvement over the previous model |
| Quartz vs PEF and BMRS, end of work package 3 | 38% and 39% lower error |
| Days with errors above 1 GW | 23% with PEF, 5% with Quartz |
| Weather-ensemble research (not deployed) | +5% deterministic accuracy, large errors down up to 12% |
| Service availability | over 99.5% |

**Cost**, disclosed:

| Item | Amount |
| --- | --- |
| Original project | £500,000[^neso-project] |
| Extension for probabilistic forecasts (15 months) | £355,000[^nia-closedown] |
| Extension for dynamic reserve setting | £80,000[^nia-closedown] |
| Extension for weather ensembles (7 months) | £103,500[^nia-closedown] |
| **Total development** | **£1,038,500** |
| Running cost, estimated June 2022 | £1,090/month data + £2,663/month compute = £3,753/month[^ocf-feasibility] |

The running-cost estimate excludes training costs and staff costs, and its author says so.[^ocf-feasibility] Those are likely the two largest lines, so the true operating cost is unknown.

**Benefit**, estimated:[^nia-closedown]

- An internal planning annexe's rule of thumb holds that reducing the daily demand forecast by 10 MW yields around £20m a year. Quartz was found to reduce demand forecast error by 8% — "many tens of MW" — which the report converts to "over £40M per year."
- A backtest for a separate dynamic reserve setting project showed reserve reductions of almost 100 MW, from which the report projects "up to £30 million pounds and 100,000s of Tonnes of CO2 per year in savings."
- Beyond that, "benefits in carbon and cost which are hard to quantify."

This is the closest thing in the library to a case with both sides of the ledger, and the two sides are not of the same kind. The cost is itemised to the pound and disclosed by extension. The benefit is a rule of thumb multiplied by a measured error reduction, plus a projection from a backtest of a different model, expressed as "up to".

## Causal assessment and competing explanations

Labelled **descriptive**. The forecast-accuracy comparisons are measurements against named baselines and are the strongest part of the record; the benefit figures are extrapolations and are labelled as such below. Nothing here isolates the effect of the forecast on any operational outcome.

Three things sit between the accuracy result and the money.

**The rule of thumb is doing all the work.** "Reducing the daily demand forecast by 10 MW resulted in around a £20m reduction in annual costs" is a planning heuristic, applied here well outside a stated range of validity, to a quantity — demand forecast error — that is not the same as solar forecast error. The report's own phrasing, "many tens of MW", shows the input is approximate. Multiplying an approximate input by a heuristic constant does not produce a measurement, and the resulting £40m is not evidence of £40m.

**The reserve saving is a backtest of a different model.** The "up to 96 MW per settlement period" comes from the Dynamic Reserve Setting project, a separate NIA project into which Quartz forecasts were fed retrospectively.[^nia-closedown] Whether reserve settings actually changed in operation, and whether any cost or carbon was consequently avoided, is not reported.

**Control room use is not the same as control room effect.** The forecast was on a screen and consulted daily. The report says engineers "are making better decisions every day" and immediately concedes the benefits are "hard to quantify".[^nia-closedown] No decision-level measurement is offered, which is the one thing that would connect the accuracy to the outcome.

An alternative reading deserves stating: the measurement may be genuinely hard. Attributing a change in balancing cost to one input among many, in a system where prices, weather, plant availability, and demand all move, is a serious identification problem. That is a fair defence of why the number is missing. It is not a defence of writing an unmeasured number down as though it were measured, and it does not explain why a criterion demanding measurement was recorded as met.

## Failures, limitations, and governance

- **A success criterion asking for a measured change was met with an estimate.** Criterion three required a "Measured change in balancing costs & CO2 emissions"; the report records the criteria as met.[^nia-closedown]
- **The benefit is a chain of unshown steps.** Heuristic × error reduction → £40m; backtest → "up to £30m" and "100,000s of Tonnes"; the rest "hard to quantify".
- **Running costs exclude staff and training.** The only cost disclosure covers data feeds and cloud infrastructure, is an estimate from a calculator, and dates from 2022.[^ocf-feasibility]
- **The register's benefits field reads "Not required."**[^neso-project] Whatever the NIA governance reason, an innovation project justified by cost and carbon savings records no benefits assessment in its own register entry.
- **The best research result was not deployed.** Weather ensembles improved accuracy 5% and reduced large errors up to 12%, and remain unintegrated.[^nia-closedown]
- **Model size is becoming an operational constraint.** The team's own lesson is that large models are hard to productionise — compute, memory, latency, and operational overhead — which is a live limit on what the next iteration can be.[^nia-closedown]
- **Continuity was a problem the team names.** "Particularly high turnover at NESO forecasting team affected communication on the project."[^nia-closedown]
- **The report disowns itself.** Its disclaimer says viewers "should not place any reliance on any of the contents of this Report including (without limitation) any data, recommendations or conclusions."[^nia-closedown]
- **Outcomes contain material that cannot be disclosed.** The report notes confidential information and IP withheld for proprietary reasons.[^nia-closedown]

## What this case demonstrates

1. A national system operator moved a deep-learning forecast from prototype to daily control-room use in about four years, and published its error figures against a named incumbent baseline — a level of quantitative candour rare in this library.
2. Tail error matters more than average error in grid operations, and this project reported it: 1 GW errors on 23% of days versus 5%. Reporting the tail alongside the mean is a practice other cases should copy.
3. The measurable proxy improved and the outcome it stood for was never measured. That is the same shape as the missing error rates elsewhere in this library — the organisation measured what it could measure well.
4. Regulator-mandated innovation reporting produces genuinely useful artefacts. Project reference, costs by extension, lessons learnt, and named partners are all on the public record because a licence condition required them.
5. It also produces its own failure mode: a close-down report is written to close a project, and "successfully met its key success criteria" is what such documents say.
6. Disclosed cost without measured benefit is still worth publishing. £1.04m development and roughly £45,000 a year of infrastructure is a real number a reader can reason with, even when the return is an estimate.
7. Operational engineering dominates the lessons. Data cleaning, Terraform, microservices, data validation, security, leap years, and idle cloud storage costs occupy far more of the report than model architecture does.
8. A research result can be strong and still not ship. Ensembles improved accuracy and stayed out of production because integrating them needed work the project did not have left.

## What this case does not demonstrate

- It does not establish that the forecast saved £40m, £30m, or any amount. Those figures are extrapolations from a heuristic and a backtest.
- It does not establish any reduction in carbon emissions. The tonnage is projected, not observed.
- It does not show that reserve settings actually changed in operation.
- It does not independently establish the accuracy figures. Every one was measured by the parties who built the system, and the underlying error series is not published.
- It does not give the true operating cost, which excludes staff and training by the source's own statement.
- It does not verify the open-source claim. The report says the forecast was delivered "completely open and documented"; github.com is unreachable from this sandbox, so the code was not inspected.
- It does not show what the control room did differently. Daily consultation is recorded; changed decisions are not.
- It does not generalise to other system operators, other geographies, or other renewables.

## Evidence assessment

**Grade C — a regulator-mandated filing, which is a better class of self-report than most, and still one chain.**

What is good here is real. The close-down report gives a numbered project reference, itemised costs by extension, a named baseline with a starting MAE, comparisons against two independent incumbent forecasts, tail-error statistics as well as means, availability figures, and about three pages of operational lessons written with evident candour — including high staff turnover at the licensee and a frank note that large models are hard to productionise.[^nia-closedown] It exists because the Network Innovation Allowance obliges licensees to publish project learning, and an obligation to publish is a meaningfully different incentive from a decision to publish.

Four things hold it at C.

*One chain.* The close-down report, the project register entry, and the partner's feasibility report are all deliverables of NIA2_NGESO002. They agree because they are the same project describing itself. Nobody outside NESO and Open Climate Fix has measured this service, and the sources in the front matter should be read as one evidentiary chain, not three.

*The headline benefit is an extrapolation presented among measurements.* The £40m figure sits in a Net Benefit Statement alongside genuine error measurements, in the same register and without a change of tone. A reader skimming would not distinguish "MAE fell from 650 MW to 233 MW" from "over £40M per year", and only the first is a measurement.

*The success criterion and the conclusion do not match.* Criterion three asked for a measured change in balancing costs and CO2. The report supplies estimates and records the criteria as met.[^nia-closedown] This case records the discrepancy rather than resolving it: it is possible NESO judged the estimate sufficient, and it is possible the criterion was quietly relaxed, and the document does not say which.

*The report declines to stand behind itself.* Its disclaimer asks viewers not to rely on any of its data, recommendations, or conclusions and to verify independently.[^nia-closedown] That is boilerplate on many licensee publications, and it would be unfair to read it as an admission — but a case that rests almost entirely on one document should note that the document's author disclaims it, and that independent verification is exactly what is unavailable.

Two further limits. The running-cost figures are 2022 estimates from a cost calculator, excluding the two largest likely lines.[^ocf-feasibility] And there is a minor date inconsistency worth recording rather than smoothing: the register gives a September 2021 start and a September 2025 proposed end,[^neso-project] while the close-down report gives a duration of three years and nine months and a January 2026 submission.[^nia-closedown] Nothing turns on it.

On the `outcome` field: `positive` records the measured error reduction, which is substantial, specific, and compared against named baselines. It does not record the monetary or carbon benefit, which this case treats as unestablished. A reader who thought an unmeasured benefit against a disclosed £1.04m cost warranted `inconclusive` would have a reasonable argument, and the claim labels below carry that uncertainty explicitly.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| NESO's incumbent national solar forecast had an MAE of 650 MW in 2021. | Attributed | Stated in the close-down report as the baseline against which the project measured itself; not independently verifiable[^nia-closedown] | Publication of the incumbent forecast's error series |
| The best work-package-1 model reached 233 MW MAE, a 64% improvement. | Attributed | Measured by the project team, training on 2020 data and evaluating on 2021[^nia-closedown] | Release of the evaluation data, or an independent replication |
| By the end of work package 3, Quartz errors were 38% and 39% below PEF and BMRS. | Attributed | Reported in the net benefit statement; the comparison periods and conditions are not stated[^nia-closedown] | The underlying comparison series |
| Errors above 1 GW occurred on 23% of days with PEF and 5% with Quartz. | Attributed | Reported in the net benefit statement[^nia-closedown] | The underlying daily error record |
| The service ran in production above 99.5% availability and was consulted daily by control room engineers for over two years. | Attributed | Stated in the outcomes and net benefit statement[^nia-closedown] | Operational monitoring records, or control-room testimony |
| The project cost about £1.04m in total. | Supported | £500,000 in the register plus £355,000, £80,000 and £103,500 of extensions itemised in the close-down report; both are the licensee's own figures, but NIA expenditure is a regulated disclosure[^neso-project][^nia-closedown] | An Ofgem or audit restatement |
| Running costs were about £3,753 per month for data and infrastructure. | Attributed | An estimate produced with the AWS cost calculator in June 2022, explicitly excluding training and staff costs[^ocf-feasibility] | Actual invoiced costs, or an updated estimate including staff |
| The true operating cost of the service. | Unknown | The only disclosure excludes the two largest likely lines and is four years old[^ocf-feasibility] | A full cost disclosure |
| The forecast delivers over £40m a year in reduced costs. | Attributed | An internal planning rule of thumb, that 10 MW of demand forecast reduction is worth about £20m a year, multiplied by an 8% error reduction described as "many tens of MW"[^nia-closedown] | An observed change in balancing costs attributable to the forecast |
| The forecast will deliver up to £30m a year and hundreds of thousands of tonnes of CO2 through dynamic reserve setting. | Attributed | Projected from a backtest of a separate NIA project's reserve-setting model, stated as "up to" and in future tense[^nia-closedown] | Measured reserve settings and costs before and after operational deployment |
| Any change in balancing costs or carbon emissions was measured. | Unknown | The project's third success criterion required it; the report supplies estimates and records the criteria as met[^nia-closedown] | Publication of the measurement, or an acknowledgement that it was not made |
| Weather-ensemble methods improved deterministic accuracy by 5% and reduced large errors by up to 12%. | Attributed | Reported from the fourth work package's research; not integrated into the running service[^nia-closedown] | Integration and operational measurement |
| The forecast and its code were delivered fully open. | Attributed | Stated in the close-down report; github.com is unreachable from this sandbox so the repository, its licence, and its completeness were not inspected[^nia-closedown] | Inspection of the published code and licence |
| The service is used by eight energy traders and smart home operators. | Attributed | Stated in the net benefit statement with no supporting detail[^nia-closedown] | API usage records, or statements from the users |

## Direct quotations

> “NESO's existing national solar PV forecasts model in 2021 had a Mean Absolute Error (MAE) of 650 MW. The best national PV forecasts developed in this WP had a MAE of 233 MW an improvement of 64%.”

— National Energy System Operator, on the result of the first work package[^nia-closedown] · locator: Close Down Report, "Performance Compared to the Original Project Aims", WP1 – Design

> “Measured change in balancing costs & CO2 emissions. User satisfaction. Identified next steps to apply agile/CI/CD to a future NGESO project.”

— The project's third success criterion, as registered[^nia-closedown] · locator: Close Down Report, Success Criteria, item 3

> “Using a rule of thumb method from ESO: Forward Plan Technical Annexe, reducing the daily demand forecast by 10 MW resulted in around a £20m reduction in annual costs. Using Quartz forecast was found to reduce the demand forecast error using the NESO model by 8%, or many tens of MW, or over £40M per year.”

— The net benefit statement, in place of the measured change the criterion asked for[^nia-closedown] · locator: Close Down Report, Net Benefit Statement, third paragraph

> “Control Room Engineers are making better decisions every day with this improved solar forecast, which will have multiple benefits in carbon and cost which are hard to quantify.”

— National Energy System Operator[^nia-closedown] · locator: Close Down Report, Net Benefit Statement, final paragraph

> “Large Machine Learning models are harder to productionise: Large Machine Learning models proved to be difficult to productionise due to their substantial requirements for compute, memory, latency and operational overhead which increase deployment cost and system complexity.”

— A lesson recorded from work package 3[^nia-closedown] · locator: Close Down Report, Lessons Learnt, WP3 and WP1 extension, item 2

> “The Report provided is for information only and viewers of the Report should not place any reliance on any of the contents of this Report including (without limitation) any data, recommendations or conclusions and should take all appropriate steps to verify this information before acting upon it and rely on their own information.”

— The disclaimer printed inside the report this case principally relies on[^nia-closedown] · locator: Close Down Report, "Performance Compared to the Original Project Aims", preamble

> “These costs are estimates made using our current understanding of the hardware requirements and using the AWS costs calculator.”

— Open Climate Fix, on the only running-cost figures in the record[^ocf-feasibility] · locator: Feasibility report, "Inference and Presentation Computing costs", following Table 3

## Revision notes

- 2026-09-13 — Initial publication at Grade C. The library's first `energy-utilities` case, and the closest it has to a case with both sides of a cost-benefit ledger — which is why the asymmetry between the two sides is the case's subject rather than a footnote: £1,038,500 of disclosed development cost against a benefit derived by multiplying a planning rule of thumb. Held at C because the three sources are deliverables of one project describing itself, notwithstanding that Network Innovation Allowance reporting is a licence obligation rather than voluntary publicity, which makes it a better class of self-report than a blog post. Records the discrepancy between a success criterion demanding a "Measured change in balancing costs & CO2 emissions" and a close-down report that supplies estimates while recording the criteria as met, without resolving which of the two possible explanations applies. `outcome: positive` records the measured error reduction and not the monetary claims, and the evidence assessment says a reader preferring `inconclusive` would have a reasonable argument. The open-source claim could not be checked because github.com returns 403 from this sandbox. Related to AAI-2026-012 and AAI-2026-013 as the third self-reported deployment in the library, and to the methodology's new section on measuring the proxy rather than the outcome.

[^nia-closedown]: National Energy System Operator, [“NIA Project Close Down Report: Solar PV Nowcasting, NIA2_NGESO002”](https://www.neso.energy/document/375656/download), submitted January 2026, published under Ofgem Network Innovation Allowance reporting obligations.

[^neso-project]: National Energy System Operator, [“PV Nowcasting” innovation project record, NIA2_NGESO002](https://www.neso.energy/about/innovation/our-innovation-projects/pv-nowcasting), project completed September 2025.

[^ocf-feasibility]: Open Climate Fix, [“Solar PV Nowcasting Using Deep Learning: Feasibility of Running ML-powered PV Nowcasts in Real Time”](https://www.neso.energy/document/353531/download), June 2022, project deliverable for NIA2_NGESO002.
