---
case_id: AAI-2026-013
title: "Fifteen leaks out of sixteen, and no count of the false alarms"
summary: "Seagate engineers deployed an unsupervised anomaly detector across thousands of vacuum stations in its disk-media factories, catching 15 of 16 leaks in half a fiscal year and claiming savings in the millions. They published the architecture in detail, the recall figure once, and the false-positive rate never."
organization:
  - Seagate Technology Holdings plc
case_type: deployment
secondary_case_types:
  - evaluation
industry:
  - manufacturing
business_function:
  - operations
deployment_stage: scaled-production
outcome: positive
evidence_grade: C
status: published
created: 2026-09-13
published: 2026-09-13
last_verified: 2026-09-13
next_review: 2027-03-13
geography:
  - United States
  - Singapore
environment: production
deployment_pattern:
  - decision-support
  - human-in-the-loop-workflow
causal_strength: descriptive
related_cases:
  - AAI-2026-006
  - AAI-2026-012
evidence_upgrade_path: "Grade B needs the other half of the confusion matrix: how many alerts fired above the 85% threshold, how many were confirmed leaks on physical inspection, and how the denominator of 16 known leaks was established. Beyond that, a comparison against the rule-based algorithms the system replaced would show whether the 15-of-16 result is an improvement or a restatement; a derivation of the savings figure would make the economic claim checkable; and a second site, a second reporting period, or any account by someone who did not build the system would supply the corroboration this record entirely lacks."
sources:
  - id: seagate-paper
    author: "Siddarth Reddy Karuka, Abhinav Sunderrajan, Zheng Zheng, Yong Woon Tiean, Ganesh Nagappan, and Allan Luk"
    title: "Machine Learning in High Volume Media Manufacturing"
    publisher: "arXiv:2407.08933 [cs.LG]"
    published: 2024-07-12
    url: "https://arxiv.org/abs/2407.08933"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - direct-evidence
      - participant-account
    source_family: seagate-arxiv
    access: "The engineers' own production system: pressure-cycle data from thousands of sputter stations across hundreds of machines in Seagate's media factories, the deployment infrastructure they built, and the leak outcomes confirmed by the sputter team on physical inspection."
    method: "Described in unusual detail for a corporate deployment paper. An unsupervised pipeline combining dynamic time warping, principal component analysis, and DBSCAN density-based clustering, wrapped in a rule-based flowchart that encodes the sputter team's domain knowledge about process and non-process stations. Baselines are built per station, outliers removed, and cluster entropy converted to a leak probability; a second feature set separates genuine leaks from sensor drift. Results are reported for the second half of fiscal 2022 as a count of leaks caught against leaks known."
    conflicts: "Written by the team that built the system, about the system it built, and published by the company that benefits from the result. Several figures are marked 'details modified or withheld intentionally', so the feature definitions cannot be reproduced. Five of the six authors are marked as no longer at Seagate at the time of publication."
    corroboration: "None for the results. Seagate's audited annual report independently confirms that machine learning is embedded in its manufacturing operations, but at a different production stage and with no reference to this system."
    accountability: "Six named authors with named sites, a corresponding author with a company email address, a stable arXiv identifier and DOI. It is a preprint at version 1 with no journal reference and no indication of peer review."
    notes: "Read in full, all 13 pages. It reports recall — 15 of 16 leaks caught — and never reports how many alerts fired or how many were false. The savings claim is given as an order of magnitude with no derivation."
  - id: seagate-10k
    author: "Seagate Technology Holdings plc"
    title: "Annual Report on Form 10-K for the fiscal year ended July 1, 2022"
    publisher: "U.S. Securities and Exchange Commission (EDGAR)"
    published: 2022-08-05
    url: "https://www.sec.gov/Archives/edgar/data/1137789/000113778922000055/stx-20220701.htm"
    accessed: 2026-09-13
    roles:
      - direct-evidence
    source_family: seagate-sec
    access: "The company's own audited accounts and business description for the exact fiscal year in which the reported result occurred."
    method: "Audited annual report filed under the Securities Exchange Act, prepared under US GAAP with officer certifications and independent audit."
    conflicts: "The company describing its own business, though under securities-law liability for material misstatement."
    corroboration: "Confirms the operating context — scale, manufacturing footprint, and that machine learning forms part of Seagate's production process — without confirming anything about the leak detector."
    accountability: "Filed with the SEC under officer certifications, retrievable from EDGAR by accession number, independently audited."
    notes: "Read by targeted search for revenue, manufacturing footprint, machine learning, scrap, and yield. Source of the FY2022 figures used here to size the paper's savings claim. It discloses no scrap rate and no yield figure, so the claim cannot be checked against it — only contextualised."
