---
case_id: AAI-2026-019
title: "Three days from a questionnaire to a chatbot switched off in Italy"
summary: "Italy's data protection authority asked DeepSeek for information on a Tuesday, got an answer on the Wednesday saying the company did not operate in Italy and EU law did not apply, and on the Thursday ordered it to stop processing Italian users' data. The investigation it opened alongside the order has still not concluded."
organization:
  - Hangzhou DeepSeek Artificial Intelligence Co., Ltd.
  - Beijing DeepSeek Artificial Intelligence Co., Ltd.
  - Garante per la protezione dei dati personali
case_type: governance-regulatory
secondary_case_types:
  - deployment
industry:
  - technology
business_function:
  - legal-compliance
deployment_stage: paused
outcome: negative
evidence_grade: B
status: published
created: 2026-09-14
published: 2026-09-14
last_verified: 2026-09-14
next_review: 2027-03-14
geography:
  - Italy
  - China
environment: production
deployment_pattern:
  - customer-facing-assistant
causal_strength: descriptive
related_cases:
  - AAI-2026-011
  - AAI-2026-017
evidence_upgrade_path: "The open question is not what was ordered but what happened next, and only two bodies can answer it. Grade A needs the conclusion of the investigation the Garante opened on the same day — still running as this case is published, more than nineteen months later — or the outcome of any objection lodged with the ordinary courts under Article 78, which would put the order in front of a judge rather than leaving it as one authority's determination. Two narrower things would help: independent verification that processing of Italian users' data actually stopped, which nobody in this record has tested, and DeepSeek's own account of its position, which exists here only as two sentences summarised inside the order against it."
sources:
  - id: garante-order
    author: "Garante per la protezione dei dati personali (Stanzione, Cerrina Feroni, Ghiglia, Scorza; Mattei, Secretary-General)"
    title: "Provvedimento del 30 gennaio 2025 [doc. web n. 10098477]"
    publisher: "Garante per la protezione dei dati personali"
    published: 2025-01-30
    url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10098477"
    accessed: 2026-09-14
    roles:
      - direct-evidence
      - primary-investigation
    source_family: garante-deepseek-order
    access: "The Authority's own order, published in full in Italian with the Authority's own English rendering alongside it. It recites the request for information, the companies' reply, what the Authority's checks found about the service's availability in Italy, each provision it considers breached, the measure imposed, and the route to challenge it."
    method: "An administrative order made under Article 58(2)(f) of the GDPR, adopted at a meeting of the collegial Authority. Its findings rest on the companies' written reply of 29 January 2025 and on the Authority's own verification of what was reachable from Italy on 30 January. It is a determination by one party with enforcement power, made before any investigation concluded and before any court reviewed it."
    conflicts: "The regulator ruling on a matter it opened, against a company that had told it the Regulation did not apply. It is the accusing party and the deciding party, which is the ordinary position of an administrative authority and not a defect — but it is one side's determination, and the order itself names the court to which the other side may object."
    corroboration: "Its account of the app's disappearance from the Italian Apple and Google stores is independently reported by Il Sole 24 Ore, which places the removal a day earlier and adds that the website and already-installed apps kept working. No source read here verifies that processing actually stopped after the order."
    accountability: "Published by the Authority under a permanent document number, naming every member who took part, citing each article relied on, stating the criminal and administrative penalties for non-compliance, and setting out the thirty-day route to object before the ordinary courts."
    notes: "Read in full in both the Italian and the Authority's English version. One anomaly is present in both and is recorded in this case: an order dated 30 January 2025 states that the privacy policy it examined was 'aggiornata al 5 dicembre 2025' — 'updated as of 5 December 2025' — a date that had not yet occurred."
  - id: garante-press
    author: "Garante per la protezione dei dati personali"
    title: "COMUNICATO STAMPA — Intelligenza artificiale: il Garante privacy blocca DeepSeek [doc. web n. 10097450]"
    publisher: "Garante per la protezione dei dati personali"
    published: 2025-01-30
    url: "https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10097450"
    accessed: 2026-09-14
    roles:
      - direct-evidence
    source_family: garante-deepseek-order
    access: "The Authority's public announcement of the same action, issued the same day in Italian and English."
    method: "Not an investigation. A press statement summarising the order, used here only for the Authority's own framing of why it acted and for the fact that it opened an investigation at the same time."
    conflicts: "The Authority describing its own action to the public on the day it took it. Same chain as the order, and filed in the same source family for that reason."
    corroboration: "Consistent with the order in every particular this case relies on."
    accountability: "Published under a permanent document number on the Authority's own site, bilingual."
    notes: "Read in full. It is the source for the statement that the companies' communication was judged 'del tutto insufficiente' and that an investigation was opened alongside the limitation."
  - id: ilsole
    author: "Il Sole 24 Ore"
    title: "Deepseek, il Garante Privacy dispone blocco e apre istruttoria"
    publisher: "Il Sole 24 Ore"
    published: 2025-01-30
    url: "https://en.ilsole24ore.com/art/deepseek-garante-privacy-dispone-blocco-e-apre-istruttoria-AG7BACeC"
    accessed: 2026-09-14
    roles:
      - independent-reporting
    source_family: ilsole24ore-reporting
    access: "The paper's own information about what the company did before the order arrived, attributed in the text to information gathered by Il Sole 24 Ore rather than to the Authority."
    method: "Same-day news reporting quoting the Authority's statement and adding the paper's own reporting on the app's removal and on the state of the service."
    conflicts: "None disclosed and none apparent. An Italian financial daily reporting on an Italian regulator, published within hours of the order, with a commercial interest in being first that cuts toward speed rather than toward either party."
    corroboration: "Its account of the app's removal matches the Authority's own finding, while dating the removal a day earlier and adding that the website and previously installed apps continued to work."
    accountability: "A masthead daily with a corrections process, timestamped to the minute, distinguishing quoted material from its own reporting."
    notes: "Read in full. Used for one fact the Authority's documents do not carry: that the company pulled its app from the Italian stores the day before the order, leaving the website and installed apps running with noticeable slowdowns. No individual byline appeared on the page as read."
