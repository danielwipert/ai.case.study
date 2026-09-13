---
case_id: AAI-2026-009
title: "Three neutral criteria and eleven years of home visits"
summary: "The Dutch student finance agency scored every grant recipient for fraud risk using age, type of education, and distance to the parental address. Over eleven years the profile sent inspectors disproportionately to students with a non-European migration background; the data protection regulator found the scoring itself unlawful, and the state set aside €80 million to compensate roughly 25,000 people."
organization:
  - Dienst Uitvoering Onderwijs (DUO)
  - Ministerie van Onderwijs, Cultuur en Wetenschap
  - Autoriteit Persoonsgegevens
case_type: failure-incident
secondary_case_types:
  - governance-regulatory
  - deployment
industry:
  - public-sector
business_function:
  - operations
  - legal-compliance
deployment_stage: retired
outcome: negative
evidence_grade: A
status: published
created: 2026-09-13
published: 2026-09-13
last_verified: 2026-09-13
next_review: 2027-03-13
geography:
  - Netherlands
environment: production
deployment_pattern:
  - decision-support
  - human-in-the-loop-workflow
causal_strength: plausibly-causal
related_cases:
  - AAI-2026-005
evidence_upgrade_path: "At grade A the question is what would still strengthen the record or force a downgrade. Strengthening: release of the risk profile's actual scoring weights and thresholds, which no published source states; the individual-level data behind the aggregate CBS statistics, allowing the manual-selection step to be modelled rather than measured as a ratio; and the ministerial letter of April 2026, which this case reaches only through press reporting. Forcing a downgrade: a successful legal challenge to the regulator's finding, or evidence that the CBS aggregation misclassified origin at a scale that moves the measured ratios."
sources:
  - id: ap-report
    author: "Autoriteit Persoonsgegevens"
    title: "Onderzoeksrapport DUO: Gebruik van geautomatiseerde risicoclassificering op basis van een risicoprofiel bij Controleproces Uitwonende Beurs (CUB)"
    publisher: "Autoriteit Persoonsgegevens"
    published: 2024-11-01
    url: "https://www.autoriteitpersoonsgegevens.nl/documenten/onderzoeksrapport-fraudeaanpak-duo"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - direct-evidence
    source_family: ap-investigation
    access: "On-site inspection at DUO's Groningen offices on 5, 6, and 7 July 2023, at which the regulator's inspectors were shown the risk profile and its risk factors directly, questioned staff who ran the fraud checks and their managers, questioned staff of the Enforcement and Inspection department who chose which students received home visits, and formally demanded documents on the profile's operation and origin."
    method: "Statutory supervisory investigation under the GDPR, assessing the processing against the lawfulness principle and against the non-discrimination provisions of Article 21 of the Charter, Article 14 ECHR, and Article 1 of the Dutch constitution. The regulator inspected the algorithm itself rather than inferring its behaviour from outputs."
    conflicts: "None disclosed. The regulator has an institutional interest in establishing that risk profiling requires prior justification, and says so openly: the report states it is also intended to give direction to every government body that selects people by risk profile."
    corroboration: "Its factual account of the three risk factors matches PwC's independently, and it adopts Algorithm Audit's measured disparity by name. Its legal conclusion is its own and is corroborated by nobody."
    accountability: "Published under the regulator's own name with document references to the case file, on a permanent URL in the regulator's document register."
    notes: "Read in full for this case, in Dutch, from the PDF. It is an investigation report, not a sanction decision: it records a breach and imposes no fine. Two internal inconsistencies are recorded in the evidence assessment below — a shift between 'direct discrimination' in the summary and '(direct or indirect)' in the conclusions, and a citation of GDPR Article 5(2)(a) in the summary against Article 5(1)(a) in the conclusions."
  - id: pwc
    author: "PricewaterhouseCoopers Advisory N.V., under Selwyn Moons and Sander van Veldhuizen"
    title: "Onderzoek misbruik uitwonendenbeurs"
    publisher: "PwC, commissioned by the Ministerie van Onderwijs, Cultuur en Wetenschap"
    published: 2024-01-26
    url: "https://open.overheid.nl/documenten/dpc-97a155051e66b292ef3cc5799cb4aef61dcbf46b/pdf"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - analysis
    source_family: pwc-ocw-investigation
    access: "DUO and ministry documentation from 2012 to 2023, interviews with the officials who built and ran the process, minutes of the fortnightly inspection-team meetings and of the client–contractor–operator meetings, and DUO's own control-process data joined to CBS neighbourhood statistics."
    method: "Document study and interviews against a stated analytical framework, plus a quantitative disparate-impact analysis using the US four-fifths rule as the threshold, applied at neighbourhood level because DUO holds no data on students' origin. The report states explicitly that it does not rule on the lawfulness of the process."
    conflicts: "Commissioned and paid for by the ministry that is also the responsible party, and issued under an engagement letter that disclaims liability to anyone but the client. PwC also states it accepted the information supplied as correct and complete without auditing it — a limitation printed on its own front matter."
    corroboration: "Its account of the three risk criteria is confirmed by the regulator's direct inspection of the algorithm, and its finding of skew is confirmed and sharpened by Algorithm Audit using data PwC did not have."
    accountability: "Named responsible partner and director, dated, published in full by the government's open-documents register as an annex to a letter to parliament."
    notes: "Read for this case, in Dutch: foreword, management summary, and the supporting footnotes, not all 63 pages. The report notes that written documentation of the working method is limited and that some underlying analyses could no longer be retrieved because the archiving period had expired."
  - id: algorithm-audit
    author: "Stichting Algorithm Audit"
    title: "Addendum Preventing Prejudice"
    publisher: "Algorithm Audit, commissioned by DUO"
    published: 2024-05-22
    url: "https://algorithmaudit.eu/pdf-files/algoprudence/TA_AA202402/TA_AA202402_Addendum_Preventing_prejudice.pdf"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - analysis
    source_family: algorithm-audit-cbs
    access: "Aggregate statistics compiled by Statistics Netherlands (CBS) on the origin of more than 300,000 college grant recipients for 2014, 2017, 2019, 2021, and 2022, joined to DUO's records of who was scored, selected, visited, sanctioned, and successful on appeal at each step of the control process."
    method: "Bias analysis measuring the demographic composition of the population at each step of the process against the source population, plus a proxy analysis testing whether education type, age, and distance to parents correlate with migration background, cross-checked with an unsupervised bias detection method. Origin data was supplied at group level only, so no individual was linked to an origin."
    conflicts: "Commissioned by DUO, the body under scrutiny. Against that: it reports larger disparities than the government's own earlier investigation, publishes its analysis code on GitHub, and states plainly which questions its data cannot answer."
    corroboration: "Independently confirms the direction of PwC's finding using an entirely different data source — actual origin statistics rather than neighbourhood proxies — and its own Finding 5 confirms the overrepresentation first reported by investigative journalists."
    accountability: "Named nonprofit with a published methodology, a public GitHub repository for the analysis, a disclaimers section, and a stable case page in its own audit register."
    notes: "Read for this case: table of contents, executive summary, and all five findings; the detailed results chapters were not read in full. The report is an addendum to an earlier Algorithm Audit report of 1 March 2024 that predates the CBS data."
  - id: duo-excuses
    author: "Dienst Uitvoering Onderwijs"
    title: "Excuses voor indirecte discriminatie bij controles op de uitwonendenbeurs"
    publisher: "DUO"
    published: 2024-03-01
    url: "https://duo.nl/organisatie/pers/excuses-voor-indirecte-discriminatie-bij-controles-op-de-uitwonendenbeurs.jsp"
    accessed: 2026-09-13
    roles:
      - participant-account
    source_family: duo-statements
    access: "The agency's own operational records, and the minister's letter to parliament of the same date."
    method: "Press statement. No method beyond restating the PwC findings the agency accepts, with operational totals from its own records."
    conflicts: "The agency describing its own failure, on the day it apologised for it. Its framing is that the criteria 'were considered neutral', which is the most favourable available reading and is contradicted by the regulator eight months later."
    corroboration: "Its acceptance of indirect discrimination matches PwC; its operational totals appear nowhere else and are uncorroborated."
    accountability: "Published on the agency's own press page under a named director-general who is quoted by name."
    notes: "Read in full, in Dutch. Source of the home-visit totals used in this case and of DUO's statement that the higher chance of a home visit did not generally translate into a disproportionately higher chance of the grant being stopped."
  - id: duo-vervolg
    author: "Dienst Uitvoering Onderwijs"
    title: "Vervolgonderzoek bevestigt indirecte discriminatie controles uitwonendenbeurs"
    publisher: "DUO"
    published: 2024-05-22
    url: "https://www.duo.nl/particulier/home/actueel/vervolgonderzoek-bevestigt-indirecte-discriminatie-controles-uitwonendenbeurs.jsp"
    accessed: 2026-09-13
    roles:
      - participant-account
    source_family: duo-statements
    access: "The Algorithm Audit addendum and the CBS data behind it, described by the commissioning agency."
    method: "Press statement summarising a report published the same day."
    conflicts: "Same as above: the agency reporting on itself. It concedes here that the skew is stronger than previously thought, which is against interest."
    corroboration: "Summarises the Algorithm Audit report, which is cited directly in this case wherever a figure matters."
    accountability: "Published on the agency's own site, dated, linking to the underlying report and to the minister's letter."
    notes: "Read in full, in Dutch. Gives the share of appellants with a non-European migration background as 86%, where the underlying report gives a range of 79–85% across its reference years; the discrepancy is recorded rather than reconciled."
  - id: investico
    author: "Anouk Kootstra and Belia Heilbron"
    title: "Discriminatie door DUO groter dan gedacht"
    publisher: "Platform Investico, in collaboration with NOS op 3, Hoger Onderwijs Persbureau, Trouw, and De Groene Amsterdammer"
    published: 2024-05-22
    url: "https://www.platform-investico.nl/onderzoeken/discriminatie-door-duo-groter-dan-gedacht"
    accessed: 2026-09-13
    roles:
      - discovery
      - independent-reporting
    source_family: investico-journalism
    access: "The Algorithm Audit report, plus the outlet's own prior investigation of 2023 that caused the whole sequence, including DUO case data and student accounts."
    method: "Investigative journalism. The outlet publishes accountability documents describing its methods and sources; those documents were not read for this case."
    conflicts: "None disclosed. The outlet is reporting on findings that vindicate its own earlier revelation, which is an interest in the result."
    corroboration: "Algorithm Audit's Finding 5 explicitly confirms the overrepresentation this outlet first reported, and cites its 2023 investigation by name."
    accountability: "Named journalists, named collaborating outlets, dated, with a stated policy of publishing source material."
    notes: "Read in full, in Dutch. Source of the count of students labelled fraudsters since 2012. Its restatement of the audit's ratios is looser than the report itself — it gives '3x the chance of a home check' where the report says 3.0x the chance of an *unjustified* home visit — so this case cites the report for every ratio."
  - id: nltimes-compensation
    author: "NL Times"
    title: "Students to get up to €2,000 compensation for education agency DUO's discrimination"
    publisher: "NL Times"
    published: 2026-04-03
    url: "https://nltimes.nl/2026/04/03/students-get-eu2000-compensation-education-agency-duos-discrimination"
    accessed: 2026-09-13
    roles:
      - independent-reporting
    source_family: compensation-2026
    access: "A letter from the education minister to parliament announcing the compensation scheme. The letter itself could not be retrieved from this sandbox, so this is a relay rather than the primary record."
    method: "News reporting on a parliamentary letter. No independent verification described."
    conflicts: "None disclosed."
    corroboration: "Its central figures are restated in the same outlet's report of the parliamentary debate six days later."
    accountability: "Named outlet, dated, but no by-lined author on the article."
    notes: "Read in full. Cited as a relay because the ministerial letter is the primary record and was not reachable. Its claim that '86% of the students screened' had a non-Dutch nationality misstates the underlying finding, which concerns students who appealed, not students who were screened; this case uses the primary sources for that figure."
  - id: nltimes-debate
    author: "ANP and NL Times"
    title: "Every student DUO discriminated against eligible for compensation: Minister"
    publisher: "NL Times"
    published: 2026-04-09
    url: "https://nltimes.nl/2026/04/09/every-student-duo-discriminated-eligible-compensation-minister"
    accessed: 2026-09-13
    roles:
      - independent-reporting
    source_family: compensation-2026
    access: "A parliamentary debate on the compensation scheme, reported by the Dutch national news agency."
    method: "News agency reporting of a public parliamentary debate. No independent verification described."
    conflicts: "None disclosed."
    corroboration: "Consistent with the scheme reported six days earlier by the same outlet."
    accountability: "Attributed to ANP and the outlet, dated, quoting named members of parliament and the minister."
    notes: "Read in full. Source of the minister's position that students who did misuse the grant are also covered, because the evidence against them was unlawfully obtained. The article uses inconsistent pronouns for the minister; this case names people rather than reproducing that."