tags:
  - anomaly-detection
  - predictive-maintenance
  - unsupervised-learning
  - manufacturing
  - false-positives
  - dbscan
  - self-reported-evaluation
---

## Case in one sentence

Seagate engineers built an unsupervised leak detector for the vacuum chambers in its disk-media factories, ran it across thousands of stations, reported catching 15 of the 16 leaks that occurred in half a fiscal year, and published neither the number of false alarms it raised nor any working for the millions of dollars it says the system saved.

## Executive summary

Hard-disk media are made by sputtering thin films onto disks that travel through a machine of sequential stations, each held at high vacuum behind slot valves. When a valve degrades, air leaks in. The result is wasted raw material and degraded disks that damage the quality of everything built from them.[^seagate-paper]

The detection problem is one of scale. Each station has its own characteristic pressure profile, so a generic detector confuses them; and with hundreds of machines carrying tens of stations each, there are thousands of stations to watch. Seagate had rule-based algorithms and found they adapted poorly to design changes and daily variation.[^seagate-paper]

The replacement is a hybrid. Unsupervised learning — dynamic time warping, principal component analysis, and DBSCAN clustering — sits at the decision nodes of a rule-based flowchart that encodes what the sputter team knows about how process and non-process stations behave. It builds a baseline per station, compares current pressure cycles against it, and converts the entropy of the resulting clusters into a leak probability. A second feature set then separates a real leak from a drifting sensor. Above 85% probability, an email goes to the sputter team, who verify it physically.[^seagate-paper]

Because the model is unsupervised there is nothing to persist between runs: the probability is computed from scratch every iteration, which is why the deployment uses only the inference half of Seagate's ML infrastructure. It runs on Kubernetes under Rancher, orchestrated by five Apache Airflow pipelines, with worker pods scaling between 8 and 32.[^seagate-paper]

The reported result is a single number: 15 of 16 leaks caught in the second half of FY2022, with avoided scrap "on the order of millions of dollars per year".[^seagate-paper]

Seagate's audited accounts for that same fiscal year show revenue of approximately $11.7 billion and net income of $1.6 billion.[^seagate-10k] Millions of dollars, at that scale, is not a financial argument. It is an operational one.

## Research question

What does a real machine-learning deployment on a factory floor actually consist of — and what does even a detailed engineering account leave out?

## Organization and operating context

Seagate Technology Holdings plc makes data storage devices. In fiscal 2022 it shipped 631 exabytes of hard-disk capacity, generated approximately $11.7 billion in revenue at a 30% gross margin, and earned $1.6 billion in net income.[^seagate-10k] Its manufacturing runs across China, Malaysia, Northern Ireland, Singapore, Thailand, and the United States.[^seagate-10k]

The paper's authors are based at Bloomington, Minnesota; Longmont, Colorado; and two Singapore sites, Shugart and Woodlands.[^seagate-paper]

Machine learning is not new to Seagate's factories, and the company says so in its audited filing: completed drives go "through extensive defect mapping and machine learning prior to packaging and shipment", at facilities in China and Thailand.[^seagate-10k] That is a different production stage from the media sputtering described here, but it establishes that the deployment in this case sits inside an organisation already running ML in production, not at the start of one.

## The situation before AI

Leak detection was already automated, and already inadequate. The paper's account of the prior state is that "various rule-based algorithms have been developed over the years", that catching failures with them "is time consuming", and that "such algorithms cannot adapt well to changes in designs, and sometimes variations in everyday behavior."[^seagate-paper]

Two structural problems drove the replacement. Pressure profiles differ enough between stations to confuse a generic algorithm, so a per-station approach is needed; and hand-developing a per-station algorithm across thousands of stations is not feasible.[^seagate-paper]

What the prior algorithms actually achieved is never stated. No detection rate, no false-alarm rate, no time-to-detection for the system being replaced appears anywhere in the paper — which means the improvement is asserted rather than measured.

