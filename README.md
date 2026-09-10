# Applied AI Case Study Library

An evidence-first library about how AI changes real organizations: operations, economics, risk, work, and outcomes. The public site is generated from Markdown records in this repository and deployed through GitHub Pages.

## Work locally

```bash
npm install
npm run dev
```

Before opening a pull request:

```bash
npm run build
```

The build validates case IDs, publication fields, and required research sections before generating the site.

## Add a case

1. Open a case-lead issue with the source and why it matters.
2. Copy `templates/case-template.md` to `src/content/cases/YYYY/AAI-YYYY-NNN-short-slug.md`.
3. Research and draft the record. Keep unsupported claims out; mark unknowns explicitly.
4. Submit a pull request. Published cases require editorial review and evidence grade A, B, or C.

See [the methodology](docs/methodology.md), [source policy](docs/source-policy.md), [taxonomy](docs/taxonomy.yml), and [full library specification](docs/library-spec-v3.md).

## Storage policy

The repository stores original analysis, short attributed quotations, and links—not copies of articles, books, datasets, or large media. This keeps the repository small and avoids redistributing copyrighted material.

## License

Original site code and case-study prose are available under the terms in `LICENSE`. Third-party facts and quotations remain subject to their original sources and licenses.
