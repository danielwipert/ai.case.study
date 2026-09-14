---
case_id: AAI-2026-017
title: "Everyone measuring the assistants owns the content they get wrong"
summary: "Twenty-two public service broadcasters had 271 journalists rate 2,709 AI assistant answers about the news. Forty-five per cent had a significant issue, sourcing most of all, and a BBC-to-BBC rerun showed the rate falling from 51% to 37% in six months. Every measurement in the record was made by a publisher whose own content was being cited."
organization:
  - British Broadcasting Corporation
  - European Broadcasting Union
  - National Public Radio
case_type: evaluation
secondary_case_types:
  - deployment
industry:
  - media
business_function:
  - research-development
deployment_stage: scaled-production
outcome: mixed
evidence_grade: B
status: published
created: 2026-09-14
published: 2026-09-14
last_verified: 2026-09-14
next_review: 2027-03-14
geography:
  - International
  - United Kingdom
  - United States
  - Germany
  - Switzerland
  - Finland
  - Ukraine
environment: production
deployment_pattern:
  - customer-facing-assistant
causal_strength: descriptive
related_cases:
  - AAI-2026-016
  - AAI-2026-012
evidence_upgrade_path: "Grade A needs a measurement by somebody who does not own the content. The specific candidates: an AI vendor publishing a comparable news-integrity evaluation against a stated taxonomy, which none has; a regulator or standards body running the protocol — the toolkit was published so that others could; or an academic replication using the published criteria on a sample the publishers did not choose. Two narrower things would also help: inter-rater agreement statistics, which the report does not give despite 271 evaluators applying a four-point scale, and the underlying response-level dataset, which would let an outside party recompute the headline rate."
sources:
  - id: ebu-bbc-2025
    author: "James Fletcher (BBC) and Dorien Verckist (EBU), with Hicham Yezza, Andrew Secker and Léa Hermen"
    title: "News Integrity in AI Assistants: An international PSM study"
    publisher: "European Broadcasting Union and BBC"
    published: 2025-10-21
    url: "https://www.ebu.ch/files/live/sites/ebu/files/Publications/MIS/open/EBU-MIS-BBC_News_Integrity_in_AI_Assistants_Report_2025.pdf"
    accessed: 2026-09-14
    roles:
      - primary-investigation
      - direct-evidence
    source_family: ebu-bbc-psm-study
    access: "Responses generated from four live consumer assistants — ChatGPT, Copilot, Gemini and Perplexity — in June and July 2025, then rated by journalists inside the organisations whose news content the assistants were asked about. 2,709 evaluated responses to a common set of 30 core questions, plus 353 responses to questions each organisation wrote for its own market."
    method: "Each of 22 organisations put the same 30 core questions to all four assistants and rated every response against five criteria — accuracy, sourcing, distinguishing fact from opinion, editorialization, and context — on a four-point scale of no issues, some issues, significant issues, or don't know. 271 journalists took part across 23 evaluations, Yle rating in both Finnish and Swedish. Of a potential 2,760 core responses, refusals, generation failures and unavailable evaluators left 2,709. Quality assurance ran in two passes: project teams checked every significant issue for evidence and classification, then a central team checked again after submission. The report states plainly that participant organizations remain responsible for the quality of their own data."
    conflicts: "Structural and unavoidable. The evaluators are journalists employed by the organisations whose articles the assistants were citing, rating whether their own work was represented faithfully, at a moment when publishers and AI companies are in dispute over content use — a dispute the report's own foreword raises, noting assistants repurpose publisher content 'often without publishers' permission'. No AI vendor and no disinterested party contributed a rating."
    corroboration: "Internally, the four-assistant design means each organisation's ratings can be compared against the others' on the same questions, and the report finds the pattern holds across every language, country and organisation. Externally, none: no comparable evaluation by a vendor, regulator or academic group exists to check the headline rate against."
    accountability: "Named authors with named roles at two named institutions, a participant list by organisation and named editorial committee, a methodology appendix giving the question set, generation protocol, rating scale and exclusions, a results appendix, and a companion toolkit published so that others can apply the taxonomy. 69 pages."
    notes: "Read for this case: foreword, high-level findings, the BBC-to-BBC comparison, and the full methodology and quality-assurance appendices; the per-criterion detailed findings were read selectively rather than line by line. The report's own HTML landing page returns 403 to this sandbox; the PDF asset URL does not, which is how it was obtained."
  - id: bbc-first-round
    author: "British Broadcasting Corporation"
    title: "Representation of BBC News content in AI Assistants"
    publisher: "BBC"
    published: 2025-02-11
    url: "https://www.bbc.co.uk/aboutthebbc/documents/bbc-research-into-ai-assistants.pdf"
    accessed: 2026-09-14
    roles:
      - primary-investigation
    source_family: bbc-first-round
    access: "The earlier, single-organisation round: the same four assistants, given access to the BBC website for the duration, asked news questions and prompted to use BBC News articles as sources, with answers reviewed by BBC journalists who were subject experts in the relevant topics."
    method: "Journalist review against criteria including accuracy, impartiality and faithfulness to the cited BBC article. 362 responses were evaluated. The round reported 51% of answers with significant issues of some form, 19% of answers citing BBC content introducing factual errors, and 13% of quotes drawn from BBC articles either altered or absent from the article cited."
    conflicts: "The same interest as the later round and concentrated in one organisation: the BBC measuring how its own journalism is represented, while stating in the same document that assistants repurpose publisher content without permission. The foreword is simultaneously an account of the BBC's own AI use and an argument about AI companies."
    corroboration: "Superseded rather than confirmed. The later multi-organisation round reran the BBC arm and found a materially lower rate, which is the closest thing to a check that exists."
    accountability: "Published on the BBC's own corporate site as a dated 24-page document with its criteria described, though without named authors or an appendix giving the question set."
    notes: "Read in full. It matters here for one reason beyond its own numbers: it is the baseline the second round measures against, and the two rounds were run six months apart on the same four products."
  - id: npr-participant
    author: "Erica Osher and Sharahn Thomas-Fulton"
    title: "Global study on news integrity in AI assistants shows need for safeguards and improved accuracy"
    publisher: "NPR Extra, National Public Radio"
    published: 2025-10-21
    url: "https://www.npr.org/sections/npr-extra/2025/10/21/g-s1-94424/global-study-on-news-integrity-in-ai-assistants-shows-need-for-safeguards-and-improved-accuracy"
    accessed: 2026-09-14
    roles:
      - participant-account
    source_family: npr-participation
    access: "One participating organisation's own account of why it took part and what it takes from the result, written by a member of the study's participant editorial committee."
    method: "Not a measurement. A newsroom explaining its participation and endorsing the findings of a study it contributed data to."
    conflicts: "A participant describing a study it helped produce, with the same publisher interest as every other contributor. It is included as evidence that the participation was real and openly declared, not as an independent check."
    corroboration: "Confirms the study's scale as described — 22 organisations, 18 countries, 14 languages — from inside a different organisation than the two that led it."
    accountability: "Named authors, dated to the day, published on NPR's own site under a section that identifies it as institutional rather than editorial content."
    notes: "Read in full. Its author Erica Osher appears on the report's participant editorial committee, which is why it is filed as a participant account rather than as reporting."
