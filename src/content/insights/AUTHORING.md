# Insights publishing guide — Stage 10

Source: `types.ts` is the established typed model, and `articles.json` contains the article bodies and localized records. `article-ui.json` contains localized presentation copy. No CMS or parallel content system was added.

- Add a stable ID, translation group, locale, slug, title, description, series, topics, author reference, publication state, and substantive Markdown body in `articles.json`. Supported Markdown subset: `##` sections, paragraphs, `**bold**`, and pipe tables; the safe renderer escapes authored HTML and does not execute arbitrary markup.
- Add reviewed translated records for each intended locale with their own slug and same translation group. Routes use `getStaticPaths()` filtered to `status='published'` plus nonempty body. Drafts have no generated detail routes or links. Language alternates come only from matching published translations.
- `published` is editorial-ready for rendering on this **unpublished** website, not evidence of live publication. At public launch, add genuine `publishedAt` values (and optional real `updatedAt`); never derive them from build time. Current article has no public dates, so no datePublished/dateModified schema is emitted.
- Reading time is derived from localized article body via `readingMinutes()`.
- Add published route paths to the ready-route allowlist only after a corresponding article template route exists. Check the site sitemap logic before public release.
- Add only relevant real references and original approved assets. Do not add fictitious case studies or sources.
- Before release: `npm install`, `npm run check`, `npm run build`, then browser QA in all locales and widths including tables, TOC, navigation and mobile CTA. Maintain `PUBLIC_SITE_INDEXABLE=false` for staging.