tags:
  - risk-profiling
  - indirect-discrimination
  - public-sector
  - proxy-variables
  - gdpr
  - welfare-fraud
  - redress
---

## Case in one sentence

For eleven years the Dutch student finance agency picked which students to investigate for grant fraud using an algorithm scoring age, education type, and distance to the parental home, and the three criteria — none of which records anyone's origin — sent inspectors to the doors of students with a non-European migration background three times as often as to anyone else's.

## Case scope note

The system at the centre of this case is a hand-specified scoring rule, not a machine-learning model: three risk factors, combined into a risk figure and then a risk code. It is included in this library deliberately. Everything that made it fail — unjustified features, proxy variables standing in for a protected characteristic, no pre-deployment impact assessment, no evaluation after go-live, human reviewers amplifying rather than correcting the model — is the standard failure catalogue for deployed machine learning, arriving here without any machine learning at all. The regulator's finding is written to apply to any government algorithm that selects people. Readers looking for a model architecture will not find one; readers looking for what an unaudited scoring rule does to a population over a decade will.

## Executive summary

Students in the Netherlands who live away from their parents receive a larger grant than those who do not. From 2012, after a 2009 misuse scandal and parliamentary pressure, the Dienst Uitvoering Onderwijs (DUO) checked entitlement through a three-step process: an automated risk classification, a desk study applying exclusion grounds, and a home visit.[^pwc]