tags:
  - news-integrity
  - ai-assistants
  - public-service-media
  - sourcing
  - repeat-measurement
  - interested-measurement
---

## Case in one sentence

Twenty-two public service broadcasters ran the same thirty news questions past four consumer AI assistants and had 271 of their own journalists rate 2,709 answers, finding a significant problem in 45% of them and an improvement since the previous round — a body of measurement that is unusually careful and that no disinterested party has ever attempted.

## Executive summary

In June and July 2025, 22 public service media organisations across 18 countries and 14 languages put a common set of 30 news questions to ChatGPT, Copilot, Gemini and Perplexity. Journalists at each organisation rated every response against five criteria on a four-point scale. After excluding refusals, generation failures and unavailable evaluators, **2,709 core responses** were evaluated, plus 353 responses to questions each organisation wrote for its own market.[^ebu-bbc-2025]

**45% of responses contained at least one significant issue.** Sourcing was the single largest cause at 31% — missing, misleading or misattributed attribution rather than false facts. Gemini was the outlier: 72% of its responses had a significant sourcing issue, where every other assistant sat below 25%.[^ebu-bbc-2025]

The study exists because an earlier one did. In February 2025 the BBC alone ran the same four assistants over 362 responses and found 51% with significant issues, 19% of answers citing BBC content introducing factual errors, and 13% of quotes altered or absent from the article cited.[^bbc-first-round] Rerunning the BBC arm six months later gave **37%** — a real improvement, on 237 responses, with the report careful to say the two rounds differ in definition and design and that only the BBC had data from both.[^ebu-bbc-2025]

