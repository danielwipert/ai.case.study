# Moving the library to casestudy.aioperationsmanagement.ai

Decided by DW on 2026-11-08: **`https://casestudy.aioperationsmanagement.ai`** is
the permanent home of the library. This page is the checklist for the switch.
Keep it after the move: it records how the address is set up.

## What the code change does

- `astro.config.mjs`: `site` is the new address, and `base` is `/` because a
  custom domain serves the site from its root (no `/ai.case.study` folder).
  Every internal link, canonical link and "cite this case" address is built
  from these two lines.
- The five one-page summaries and five full reports in `public/` were rebuilt so
  the address printed in them, and every link in the reports, is the new one.
  (The first AAI-2026-023 report also had `localhost` links. The rebuild fixed
  that, and the private repo's `tools/print_report.mjs` now rewrites local links
  to the real address before it prints.)
- Private repo: the address is written in one place,
  `distribution/config/channels.yaml` (`site:`). `tools/distribution.py`,
  `tools/onepager.py` and `tools/report_pdf.py` all read it from there.

**Old links keep working.** When a GitHub Pages site has a custom domain, GitHub
redirects `danielwipert.github.io/ai.case.study/<path>` to the same `<path>` on
the new domain. Posts already shared don't break.

## The steps, in order

**Don't merge the public pull request before step 3 succeeds.** Without
DNS, GitHub sends visitors to an address that doesn't exist yet.

1. **Add the DNS record.** Sign in where `aioperationsmanagement.ai` is
   registered (or wherever its DNS is managed) and add one record:

   | Type | Name / Host | Value / Target |
   | --- | --- | --- |
   | `CNAME` | `casestudy` | `danielwipert.github.io` |

   The value is only `danielwipert.github.io`: no `https://`, no
   `/ai.case.study`. Some providers want a trailing dot
   (`danielwipert.github.io.`); either works.

2. **(Recommended) Verify the domain with GitHub.** This stops anyone else's
   GitHub Pages site from claiming the subdomain. Open GitHub, then your profile
   picture, **Settings → Pages → Add a domain**, and enter
   `casestudy.aioperationsmanagement.ai`. GitHub shows a `TXT` record; add it at
   the DNS provider the same way as step 1, then click **Verify**.

3. **Wait for DNS, then check it.** This usually takes minutes, sometimes a few
   hours. Run:

   ```bash
   dig casestudy.aioperationsmanagement.ai +short
   ```

   It is ready when the answer starts with `danielwipert.github.io.` and ends
   in IP addresses (`185.199.108.153` and similar). You can also check without a
   terminal on a site such as dnschecker.org.

4. **Merge the public pull request.** This deploys the site built for the new
   address. For a few minutes the old address will show pages with broken
   links. Step 5 ends that.

5. **Set the custom domain on the repository**, straight after step 4. In
   `danielwipert/ai.case.study`, go to **Settings → Pages → Custom domain**,
   enter `casestudy.aioperationsmanagement.ai`, and click **Save**. GitHub runs
   a DNS check, which should pass.

6. **Turn on HTTPS.** On the same page, tick **Enforce HTTPS** once GitHub
   allows it. The certificate can take up to an hour to arrive; until then the
   box is greyed out.

7. **Check the move.**
   - Open https://casestudy.aioperationsmanagement.ai/ and click through to a
     case.
   - Open an old address, for example
     https://danielwipert.github.io/ai.case.study/cases/2026/aai-2026-001-openai-hugging-face-agent-incident/,
     and confirm it lands on the same page at the new address.
   - Download one full report and click a link in it.

8. **Merge the private pull request.** It only changes the tools and the log,
   so its timing doesn't matter, but launch packages made after the move need
   it.

## Notes

- The deploy uses a GitHub Actions workflow, so a `CNAME` file in the repo
  isn't needed (GitHub ignores it for Actions deploys). The domain lives in the
  repository's Pages settings.
- To undo, clear the custom domain in Settings → Pages and revert the
  `astro.config.mjs` change. The rebuilt PDFs would then need rebuilding again.
- Past launch packages and log entries in the private repo still show the old
  address. That's deliberate: they record what was posted, and their links
  redirect.