tags:
  - data-protection
  - gdpr
  - territorial-scope
  - regulatory-suspension
  - chatbot
  - cross-border-transfer
---

## Case in one sentence

Italy's data protection authority sent DeepSeek a request for information on 28 January 2025, received a reply on 29 January saying the companies had not entered the Italian market and that the GDPR did not apply to them, and on 30 January ordered them to stop processing the personal data of people in Italy — a measure still in force nineteen months later, with the investigation opened alongside it still unconcluded.

## Executive summary

DeepSeek's chatbot reached the global market in January 2025 and, in the Garante's own words, was downloaded by millions of people in a few days.[^garante-press] On 28 January the Authority sent the two Chinese companies operating the service a request for information.[^garante-order]

The reply, received on 29 January, made a jurisdictional argument: the companies **had not entered and did not plan to enter the Italian market**, they had removed the DeepSeek app from the local app stores, and the Regulation did not apply to their processing.[^garante-order]

The Authority checked. It found that as of 30 January the app was indeed gone from the Italian Apple and Google stores and unreachable through the website's QR code — but that the service remained accessible through the website, and remained usable by anyone who had already registered.[^garante-order] Il Sole 24 Ore, reporting the same day on its own information, placed the app's removal a day earlier and noted the website and already-installed apps still worked, with significant slowdowns.[^ilsole]

That was enough. Article 3(2)(a) of the GDPR applies to processing by a controller outside the Union where the processing relates to offering goods or services to people in the Union. The Authority held that the companies "unquestionably offer the DeepSeek service to data subjects located in the European Union, more specifically in Italy," and therefore process their personal data.[^garante-order]

It then found six distinct breaches: failure to clarify the processing in reply to the Authority (Article 31); a privacy policy available only in English and inadequate on its face (Articles 12, 13, 14); no precise statement of the lawful basis for each processing activity (Article 6); consequent obstruction of data subject rights (Chapter III); storage of the data in the People's Republic of China without the Regulation's safeguards (Article 32); and no designated EU representative (Article 27).[^garante-order]

The order imposes "the definitive limitation on processing of personal data of data subjects located in Italy," with immediate effect from receipt, adopted "as a matter of urgency and pending the completion of the necessary investigation" — the Authority expressly reserving the right to take further measures once that investigation concludes.[^garante-order] Non-compliance carries the criminal penalty in Article 170 of the Italian Code and administrative fines under Article 83(5)(e).[^garante-order]

As this case is published, no conclusion of that investigation has been found, and no decision lifting the limitation.