## The AI intervention or event

**The detector.** A cycle is the pressure profile of one station between a slot valve closing and opening — one disk's time in one process. The system builds a baseline of good cycles per station, removes outliers, and extracts a first feature set describing pressure rise. Dynamic time warping, PCA, and DBSCAN produce clusters; the entropy of those clusters — how far the test data has spread from the baseline — becomes a leak probability.[^seagate-paper]

The flowchart then branches on that probability, and this is where domain knowledge enters. If the probability is high, a second feature set describing cycle amplitude and point-to-point noise distinguishes a genuine leak from a sensor drift. If it is low, the rules ask whether the station is a process or non-process station: the sputter team's knowledge is that a process station shows a rise in pressure *minimum* during a leak, so the absence of one clears it, while a non-process station can leak with the minimum unchanged and needs the amplitude check anyway.[^seagate-paper]

Every case lands in one of three buckets — leak, drift, or sensor issue — and clean stations are recorded as sensor issues at very low probability.[^seagate-paper]

**The threshold and the human.** At 85% the system emails the sputter team. The alert carries the machine and station, the pressure difference, the probability, the station type and function, and two plots: the pressure profile from baseline to alert, and a direct comparison of baseline against test cycles. An engineer then verifies the leak experimentally.[^seagate-paper] The system never acts on the line.

**The deployment.** This is the part the paper documents best, and it is the part most engineering write-ups skip. Microservices on Kubernetes managed by Rancher, with CI/CD from Seagate's GitLab so that new versions start up while old ones terminate gracefully without disturbing running analyses. Apache Airflow schedules five pipelines: fetch data, build baseline, leak analysis, email leak report, maintain log database. Machine status comes from a Hadoop media data lake via FastAPI; Redis queues the work; worker pods scale between 8 and 32 and process stations in parallel. Results land in the data lake and on an OpenSearch dashboard showing probable leaks caught in the last seven days.[^seagate-paper]

The hardware is split between an HPE Apollo 6500 with eight Nvidia V100 GPUs for training, Seagate Nytro flash for storage, and an HPE Edgeline 4000 with four Nvidia P4 GPUs for inference. Only the inference half is used, because an unsupervised detector has no trained model to store — the leak probability is recomputed from the ground up on every run.[^seagate-paper] Servers are spread across physical locations so the program can move between them.

**Extensibility.** A new machine, whatever its station count, joins by being added to a file the Airflow service reads.[^seagate-paper]

## Outcomes and economics

| Measure | Reported |
| --- | --- |
| Leaks caught | 15 of 16, in the second half of FY2022 |
| Alert threshold | 85% leak probability |
| Example alert probability | 93% |
| Stations covered | thousands, across hundreds of machines |
| Avoided scrap | "approximately tens of thousands" of scrapped or defective media |
| Savings | "on the order of millions of dollars per year" |
| False alerts | not reported |
| Prior system's performance | not reported |
| Cost of the system | not reported |

All from the paper.[^seagate-paper]

The savings figure is a chain of three estimates: leaks caught, media that would have been scrapped at manufacturing speed, and dollars. None of the three links is shown. The paper gives no scrap cost per disk, no production rate, and no derivation.

Seagate's own audited filing for the same fiscal year discloses no scrap rate and no yield figure,[^seagate-10k] so the claim cannot be checked against the accounts either. What the filing does supply is scale: against $11.7 billion of revenue and $1.6 billion of net income, savings "on the order of millions" amount to something between roughly 0.01% and 0.1% of revenue.[^seagate-10k]

That is worth stating plainly because it reframes the case. Read as a financial argument, the deployment is immaterial. Read as an operational one — thousands of stations monitored continuously by a system that adapts to new equipment without new code, replacing rules that could not — it is substantial. The paper makes the financial claim; the filing shows why the operational claim is the stronger one.

## Causal assessment and competing explanations

Labelled **descriptive**. The paper documents a system and reports one outcome measure over one period. There is no control, no comparison against the prior algorithms, and no analysis separating the detector's contribution from anything else that changed on the factory floor in the second half of FY2022.

Two competing explanations sit unexamined in the record.

