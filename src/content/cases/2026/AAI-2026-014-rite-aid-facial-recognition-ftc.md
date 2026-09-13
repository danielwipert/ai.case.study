---
case_id: AAI-2026-014
title: "Eight years of face matching without a false-alarm rate"
summary: "The FTC alleged that a US pharmacy chain ran facial recognition in hundreds of stores from 2012 to 2020, never tested its accuracy, kept no record of how often it was wrong, and let employees search, expel, and call the police on customers it misidentified. Rite Aid settled without admitting anything and accepted a five-year ban."
organization:
  - Rite Aid Corporation
  - Federal Trade Commission
case_type: failure-incident
secondary_case_types:
  - governance-regulatory
  - deployment
industry:
  - retail
business_function:
  - operations
  - legal-compliance
deployment_stage: retired
outcome: negative
evidence_grade: B
status: published
created: 2026-09-13
published: 2026-09-13
last_verified: 2026-09-13
next_review: 2027-03-13
geography:
  - United States
environment: production
deployment_pattern:
  - decision-support
  - human-in-the-loop-workflow
causal_strength: descriptive
related_cases:
  - AAI-2026-006
  - AAI-2026-009
  - AAI-2026-013
evidence_upgrade_path: "The central obstacle to grade A is that the allegations were never tested: Rite Aid neither admitted nor denied them and the case settled before any evidence was weighed. Adjudicated findings would resolve that, and cannot now arise from this action. Short of it: the underlying investigative record — the internal presentations, the vendor correspondence, the employee training material the complaint quotes — would let a reader check the FTC's characterisations; the identity of the two vendors, which the complaint withholds, would allow the technology itself to be assessed against published benchmarks; and any measurement of Rite Aid's own algorithm on its own images, which on the FTC's account never existed, would settle whether the demographic differentials NIST documents in general were present in this deployment in particular."
sources:
  - id: ftc-complaint
    author: "Federal Trade Commission"
    title: "Complaint for Permanent Injunction and Other Relief, FTC v. Rite Aid Corporation and Rite Aid Hdqtrs. Corp., Case 2:23-cv-05023 (E.D. Pa.)"
    publisher: "United States District Court for the Eastern District of Pennsylvania, filed by the Federal Trade Commission"
    published: 2023-12-19
    url: "https://search.ftc.gov/system/files/ftc_gov/pdf/2023190_riteaid_complaint_filed.pdf"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - discovery
    source_family: ftc-riteaid-action
    access: "The Commission's investigative file: Rite Aid's internal presentations, employee training material, correspondence between Rite Aid staff and its facial recognition vendor, the match-alert records the company did keep, and consumer complaints made to the company."
    method: "A federal agency's civil complaint under Sections 5(a) and 5(n) of the FTC Act, pleading unfair acts or practices. It is an accusatory pleading, not a finding: it states what the Commission alleges it could prove, and no court weighed any of it."
    conflicts: "The prosecuting party's account of the conduct it is prosecuting, drafted to establish liability. It quotes internal documents selectively by design, and Rite Aid's answer to it was never filed because the case settled the day it was brought."
    corroboration: "The order entered alongside it confirms the charges brought and the relief agreed, not the facts. Its general claim about demographic differentials in facial recognition is independently supported by NIST's own testing; its specific claims about Rite Aid are corroborated by nobody."
    accountability: "Filed in federal court under a docket number, authorised by a 3-0 Commission vote, publicly available in full, with exhibits identified."
    notes: "Read in full, 38 numbered pages across a 54-page PDF. Every factual allegation drawn from it is labelled Attributed in this case, because Rite Aid neither admitted nor denied them. Paragraph numbers are given as locators where quoted."
  - id: ftc-order
    author: "Federal Trade Commission and Rite Aid Corporation"
    title: "Stipulated Order for Permanent Injunction and Other Relief, FTC v. Rite Aid Corporation, Case 2:23-cv-05023 (E.D. Pa.)"
    publisher: "United States District Court for the Eastern District of Pennsylvania"
    published: 2023-12-19
    url: "https://search.ftc.gov/system/files/ftc_gov/pdf/2023190_riteaid_stipulated_order_filed.pdf"
    accessed: 2026-09-13
    roles:
      - direct-evidence
    source_family: ftc-riteaid-action
    access: "The negotiated terms themselves, agreed by both parties and submitted for entry by the court."
    method: "A consent order. It records the charges, the relief, and the parties' stipulations. Its findings are jurisdictional only; paragraph 5 states that the defendants neither admit nor deny the allegations."
    conflicts: "A negotiated document, agreed by a company that had filed for Chapter 11 two months earlier and needed Bankruptcy Court approval to enter it. The terms reflect what the parties would accept, not what a court determined."
    corroboration: "Its terms are restated accurately in the Commission's public announcement of the action."
    accountability: "Court-entered order with a docket number, binding and enforceable, publicly available in full."
    notes: "Read in full. This is the only document in the case whose contents are established rather than alleged, which is why the order's terms are labelled Verified here while the conduct is not."
  - id: bedoya
    author: "Alvaro M. Bedoya, Commissioner"
    title: "Statement of Commissioner Alvaro M. Bedoya On FTC v. Rite Aid Corporation & Rite Aid Headquarters Corporation"
    publisher: "Federal Trade Commission, File No. 202-3190"
    published: 2023-12-19
    url: "https://www.ftc.gov/system/files/ftc_gov/pdf/2023190_commissioner_bedoya_riteaid_statement.pdf"
    accessed: 2026-09-13
    roles:
      - analysis
    source_family: ftc-riteaid-action
    access: "The same complaint, read by a Commissioner who voted for it, with footnoted paragraph citations throughout."
    method: "A concurring statement. It selects from the complaint and places the case against prior facial-recognition misidentifications reported elsewhere. It argues a position rather than establishing facts."
    conflicts: "Written by a Commissioner who voted to bring the action, and who came to the FTC from privacy scholarship on facial recognition. It is advocacy, and it is careful to write 'the Commission alleges' where the complaint is its source."
    corroboration: "Every claim about Rite Aid in it is footnoted to a numbered paragraph of the complaint, so it is a reading of that source rather than a second one."
    accountability: "Signed, dated, published on the Commission's site with a file number and full footnotes."
    notes: "Read in full. Cited here for the 'white lady with blonde hair' incident at complaint paragraph 48, the single risk identified in Rite Aid's expansion presentation, and the absence of confidence intervals for store staff."
  - id: nist-8280
    author: "Patrick Grother, Mei Ngan, and Kayee Hanaoka"
    title: "Face Recognition Vendor Test (FRVT) Part 3: Demographic Effects"
    publisher: "National Institute of Standards and Technology, NISTIR 8280"
    published: 2019-12-19
    url: "https://nvlpubs.nist.gov/nistpubs/ir/2019/NIST.IR.8280.pdf"
    accessed: 2026-09-13
    roles:
      - primary-investigation
      - analysis
    source_family: nist-frvt
    access: "18.27 million images of 8.49 million people from four operational US government datasets — domestic mugshots, immigration benefit application photos, visa photos, and border crossing photos — processed through 189 algorithms from 99 developers."
    method: "Standardised benchmark testing of submitted algorithms across demographic groups defined by sex, age, and race or country of birth, reporting false positive and false negative rates separately for one-to-one verification and one-to-many identification, with more than 1,200 pages of per-algorithm charts in annexes."
    conflicts: "None disclosed. NIST is a federal measurement laboratory with no stake in any vendor; the report notes that identifying commercial products does not imply endorsement."
    corroboration: "The largest independent evaluation of its kind at the time, and the source the FTC Commissioner's statement cites for the same proposition."
    accountability: "Named authors, an interagency report number, a DOI, exhaustive published annexes, and a documented test protocol."
    notes: "Read for this case: the executive summary and results summary, not the 1,200 pages of annexes. Published on 19 December 2019, during Rite Aid's deployment. Its finding is more careful than the shorthand: differentials are large but algorithm-specific, reversed for some developers, and undetectable for a few — which is why its own recommendation is that system owners measure their own algorithm on their own data."