## Research question

How quickly can a national regulator stop an AI service that says it does not operate in that country, and what is established at the moment it does so?

## Organization and operating context

The deployer here is the service's own maker, which makes this case a different shape from most in this library. There is no organisation that procured a tool, configured it and lived with the result — DeepSeek built and ran a consumer chatbot, and the users in Italy were its customers rather than its subjects.

The Authority is the Garante per la protezione dei dati personali, a collegial body: four members plus a secretary-general, all named in the order.[^garante-order] It has form in this area. It had taken measures against ChatGPT in 2023 and against Clearview AI before that, and it operates in a legal setting where an urgent measure can be adopted by the college and take effect on receipt.

The jurisdictional position is the whole case. The companies are established in Beijing and Hangzhou, the data was stored in the People's Republic of China, and the companies' own position was that European law did not reach them. Article 3(2)(a) exists precisely for that argument, and the order applies it in three sentences.

## The situation before AI

There is no pre-AI baseline in the usual sense; the service is three weeks old at the point of the order. What existed before was a settled body of law about territorial scope, drafted for a world of websites and written to survive exactly this defence — that a company can serve users in a member state while asserting it has no presence there.

What also existed was a pattern of behaviour. The Authority's own request for information, sent two days before it acted, is the standard first step. The order records that the reply failed to clarify the main aspects of the processing, which is itself a breach of Article 31's duty to cooperate.[^garante-order] The sequence is the ordinary one; only the compression is unusual.

## The AI intervention or event

**28 January 2025.** The Garante sends a request for information to both companies.[^garante-order]

**29 January.** The companies reply: not in the Italian market, not planning to be, app removed from the local stores, Regulation inapplicable.[^garante-order]

**29 January, per Il Sole 24 Ore.** The paper reports, on its own information, that the company pulled the app from Apple's and Google's Italian stores — leaving the website live and previously installed apps working, with noticeable slowdowns.[^ilsole]

**30 January.** The Authority verifies what is reachable from Italy. App gone from both stores and from the site's QR route; website still accessible, with registration limited by what DeepSeek's own notice attributed to "large-scale malicious attacks"; and the service still usable by previously registered users.[^garante-order]

**30 January.** The college meets, declares the processing unlawful, and orders the definitive limitation of processing of the personal data of data subjects in Italy, with immediate effect on receipt, pending completion of an investigation opened the same day.[^garante-order][^garante-press]

The Authority's public statement gives its reason for not waiting: the companies' communication was judged "del tutto insufficiente" — entirely unsatisfactory.[^garante-press]

## Outcomes and economics

There are no economics in this case and the absence is total. No fine was imposed by this order. No revenue figure for the Italian market is available — the companies' position was that there was no Italian market. No cost of compliance, no cost of withdrawal, and no measure of how many people in Italy were using the service beyond the Authority's own "millions of people" for the global download figure.[^garante-press]

| | |
| --- | --- |
| Request for information sent | 28 January 2025 |
| Reply received | 29 January 2025 |
| Order adopted | 30 January 2025 |
| Elapsed | Three days |
| Measure | Definitive limitation on processing of data of people in Italy, effective on receipt |
| GDPR provisions found breached | Articles 6, 12, 13, 14, 27, 31, 32 and Chapter III |
| Fine imposed by this order | None |
| Penalty for non-compliance | Criminal penalty under Article 170 of the Italian Code; administrative fines under Article 83(5)(e) |
| Challenge route | Objection to the ordinary court within thirty days, Article 78 |
| Investigation status as at 2026-09-14 | No conclusion found |

The thing being spent here is not money. It is the availability of a service to a population, decided in three days by four people and a secretary-general, on the strength of a two-day-old questionnaire and one afternoon's checking of what was reachable from an Italian connection.

That is not a criticism. Urgency provisions exist because the alternative — processing continuing while a full investigation runs for a year or more — is the harm the provision is written to prevent. But it is worth stating plainly what the evidentiary basis was at the moment the service stopped, because the investigation that was supposed to establish more has not reported.

## Causal assessment and competing explanations

This case is labelled **descriptive**. It records what an authority did, on what stated grounds, in what sequence. It makes no claim about whether DeepSeek's processing actually harmed anyone in Italy, and no source read here measures anything.

Two readings of the sequence are worth separating.