Improvement was uneven. Accuracy moved from 31% to 25%, with Gemini improving most (46% to 25%) while ChatGPT and Perplexity did not improve at all. Copilot's sourcing issues dropped from 27% to 10%; Gemini's stayed near 47%. Problems distinguishing fact from opinion fell from 12% to 3%.[^ebu-bbc-2025]

The thing to hold alongside the numbers is who produced them. Every rating in this record was made by a journalist employed by an organisation whose articles the assistants were citing, during a period in which publishers and AI companies are in open dispute about content use — a dispute the BBC's own report raises in its foreword.[^bbc-first-round] The measurement is careful, documented and published with its method. It is also, in its entirety, interested.

## Research question

When a consumer AI product summarises somebody else's work, who is in a position to say whether it did so faithfully — and what follows when the only parties who can are the ones whose work it is?

## Organization and operating context

Public service media organisations occupy an unusual position. They are not the deployer: nobody at the BBC or NPR chose to put their journalism into ChatGPT. They are not the vendor. They are the *source material* — the thing the assistant summarises, quotes and attributes — and they are, at the same time, the only institutions with the subject expertise to judge whether a summary of a given news story is right.

That combination is what makes the study possible and what limits it. A journalist who covered a story can tell in seconds whether an assistant has misstated it, invented a quote, or attributed a claim to the wrong outlet. No AI lab has that bench. Neither does a regulator.

The European Broadcasting Union coordinated; the BBC led the research design, having run the first round alone. The output was a 69-page report and a companion toolkit, the latter published explicitly so that technology companies could evaluate and monitor their own assistants against the same taxonomy.[^ebu-bbc-2025]

Participation was declared rather than anonymous, which is worth noting in a library where the deploying organisation is usually unnamed. NPR published its own account of why it took part — recognising, in its words, a responsibility to understand AI's impact on journalism and to advocate for its reporting being represented accurately — written by a member of the study's participant editorial committee.[^npr-participant] That is a participant confirming a participation, not an outside check, and it is filed here as the former.

## The situation before AI

There is a real baseline here, and it is not about error rates. Before assistants, a reader reaching a news organisation's reporting arrived at the article. Attribution was structural: the masthead was on the page. Whatever a reader then misunderstood, the publisher's account of its own story was the thing being read.

An assistant breaks that. It reads the article and produces something else — shorter, recombined, sometimes drawing on several outlets, with attribution reduced to a citation the reader may not click. The failure mode the study measures most of, sourcing, is a failure that could not previously occur, because there was nothing between the reader and the byline.

No pre-AI measurement of any of this exists, so the study has no before arm and does not claim one.

## The AI intervention or event

**The protocol.** Thirty core questions, common to all participants, about news and current affairs; four assistants; responses generated in June and July 2025. Each organisation could add custom questions on local and national topics. Journalists rated each response on accuracy, sourcing, fact-versus-opinion, editorialization, and context, choosing between no issues, some issues, significant issues, or don't know.[^ebu-bbc-2025]

**The scale.** 271 journalists, 23 evaluations across 22 organisations — Yle rated in both Finnish and Swedish. Of a potential 2,760 core responses, 2,709 were evaluated.[^ebu-bbc-2025] The 22 organisations, 18 countries and 14 languages are described the same way from inside a third organisation, NPR, which was neither of the two that led the work.[^npr-participant]