**The leaks might have been found anyway.** The paper does not say how long detection took before the system, nor how the 16 known leaks were established as the denominator. If a leak is eventually discovered by any means — a maintenance cycle, a quality excursion downstream — then catching 15 of 16 *first* is a statement about timing, and the value is in the interval saved rather than the detection. The paper's economic claim depends entirely on that interval and never quantifies it.

**The result may reflect an easy period.** One half of one fiscal year with 16 events is a small sample. Sixteen is the count of leaks; the count of alerts is unstated, so the reader cannot tell whether the system flagged 17 things and got 15 right, or flagged 400.

That second gap is the one that matters most, and it is structurally identical to the failure this library documented in a hospital: a vendor sepsis model whose reported sensitivity was published while its positive predictive value was not, leaving buyers unable to judge alert burden. Here a manufacturer publishes its recall and withholds its precision. Different industry, same missing number, same consequence — the reader cannot compute what the system costs the people who receive its alerts.

## Failures, limitations, and governance

- **Precision is never reported.** Recall is 15/16. The number of alerts, the number confirmed, and therefore the false-alarm burden on the sputter team are absent.
- **The baseline is missing.** Prior rule-based algorithms are described as inadequate, with no figure for what they caught.
- **The economics are an order of magnitude with no working.** Three inferential steps from leaks to dollars, none shown, and no cost of building or running the system against which to net it.
- **The denominator is unexplained.** How the 16 known leaks were established, and whether leaks the system missed *and* nobody else found could be in that count, is not addressed.
- **Key details are withheld.** Four figures carry the note "details modified or withheld intentionally", so the feature sets cannot be reproduced or audited.
- **The threshold is a bare number.** 85% is stated as the current setting with no account of how it was chosen or what it trades away — the same decision that, in this library's sepsis case, halved a model's sensitivity when a committee moved it.
- **Nothing about monitoring the monitor.** No drift detection on the detector, no periodic revalidation, no process for noticing that it has stopped working.
- **Five of the six authors had left the company by publication.** The paper says nothing about who maintains a bespoke production system afterwards, and the record offers no evidence either way.
- **One period, one process, one company, one document.** No second site, no second half-year, no external account.

## What this case demonstrates

1. A production ML deployment is mostly not the model. The detector is a page; the orchestration, scaling, CI/CD, alerting, and dashboards are most of the paper, and that ratio is the realistic one.
2. Unsupervised learning has architectural consequences. With no trained artefact to persist, the system recomputes from scratch each run and uses only inference infrastructure — a concrete design decision that follows from the modelling choice.
3. Domain knowledge and machine learning composed rather than competed. The sputter team's rule about pressure minima in process stations is a branch in the flowchart; the clustering sits at the nodes.
4. Scale was the reason for the ML, not accuracy. The stated problem is thousands of stations each needing per-station treatment, which is infeasible by hand — not that rules were too inaccurate in principle.
5. Extensibility can be designed in cheaply. New machines join by being added to a file, which matters more in a factory that keeps installing equipment than any accuracy metric.
6. The human stayed in the loop by design. The system emails a probability and evidence; an engineer verifies physically; nothing on the line is actuated.
7. Published recall without published precision is not confined to healthcare vendors. It appears here in an engineering paper written by the deploying team with nothing obvious to hide.
8. "Millions of dollars per year" can be simultaneously true and immaterial. Against this company's accounts it is a rounding error, which means the case for the system has to be made on operations, not on the P&L.

## What this case does not demonstrate

- It does not establish the system's precision, its false-alarm rate, or the workload it imposes on the engineers who receive alerts.
- It does not show the system outperformed what it replaced. No figure for the prior algorithms exists in the record.
- It does not substantiate the savings. Neither the paper nor the audited accounts contain a scrap rate, a production rate, or a cost per disk.
- It does not show the deployment was worth its cost, because no cost is given.
- It does not generalise beyond disk-media sputtering at one company in one half-year.
- It does not report anything about the system after mid-2024, when the paper appeared. Whether it still runs is unknown.
- It does not describe harm or failure. No missed-leak consequence is analysed, including the one leak in sixteen that was missed.
- It does not tell you whether the 85% threshold is well chosen, because no sensitivity analysis around it is offered.

## Evidence assessment

**Grade C — a detailed, credible, entirely self-reported account with the decisive number missing.**