The risk profile used three factors. A vocational (mbo) course scored higher risk than a university one. A shorter distance between the student's registered address and the parents' address scored higher risk. A lower age scored higher risk.[^ap-report]

In the summer of 2023 the investigative outlet Investico, with NOS op 3, the Hoger Onderwijs Persbureau, Trouw, and De Groene Amsterdammer, reported that students with a migration background were being accused of fraud far more often than others. DUO suspended risk-based selection within days and moved to random sampling; the ministry commissioned PwC.[^investico][^pwc]

PwC reported in January 2024, published on 1 March. Its finding was indirect discrimination, and its root cause was that neither the risk profile nor the exclusion grounds rested on any analysis: they had been built from practical experience and never validated. The government and DUO apologised.[^pwc][^duo-excuses]

Algorithm Audit then repeated the analysis with origin statistics that PwC had never had, supplied by Statistics Netherlands for more than 300,000 grant recipients. Students with a non-European migration background were classified high risk 2.0 times as often, manually selected for a home visit 6.2 times as often, and were 3.0 times as likely to receive a home visit that turned up nothing.[^algorithm-audit]

In November 2024 the data protection regulator went further than either. Having inspected the algorithm itself on site, the Autoriteit Persoonsgegevens found that the three criteria had been set on the basis of "experience and common sense" with no objective justification, that distinguishing between students on that basis was itself unlawful discrimination, and that the Minister of Education had breached the GDPR's lawfulness principle.[^ap-report]

