---
case_id: AAI-2026-002
title: "The support copilot that mostly lifted the novices"
summary: "A generative-AI assistant rolled out to roughly 5,000 customer-support agents raised issues resolved per hour by about 15%, with the gain concentrated among novice and lower-skilled workers and little or none for the most experienced."
organization:
  - Undisclosed Fortune 500 software firm
case_type: economic-case
secondary_case_types:
  - deployment
  - evaluation
industry:
  - technology
business_function:
  - customer-service
deployment_stage: scaled-production
outcome: positive
evidence_grade: B
status: published
created: 2026-09-12
published: 2026-09-12
last_verified: 2026-09-12
next_review: 2027-03-12
geography:
  - Philippines
  - United States
environment: production
deployment_pattern:
  - employee-copilot
causal_strength: causal
related_cases: []
evidence_upgrade_path: "Grade A needs a second evidentiary chain: a replication in another firm, an independent re-analysis of the underlying chat data, or the firm's own account of the deployment. Disclosure of the tool's licence, integration, and training costs would let the case state net economics instead of leaving them unknown, and evidence on staffing and wages after the study window would resolve what the authors explicitly leave open."
single_chain_rationale: "The two sources are the working-paper and peer-reviewed versions of a single study, so they form one evidentiary chain rather than two. No independent replication exists: the data are proprietary to an unnamed firm and no second party has had access to them. The case is published because a transparent quasi-experiment over three million chats is worth recording with its limits stated, not because its findings have been corroborated."
sources:
  - id: qje
    author: "Erik Brynjolfsson, Danielle Li, and Lindsey R. Raymond"
    title: "Generative AI at Work"
    publisher: "The Quarterly Journal of Economics, volume 140, issue 2, pages 889-942"
    published: 2025-05-01
    url: "https://academic.oup.com/qje/article/140/2/889/7990658"
    accessed: 2026-09-12
    roles:
      - primary-investigation
      - analysis
    source_family: brynjolfsson-li-raymond-study
    access: "Proprietary firm records: conversation text and outcomes for three million customer-support chats, covering every agent the firm employed over the study window, supplied by the firm and not publicly released."
    method: "Staggered difference-in-differences over the tool's phased deployment, estimated with the Sun and Abraham interaction-weighted estimator, supported by event studies and text analysis of chat transcripts. Identification assumes parallel trends, no anticipation, and a common dynamic treatment profile."
    conflicts: "Funded by the Stanford Digital Economy Lab. The working-paper cover states that at least one co-author disclosed additional relationships of potential relevance. The data firm is unnamed, supplied the data, and defined the productivity metrics used."
    corroboration: "None available. The deployment has not been replicated and no second party has examined the underlying data."
    accountability: "Peer-reviewed and published as the version of record, with a named journal, volume, and pagination, and a journal corrections process."
    notes: "The version of record, reporting 5,172 agents and a 15% average effect. Its full text is paywalled and was unreachable from this review; the abstract and bibliographic record were verified through the RePEc entry for the article."
  - id: nber
    author: "Erik Brynjolfsson, Danielle Li, and Lindsey R. Raymond"
    title: "Generative AI at Work (NBER Working Paper 31161)"
    publisher: "National Bureau of Economic Research"
    published: 2023-04-01
    updated: 2023-11-01
    url: "https://www.nber.org/papers/w31161"
    accessed: 2026-09-12
    roles:
      - primary-investigation
      - analysis
    source_family: brynjolfsson-li-raymond-study
    access: "The same proprietary firm records: three million chats by 5,179 agents, of which 1.2 million chats by 1,636 agents fall after the tool was deployed."
    method: "Same design as the published version, with the full empirical appendix, event-study figures, deployment timeline, and outage analysis available to read."
    conflicts: "Same funding and disclosure as the published version. The NBER cover states that working papers are circulated for discussion and have not been peer-reviewed."
    corroboration: "Superseded rather than corroborated by the published version, which reports slightly different figures."
    accountability: "Named authors at Stanford and MIT with institutional affiliations, a dated revision, and a public disclosure statement."
    notes: "Read in full for this case. Reports 5,179 agents and a 14% average effect, against 5,172 and 15% in the published version, and gives the widely cited 34% novice figure that the published abstract states qualitatively."