tags:
  - facial-recognition
  - retail
  - false-positives
  - ftc-enforcement
  - biometrics
  - surveillance
  - demographic-differentials
---

## Case in one sentence

For eight years a pharmacy chain used facial recognition to flag suspected shoplifters in hundreds of stores, and — on the Federal Trade Commission's account — never tested whether it worked, never tracked how often it was wrong, and let staff search, expel, and call the police on the people it misidentified.

## Case status note

Almost everything below is an allegation. The FTC filed its complaint and a negotiated settlement on the same day, 19 December 2023. Rite Aid "neither admit[ted] nor den[ied] any of the allegations in the Complaint."[^ftc-order] No court weighed the evidence, no witness was cross-examined, and Rite Aid never filed an answer. What is established is the order: its terms bind, and they are labelled Verified below. What Rite Aid did is labelled Attributed throughout, and readers should hold it that way.

## Executive summary

Between 2012 and 2020 Rite Aid deployed facial recognition in hundreds of its retail pharmacies to identify people it believed had shoplifted or behaved badly, using technology from two third-party vendors it does not name.[^ftc-complaint] Most installations were in and around New York City, Los Angeles, San Francisco, Philadelphia, Baltimore, Detroit, Atlantic City, Seattle, Portland, Wilmington, and Sacramento.[^ftc-complaint]

