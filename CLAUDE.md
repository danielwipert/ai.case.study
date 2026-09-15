# Working on this repository

**Read `HANDOFF.md` first.** It is the previous session's snapshot: current state, open items, and where to pick up. At the end of each session, replace it wholesale — it is never appended to and never grows past a page. Durable knowledge belongs in this file or in `docs/`, because `HANDOFF.md` is erased every time.

## Editorial rules that are not negotiable

- Cite only sources actually read. If the original is paywalled or blocked, cite the readable relay and say in the case that it is a relay.
- Evidence grades, claim labels, and causal-strength labels are the editor's call. Propose one, explain the reasoning, and flag it as a judgment call rather than deciding quietly.
- Record discrepancies rather than resolving them silently: differing dates, figures that changed between versions, internal inconsistencies in a source.
- An unproven allegation is `Attributed` or `Disputed`, never `Verified`. Grade D is never published.
- Prefer a case that fills a gap in the taxonomy over the next available story.

## Validation

`npm run build` runs `scripts/validate-content.mjs` and fails the build on: unknown taxonomy values, footnotes that do not match source ids, uncited sources, quotations missing a citation or `locator:`, fewer than two evidentiary chains on an A or B case without `single_chain_rationale`, a missing `evidence_upgrade_path` on B or C, unresolved `related_cases` or internal links, and dates out of order or not `YYYY-MM-DD`.

A second tier prints **evidence gaps** without failing: missing `archive_url`, an `unrecorded` quotation locator, a primary-investigation source with no `method`. Never silence one by inventing data.

## Git workflow

Work on `claude/loving-ride-c4lddg`. PRs merge with **rebase**, which means the branch's commits get new SHAs on `main`.

**Restart the branch from `main` after every merge**, before starting new work:

```
git fetch origin main && git checkout -B claude/loving-ride-c4lddg origin/main
```

Skipping this makes the next PR's merge base stale, so its diff replays already-merged work. After a merge the remote branch still points at the pre-merge SHA; `git push --force-with-lease` resolves it. Check with `git cherry origin/main origin/<branch>` first — every line prefixed `-` means the content is already on `main` and nothing is at risk.

## Network reachability from the sandbox

Hard-won; saves an hour of dead ends.

**Reachable:** sec.gov and data.sec.gov (EDGAR full text), ftc.gov, govinfo.gov, eutils.ncbi.nlm.nih.gov (PMC article *pages* now serve a reCAPTCHA — see below), arxiv.org, nber.org, metr.org, huggingface.co, techcrunch.com, the-decoder.com, blogs.duanemorris.com, insidetechlaw.com, klarna.com, nao.org.uk, gov.uk, eur-lex.europa.eu.

**Also reachable, European public bodies and their auditors:** open.overheid.nl (the Dutch open-documents register, which carries ministry annexes as PDFs), duo.nl, platform-investico.nl, nltimes.nl, eca.europa.eu, digital-strategy.ec.europa.eu, garanteprivacy.it, datatilsynet.dk, amnesty.org, rijksoverheid.nl (article pages; its document *search* returns 404 and open.overheid.nl search returns 401, so reach Dutch government documents through a search engine result, not by browsing).

**Reachable only with a browser User-Agent:** autoriteitpersoonsgegevens.nl returns 403 to WebFetch and to curl's default agent, and 200 to `curl -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) ... Chrome/126.0"`. Try this before concluding a regulator is blocked.

**Also blocked:** oecd.org (403), anao.gov.au (no route), erasmusmagazine.nl (JavaScript challenge), github.com and api.github.com (403, so an open-source claim cannot be checked by inspecting the repository), publications.parliament.uk and committees.parliament.uk (403), ferc.gov and energysafety.ca.gov (403). algorithmaudit.eu works, but only without the `www.` prefix — the certificate has no matching name for `www.algorithmaudit.eu`.