The engineering content is genuinely good. The method is specified to the level of named algorithms and feature-set purposes, the deployment stack is described component by component down to GPU models, the decision logic is drawn as a flowchart, and the alert format is reproduced. Six authors are named with sites and a corresponding company email. Little in this library documents *how* a system was built this well.

Three things put it at C rather than B.

*It is a preprint by the deploying team, uncorroborated.* Version 1 on arXiv, no journal reference, no indication of peer review. Every result is the builders' own, about their own system, and nobody outside has measured it. The second source here is Seagate's own audited annual report, which confirms scale and confirms that machine learning runs in Seagate's manufacturing — but at a different production stage, with no reference to this system.[^seagate-10k] It is context, not corroboration, and the two source families in the front matter should not be read as two evidentiary chains: they are one company describing itself in two registers.

*The reported metric is half a metric.* Fifteen of sixteen is recall. Without the alert count and the confirmed-leak count, precision is unknown, and for an alerting system that fires into a human workflow, precision is what determines whether it helps or becomes noise. This is not a quibble about statistical completeness; it is the number the sputter team would need to decide whether to keep trusting the emails.

*The economic claim is unfalsifiable as published.* "Tens of thousands" of media and "millions of dollars per year" are order-of-magnitude assertions with no derivation, no unit cost, and no system cost to net against. Seagate's filing discloses no scrap or yield data that would allow a check.[^seagate-10k]

Conflicts are ordinary and disclosed by the document itself. The authors built the system; the company benefits from the result; four figures are explicitly redacted for commercial reasons, which is understandable and does make the features unauditable. Five of six authors are marked as no longer at Seagate, which this case notes as a fact on the paper's face and reads nothing into.

One editorial note belongs here. This case was written after a deliberate search for a well-evidenced manufacturing AI deployment, and this is the best one found. That is itself a finding worth recording: the published evidence base for AI in manufacturing is dominated by vendor material and by systematic reviews of studies that never reached production, and an honest self-report from a named engineering team is, by comparison, unusually strong — while still landing at grade C. Readers should weigh manufacturing AI claims against that background.

The `outcome` field records `positive`, which is a judgment call. The system did what it was built to do on the one metric reported, and no downside is documented anywhere in the record. But "no downside documented" is a consequence of the missing precision figure rather than evidence of its absence, and a reader who preferred `inconclusive` would have a fair argument.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| The system detected 15 of 16 leaks in the second half of FY2022. | Attributed | Stated once in the results section by the engineers who built it, with no supporting table and no external confirmation[^seagate-paper] | Publication of the underlying alert and confirmation records, or any second party's account |
| The system covers thousands of stations across hundreds of machines. | Supported | Consistently described throughout the paper as the design constraint the architecture solves, with worker pods scaling to match[^seagate-paper] | Evidence the deployment was narrower than described |
| It combines unsupervised clustering with rule-based domain logic. | Verified | The method is specified in detail — DTW, PCA, DBSCAN, entropy-to-probability, two feature sets, and a documented decision flowchart[^seagate-paper] | A correction to the method description |
| Alerts fire above an 85% probability threshold and are verified physically by engineers. | Verified | Stated in the method and shown in the reproduced alert format, with an example at 93%[^seagate-paper] | A change of threshold or process, which the paper's own wording ("currently at 85 percent") anticipates |
| The system avoided scrap worth millions of dollars per year. | Attributed | An order-of-magnitude claim by the deploying team, resting on three undisclosed inferential steps; the company's audited accounts disclose no scrap or yield data against which to check it[^seagate-paper][^seagate-10k] | A derivation with unit costs and production rates, or a disclosed scrap figure |
| The system's false-alarm rate. | Unknown | Never reported. The paper gives leaks caught and not alerts raised[^seagate-paper] | Publication of the alert count and confirmation rate |
| The system outperformed the rule-based algorithms it replaced. | Unknown | Prior algorithms are described as slow and poorly adaptive, with no performance figure given for them[^seagate-paper] | Any reported detection or false-alarm rate for the prior approach |
| Seagate embeds machine learning in its manufacturing operations. | Verified | Stated in the audited annual report: completed drives undergo "extensive defect mapping and machine learning prior to packaging and shipment"[^seagate-10k] | A restatement of the filing |
| Seagate had FY2022 revenue of approximately $11.7 billion and net income of $1.6 billion. | Verified | Audited annual report for the fiscal year ended 1 July 2022[^seagate-10k] | A restatement |
| The claimed savings are immaterial at company scale. | Inference | Derived by placing the paper's "millions per year" against the filing's $11.7bn revenue and $1.6bn net income — roughly 0.01% to 0.1% of revenue[^seagate-paper][^seagate-10k] | A savings figure an order of magnitude larger than the paper claims |
| The deployment was worth its cost. | Unknown | No development, infrastructure, or maintenance cost appears in any source | Disclosure of programme cost alongside a defensible savings derivation |
| The system was still running after mid-2024. | Unknown | The paper is a single version published July 2024 and no later source was found | A subsequent publication, filing, or statement |