tags:
  - customer-support
  - employee-copilot
  - productivity
  - skill-distribution
  - quasi-experiment
---

## Case in one sentence

A generative-AI chat assistant deployed across roughly 5,000 customer-support agents at a Fortune 500 software firm raised measured productivity by about 15%, but the gain went almost entirely to the least experienced agents while the most experienced gained little and, in the published version, lost a little quality.

## Executive summary

Between late 2020 and mid-2021, a Fortune 500 software firm rolled out a conversational assistant built on a GPT-family model to its customer-support organisation. The tool monitored live customer chats and suggested responses in real time; agents stayed responsible for the conversation and were free to ignore it.[^nber] Because the firm deployed it in waves rather than all at once, three economists were able to compare treated and not-yet-treated agents over three million chats and estimate the effect on standard contact-centre metrics.[^qje][^nber]

Access to the assistant raised issues resolved per hour by about 15% on average.[^qje] The average conceals the finding that matters operationally: novice and lower-skilled agents improved by around 34%, while the most experienced and highest-skilled agents saw minimal gains in the working paper and, in the published version, small gains in speed alongside small declines in quality.[^nber][^qje] The authors' explanation is that the model had been trained on the firm's own successful conversations, so it carried the tacit practices of its best agents to everyone else.[^nber]

Two secondary results matter as much to an operations reader. Agent attrition fell, concentrated among newer workers — in an industry where the paper cites turnover estimates around 60% a year.[^nber] And when the software failed, agents kept part of their gain, which suggests the tool changed what workers knew rather than only what they produced while it was switched on.[^nber]

What the record does not contain is the money. Neither version reports the licence, integration, or training cost of the deployment, so this case records a measured productivity effect, not a return on investment.

## Research question

When a generative-AI assistant is placed inside a real, continuously measured production workflow, how large is the effect on output, and who captures it?

## Organization and operating context

The deploying organisation is a Fortune 500 software firm selling business process software; the study does not name it, and no public statement from the firm was found for this review.[^nber] Its support agents resolve technical problems over text chat, with sessions averaging about 40 minutes, much of it spent diagnosing the underlying fault. Chats are randomly assigned to available agents, which means agents do not systematically get easier or harder problems than one another.[^nber]

Most of the workforce studied — 89% — works outside the United States, primarily in the Philippines, across both the firm's own agents and outsourced agents.[^nber] This is ordinary offshore contact-centre work, with the shift patterns and turnover that come with it, not a pilot staffed by enthusiasts.

## The situation before AI

The firm already measured its agents closely, using three metrics standard in the industry: average handle time, resolution rate, and net promoter score.[^nber] A productive agent handles chats quickly while keeping resolution and satisfaction high, and can run several conversations at once.

The operating problem the tool was bought against is the one contact centres have always had. Skill is unevenly distributed, the practices that make a top agent effective are tacit and hard to teach, training is expensive, and attrition is severe — the paper cites industry estimates of roughly 60% annual turnover at a cost of $10,000 to $20,000 per agent.[^nber] Every departure resets the learning curve.

## The AI intervention or event

The assistant watched each live conversation and proposed what the agent might say next, drawing on a model trained on the firm's own history of successful chats. It advised; it did not act. Agents remained accountable for the conversation and could disregard any suggestion.[^nber]

Deployment was staggered: agents joined the system after a training session, in waves, with the bulk of adoption between November 2020 and February 2021 and coverage broadly similar across in-house and outsourced agents.[^nber] A small randomised pilot ran in October 2020; its data are included in the main analysis but, the authors state, are not analysed separately because the sample is too small.[^nber] The study therefore rests on the phased rollout, not on that pilot.

In total the researchers observed three million chats by 5,179 agents, of which 1.2 million chats by 1,636 agents came after those agents had the tool.[^nber] The published version of the paper reports the sample as 5,172 agents.[^qje]

## Outcomes and economics

Issues resolved per hour rose about 15% on average in the published version, 14% in the working paper.[^qje][^nber] The effect decomposes into three channels: each chat took less time, agents ran more chats concurrently, and a slightly larger share of chats ended resolved.[^nber]