**The quality assurance.** Two passes. Project teams inside each organisation checked every significant issue an evaluator flagged for whether it was clearly evidenced and correctly classified, and checked sourcing issues were logged correctly; inconsistencies were resolved by comparing like cases and going back to the original evaluator where needed. A central team then ran another pass over the submitted data. The report states that participant organisations remain responsible for the quality of their own data.[^ebu-bbc-2025]

**What was found.** 45% of responses with at least one significant issue. Sourcing the largest component at 31%. Where responses contained direct quotes, 12% had significant issues with the accuracy of those quotes; for Gemini, 20% of the 290 responses containing quotes. Across the 2,221 responses that referred to a participating organisation's content, evaluators identified 141 significant issues in which the assistant misrepresented that organisation — 6%.[^ebu-bbc-2025]

**The rerun.** The comparison that makes this more than a snapshot: 362 BBC responses in round one against 237 in round two, six months apart, on the same four products. Significant issues of any kind, 51% to 37%. The report sets out the caveats itself — differing definitions, a multi-market second round not directly comparable, custom questions folded in to raise the second-round sample — and presents the result as a direction of travel rather than an effect size.[^ebu-bbc-2025]

## Outcomes and economics

There are no economics in this case, and their absence is the point. No cost of the evaluation is reported: 271 journalists' time across 22 organisations is a substantial number that nobody states. No revenue effect on the publishers is measured. No cost to the AI companies of the errors is measured, and none has been imposed.

What the study produced instead is a published taxonomy and a toolkit aimed at the vendors, which is an attempt to convert measurement into somebody else's remediation without any mechanism to require it.

| Measure | Round one, BBC only, Feb 2025 | Round two, 22 organisations, Oct 2025 |
| --- | --- | --- |
| Responses evaluated | 362 | 2,709 core, plus 353 custom |
| Organisations / countries / languages | 1 / 1 / 1 | 22 / 18 / 14 |
| Journalists rating | not stated | 271 |
| Significant issue of any type | 51% | 45% across all; 37% on BBC-to-BBC |
| Significant accuracy issue | 31% (BBC) | 25% (BBC-to-BBC) |
| Significant sourcing issue | 27% Copilot, 47% Gemini (BBC) | 31% overall; 72% Gemini across all |
| Quotes altered or absent | 13% of BBC-sourced quotes | 12% of responses containing quotes |
| Fact-versus-opinion issues | 12% (BBC) | 3% (BBC-to-BBC) |

The one figure in the record about consequence is about belief rather than money: separate BBC research released alongside the report is described there as finding that just over a third of UK adults say they completely trust AI to produce accurate summaries, rising to almost half of under-35s.[^ebu-bbc-2025] That research was not read for this case and the figure reaches it only through the report's description.

## Causal assessment and competing explanations

This case is labelled **descriptive**. It is a measurement of output quality at two points in time, with no intervention, no control and no counterfactual. The rerun is a before-and-after on a moving target: the products changed, the question set changed, the evaluator pool changed, and the report says so.

Three readings of the improvement are worth stating.

**"The assistants got better."** The report's own reading, hedged as a direction of travel. It is supported by the per-criterion breakdown moving in the same direction on most measures and by Gemini's accuracy halving.[^ebu-bbc-2025]

**"The measurement got different."** The second BBC sample folded custom questions into core ones to reach 237 responses; definitions of key statistics changed in small ways; and the evaluators in round two were working inside a 22-organisation protocol with two QA passes rather than a single-newsroom exercise. A stricter or looser bar in either round moves the headline by more than the gap between 51% and 37%.

**"Both, and they cannot be separated."** The honest reading. Two of the four assistants — ChatGPT and Perplexity — showed no accuracy improvement at all, which is hard to explain by a uniformly changed measurement bar and easy to explain by uneven product change. But nothing in the design lets the two causes be told apart.

