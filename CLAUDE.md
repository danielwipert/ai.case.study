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

**Blocked or paywalled:** archive.org and web.archive.org (so no snapshots), theverge.com, reuters.com, bloomberg.com, fortune.com, inc.com, forbes.com, cnbc.com, apnews.com, theinformation.com, medrxiv.org, justice.gov, gao.gov. courtlistener.com search works anonymously but throttles hard, and its document endpoints need authentication.

SEC filings are the most reliable primary record available here: a company's own 20-F or 10-Q often contains the audited numbers behind a claim the press only relays.
