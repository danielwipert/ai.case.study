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

**Reachable:** sec.gov and data.sec.gov (EDGAR full text), ftc.gov, govinfo.gov, pmc.ncbi.nlm.nih.gov, arxiv.org, nber.org, metr.org, huggingface.co, techcrunch.com, the-decoder.com, blogs.duanemorris.com, insidetechlaw.com, klarna.com, nao.org.uk, gov.uk, eur-lex.europa.eu.

**Also reachable, European public bodies and their auditors:** open.overheid.nl (the Dutch open-documents register, which carries ministry annexes as PDFs), duo.nl, platform-investico.nl, nltimes.nl, eca.europa.eu, digital-strategy.ec.europa.eu, garanteprivacy.it, datatilsynet.dk, amnesty.org, rijksoverheid.nl (article pages; its document *search* returns 404 and open.overheid.nl search returns 401, so reach Dutch government documents through a search engine result, not by browsing).

**Reachable only with a browser User-Agent:** autoriteitpersoonsgegevens.nl returns 403 to WebFetch and to curl's default agent, and 200 to `curl -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) ... Chrome/126.0"`. Try this before concluding a regulator is blocked.

**Also blocked:** oecd.org (403), anao.gov.au (no route), erasmusmagazine.nl (JavaScript challenge). algorithmaudit.eu works, but only without the `www.` prefix — the certificate has no matching name for `www.algorithmaudit.eu`.

**Regulators and courts outside the EU:** ftc.gov, dmv.ca.gov, cpuc.ca.gov, docs.cpuc.ca.gov, pdpc.gov.sg, mas.gov.sg, meti.go.jp, and koreajoongangdaily.com all resolve. nhtsa.gov and static.nhtsa.gov return 403 to everything tried, so US federal vehicle-safety documents — consent orders included — have to be reached through a company's own SEC filings or a relay.

**pipc.go.kr (Korea's data protection regulator) is reachable but flaky.** It resets the connection on roughly half of all requests; retry two to five times and it succeeds. Its `noticeList.do` index renders its rows in JavaScript, so the list looks empty when fetched — navigate instead by `noticeDetail.do?bbsId=BBSMSTR_000000000001&nttId=<n>` and walk the "Previous"/"Next" links at the foot of each release to find neighbouring items. Its English releases state on their face that they are unofficial translations.

**A company's published documents are often on a CDN that is reachable when its own site is not.** The 195-page Quinn Emanuel report on Cruise came from `assets.ctfassets.net`. When a report is announced but its host blocks you, search for the asset URL rather than the announcement.

**Blocked or paywalled:** archive.org and web.archive.org (so no snapshots), theverge.com, reuters.com, bloomberg.com, fortune.com, inc.com, forbes.com, cnbc.com, apnews.com, theinformation.com, medrxiv.org, justice.gov, gao.gov. courtlistener.com search works anonymously but throttles hard, and its document endpoints need authentication.

SEC filings are the most reliable primary record available here: a company's own 20-F, 10-K, or 10-Q often contains the audited numbers behind a claim the press only relays. They also carry the terms of regulatory settlements a company has entered, under securities-law liability — GM's 10-K states the Cruise consent order, the CPUC settlement, and the deferred prosecution agreement including what was admitted, all of which were unreachable at their own sources. Fetch the filing index from `https://data.sec.gov/submissions/CIK<10-digit zero-padded CIK>.json` and send a descriptive User-Agent with a contact address, as the SEC asks. Consecutive years of the same form are worth reading together: the later one usually closes a story the earlier one leaves open.

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