The system compared shoppers against a database of "enrollments" — images of individuals with names, birth years, and notes about alleged conduct. Images came from CCTV excerpts, the facial recognition cameras themselves, mobile phone photographs, and in some cases photographs of driver's licences or of images displayed on video monitors. Employees were trained to "push for as many enrollments as possible", and tens of thousands of people were enrolled.[^ftc-complaint]

The Commission's central charge is not that the technology was biased. It is that Rite Aid never found out. The complaint alleges the company failed to test accuracy before deployment, failed to enforce its own image-quality standards, failed to train the staff who acted on alerts, and failed to implement any procedure for tracking the false-positive rate after go-live.[^ftc-complaint]

What the records that did exist showed: thousands of false-positive alerts recorded between December 2019 and July 2020; more than 5,000 alerts fired in stores over 100 miles from the store that created the enrollment; over 2,000 alerts so close in time across distant locations that the same person could not have been in both; and, in one five-day stretch, more than 900 alerts for a single enrollment across more than 130 stores — a majority of every location running the technology.[^ftc-complaint]

Staff acted. They followed people, searched them, ordered them out, publicly accused them, and called the police.[^ftc-complaint] An 11-year-old girl was stopped and searched on a false match; her mother missed work because the child was so distressed.[^bedoya][^ftc-complaint] Police were called on a Black customer over an alert generated against an image later described as depicting "a white lady with blonde hair."[^bedoya]

Rite Aid did not tell customers the technology was in use, and instructed employees not to reveal it.[^ftc-complaint]

The settlement bans Rite Aid from using facial recognition in any retail store, retail pharmacy, or online retail platform for five years, and requires deletion of the biometric information collected.[^ftc-order] The company had filed for Chapter 11 two months earlier, and needed the Bankruptcy Court's approval to enter the order at all.[^ftc-order]

## Research question

What happens when an organisation deploys a system whose errors fall on members of the public, and never builds the one measurement that would tell it how often it is wrong?

## Organization and operating context

Rite Aid Corporation was one of the largest US pharmacy chains. The relevant fact about its posture is that it was already under a federal order: in 2010 the FTC charged it with deceptive practices over its handling of personal information, and the resulting order — still in effect — required it to maintain a comprehensive information security program and to retain compliance documents.[^ftc-complaint] The 2023 complaint charges violations of that order as a second count alongside the facial recognition claims.[^ftc-order]

By the time the action was filed, Rite Aid and its headquarters entity had petitioned for Chapter 11 relief, on 15 October 2023.[^ftc-order]

The technology came from two outside vendors who "operated and supported the technology on Rite Aid's behalf and at its direction"; one also supplied biometric technology for Rite Aid's distribution centres.[^ftc-complaint] Neither is named in the complaint, which matters: without knowing the algorithm, nobody can check its measured performance against published benchmarks.