**"The regulator stopped the service."** The order is the proximate cause of the service's legal unavailability, and it is what keeps it unavailable. But the app had already gone from the Italian stores a day earlier, by the company's own account and Il Sole's reporting.[^garante-order][^ilsole] Part of the withdrawal was the company's, and the order's own findings turn on what was *still* reachable rather than on what had been taken down.

**"The company withdrew and the order formalised it."** Against this: the companies did not stop the website, previously registered users kept access, and the companies' stated position was not that they were complying but that the law did not apply to them. An order was needed precisely because the withdrawal was partial and the legal question was contested.

Both are consistent with the record, and the record cannot settle the counterfactual: what DeepSeek would have done in Italy had no order issued.

One thing the case does not leave open is the legal reasoning, which is stated and checkable. The company argued no establishment; the Authority applied the targeting test in Article 3(2)(a) and found the service was offered to people in Italy. That is the point of law the case turns on, and it is available to be agreed with or disputed by anyone who reads the order.

## Failures, limitations, and governance

- **The defence was jurisdictional, and it is the one the Regulation anticipates.** "We have not entered this market and EU law does not apply" ran into a provision drafted for exactly that claim, and lost in a paragraph.[^garante-order]
- **Cooperation is itself an obligation.** The reply's failure to clarify the processing was found to breach Article 31 — a separate breach from anything about the service.[^garante-order]
- **A privacy policy in one language is a finding, not a formality.** English-only, and inadequate on its face against Articles 12, 13 and 14.[^garante-order]
- **No EU representative.** Article 27 requires a written mandate; there was none, which also means there was nobody in the Union to serve.[^garante-order]
- **Partial withdrawal is not compliance.** Removing an app while leaving the website and existing accounts live was found to be continued offering of the service.[^garante-order]
- **Speed cuts both ways.** Three days is fast enough to matter and short enough that the record at the moment of the order consisted of one exchange of letters and one day's verification.
- **The investigation has not reported.** The measure was expressly adopted pending it; more than nineteen months later this case can find no conclusion, which leaves the fullest account of the facts permanently in the future tense.
- **An anomaly sits in the primary document.** An order dated 30 January 2025 describes the privacy policy it assessed as updated on 5 December 2025, in both the Italian and the Authority's English version.[^garante-order]

## What this case demonstrates

1. Territorial scope is the first question for a consumer AI service, not a late one. The argument that a company has no local presence is answered by whether it offers the service to people who are there.
2. A regulator can stop a service in three days, and what it has established in three days is necessarily thin — an exchange of letters and one verification pass.
3. How a company answers a regulator's first letter is itself a regulated act. Failing to clarify the processing was found to be its own breach.
4. Withdrawing an app is not withdrawing a service while the website works and existing accounts keep functioning.
5. Urgent measures can outlive the urgency that justified them. This one was adopted pending an investigation that has still not concluded.
6. Data residency is a finding a regulator can make from a published privacy policy alone, without any access to the systems.
7. The absence of an EU representative is both a substantive breach and a practical one: it removes the party who would otherwise receive and answer.
8. A regulator's order is a good record of what a regulator decided and a poor record of what a company did, because the company's position survives in it only as summary.

## What this case does not demonstrate

- It does not establish that anyone in Italy was harmed. The order finds breaches of process, transparency, lawful basis, security and representation; it identifies no injured individual and quantifies no harm.
- It does not establish that processing of Italian users' data actually stopped. No source read here verifies compliance with the order.
- It does not settle the law. The order is one authority's determination, subject to objection before the ordinary courts within thirty days, and no judicial decision appears in this record.
- It does not give DeepSeek's account. The companies' position exists here as two sentences summarised inside the order against them; no direct statement from them was read.
- It does not tell you the outcome. The investigation opened on 30 January 2025 has not, as far as this case can establish, concluded.
- It does not show the service is permanently gone from Italy. Nothing in the record forecloses the companies complying and returning, which is why this case records the deployment as paused rather than retired.

## Evidence assessment

**Grade B — a complete primary order from the body that made it, and nothing yet from anyone who reviewed it.**

The central source could hardly be better for what it covers. It is the Authority's own order, published in full under a permanent document number, in Italian with the Authority's own English alongside it, naming every member who sat, citing every provision relied on, reciting the companies' position before rejecting it, stating the penalties for non-compliance, and naming the court and the deadline for objecting.[^garante-order] Nothing about what was ordered, or on what stated grounds, is in doubt.