**Regulators and courts outside the EU:** ftc.gov, dmv.ca.gov, cpuc.ca.gov, docs.cpuc.ca.gov, pdpc.gov.sg, mas.gov.sg, meti.go.jp, and koreajoongangdaily.com all resolve. nhtsa.gov and static.nhtsa.gov return 403 to everything tried, so US federal vehicle-safety documents — consent orders included — have to be reached through a company's own SEC filings or a relay.

**pipc.go.kr (Korea's data protection regulator) is reachable but flaky.** It resets the connection on roughly half of all requests; retry two to five times and it succeeds. Its `noticeList.do` index renders its rows in JavaScript, so the list looks empty when fetched — navigate instead by `noticeDetail.do?bbsId=BBSMSTR_000000000001&nttId=<n>` and walk the "Previous"/"Next" links at the foot of each release to find neighbouring items. Its English releases state on their face that they are unofficial translations.

**Regulator-mandated innovation reporting is an underused seam.** Ofgem's Network Innovation Allowance obliges GB network licensees to register each project and publish its learning, which produces close-down reports carrying a project reference, itemised costs, measured results, and candid lessons — filed rather than promoted. They live at `neso.energy/document/<id>/download` and on the ENA Smarter Networks Portal. Comparable obligations exist for other regulated utilities and are worth checking before concluding a sector has no usable evidence. Treat them as self-reports all the same: the measurements are the licensee's own.

**Do not confuse a filing obligation with corroboration.** Several sectors publish a great deal that looks official and is entirely the deploying party describing itself. Ask who else measured the thing.

**A company's published documents are often on a CDN that is reachable when its own site is not.** The 195-page Quinn Emanuel report on Cruise came from `assets.ctfassets.net`. When a report is announced but its host blocks you, search for the asset URL rather than the announcement.

**Blocked or paywalled:** archive.org and web.archive.org (so no snapshots), theverge.com, reuters.com, bloomberg.com, fortune.com, inc.com, forbes.com, cnbc.com, apnews.com, theinformation.com, medrxiv.org, justice.gov, gao.gov, openai.com. courtlistener.com search works anonymously but throttles hard and its REST API needs authentication; its docket pages and free RECAP documents do not — see below.

SEC filings are the most reliable primary record available here: a company's own 20-F, 10-K, or 10-Q often contains the audited numbers behind a claim the press only relays. They also carry the terms of regulatory settlements a company has entered, under securities-law liability — GM's 10-K states the Cruise consent order, the CPUC settlement, and the deferred prosecution agreement including what was admitted, all of which were unreachable at their own sources. Fetch the filing index from `https://data.sec.gov/submissions/CIK<10-digit zero-padded CIK>.json` and send a descriptive User-Agent with a contact address, as the SEC asks. Consecutive years of the same form are worth reading together: the later one usually closes a story the earlier one leaves open.

## Routes around a blocked host

Several of this library's best sources were reached by a second route after the obvious one failed. The pattern is worth trying before recording a gap.

**Federal court filings: CourtListener's public docket, not its API.** The REST API returns `Authentication credentials were not provided` to everything. The docket *page* returns 200 to a browser User-Agent, and free RECAP documents are linked from it at `storage.courtlistener.com/recap/gov.uscourts.<court>.<docket-id>/gov.uscourts.<court>.<docket-id>.<doc>.<att>.pdf`. Two docket pages can exist for one case and show different things — one listed the Cruise deferred prosecution agreement with no download link, the other with one — so check every docket id the search returns. This is how the DPA in AAI-2026-010 was obtained after justice.gov and nhtsa.gov refused.

**Scanned filings have no text layer, and there is no OCR installed.** `tesseract` and `ocrmypdf` are absent and `pytesseract` is not importable. Render the pages and read them with vision instead:

```python
pix = page.get_pixmap(dpi=130, colorspace=pymupdf.csGRAY)
pix.save(f"p{i+1:02d}.png")
```

130 dpi grayscale keeps a 28-page court filing under 7 MB and stays legible for line-numbered pleading paper. Cite the ECF page stamp ("Page 17 of 28") alongside the paragraph number: it is stable across copies in a way that the document's own pagination is not, since exhibits restart their numbering.

**PubMed Central: E-utilities, not the web page.** `pmc.ncbi.nlm.nih.gov/articles/PMC…` serves a reCAPTCHA challenge. `eutils.ncbi.nlm.nih.gov` is reachable and unauthenticated: `esearch.fcgi?db=pubmed`, `esummary.fcgi` for citation metadata and the author list, and `efetch.fcgi?db=pmc&id=PMC…&retmode=xml` for the full text as JATS. The idconv endpoint has **moved**: `www.ncbi.nlm.nih.gov/pmc/utils/idconv/v1.0/` now 301s to `pmc.ncbi.nlm.nih.gov/tools/idconv/api/v1/articles/?ids=<pmids>&format=json`, which converts PMIDs to PMC ids and says which have no PMC copy at all. Note that a PubMed abstract is often richly structured even when the full text is unreachable — but an abstract cannot carry a case, and saying so is cheaper than building one on it.

**Europe PMC searches full text; PubMed searches titles and abstracts.** `www.ebi.ac.uk/europepmc/webservices/rest/search?query=…&resultType=core&format=json` is reachable and unauthenticated. It takes field prefixes (`TITLE:`, `ABSTRACT:`, `DOI:`, `PMCID:`), boolean groups, `OPEN_ACCESS:y`, and `sort=P_PDATE_D desc` or `CITED desc`; `core` results carry `isOpenAccess`, `inEPMC` and `hasPDF`, which tell you whether the full text is obtainable before you spend a fetch finding out. Because it matches anywhere in the text it will drown you in reviews that merely mention your phrase — anchor to `TITLE:`/`ABSTRACT:` once you know the concept's name. Watch for terms of art colliding: searching `"silent period"` for shadow deployments returns a wall of neurophysiology, because the cortical silent period is an unrelated established term.

**Three tables in, the paper often says something its abstract does not.** The dialysis case in AAI-2026-020 exists entirely because Table 2 disaggregated two evaluation periods that every sentence of the text discusses only in combination. Extract `table-wrap` elements from the JATS XML and read the rows; a result reported as a single averaged figure is worth checking against its parts before citing the headline.

**Hugging Face's API verifies open-source claims that github.com would.** `api/models?author=<org>`, `api/models/<repo>` (the `cardData.license` field and the `siblings` file list), `api/datasets?author=<org>`, and `api/organizations/<org>/overview`, which carries an `isVerified` flag worth reporting when it is absent. This is how the MIT licence and published weights behind AAI-2026-015's open-release claim were checked.

**arXiv: the abstract page, not the API.** `export.arxiv.org/api/query` rate-limits this sandbox hard, returning 429 and 503 on repeated attempts even with long gaps. `arxiv.org/abs/<id>` and `arxiv.org/pdf/<id>` are reliable with a browser User-Agent. Take metadata from the `citation_title`, `citation_author` and `citation_date` meta tags, and the version history from the `submission-history` block — a v2 can be months newer than the arXiv record's date and carry a different cover date.

**A blocked outlet's words sometimes survive in a relay that quotes rather than paraphrases.** Bloomberg's Uber report reached AAI-2026-003 through a link blog that block-quoted it, which carried a fact the paraphrasing relay had dropped: that the figure came from a company spokesperson. The AI Incident Database at `incidentdatabase.ai` mirrors the full text of news articles, including from outlets blocked here, which is how Rite Aid's own response to the FTC reached AAI-2026-014. Both are relays and must be labelled as such; a relay that quotes is worth more than a relay that summarises.

**Additionally reachable**, found during the September 2026 source review: storage.courtlistener.com and www.courtlistener.com docket pages (browser UA), eutils.ncbi.nlm.nih.gov, incidentdatabase.ai, simonwillison.net, entrepreneur.com, gds.blog.gov.uk, labs.cloudsecurityalliance.org.

**Also reachable, academic and medical publishing**, found while hunting a shadow-mode case: www.ebi.ac.uk (the Europe PMC REST API, see above), **www.nature.com** — which serves complete article text including Nature Medicine, and is the single most valuable of these — pmc.ncbi.nlm.nih.gov/tools/ (the idconv API, though not article pages), healio.com, ascoai.org, and www.ovid.com. Ovid is worth knowing about: it hosts abstracts for journals whose own sites refuse, and `ovid.com/journals/<code>/pdf/<doi>~<slug>` returned an NEJM AI abstract in full when ai.nejm.org returned 403.

**Also blocked, medical publishers and NHS trusts:** pubs.rsna.org, ai.nejm.org and karger.com all return 403, so Radiology: Artificial Intelligence, NEJM AI and Karger journals are abstract-only from here even when the abstract is detailed. uclh.nhs.uk returns 403, so an NHS trust's own press release can be unreachable while the journal article it describes is not — the reverse of the usual pattern.

**Additionally blocked:** openai.com returns 403. `insidegovuk.blog.gov.uk`'s search endpoint returns 202 with an empty body, though its article pages load — so find its posts through a search engine, not its own search.

## The synthesis layer

`/propositions/` collects claims that hold across more than one case. Three collections back it: `cases`, `propositions` (`P1`, `P2`, …) and `tensions` (`T1`, `T2`, …), all validated by `scripts/validate-content.mjs`.

**The proposition owns the link.** It names its supporting and counter cases; case pages derive their "cited in the synthesis" list from that. Never add a `supports_propositions` field to a case — one direction only, so the two cannot disagree.

**Strength labels are checked, not asserted.** `recurrent` needs three or more supporting cases, two or more industries, and at least one case graded A or B; `emerging` needs two. The grade floor is the executable form of the rule that a proposition can never outrank the cases beneath it, and it bites: a proposition supported only by grade C cases fails the build if labelled `recurrent`. Test any change to those rules by deliberately breaking one and watching the build fail.

**Everything numeric on the page is computed at build time** from the case records — the grade × outcome matrix, the case and industry counts, which cell is highlighted, and the sentence describing it. Hand figures were wrong on two of four counts when this was first drafted from a mock, which is the reason for the rule. If a proposition's headline finding depends on a computed value, make the page render the alternative sentence when the value changes, as P1 does.

**Second-tier warnings cover the synthesis too:** a published case cited by no proposition and no tension, and a proposition whose supporting cases were verified after it was last reviewed. Neither fails the build; both mean the synthesis has drifted behind the library.

## Grading against a second chain that does not reach the numbers

A recurring decision in this library, settled the same way three times and worth settling the same way again. When a second, independent source corroborates a case's *lesson* but cannot test its *headline figures* — a different firm, a different population, a different outcome measure — it does not lift the grade. AAI-2026-002 has a randomized replication at another company that never measures issues resolved per hour; AAI-2026-006 has a multicentre validation of the same vendor's adult model that says nothing about the pediatric numbers; AAI-2026-008 has an enterprise trial pointing the other way that tests nothing METR claimed. All three stayed where they were. Add the source, say in the evidence assessment exactly what it reaches and what it does not, and flag the decision as a judgment call — a mechanical reading of the source-family count would allow a promotion in each case, and the count is not the argument.

## Reading PDFs in the sandbox

Primary sources from regulators and auditors arrive as PDFs, and the obvious tools are broken here. `pdftotext` is not installed. `pypdf` imports `cryptography`, whose Rust binding panics, so it fails on any file. `pip install pymupdf` works and extracts reliably:

```python
import pymupdf
d = pymupdf.open("report.pdf")
text = "\n".join(f"\n=== PAGE {i+1} ===\n" + p.get_text() for i, p in enumerate(d))
```

Keep the page markers: quotation locators in this library are expected to cite a page, and reconstructing them afterwards is guesswork.

## Quoting non-English sources

Give the quotation in the original inside the blockquote and put the English rendering in the attribution line, before the footnote. The validator splits the quotations section on every newline that begins with `>`, so a blockquote spanning more than one line is parsed as several quotations and all but the last will fail for a missing citation and locator.