## The situation before AI

Retail loss prevention before facial recognition is human: staff watch, security officers patrol, and known repeat offenders are recognised by memory or by a photograph pinned in a back room. That system has its own well-known failure mode — it also produces wrongful accusations, and disproportionately.

What facial recognition changed is scale and transferability. A memory does not travel between states. An enrollment does: the complaint's most striking allegation is a single database entry generating hundreds of alerts in New York and Los Angeles, over 100 in Philadelphia, and more in Baltimore, Detroit, Sacramento, Delaware, Seattle, Manchester, and Norfolk — within five days.[^ftc-complaint]

## The AI intervention or event

**Enrollment.** People were added to the database when Rite Aid believed they had engaged in criminal activity at a store, or on "BOLO" information from law enforcement. Entries carried images plus, where known, names, birth years, and notes on alleged behaviour.[^ftc-complaint]

Rite Aid had image-quality standards — subjects facing forward, eyes aligned with the tops of the ears, glasses off, neutral expression.[^ftc-complaint] The complaint alleges it routinely ignored them, using blurry camera captures, overexposed and glare-affected images, and photographs taken in low natural light. A Rite Aid employee told the vendor that "[t]he majority of images captured by [Rite Aid's facial recognition] cameras" and enrolled were of inadequate quality, noting that the cameras did not adjust to changing daylight and that much of the activity being captured happened at night.[^ftc-complaint]

**Matching and alerting.** When the system matched a shopper against an enrollment, it alerted employees.[^bedoya] Store-level staff typically did not receive confidence intervals that would have helped them judge whether a match was likely false.[^bedoya]

**Action.** Employees followed consumers, searched them, ordered them to leave, publicly accused them — sometimes in front of friends or family — and called the police.[^ftc-complaint]

**What was not done.** No accuracy testing before deployment. No enforcement of the image standards. No meaningful training or oversight of the staff interpreting alerts. And no procedure of any kind for tracking the false-positive rate once the system was live.[^ftc-complaint] The complaint alleges that an internal presentation about expanding the programme identified exactly one risk: "[m]edia attention and customer acceptance."[^bedoya]

**Where it was deployed.** Approximately 80% of Rite Aid stores were in plurality-White areas. About 60% of the stores running facial recognition were in plurality non-White areas.[^ftc-complaint] The complaint alleges Rite Aid prioritised what it called "urban" areas and stores along public transport routes without considering the distributional effect.[^ftc-complaint]

## Outcomes and economics

There is no revenue figure, no cost figure, and no measure of loss prevented anywhere in this record. Rite Aid never quantified what the system caught, and the FTC did not need to.

What is quantified is error, from the records Rite Aid did keep:[^ftc-complaint]

| Indicator, December 2019 to July 2020 unless stated | Figure |
| --- | --- |
| False-positive match alerts recorded by employees | thousands |
| Alerts in stores more than 100 miles from the enrolling store | over 5,000 |
| Alerts implausibly close in time across distant locations | over 2,000 |
| Alerts from one enrollment in a five-day period | over 900, across 130+ stores |
| Individuals enrolled in the database | at least tens of thousands |
| Rate of false positives tracked by any Rite Aid procedure | none |

The last row is the case. Every number above is a byproduct of records kept for other reasons; the complaint alleges there was "a general failure to record the accuracy or outcomes of match alerts."[^ftc-complaint] Nobody at Rite Aid could have said what fraction of alerts were wrong, because nobody counted.

**The remedy.** Five years' prohibition on deploying or using any facial recognition or analysis system in any retail store, retail pharmacy, or online retail platform; deletion of the covered biometric information; and comprehensive programme requirements.[^ftc-order] No monetary relief to consumers appears in the order read here, and the company entering it was in Chapter 11.

## Causal assessment and competing explanations

Labelled **descriptive**. The record documents a deployment and an enforcement action. It contains no measured error rate for Rite Aid's system, no controlled comparison against loss prevention without the technology, and no estimate of how many of the alerts staff acted on were wrong.

Three things deserve careful separation, because they are routinely collapsed.