In April 2026 the state set aside €80 million to compensate roughly 25,000 people, including those who had in fact misused the grant — because the evidence against them had been unlawfully obtained.[^nltimes-compensation][^nltimes-debate]

## Research question

What does an unjustified selection algorithm do to a population when nobody checks it, and how long does it take anyone to notice?

## Organization and operating context

DUO is the executive agency of the Dutch Ministry of Education, Culture and Science responsible for funding institutions, paying student finance, and collecting tuition fees, and it holds supervisory duties alongside those.[^pwc] The Minister of Education is the data controller; DUO operates.[^ap-report] That split matters to the outcome: the regulator's finding of breach lands on the minister, not the agency.

The grant in question, the *uitwonendenbeurs*, pays more to students living away from the parental home. Misuse means claiming it while living at home. In 2015 the introduction of the Dutch loan system abolished the grant for higher-education students, so from 2015 to 2023 essentially only vocational students were eligible — and therefore only vocational students were checked.[^duo-excuses][^algorithm-audit]

## The situation before AI

The control process was a political product before it was a technical one. Media coverage and parliamentary questions about grant misuse in the summer of 2009 produced a ministerial action plan; the tightened control process began in 2012.[^pwc][^duo-excuses]

PwC found no risk analysis underlying it. There is no document identifying, analysing, and prioritising the risks of grant misuse, and none translating any such risk into the profile that was built. The process rested on practical experience and was never formally validated by an internal or external expert.[^pwc] The regulator, having asked the same question of the people who built it, recorded the answer as "experience and common sense".[^ap-report]

Nor was there an assessment of its effect on the people it would be pointed at. No Data Protection Impact Assessment was carried out, though the process carried a high privacy risk, and the government audit service found no retention activity — no deletion, destruction, or anonymisation of personal data — since 2011.[^pwc]

## The AI intervention or event

**Step one, the algorithm.** Student data was loaded, the profile computed a risk figure from the three factors, and the figure became a risk code.[^ap-report] Education type, distance, and age. Nothing about origin: DUO does not process nationality or background data at all in this process, a fact both PwC and the regulator record.[^pwc][^ap-report]

**Step two, the desk study.** Officials narrowed the scored population using exclusion grounds — students in student houses, students with a child, married or cohabiting students, students in care institutions.[^pwc] This step is where the disparity multiplied, and it is where a small number of staff performed the analysis, the selection, and the decision with at most limited internal checking, no standard quality control, and, as PwC put it, no safeguards to guarantee objectivity.[^pwc] Selection here was not reproducible.[^pwc]

**Step three, the home visit.** Roughly 26,800 students received one between 2012 and 2023.[^duo-excuses] Where misuse was established, the student repaid up to three years of grant and often received a fine on top — thousands of euros. Nearly 10,000 students were labelled fraudsters from 2012 onward.[^investico]

The mechanism connecting three neutral-looking criteria to a discriminatory outcome is documented rather than hypothesised. Children of Turkish-Dutch and Moroccan-Dutch parents live on average much closer to the parental home than children of parents without a migration background — a CBS finding PwC cites.[^pwc] Vocational courses are typically nearer home than university ones, which is precisely why mbo scored higher.[^duo-excuses] Algorithm Audit's proxy analysis confirmed the pair directly: mbo 1–2 and short distance to parents correlate strongly with a non-European migration background.[^algorithm-audit] Excluding student houses from visits pushed the other way, because student houses are disproportionately occupied by students without a migration background.[^pwc]

**The stop.** Since 21 June 2023, selection has been by random sample only.[^duo-excuses]

## Outcomes and economics

Measured by Algorithm Audit against CBS origin data, comparing students with a non-European migration background to students of Dutch origin:[^algorithm-audit]

| Step | Disparity |
| --- | --- |
| Classified high risk by the profile | 2.0x |
| Manually selected for a home visit | 6.2x |
| Selected for inspection *within the same high-risk band* | 5.5x |
| Selected for inspection *within the same low-risk band* | 1.8x |
| Receiving a home visit that found no misuse | 3.0x |
| Share of the appeal population, across four reference years | 79–85% |

The two within-band rows are the finding that matters most and is quoted least. They isolate the human step: among students the algorithm had scored identically, officials still selected those with a non-European migration background 5.5 times as often in the high-risk band and 1.8 times as often in the low-risk band. The algorithm supplied a skew; the people acting on it more than doubled it.

On accuracy, 69% of students taken forward for further investigation turned out not to have misused the grant, a proportion PwC found roughly constant from 2012 to 2023 — and which never prompted a change to how DUO searched and selected.[^pwc] DUO's own figure is consistent: of about 26,800 home visits, misuse was established in roughly a third.[^duo-excuses]