On the headline 45%, the competing explanation that matters is different: **the raters are interested**. A journalist judging whether an assistant fairly represented their own newsroom's story is not a neutral instrument, and the criterion most likely to be affected — sourcing, where the harm is to the publisher's attribution — is the one producing the largest share of significant issues. Nothing here suggests the ratings were dishonest; the QA process is more than most studies in this library have. But the study has no disinterested arm, and the direction any bias would run is the direction the headline points.

## Failures, limitations, and governance

- **Every measurement is made by an interested party.** 271 evaluators, all employed by organisations whose content was being cited, in a period of open commercial dispute with the companies under test. No vendor, regulator or academic group has published a comparable evaluation.
- **No inter-rater reliability is reported.** 271 people applied a four-point subjective scale across 14 languages. The report describes a careful QA process for checking flagged issues; it does not report agreement statistics, which is the standard way to show a subjective instrument is stable.[^ebu-bbc-2025]
- **The response-level data is not published.** The taxonomy and toolkit are, so the method can be reused, but nobody outside can recompute the headline from the underlying ratings.
- **Sourcing failures fall on a third party.** The assistant's user sees a fluent answer; the publisher wears the misattribution. In 141 cases the assistant misrepresented the very organisation it cited.[^ebu-bbc-2025]
- **The remedy proposed has no mechanism.** A toolkit inviting vendors to self-assess is the governance instrument here. Nothing obliges anyone to use it, and this case records no vendor response.
- **Audience trust runs ahead of measured accuracy.** A third of UK adults reported complete trust in AI summaries against a measured significant-issue rate of 45%, as the report describes it.[^ebu-bbc-2025]
- **Gemini is an outlier large enough to distort the aggregate.** At 72% sourcing issues against everyone else below 25%, a headline that averages across four assistants describes none of them well.

## What this case demonstrates

1. The party best placed to evaluate an AI system's output is sometimes the party the output is about, and that is a conflict rather than a disqualification — the evaluation still has to happen, and only they can do it.
2. Careful method and structural interest coexist. This is among the best-documented evaluations in this library — defined denominator, stated exclusions, published criteria, two QA passes — and every rating in it comes from an interested party.
3. Sourcing failure is a distinct harm from factual error, it is larger, and it lands on someone who is not the user. The reader gets a plausible answer; the misattributed publisher gets the consequence.
4. An aggregate across products can be useless when one product is an outlier: 72% against below 25% is not a population with a meaningful mean.
5. Repeat measurement is rare and worth the cost even when imperfect. The rerun is the only thing in this record that distinguishes "assistants are bad at news" from "assistants were bad at news in February."
6. Publishing the instrument is a governance move available to anyone who measures. The toolkit lets a vendor, regulator or academic run the same protocol, which is the only route by which this case's own conflict gets resolved.
7. Improvement can be real and unevenly distributed at once: two assistants improved on accuracy and two did not, inside a headline that improved.
8. Measured error and audience confidence can move in opposite directions, and the confidence is what determines whether anyone checks.

## What this case does not demonstrate

- It does not establish that assistants misrepresent news at a 45% rate for ordinary users. The questions were chosen by newsrooms, weighted toward news and current affairs, and put to assistants under a research protocol; a general population's questions are a different sample.
- It does not show the improvement from 51% to 37% is an effect of product change. The rounds differ in sample, definition and evaluator pool, and the report declines to call it an effect size.
- It does not establish that the ratings are reproducible. No inter-rater agreement is reported and the underlying data is not published.
- It does not compare assistants against the alternative. Nothing measures how often a reader misunderstands a news story read directly, so the 45% has no benchmark.
- It does not show any consequence to the AI companies, or any change by them in response. No vendor evaluation, commitment or remediation appears in this record.
- It does not speak to news content outside public service media. Every evaluating organisation is a public broadcaster, which is a particular kind of newsroom with a particular kind of output.

## Evidence assessment

**Grade B — an unusually well-documented measurement in which every measurer has the same interest.**

The method is the strongest part of the record and better than most in this library. The denominator is defined and the exclusions are itemised: 2,760 potential responses, 2,709 evaluated, with refusals and generation failures named as the reasons for the gap. The rating instrument is published. The criteria are enumerated. A two-stage quality assurance process is described in enough detail to criticise. A companion toolkit exists so the protocol can be reused. The report states the limits of its own comparison before a reader can raise them.[^ebu-bbc-2025]