**"The technology is racially biased" is not what the FTC established, and not quite what it alleged.** The complaint's paragraph 42 states the general proposition — that many facial recognition technologies produce more false positives for Black or Asian subjects than White, and higher error rates for women than men — as background.[^ftc-complaint] It then alleges that Rite Aid "made no effort" to consider it. NIST's own testing supports the general proposition and complicates it: false positive differentials by race and country of birth can reach a factor of 100, women show consistently higher false positives than men, and the elderly and children are elevated — but the effect is reversed for some algorithms developed in China, and a few developers submitted identification algorithms with undetectable false positive differentials.[^nist-8280] Differentials are a property of particular algorithms, not of the technology as such. Which is exactly why NIST's stated implication is that "it is incumbent upon the system owner to know their algorithm", measured on operational data.[^nist-8280]

So the honest formulation is narrow and worse for Rite Aid than the loose one: the company deployed an unnamed algorithm in disproportionately non-White neighbourhoods without ever measuring whether that algorithm misidentified the people living there. NIST published the instruction to measure in December 2019, during the deployment.[^nist-8280]

**Disparate deployment is established more clearly than disparate error.** The 80%-versus-60% comparison describes where the cameras were, which the complaint alleges from Rite Aid's own footprint.[^ftc-complaint] It does not establish differential error rates within the system, because those were never measured.

**"Neither admit nor deny" is not a finding of innocence, and settlement is not proof.** Rite Aid was in bankruptcy, negotiating with a regulator that already held a 2010 order against it. A company in that position has reasons to settle that are independent of the merits, in either direction. This case does not resolve which applied.

## Failures, limitations, and governance

- **No false-positive rate, ever.** Eight years of operation with no procedure to track how often the system was wrong — the single omission from which most of the rest follows.[^ftc-complaint]
- **No accuracy testing before or after deployment.**[^ftc-complaint]
- **Image quality standards existed and were not enforced.** The company knew its own cameras produced inadequate images; an employee told the vendor so.[^ftc-complaint]
- **The only recorded risk was reputational.** An expansion presentation identifying "media attention and customer acceptance" as the risk is a governance artefact worth reading twice: the harm being managed was to the company.[^bedoya]
- **Alerts arrived without confidence information.** Store staff were asked to act on a match with no indication of how confident the system was.[^bedoya]
- **Enrollment volume was an incentive.** "Push for as many enrollments as possible" grows the database — and a larger gallery of low-quality images raises the false-positive rate.[^ftc-complaint]
- **Consumers were not told, deliberately.** Employees were instructed not to reveal the technology's use.[^ftc-complaint]
- **Deployment was concentrated where the population was least like the training assumptions nobody checked.**[^ftc-complaint]
- **A prior federal order was already in force and, the FTC charged, being violated.**[^ftc-complaint][^ftc-order]
- **The remedy landed on a company already in Chapter 11.** A five-year prohibition binds an entity whose future was being decided in bankruptcy court.[^ftc-order]

## What this case demonstrates

1. An organisation can operate a consequential classifier for eight years without ever knowing its error rate, if nobody requires the measurement. The absence was not a lapse in a monitoring system; there was no monitoring system.
2. Precision is the metric that matters when errors fall on the public, and it is the metric most often absent. This library has now recorded the same gap in a hospital that published sensitivity without positive predictive value and a factory that published recall without precision. Here nothing was published because nothing was counted.
3. Automation makes an accusation portable. A single enrollment produced over 900 alerts in more than 130 stores in five days — a scale of repeated misidentification that a human memory cannot generate.
4. Where a system is deployed is a design decision with distributional consequences, independent of the model. Cameras concentrated in plurality non-White neighbourhoods redistribute error before any algorithm runs.
5. Independent benchmarks existed and pointed at the right action. NIST's 2019 testing did not say "facial recognition is biased" — it said differentials vary by algorithm and owners must measure their own on their own data.[^nist-8280]
6. A risk register that lists only reputational risk is evidence about what an organisation thinks it is protecting.
7. Human review is not a safeguard when the human is given an alert and no confidence estimate, no training, and an instruction to act.
8. Enforcement can reach an AI deployment through ordinary consumer-protection law. The FTC did not need an AI statute; unfairness under Section 5 was sufficient.
9. Settlements buy remedies, not facts. The ban is real and the findings are not, and a case record has to keep those apart.