Three things hold it at B.

*It is one party's determination.* The Garante opened the matter, assessed it, and decided it — the ordinary position of an administrative authority, and not a criticism, but it means the findings have not been tested by anyone. The order itself names the route by which they could be: an objection to the ordinary court under Article 78, within thirty days. This case found no record of one, and no judicial decision.

*The investigation it was adopted "pending" has not reported.* The measure was expressly urgent and interim in its reasoning while definitive in its terms, with further determinations reserved. More than nineteen months on, the fuller account that was supposed to follow does not exist, so the best available evidence remains the three-day record.

*Compliance is unverified.* Nobody in this record has checked whether processing of Italian users' data stopped. The order's own findings show a service that was partly withdrawn and partly still running at the moment it issued; what happened after is asserted by nobody.

The second chain is real but narrow. Il Sole 24 Ore reported the same day, quoting the Authority's statement and adding its own information: that the app came down from the Italian stores a day before the order, and that the website and installed apps kept working with significant slowdowns.[^ilsole] That is independent reporting on the facts on the ground rather than a relay of the announcement, and it is the only account here not written by the Authority. The press release shares the order's source family because it is the same body speaking on the same day.

One anomaly is recorded rather than resolved. The order is dated 30 January 2025 and states that the privacy policy it assessed was "aggiornata al 5 dicembre 2025", rendered in the Authority's own English as "updated as of 5 December 2025".[^garante-order] That date had not occurred. The likeliest reading is a typographical error for 2024, and this case does not adopt either date as a fact; it is noted because a primary document's internal consistency is part of what a reader is entitled to weigh.

A note on the deployment stage, which is an editor's call and stated as one. The order imposes a *definitive* limitation, and a reader could reasonably read that as retirement. This case records the stage as **paused** because the order was adopted pending an investigation that has not concluded, because the Authority expressly reserved further determinations, because the measure remains open to judicial objection, and because nothing in the record forecloses compliance and return. The word in the document is definitive; the situation it describes is unresolved.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| The Garante ordered the limitation of processing of Italian users' data on 30 January 2025, effective on receipt. | Verified | The Authority's published order under Article 58(2)(f)[^garante-order] | A subsequent measure lifting or amending the order |
| The Authority acted three days after sending its request for information. | Verified | The order recites the request of 28 January, the reply of 29 January, and is dated 30 January[^garante-order] | A correction to the published document |
| DeepSeek told the Authority it had not entered the Italian market and that the GDPR did not apply to it. | Verified | Recorded in the order as the companies' reply of 29 January 2025[^garante-order] | The companies' own account of what they submitted |
| The Authority found breaches of GDPR Articles 6, 12, 13, 14, 27, 31 and 32, and of Chapter III. | Verified | Enumerated in the order's recitals[^garante-order] | Judicial review setting any of them aside |
| DeepSeek removed its app from the Italian Apple and Google stores before the order issued. | Supported | The Authority verified the app's absence on 30 January; Il Sole 24 Ore reported the removal a day earlier on its own information[^garante-order][^ilsole] | The companies' own timeline, or app-store records |
| The service remained reachable in Italy through the website at the moment of the order. | Verified | The Authority's own verification, including that previously registered users retained access[^garante-order] | Evidence the verification was mistaken |
| Processing of Italian users' data in fact stopped after the order. | Unknown | No source read here tests compliance; the order provides penalties for non-compliance but records no finding of it[^garante-order] | A compliance finding, an enforcement action, or independent testing from Italy |
| The investigation opened alongside the order has concluded. | Unknown | Opened 30 January 2025; no conclusion was found as at 2026-09-14[^garante-press] | Publication of the final decision |
| The order has been reviewed by a court. | Unknown | The order names the objection route under Article 78 and a thirty-day deadline; no judicial decision appears in this record[^garante-order] | A judgment of the ordinary court |
| DeepSeek's processing harmed people in Italy. | Unknown | The order identifies breaches of process, transparency, lawful basis, security and representation; it names no injured individual and quantifies no harm[^garante-order] | A finding of damage, or a compensation claim under Article 82 |
| The service is permanently unavailable in Italy. | Unknown | The measure is termed definitive but was adopted pending an unconcluded investigation, with further determinations reserved[^garante-order] | The investigation concluding, or the companies complying and returning |