The distribution is the finding. Novice and lower-skilled agents gained roughly 34% in resolutions per hour — 0.29 log points — while the most experienced and highest-skilled agents gained little; the published version reports that this group saw small speed gains and small declines in quality.[^nber][^qje] The tool compressed the performance range rather than lifting it evenly.

Alongside output, customer sentiment improved and attrition fell, the latter driven by newer workers staying.[^nber][^qje] In an operation with 60%-a-year industry turnover, retention may be worth more than the throughput.

The economics stop there. Neither version discloses what the firm paid for the tool, what integration and training cost, or what happened to headcount, staffing plans, or wages after the study window. The authors state plainly that their results do not capture longer-term effects on skill demand, job design, wages, or customer demand.[^nber] Any figure describing this deployment's return on investment would be an invention.

## Causal assessment and competing explanations

The design is quasi-experimental rather than experimental. Because the firm onboarded agents in waves, the researchers compare agents who had the tool against those not yet onboarded, estimated with the Sun and Abraham interaction-weighted estimator and supported by event studies around each agent's start date.[^nber] The identifying assumptions are parallel trends, no anticipatory behaviour, and a common dynamic treatment profile.[^nber] Random assignment of chats to agents removes the most obvious confounder, that treated agents drew easier problems.[^nber]

What the design does not rule out sits in the timing. Agents were onboarded after training sessions, in an order the firm chose, not by lottery; the randomised pilot that would have settled this is too small to analyse on its own.[^nber] The authors themselves flag that later cohorts may have had smoother onboarding, which would make treatment effects vary by wave for reasons unrelated to the tool. Adherence results carry a further selection caveat the authors raise directly: agents who follow recommendations may be more productive for other reasons, or may be exactly the agents with most to gain.[^nber]

The horizon is five months after treatment, where the sample thins.[^nber] Novelty effects, a firm-wide push accompanying the rollout, and the ordinary drift of a workforce over a pandemic year are not separately identified, though firm-year-month controls absorb seasonal and product-cycle shifts.[^nber]

On balance the design credibly isolates the deployment's short-run effect within this firm, which is why this case carries the `causal` label. That label describes the study's internal validity. It says nothing about whether the same tool would do the same thing anywhere else.

## Failures, limitations, and governance

- **One firm, one period:** A single unnamed employer over roughly five months. Nothing establishes that the result travels.
- **No independent access:** The data are proprietary. No second party has re-analysed them, and no replication exists.
- **The firm is anonymous:** Its account of the deployment, its costs, and its later staffing decisions cannot be sought or checked.
- **Firm-defined metrics:** Productivity is measured the way the employer measures it. Resolution rate and net promoter score are operational metrics, not welfare measures.
- **A quality cost at the top:** The published version reports small declines in quality for the most experienced agents — a real, if small, harm to a subgroup that the headline average hides.
- **Worker-side questions unasked:** The study covers an offshore, heavily monitored workforce. Effects on pay, workload intensity, surveillance, and job security are outside its scope, and the authors say so.
- **Version drift:** The widely repeated figures — 5,179 agents, 14%, 34% for novices — come from the working paper. The peer-reviewed record reports 5,172 and 15%, and characterises the top-skill effect differently.

## What this case demonstrates

1. A copilot's value can be distributional rather than uniform: the same tool that transforms a novice's output may do nothing for an expert.
2. Measured productivity moved through three separate channels — handle time, concurrency, and resolution rate — so a single headline percentage hides the operating levers.
3. The plausible mechanism is codified tacit knowledge: a model trained on an organisation's own best conversations can distribute practices that resisted training and documentation.
4. Part of the gain survived the tool's failure, which points to durable change in the worker, not only in the output while the system runs.
5. In a high-turnover operation, the retention effect may be the larger prize, and it is the one least likely to appear in a productivity business case.
6. A rigorous effect size is not a return on investment. This deployment's costs were never disclosed, and no responsible reader can derive one.

## What this case does not demonstrate