## What this case does not demonstrate

- It does not establish that Rite Aid did any of the things alleged. The company neither admitted nor denied, and no court weighed the evidence.[^ftc-order]
- It does not establish the system's false-positive rate, because on the FTC's own account it was never measured.
- It does not show that Rite Aid's algorithm had demographic differentials. The vendors are unnamed, the algorithm untested, and NIST's finding is that differentials are algorithm-specific.[^nist-8280]
- It does not quantify how many people were wrongly stopped, searched, expelled, or reported to police. The complaint describes categories of harm and specific incidents, not totals.
- It does not show the system prevented any theft, or what it cost to run. Neither figure exists in this record.
- It does not tell you whether the deleted biometric information was in fact deleted, or how the five-year prohibition was monitored in a company undergoing bankruptcy.
- It does not describe retail facial recognition generally. This is one chain's deployment as characterised by its regulator.
- It does not address whether the technology could be operated responsibly. The FTC's theory is about the absence of safeguards, not the impossibility of them, and the order is a five-year prohibition rather than a permanent one.

## Evidence assessment

**Grade B — authoritative primary documents about an action, resting on allegations nobody ever tested.**

The documentary quality is high. The complaint is a federal court filing authorised by a 3-0 Commission vote, drawing on an investigative record that includes Rite Aid's internal presentations, its correspondence with its vendor, its employee training material, and its own alert records — material no outside party could obtain.[^ftc-complaint] The order is court-entered and binding.[^ftc-order] The Commissioner's statement footnotes every factual claim to a numbered paragraph.[^bedoya] And on the one general proposition the complaint asserts as background, NIST supplies a genuinely independent chain: 189 algorithms, 99 developers, 18.27 million images, published protocol, exhaustive annexes.[^nist-8280]

What holds the case at B is structural and cannot be repaired from this record.

*The allegations were never tested.* Paragraph 5 of the stipulated order records that the defendants neither admit nor deny them.[^ftc-order] A complaint is the prosecuting party's best case, drafted to establish liability, quoting internal documents it selected. Rite Aid never answered it. Under this library's rules an unproven allegation is Attributed, never Verified, and the material claims table applies that without exception to conduct.

*Three of the four sources are one chain.* The complaint, the order, and the Commissioner's statement all issue from the same action on the same day and trace to the same investigation; the statement is explicitly a reading of the complaint. NIST is a separate chain but speaks only to the general behaviour of facial recognition algorithms, not to anything Rite Aid did. So the conduct in this case has exactly one source.

*The reporting that started it is out of reach.* The FTC's action followed press investigation of Rite Aid's use of the technology. That journalism could not be read from this sandbox, so it is not cited, and the case is poorer for lacking any account of these events that is not the government's.

*The vendors are unnamed.* Without knowing which algorithms ran, the deployment cannot be assessed against NIST's per-algorithm results — which is the assessment NIST says a system owner should have done, and the one the complaint alleges Rite Aid never did.

Two conflicts are worth naming rather than assuming. The FTC drafted the complaint to win; it is not a neutral history. And Rite Aid settled while in Chapter 11 and subject to a prior 2010 order, a position that gives a company reasons to settle regardless of the merits.