Three things hold it at B.

*Every rating comes from an interested party.* This is not a suspicion about individuals; it is the design. Journalists rated whether assistants fairly represented their own organisations' journalism, while those organisations were in commercial dispute with the assistants' makers — a dispute the BBC's own report raises in its foreword.[^bbc-first-round] The criterion generating the most significant issues is the one where the harm is specifically to the publisher. No vendor, regulator or academic has published anything comparable to check it against.

*The two rounds are not two chains.* This case carries three source families, and the count overstates the independence. The BBC led the first round and co-led the second, so the rerun that produces the improvement figure is the same organisation measuring itself twice. What the second round genuinely adds is 21 other organisations rating the same questions — real corroboration that the pattern is not a BBC artefact, and not a check on the BBC's own numbers. The NPR account is a participant confirming participation, not an independent verification, and is labelled as such.

*The instrument's stability is unmeasured.* 271 evaluators, 14 languages, a four-point subjective scale, no agreement statistics. The QA process checks that flagged issues were evidenced and correctly classified, which catches false positives but says nothing about what different evaluators would have flagged in the first place.

One discrepancy is recorded rather than resolved: the report's high-level finding gives Gemini's significant sourcing issues as 72% across the full multi-market dataset, while the BBC-to-BBC comparison section gives Gemini's sourcing issues as "broadly the same at 47%." These are different populations — all organisations against the BBC arm only — and the report does not remark on the gap between them. A reader taking either number as "Gemini's sourcing error rate" would be wrong.

What would lift this to A is named in the upgrade path and it is not more publishers. It is one measurement by somebody who does not own the content.

## Material claims

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| 271 journalists at 22 organisations evaluated 2,709 core responses from four assistants in June–July 2025. | Verified | Methodology appendix, including the exclusion path from 2,760 potential responses[^ebu-bbc-2025] | A correction to the report |
| 45% of evaluated responses contained at least one significant issue. | Supported | The study's headline finding, computed from ratings by journalists employed by the cited organisations, with no independent arm[^ebu-bbc-2025] | An evaluation by a party that does not own the content, using the published toolkit |
| Sourcing was the largest single cause of significant issues, at 31%. | Supported | Same instrument and same conflict as the headline; the criterion where publisher interest is most direct[^ebu-bbc-2025] | An independent evaluation reproducing the ranking of criteria |
| Gemini had materially worse sourcing performance than the other three assistants. | Supported | 72% of responses with a significant sourcing issue against below 25% for the others; the gap is far larger than any plausible rating bias[^ebu-bbc-2025] | A later evaluation after product changes, or evidence the protocol disadvantaged one product |
| The share of BBC responses with significant issues fell from 51% to 37% between the two rounds. | Attributed | The report's own BBC-to-BBC comparison on 362 and 237 responses, which it presents as a direction of travel and not an effect size, noting differing definitions and design[^ebu-bbc-2025][^bbc-first-round] | A rerun holding the question set and rating bar constant |
| Assistants improved because the products got better. | Inference | Two of four improved on accuracy and two did not, which is hard to explain by a changed rating bar alone; but sample, definitions and evaluators all changed between rounds | A controlled rerun, or vendor disclosure of what changed and when |
| In 141 cases the assistant misrepresented a participating organisation whose content it cited. | Verified | Stated in the report as 141 significant issues across 2,221 responses referring to participating PSM content, or 6%[^ebu-bbc-2025] | A correction, or a recount under different classification rules |
| The ratings are reproducible between evaluators. | Unknown | No inter-rater agreement is reported for 271 evaluators applying a four-point scale across 14 languages[^ebu-bbc-2025] | Publication of agreement statistics, or a blind re-rating of a sample |
| These rates describe what ordinary users experience. | Unknown | The question set was written by newsrooms and put to assistants under a research protocol; no general-population sample exists[^ebu-bbc-2025] | An evaluation on logged real user queries |
| Just over a third of UK adults completely trust AI to produce accurate summaries. | Attributed | Separate BBC research described in the EBU report; the underlying research was not read for this case[^ebu-bbc-2025] | Reading the underlying survey, or an independent poll on the same question |
| Any AI vendor responded to the findings with a measurement or commitment of its own. | Unknown | Nothing in this record reports a vendor evaluation, response or remediation | A vendor publishing an evaluation against the toolkit's taxonomy |
| Twenty-two organisations across 18 countries and 14 languages took part. | Verified | Stated in the report and independently described the same way by a third participating organisation[^ebu-bbc-2025][^npr-participant] | A correction by any participant |