Two findings cut against the harshest reading. Algorithm Audit found no bias in the appeal process itself: appeals succeeded at the same rate regardless of origin.[^algorithm-audit] And DUO reports PwC finding that a higher chance of a home visit did not generally translate into a disproportionately higher chance of the grant being stopped.[^duo-excuses]

On money: €80 million set aside in April 2026. About 12,000 students receive €500 each, having been visited at home with no consequence; about 10,000 receive €2,000 each, having had a grant withdrawn or adjusted or another measure imposed. A further 4,000 approached during a pilot phase must come forward themselves, because DUO cannot identify them. Those who believe they are owed more can seek a bespoke assessment, at the risk of receiving less.[^nltimes-compensation]

No source gives the cost of building or running the control process, or the value of the misuse it recovered.

## Causal assessment and competing explanations

This case is labelled **plausibly-causal**, not causal, and the distinction is worth defending because the temptation to write "the algorithm caused this" is strong.

What is established well past dispute is the *disparity*: measured at every step, against actual origin statistics rather than proxies, across five reference years and more than 300,000 people. What is established as *mechanism* is also strong: the proxy analysis names which criteria carry the correlation, and an unsupervised bias detection method reaches the same result.[^algorithm-audit]

What is missing is a counterfactual. Nobody ran the process without the profile and compared. The 2023 switch to random sampling could in principle supply one, and Algorithm Audit says explicitly that the random sample is too small to measure the underlying rate independently of the process.[^algorithm-audit] So the honest formulation is that the profile is a well-evidenced and mechanistically explained cause of the skew, not that its contribution has been isolated from everything else.

Two competing explanations deserve to be taken seriously and then set aside.

**"Students with a migration background really do misuse the grant more often, so the profile was finding real fraud."** This is the explanation the process itself was built to be unable to test. Because the selection was biased, the discovered-misuse population is biased too; Algorithm Audit states that the underlying rate cannot be determined from the available data and that the random sample is too small to settle it.[^algorithm-audit] The claim is not refuted — it is unmeasurable, which is itself a consequence of the design. The regulator's position renders it beside the point in law: the criteria needed justification before use, and had none.[^ap-report]

**"It was the officials, not the algorithm."** The within-band ratios show the manual step contributed a great deal. But Algorithm Audit found no indication that this came from individual officials' personal prejudice, pointing instead to the work instructions and exclusion criteria — the exclusion of student housing and care facilities among them.[^algorithm-audit] PwC reaches the same place from the other direction, identifying self-confirmation risk in a manual selection layered on an unjustified profile.[^pwc] The two steps are not rival explanations; the second amplified the first, and both came from the same absent analysis.

## Failures, limitations, and governance

- **Nothing justified the criteria.** No risk analysis, no scientific or legal grounding, no statistical validation. The regulator's phrase for their origin is "experience and common sense".[^ap-report]
- **Nothing checked the outputs.** DUO never periodically evaluated the profile, so the disparity surfaced only after media reports, eleven years in.[^ap-report]
- **The warnings existed and were removed.** By February 2010, before the process went live, documentation showed the pre-selection mainly hit mbo students with non-Dutch-sounding surnames. It changed nothing. A handover document of 2 June 2010 listed as a risk that misuse "appears to occur more among minority groups. E.g. mbo/hbo students of Moroccan origin"; in the next version of the same document, circulated three weeks later, those sentences were gone. Neither observation reached the progress reports or the final report to parliament.[^pwc]
- **A second warning in 2013 also went nowhere.** Team minutes that year record "a certain prejudice" in the reports of external inspectors feeding into the process, and signals that the process was too strict.[^pwc]
- **A 69% miss rate was stable for eleven years and changed nothing.**[^pwc] One reason officials gave in interviews for continuing to search the minority population was a desired preventive effect; PwC found no documentation prescribing that.[^pwc]
- **The complaints channel could not surface the pattern.** Objections could not be filed online or by email, only on paper, and were never digitised, so pattern analysis had to be done by hand and therefore mostly was not. A manual review after the 2023 coverage found two cases in eleven years that flagged profiling.[^pwc]
- **Data protection basics were absent.** No DPIA on a high-risk process, and no data retention activity since 2011 — a GDPR breach on its own terms.[^pwc]
- **The people who could see it had no standing.** 79–85% of appellants had a non-European migration background, and their appeals succeeded at the same rate as anyone else's.[^algorithm-audit] The system was fair at the one step where the affected population was concentrated, and that fairness told nobody anything.

## What this case demonstrates