One clarification about NIST, because the shorthand version of its finding is misleading and this case declines to use it. NIST did not find that facial recognition is uniformly biased. It found large differentials that vary by algorithm — reversed for some developers, undetectable for others — and concluded that owners must measure their own system on their own data.[^nist-8280] That is a more demanding standard than "the technology is biased", and it is the standard the FTC alleges Rite Aid failed.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| Rite Aid used facial recognition in hundreds of stores from 2012 to 2020. | Attributed | Alleged in the FTC's complaint; neither admitted nor denied[^ftc-complaint][^ftc-order] | Adjudicated findings, or a Rite Aid account contradicting it |
| Rite Aid never implemented any procedure for tracking the false-positive rate. | Attributed | Alleged as a specific failure in the complaint's unfairness count[^ftc-complaint] | Production of a monitoring procedure, or adjudicated findings |
| The system generated thousands of recorded false-positive alerts between December 2019 and July 2020. | Attributed | Alleged from Rite Aid's own records, which the complaint says were kept only incidentally[^ftc-complaint] | The underlying records, or adjudicated findings |
| One enrollment produced over 900 alerts in more than 130 stores in five days. | Attributed | Alleged with locations itemised — New York, Los Angeles, Philadelphia, Baltimore, Detroit, Sacramento, Delaware, Seattle, Manchester, Norfolk[^ftc-complaint] | The alert logs, or adjudicated findings |
| Employees searched, expelled, publicly accused, and called police on people flagged by false matches. | Attributed | Alleged, with an 11-year-old girl stopped and searched, and police called on a Black customer over an image later described as "a white lady with blonde hair"[^ftc-complaint][^bedoya] | Adjudicated findings, or contemporaneous records contradicting the incidents |
| About 60% of stores using the technology were in plurality non-White areas, against about 80% of all Rite Aid stores being in plurality-White areas. | Attributed | Alleged from Rite Aid's store footprint[^ftc-complaint] | An independent count of store locations against census data |
| Rite Aid did not inform consumers and instructed employees not to reveal the technology's use. | Attributed | Alleged in the complaint[^ftc-complaint] | Evidence of signage or disclosure, or adjudicated findings |
| An internal expansion presentation identified only "media attention and customer acceptance" as a risk. | Attributed | Quoted by a Commissioner from the complaint's record[^bedoya] | The presentation itself, or adjudicated findings |
| Rite Aid neither admitted nor denied the allegations. | Verified | Stated at paragraph 5 of the court-entered stipulated order[^ftc-order] | Nothing; this is the order's text |
| Rite Aid is prohibited for five years from using facial recognition in any retail store, retail pharmacy, or online retail platform, and must delete covered biometric information. | Verified | Provisions I and II of the court-entered order[^ftc-order] | Modification or dissolution of the order |
| Rite Aid was in Chapter 11 when the order was entered and needed Bankruptcy Court approval for it. | Verified | Recited in the order's opening and in its stipulations[^ftc-order] | Nothing; this is the order's text |
| Facial recognition algorithms show demographic differentials in false positive rates. | Verified | NIST tested 189 algorithms from 99 developers on 18.27 million images: false positives highest in West and East African and East Asian subjects on application photos with differentials up to a factor of 100, higher in women than men consistently, elevated in the elderly and in children[^nist-8280] | A larger or more recent benchmark reaching different conclusions |
| Those differentials are uniform across algorithms. | Disputed | NIST found the effect reversed for a number of algorithms developed in China, and undetectable for some identification algorithms — which is why it recommends owners test their own[^nist-8280] | A benchmark showing uniformity across developers |
| Rite Aid's own algorithm misidentified Black, Asian, or women customers at elevated rates. | Unknown | Never measured by Rite Aid on the FTC's account, and the vendors are unnamed so no published benchmark can be matched to the system[^ftc-complaint][^nist-8280] | Identification of the vendors plus benchmark results, or testing of the retained system |
| The system prevented theft, or what it cost to operate. | Unknown | No figure for loss prevented, system cost, or benefit appears in any source read | Disclosure by Rite Aid or in bankruptcy proceedings |
| The ordered deletion of biometric information was carried out. | Unknown | No compliance report was found; the company was in bankruptcy | An FTC compliance filing or enforcement action |

## Direct quotations

> “Defendants neither admit nor deny any of the allegations in the Complaint, except as specifically stated in this Stipulated Order or in the Decision and Order set forth in Attachment A.”

— The stipulated order, on the evidentiary status of everything the complaint alleges[^ftc-order] · locator: Stipulated Order, FINDINGS, paragraph 5

> “IT IS ORDERED that Respondents, in connection with the activities of any Covered Business, are prohibited for five (5) years from the effective date of this Order from deploying or using, or assisting in the deployment or use of, any Facial Recognition or Analysis System, whether directly or through an intermediary, in any retail store or retail pharmacy or on any online retail platform.”