## Direct quotations

> «RITENUTO, a fronte degli accertamenti svolti, che non sia revocabile in dubbio il fatto che le Società offrano il servizio DeepSeek ad interessati che si trovano nell'Unione europea, segnatamente in Italia»

— Garante per la protezione dei dati personali; in the Authority's own English, "CONSIDERING, as a result of the investigation carried out, that the Companies unquestionably offer the DeepSeek service to data subjects located in the European Union, more specifically in Italy"[^garante-order] · locator: Provvedimento 10098477, recital beginning "RITENUTO, a fronte degli accertamenti svolti"

> «RAVVISATA, pertanto, la necessità di disporre, ai sensi dell'art. 58, par. 2, lett. f), del Regolamento - in via d'urgenza e nelle more del completamento della necessaria istruttoria»

— Garante per la protezione dei dati personali; in the Authority's own English, "ACKNOWLEDGING, thus, pursuant to Article 58 (2)(f) of the Regulation - as a matter of urgency and pending the completion of the necessary investigation"[^garante-order] · locator: Provvedimento 10098477, operative recital preceding the order

> «Il provvedimento di limitazione - adottato a tutela dei dati degli utenti italiani - fa seguito alla comunicazione delle società ricevuta oggi, il cui contenuto è stato ritenuto del tutto insufficiente.»

— Garante per la protezione dei dati personali; in the Authority's own English, "The limitation order - imposed to protect Italian users' data - follows the companies' communication received today, whose content was deemed entirely unsatisfactory."[^garante-press] · locator: Comunicato stampa 10097450, third paragraph

> «FINDING that, in accordance with the privacy policy, the data collected by the data controller in connection with the provision of the DeepSeek service are stored in the People's Republic of China, in violation of the safeguards provided for by the Regulation, in particular Article 32 on security of processing»

— Garante per la protezione dei dati personali, in its own English version[^garante-order] · locator: Provvedimento 10098477, recital on data storage

## Revision notes

- 2026-09-14 — Initial publication at Grade B. The library's first `paused` deployment and its first Italian case, added after two other candidates were checked and rejected for the same field: Amsterdam's Smart Check is recorded by its own operator as out of use, and OpenAI's Astra pause concerns a model that was never deployed. The stage here is an editor's call and argued in the evidence assessment rather than asserted — the order imposes a *definitive* limitation, which a reader could fairly read as retirement, and this case records `paused` because the measure was adopted pending an investigation that has not concluded, because further determinations were expressly reserved, because judicial objection remains open, and because nothing forecloses compliance and return. Two source families: the Authority's own order and press release, read in full in Italian and in the Authority's own English; and Il Sole 24 Ore's same-day reporting, which is the only account in this record not written by the regulator and which supplies one fact the Authority's documents do not — that the app came down a day before the order, leaving the website and installed apps working. Grade B rather than A because the findings are one party's determination, untested by any court, with the investigation that was supposed to establish more still unreported nineteen months on, and with compliance verified by nobody. An anomaly in the primary document is recorded and not resolved: an order dated 30 January 2025 describes the privacy policy it assessed as updated on 5 December 2025, in both language versions. Quotations follow the library's convention for non-English sources, with the Italian in the blockquote and the Authority's own published English in the attribution rather than a translation of mine. Related to AAI-2026-011 as a second data protection regulator reaching an AI service across a border, and to AAI-2026-017 as a second case in which a consumer AI assistant's behaviour is assessed by a party that is not its vendor.

[^garante-order]: Garante per la protezione dei dati personali, [Provvedimento del 30 gennaio 2025, doc. web n. 10098477](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10098477). Read in full in Italian and in the Authority's own English version published alongside it.

[^garante-press]: Garante per la protezione dei dati personali, [“COMUNICATO STAMPA — Intelligenza artificiale: il Garante privacy blocca DeepSeek”, doc. web n. 10097450](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10097450), 2025-01-30. Bilingual.

[^ilsole]: Il Sole 24 Ore, [“Deepseek, il Garante Privacy dispone blocco e apre istruttoria”](https://en.ilsole24ore.com/art/deepseek-garante-privacy-dispone-blocco-e-apre-istruttoria-AG7BACeC), 2025-01-30, 19:49 CET. No individual byline appeared on the page as read.