1. A selection rule needs no protected characteristic to discriminate by one. Three criteria that record nobody's origin produced a threefold disparity in unjustified home visits, through documented correlations any prior analysis would have surfaced.
2. Under the Dutch regulator's reading, the failure to justify the criteria is itself the violation — independent of the disparity it produced. Selecting on unjustified grounds is unlawful whether or not anyone can show downstream harm.[^ap-report]
3. Human review amplified rather than corrected the model. Given students the algorithm scored identically, officials selected those with a non-European migration background 5.5 times as often.[^algorithm-audit] A human in the loop is a governance control only if someone measures what the human does.
4. Bias arrives through exclusions as much as through inclusions. Excluding student housing from home visits shaped the population as surely as the distance criterion did.[^pwc]
5. Precision failure and fairness failure are the same failure here. A process wrong 69% of the time was concentrating those errors on one group, and the stable miss rate was a visible signal that went unread for eleven years.[^pwc]
6. Internal warnings need a route out. Two clear signals, in 2010 and 2013, existed inside the organisation and reached neither the ministry's reports to parliament nor any change to the model.[^pwc]
7. An appeals process can be perfectly fair and still useless as a detector. Equal success rates across origins told nobody that 79–85% of appellants shared one.[^algorithm-audit]
8. Unlawful selection contaminates true positives. The Dutch state extended compensation to students who had in fact misused the grant, on the ground that the evidence against them was unlawfully obtained.[^nltimes-debate]
9. Discovery came from journalism, not from governance. Every investigation in this case was commissioned after the story broke.[^investico]

## What this case does not demonstrate

- It does not establish whether students with a migration background misuse the grant at a different rate. The data cannot answer it and the random sample is too small.[^algorithm-audit]
- It does not show that any official acted with intent. Algorithm Audit found no indication of personal prejudice and attributes the manual-selection skew to work instructions and procedure.[^algorithm-audit]
- It does not isolate the profile's contribution from the rest of the process. There is no counterfactual arm; hence `plausibly-causal`.
- It does not quantify harm to individuals. PwC declines to judge damage, saying that would require a file-by-file legal analysis outside its scope.[^pwc]
- It does not show that the disparity in visits produced a matching disparity in grants being stopped. DUO reports PwC finding it generally did not.[^duo-excuses]
- It does not describe machine learning, and nothing here should be read as evidence about what learned models do.
- It does not tell you whether the replacement works. Selection has been random since June 2023 and a new system is being designed; no evaluation of either is in evidence.[^duo-excuses]
- It does not confirm that compensation has been paid. The April 2026 sources describe a scheme and an allocation, not disbursement.[^nltimes-compensation]

## Evidence assessment

**Grade A — four independent chains, three of them with direct access to the system or its records.**

The regulator inspected the algorithm itself, over three days on site, and questioned both the staff who ran the checks and the staff who chose who was visited.[^ap-report] PwC read eleven years of internal documentation and minutes and interviewed the people who built the process.[^pwc] Algorithm Audit measured the outcome against origin statistics from the national statistics office covering more than 300,000 people, and published its code.[^algorithm-audit] Investico's journalism is the reason any of the others exist.[^investico] These are genuinely separate chains: different access, different methods, different institutional interests, converging on the same account of what the profile was and what it did.

The convergence is not total, and the disagreements are the most interesting thing in the record.

*PwC and the regulator disagree about what kind of discrimination this was.* PwC found indirect discrimination and stated explicitly that it was not ruling on lawfulness.[^pwc] The regulator held that distinguishing between students on three criteria with no objective justification qualifies as **direct** discrimination, and that the resulting overrepresentation of students with a non-European migration background is the *indirect* discrimination on top.[^ap-report] Both are recorded here; this case does not pick a winner, because the disagreement is legal rather than factual and no court has resolved it.

*The regulator's report is internally inconsistent twice.* Its summary calls the distinction "direct discrimination" while its conclusions section says "(direct or indirect)". Its summary cites GDPR Article 5(2)(a) — accountability — while its conclusions cite Article 5(1)(a) — lawfulness. The substance of the finding is a lawfulness breach and this case reports it as such, but the citation should not be relied on to the sub-paragraph.

*The 86% that is not in the report.* DUO's own statement gives the share of appellants with a non-European migration background as 86%.[^duo-vervolg] The report it is summarising gives 79–85% across its four reference years.[^algorithm-audit] This case uses the report's range. A press relay then compounded the error into "86% of the students screened", which describes a different population entirely.[^nltimes-compensation]

*Press restatement drifts from the report.* Investico gives students with a migration background "three times the chance of a home check"; the report's 3.0x figure is specifically the chance of a home visit that found nothing.[^investico][^algorithm-audit] Every ratio in this case is cited to the report.

Conflicts are real and disclosed on every side. PwC was paid by the responsible ministry and disclaims liability to anyone else, and states on its own front page that it accepted the supplied information without auditing it.[^pwc] Algorithm Audit was paid by DUO, and produced findings worse for DUO than the ministry's own investigation had. DUO's two statements are an organisation describing its own failure and are used here only for operational totals and for its own words. The regulator has an institutional interest in establishing a justification requirement for risk profiling and says so in the report.