## Direct quotations

> “Overall, in the time that our program was running in the past few months, we were able to catch 15 of 16 leaks in the second half of FY22. Based on the manufacturing speed of the media, these detections would generally result in avoidance of approximately tens of thousands scrapped or defective media, which leads to savings on the order of millions of dollars per year.”

— Karuka, Sunderrajan, Zheng, Tiean, Nagappan, and Luk, the entire reported result of the deployment[^seagate-paper] · locator: Section 3, Results, final paragraph, page 11

> “However, catching these failures is time consuming and such algorithms cannot adapt well to changes in designs, and sometimes variations in everyday behavior.”

— Karuka and colleagues, on the rule-based systems the deployment replaced[^seagate-paper] · locator: Abstract, second sentence

> “Based on a threshold set, currently at 85 percent, a notification is sent out to the sputter team if the final leak probability exceeds this set threshold, who can then experimentally verify such a leak.”

— Karuka and colleagues, on where the system stops and a person starts[^seagate-paper] · locator: Section 2.2, final paragraph, page 7

> “For deployment of our program on this platform, we only use the inference component, as our unsupervised anomaly detection model does not allow us to have a trained model, but rather compute the leak probability from ground up at every iteration.”

— Karuka and colleagues, on the architectural consequence of choosing an unsupervised method[^seagate-paper] · locator: Section 2.3, Deployment, page 8

> “Following the completion of the head disk assembly, it is mated to the PCBA, and the completed unit goes through extensive defect mapping and machine learning prior to packaging and shipment.”

— Seagate Technology Holdings plc, in its audited annual report[^seagate-10k] · locator: Part I, Item 1, Business, "Disk Drive Assembly"

> “During fiscal year 2022, we shipped 631 exabytes of HDD storage capacity. We generated revenue of approximately $11.7 billion with a gross margin of 30%, net income of $1.6 billion, diluted EPS of $7.36”

— Seagate Technology Holdings plc[^seagate-10k] · locator: Part II, Item 7, Management's Discussion and Analysis, fiscal 2022 overview

## Revision notes

- 2026-09-13 — Initial publication at Grade C. The library's first manufacturing case, written after a deliberate search in which almost everything available was vendor material or systematic reviews of studies that never reached production; that scarcity is recorded in the evidence assessment because it should colour how readers weigh manufacturing AI claims generally. Held at C because the account is an unreviewed preprint by the deploying team, uncorroborated by anyone outside it, reporting recall without precision and savings without derivation. The Seagate 10-K is cited for operating context and for sizing the savings claim, and is explicitly not a second evidentiary chain — it is the same company in a different register. `outcome: positive` is flagged in the evidence assessment as a judgment call, since the absence of documented downside follows from the missing false-alarm rate rather than from evidence there was none. Related to AAI-2026-006 by structure rather than subject: a hospital case where a vendor published sensitivity and withheld positive predictive value, and a factory case where engineers published recall and withheld precision.

[^seagate-paper]: Siddarth Reddy Karuka, Abhinav Sunderrajan, Zheng Zheng, Yong Woon Tiean, Ganesh Nagappan, and Allan Luk, [“Machine Learning in High Volume Media Manufacturing”](https://arxiv.org/abs/2407.08933), arXiv:2407.08933 [cs.LG], 2024-07-12, preprint, v1, no journal reference.

[^seagate-10k]: Seagate Technology Holdings plc, [Annual Report on Form 10-K for the fiscal year ended July 1, 2022](https://www.sec.gov/Archives/edgar/data/1137789/000113778922000055/stx-20220701.htm), filed 2022-08-05, SEC accession 0001137789-22-000055.