- It does not establish the deployment's net economics: licence, integration, and training costs are absent from the record.
- It does not show what happened to staffing, wages, or job design after the study window, which the authors explicitly place outside their results.
- It does not generalise to other firms, other vendors, or less structured knowledge work, and the authors make no such claim.
- It does not show that experienced agents are unaffected: the published version reports small quality declines for that group.
- It does not tell us how customers, as opposed to customer-satisfaction scores, fared.

## Evidence assessment

**Grade B — good evidence with material limitations.** The central finding rests on a transparent quasi-experimental design applied to three million chats, peer-reviewed and published in a journal of record, with the full empirical appendix readable in the working-paper version.[^qje][^nber] The identification strategy, estimator, and assumptions are stated, the authors raise the main selection threats themselves, and the random assignment of chats removes the most obvious confounder.

The limitations are structural rather than technical. The two sources are two versions of one study and therefore one evidentiary chain, not two: nothing here is corroborated by an independent party. The data belong to an unnamed firm, cannot be re-analysed by anyone else, and are measured with that firm's own metrics. The window is about five months. The published full text is paywalled and was unreachable for this review, so the journal record was verified through its bibliographic entry and the working-paper text was read in full — which is also how the discrepancy between the two versions' headline figures was found.

Grade B is the honest ceiling for a single unreplicated study on proprietary data, however well executed.

## Material claims

Each claim carries a controlled label, the evidence behind it, and what would change the label.

| Claim | Label | Evidence | What would change this |
| --- | --- | --- | --- |
| Access to the assistant raised issues resolved per hour by about 15% on average. | Supported | Staggered difference-in-differences over three million chats with event studies[^qje][^nber] | An independent re-analysis of the chat data, a replication elsewhere, or evidence that onboarding order correlated with agents' underlying trends |
| The gain was concentrated in novices, at roughly 34% for the least experienced and little for the most experienced. | Supported | The 34% figure and the skill gradient in the working paper[^nber]; the published version reports the same direction with small quality declines at the top[^qje] | A re-analysis finding the gradient driven by cohort timing rather than skill, or a replication without heterogeneity |
| Attrition fell after deployment, driven by newer workers staying. | Supported | Attrition results in both versions[^nber][^qje] | Evidence that the retention shift tracked labour-market conditions or firm policy changes rather than the tool |
| Part of the productivity gain persisted during unexpected software outages. | Supported | Outage analysis comparing treated agents to their pre-AI baseline[^nber] | Evidence that outages were anticipated or non-random, or a re-analysis finding no persistence |
| The published and working-paper versions report different headline figures. | Verified | 5,172 agents and 15% in the journal record[^qje]; 5,179 agents and 14% in the working paper[^nber] | A correction to either record |
| The deployment produced a positive return on investment. | Unknown | Neither version reports licence, integration, or training costs, and the firm is unnamed | Cost disclosure by the firm, or a replication that reports net economics |
| The result generalises to other firms, vendors, or less structured work. | Unknown | One firm, one workflow, one five-month window; the authors claim no external validity | A replication in a different firm or occupation |

## Direct quotations

> “Using data on software outages—periods in which the AI software fails to provide any suggestions—we show that workers see productivity gains relative to their pre-AI baseline even when recommendations are unavailable.”

— Brynjolfsson, Li, and Raymond[^nber] · locator: introduction, summary of findings

> “Most importantly, our results do not capture the potential longer-term impacts of generative AI on skill demand, job design, wages, or customer demand.”

— Brynjolfsson, Li, and Raymond[^nber] · locator: section 7, Conclusion

## Revision notes

- 2026-09-12 — Initial publication. Recorded the deployment as an economic case with a quasi-experimental causal label, separated the average effect from its distribution, left the net economics unknown rather than inferred, and noted that the widely cited headline figures come from the working paper rather than the peer-reviewed record.

[^qje]: Brynjolfsson, Li, and Raymond, [“Generative AI at Work”](https://academic.oup.com/qje/article/140/2/889/7990658), The Quarterly Journal of Economics 140(2), 2025.
[^nber]: Brynjolfsson, Li, and Raymond, [“Generative AI at Work”](https://www.nber.org/papers/w31161), NBER Working Paper 31161, April 2023, revised November 2023.