Two gaps hold the record short of complete. The scoring weights and thresholds — what a risk figure actually was, and where the high-risk cut fell — appear in no published source; the regulator saw them and describes their direction, not their values. And the April 2026 compensation scheme reaches this case only through press reporting of a ministerial letter that could not be retrieved from this sandbox, which is why both 2026 sources are marked as relays and why every claim resting on them is labelled Supported rather than Verified.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| The risk profile scored students on education type, distance to the parental address, and age, and on nothing else. | Verified | The regulator inspected the algorithm on site; PwC's document study independently reports the same three criteria[^ap-report][^pwc] | Disclosure of a further factor in the scoring rule |
| Students with a non-European migration background were classified high risk 2.0 times as often as students of Dutch origin. | Verified | CBS origin statistics for 300,000+ grant recipients across five reference years, joined to DUO's process records[^algorithm-audit] | An error in the CBS aggregation or in the join, or a re-analysis of the published code reaching different ratios |
| They were manually selected for a home visit 6.2 times as often, and 5.5 times as often within the same high-risk band. | Verified | Step-by-step measurement in the same analysis[^algorithm-audit] | The same as above |
| They were 3.0 times as likely to receive a home visit that found no misuse. | Verified | Same analysis, Finding 4[^algorithm-audit] | The same as above |
| The three criteria act as proxies for migration background. | Supported | Proxy analysis identifying mbo 1–2 and short distance as strongly correlated, confirmed by an unsupervised method, plus CBS evidence on residential distance cited by PwC[^algorithm-audit][^pwc] | A replication finding the correlation absent, or evidence the CBS residential finding does not hold for this cohort |
| The criteria had no objective justification and were set on experience and common sense. | Verified | The regulator's finding after questioning the staff who built the profile; PwC independently found no underlying risk analysis and no validation[^ap-report][^pwc] | Production of a contemporaneous analysis justifying the criteria |
| The processing was unlawful discrimination and breached the GDPR lawfulness principle by the Minister of Education as controller. | Attributed | The regulator's own legal conclusion, in an investigation report that imposes no fine and has not been tested in court[^ap-report] | A court ruling either way, or a regulator correction |
| The distinction on the three criteria constituted direct discrimination. | Disputed | The regulator says direct; PwC found indirect discrimination and declined to rule on lawfulness; the regulator's own text says "direct" in its summary and "(direct or indirect)" in its conclusions[^ap-report][^pwc] | A judicial ruling, or a clarification from the regulator |
| DUO never periodically evaluated the profile in eleven years of use. | Verified | Regulator's conclusion; PwC found no evaluation documentation and reporting to the ministry that was mainly financial[^ap-report][^pwc] | Discovery of an evaluation that was performed and not disclosed |
| Officials knew in February 2010 that pre-selection mainly hit mbo students with non-Dutch-sounding surnames, and it changed nothing. | Verified | PwC's document study, citing the steering-group agenda of 22 February 2010 and a handover document of 2 June 2010 whose warning had vanished from the 28 June version[^pwc] | Production of the intervening version showing the text was moved rather than removed, or a document showing a resulting change |
| 69% of students taken forward for further investigation had not misused the grant. | Verified | PwC, reporting the proportion as roughly constant 2012–2023; consistent with DUO's own account of about a third of 26,800 home visits establishing misuse[^pwc][^duo-excuses] | A recount under a different definition of "further investigation" |
| Between 79% and 85% of students who appealed had a non-European migration background. | Verified | Measured across four reference years[^algorithm-audit] | Re-analysis of the appeal populations; note DUO's own summary gives 86% |
| Appeals succeeded at the same rate regardless of origin. | Verified | Finding 5 of the same analysis[^algorithm-audit] | Re-analysis at individual rather than aggregate level |
| Whether students with a migration background misuse the grant more often. | Unknown | The rate cannot be separated from the biased selection, and the post-2023 random sample is too small to measure it[^algorithm-audit] | Several years of random-sample data, large enough to estimate the underlying rate |
| The state has allocated €80 million to compensate roughly 25,000 people, including those found to have misused the grant. | Supported | Press reporting of a ministerial letter and of the subsequent parliamentary debate; the letter itself was not retrievable here[^nltimes-compensation][^nltimes-debate] | Retrieval of the ministerial letter, which would move this to Verified, or a later revision of the scheme |
| Compensation has actually been paid. | Unknown | The sources describe an allocation and a scheme, not disbursement[^nltimes-compensation] | A progress report on payments made |
| The replacement selection process avoids the same failure. | Unknown | Selection has been random since June 2023 and a new system is being designed; no evaluation is in evidence[^duo-excuses] | Publication of the new system's justification, impact assessment, and independent review |

## Direct quotations

Quotations from Dutch sources are given in the original, with a working English rendering in the attribution line.

> “Elke verwerking die een onderscheid maakt dat niet objectief gerechtvaardigd kan worden, is discriminatoir en daarmee onrechtmatig.”

— Autoriteit Persoonsgegevens, stating the standard it then applies; in translation, “Every processing operation that makes a distinction which cannot be objectively justified is discriminatory and therefore unlawful.”[^ap-report] · locator: Samenvatting, "Inzet algoritmes door de overheid", page 3

> “De in het algoritme gehanteerde risicofactoren waren tot stand gekomen op basis van ‘ervaring en gezond verstand’.”

— Autoriteit Persoonsgegevens; in translation, “The risk factors used in the algorithm had come about on the basis of ‘experience and common sense’.”[^ap-report] · locator: Samenvatting, "Discriminatoire, onrechtmatige verwerking van persoonsgegevens", page 4

> “misbruik meer blijkt voor te komen bij minderheidsgroepen. Bijv. MBO/HBO-studenten met een Marokkaanse afkomst”