— The operative prohibition[^ftc-order] · locator: Decision and Order, Provision I, "Use of Facial Recognition or Analysis Systems Prohibited"

> “Rite Aid trained store-level security employees to ‘push for as many enrollments as possible.’”

— The FTC's complaint, on how the database grew[^ftc-complaint] · locator: Complaint, paragraph 23

> “In fact, although approximately 80 percent of Rite Aid stores are located in plurality-White (i.e., where White people are the single largest group by race or ethnicity) areas, about 60 percent of Rite Aid stores that used facial recognition technology were located in plurality non-White areas.”

— The FTC's complaint, on where the cameras went[^ftc-complaint] · locator: Complaint, paragraph 41

> “[E]very black man is not [a] thief nor should they be made to feel like one.”

— A consumer writing to Rite Aid after being confronted on a false match, quoted in the complaint[^ftc-complaint] · locator: Complaint, paragraph 92

> “A Rite Aid employee stopped and searched an 11-year-old girl because of a false match. The girl's mother reported that she missed work because her daughter was so distraught about the incident.”

— Commissioner Bedoya, summarising complaint paragraph 91[^bedoya] · locator: Statement of Commissioner Bedoya, section 1, first bullet

> “Operational implementations usually employ a single face recognition algorithm. Given algorithm-specific variation, it is incumbent upon the system owner to know their algorithm.”

— NIST, four years before the FTC's action and during Rite Aid's deployment[^nist-8280] · locator: NISTIR 8280, Executive Summary, "Implications of these tests"

## Revision notes

- 2026-09-13 — Initial publication at Grade B. The library's first `retail` case, and its first built primarily on an untested pleading, which shapes everything: the complaint, the stipulated order, and the Commissioner's statement are one evidentiary chain from one action on one day, and Rite Aid neither admitted nor denied any of it. Every conduct claim is therefore labelled Attributed and the case carries a status note above the executive summary saying so, rather than letting a well-sourced complaint read as findings. Only the order's own terms are Verified. NIST's FRVT Part 3 is the second chain and is cited with care: it supports demographic differentials in general and explicitly contradicts the uniform version of that claim, which is recorded as `Disputed`. The press investigation that preceded the FTC action could not be read from this sandbox and is not cited, leaving the case without any account of these events that is not the government's — a gap named in the evidence assessment. Related to AAI-2026-006 and AAI-2026-013 by the recurring absence of a precision figure, and to AAI-2026-009 by distributional harm from an unvalidated selection system.

[^ftc-complaint]: Federal Trade Commission, [Complaint for Permanent Injunction and Other Relief, FTC v. Rite Aid Corporation and Rite Aid Hdqtrs. Corp., Case 2:23-cv-05023 (E.D. Pa.)](https://search.ftc.gov/system/files/ftc_gov/pdf/2023190_riteaid_complaint_filed.pdf), filed 2023-12-19.

[^ftc-order]: Federal Trade Commission and Rite Aid Corporation, [Stipulated Order for Permanent Injunction and Other Relief, FTC v. Rite Aid Corporation, Case 2:23-cv-05023 (E.D. Pa.)](https://search.ftc.gov/system/files/ftc_gov/pdf/2023190_riteaid_stipulated_order_filed.pdf), filed 2023-12-19.

[^bedoya]: Alvaro M. Bedoya, [“Statement of Commissioner Alvaro M. Bedoya On FTC v. Rite Aid Corporation & Rite Aid Headquarters Corporation”](https://www.ftc.gov/system/files/ftc_gov/pdf/2023190_commissioner_bedoya_riteaid_statement.pdf), FTC File No. 202-3190, 2023-12-19.

[^nist-8280]: Patrick Grother, Mei Ngan, and Kayee Hanaoka, [“Face Recognition Vendor Test (FRVT) Part 3: Demographic Effects”](https://nvlpubs.nist.gov/nistpubs/ir/2019/NIST.IR.8280.pdf), NISTIR 8280, National Institute of Standards and Technology, 2019-12-19, doi:10.6028/NIST.IR.8280.