## Direct quotations

> “AI assistants are still not a reliable way to access and consume news.”

— James Fletcher and Dorien Verckist, restating the conclusion of the earlier round[^ebu-bbc-2025] · locator: Foreword, page 3

> “Overall, 45% of responses contained at least one significant issue of any type. Sourcing is the single biggest cause of significant issues (31%).”

— News Integrity in AI Assistants, high-level finding[^ebu-bbc-2025] · locator: Foreword, page 3

> “While extensive central support was provided, participant organizations are responsible for the quality of their own data.”

— News Integrity in AI Assistants, closing the quality-assurance appendix[^ebu-bbc-2025] · locator: Appendix 2, Data and quality assurance, page 64

> “They do this, in part, by repurposing content from publishers' websites, often without publishers' permission.”

— BBC, in the foreword to the first round, describing the assistants it was about to evaluate[^bbc-first-round] · locator: Foreword, page 1

> “51% of all AI answers to questions about the news were judged to have significant issues of some form.”

— BBC, first-round finding[^bbc-first-round] · locator: page 2, first bullet

## Revision notes

- 2026-09-14 — Initial publication at Grade B. The library's first `media` case. Three source families: the 69-page EBU/BBC international study read for its foreword, findings, comparison and full methodology appendices; the BBC's earlier single-organisation round read in full; and a participant account from NPR. Grade B rather than A on a specific ground stated in the evidence assessment — the method is among the best documented in this library, and every one of its 271 raters is employed by an organisation whose content was being cited, during an open commercial dispute with the companies under test. The three families also overstate independence, since the BBC led the first round and co-led the second; what the second genuinely adds is 21 other organisations on the same questions. Recorded and not resolved: the report gives Gemini's significant sourcing issues as 72% in the multi-market headline and "broadly the same at 47%" in the BBC-to-BBC section, different populations that the report does not reconcile. `causal_strength: descriptive` — the rerun is a before-and-after on a moving target and the report declines to call it an effect size, so this case does too. The EBU's own landing page returns 403 to this sandbox while the PDF asset URL does not, which is the CDN route already recorded in `CLAUDE.md`. Cited under P7. A taxonomy strain worth noting for a future editor: `business_function` has no value for editorial or content work, so this case is filed under `research-development`, which describes the evaluation rather than the thing evaluated. Related to AAI-2026-016 as its mirror image — there, a disinterested institution produced a large record and measured nothing; here, an interested one measured carefully.

[^ebu-bbc-2025]: James Fletcher and Dorien Verckist, [*News Integrity in AI Assistants: An international PSM study*](https://www.ebu.ch/files/live/sites/ebu/files/Publications/MIS/open/EBU-MIS-BBC_News_Integrity_in_AI_Assistants_Report_2025.pdf), European Broadcasting Union and BBC, October 2025, 69 pages including methodology and results appendices.

[^bbc-first-round]: BBC, [*Representation of BBC News content in AI Assistants*](https://www.bbc.co.uk/aboutthebbc/documents/bbc-research-into-ai-assistants.pdf), February 2025, 24 pages.

[^npr-participant]: Erica Osher and Sharahn Thomas-Fulton, [“Global study on news integrity in AI assistants shows need for safeguards and improved accuracy”](https://www.npr.org/sections/npr-extra/2025/10/21/g-s1-94424/global-study-on-news-integrity-in-ai-assistants-shows-need-for-safeguards-and-improved-accuracy), NPR Extra, 2025-10-21.