— A DUO handover document of 2 June 2010, quoted by PwC; the sentences are absent from the version circulated on 28 June 2010. In translation, “misuse appears to occur more among minority groups. E.g. mbo/hbo students of Moroccan origin”[^pwc] · locator: management summary, footnote 34, page 12

> “Deze kennis heeft noch tot nadere verkenning van het risicoprofiel noch tot aanpassing van het model geleid.”

— PwC, on what happened after February 2010; in translation, “This knowledge led neither to further examination of the risk profile nor to adjustment of the model.”[^pwc] · locator: management summary, section 3, page 12

> “Maar we zijn onvoldoende zorgvuldig geweest bij het opzetten en het onderhouden van het controleproces.”

— Harmen Harmsma, director-general of DUO, on the day of the apology; in translation, “But we were insufficiently careful in setting up and maintaining the control process.”[^duo-excuses] · locator: press statement, opening quotation

> “Whether students with a migration background also make unduly use of the college grant more frequently cannot be determined based on the available data.”

— Algorithm Audit, on the question the process made unanswerable[^algorithm-audit] · locator: Executive summary, Finding 4, page 9

> “Dat zijn betreurenswaardige constateringen, die nogmaals duidelijk maken dat we het controleproces anders moeten doen en anders gaan doen.”

— DUO, on the follow-up research; in translation, “Those are regrettable findings, which once again make clear that we must do the control process differently and are going to do it differently.”[^duo-vervolg] · locator: press statement, "Controleproces anders"

## Revision notes

- 2026-09-13 — Initial publication at Grade A, the library's second. Four independent evidentiary chains with direct access: a regulator that inspected the algorithm on site, a government-commissioned document study, an independent bias analysis against national origin statistics, and the journalism that triggered all three. Labelled `plausibly-causal` rather than `causal` — the disparity and its mechanism are measured across five reference years, but no counterfactual arm exists and the post-2023 random sample is too small to supply one. Carries a scope note because the system is a hand-specified scoring rule, not machine learning; it is included because its failure catalogue is the standard one. Records four discrepancies rather than resolving them: PwC's "indirect discrimination" against the regulator's "direct", two internal inconsistencies in the regulator's own report, DUO's 86% against the underlying report's 79–85%, and press restatements that drift from the audited ratios. The April 2026 compensation scheme is cited to press relays and labelled Supported, because the ministerial letter behind it could not be retrieved from this sandbox. First public-sector case and first case outside the US, UK, and Sweden.

[^ap-report]: Autoriteit Persoonsgegevens, [“Onderzoeksrapport DUO: Gebruik van geautomatiseerde risicoclassificering op basis van een risicoprofiel bij Controleproces Uitwonende Beurs (CUB)”](https://www.autoriteitpersoonsgegevens.nl/documenten/onderzoeksrapport-fraudeaanpak-duo), November 2024, read in Dutch.

[^pwc]: PricewaterhouseCoopers Advisory N.V., [“Onderzoek misbruik uitwonendenbeurs”](https://open.overheid.nl/documenten/dpc-97a155051e66b292ef3cc5799cb4aef61dcbf46b/pdf), commissioned by the Ministerie van Onderwijs, Cultuur en Wetenschap, January 2024, read in Dutch.

[^algorithm-audit]: Stichting Algorithm Audit, [“Addendum Preventing Prejudice”](https://algorithmaudit.eu/pdf-files/algoprudence/TA_AA202402/TA_AA202402_Addendum_Preventing_prejudice.pdf), commissioned by DUO, May 2024.

[^duo-excuses]: DUO, [“Excuses voor indirecte discriminatie bij controles op de uitwonendenbeurs”](https://duo.nl/organisatie/pers/excuses-voor-indirecte-discriminatie-bij-controles-op-de-uitwonendenbeurs.jsp), 2024-03-01, read in Dutch.

[^duo-vervolg]: DUO, [“Vervolgonderzoek bevestigt indirecte discriminatie controles uitwonendenbeurs”](https://www.duo.nl/particulier/home/actueel/vervolgonderzoek-bevestigt-indirecte-discriminatie-controles-uitwonendenbeurs.jsp), 2024-05-22, read in Dutch.

[^investico]: Anouk Kootstra and Belia Heilbron, [“Discriminatie door DUO groter dan gedacht”](https://www.platform-investico.nl/onderzoeken/discriminatie-door-duo-groter-dan-gedacht), Platform Investico with NOS op 3, Hoger Onderwijs Persbureau, Trouw, and De Groene Amsterdammer, 2024-05-22, read in Dutch.

[^nltimes-compensation]: NL Times, [“Students to get up to €2,000 compensation for education agency DUO's discrimination”](https://nltimes.nl/2026/04/03/students-get-eu2000-compensation-education-agency-duos-discrimination), 2026-04-03. Relay for a ministerial letter to parliament that could not be retrieved.

[^nltimes-debate]: ANP and NL Times, [“Every student DUO discriminated against eligible for compensation: Minister”](https://nltimes.nl/2026/04/09/every-student-duo-discriminated-eligible-compensation-minister), 2026-04-09. Relay for a parliamentary debate.
