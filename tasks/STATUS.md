# Status

Last updated: 2026-08-23

## Goal

Produce an exceptional evidence-led Alamaar HPL redesign case study for Yasser's portfolio, with polished before/after visuals, short interaction recordings, accurate performance proof, concise UX narrative, transparent role attribution, and a clear bridge to the later 98-product AI/catalog-production case study.

## Verified project facts

- Project year: 2026.
- Old website: https://feedbackcentral.site/.
- New website: https://alamaarhpl.com/.
- Yasser led UX strategy, information architecture, page structure and new page concepts; directed a collaborating UI designer; and developed the production site.
- Stack: native WordPress Gutenberg/FSE + ACF; no page builder and no translation plugin architecture for the shared multilingual structure.
- English, Arabic and Hindi are supported; Arabic uses RTL.
- The live catalog exposes 98 finishes with name/code search, collection, finish and design-family filters, result count and pagination.
- Many application/interior images are AI-generated; exact product/material references remain distinct from conceptual application imagery.
- Desktop lab evidence supplied by Yasser: performance 45 → 96; LCP 6.8s → 1.1s; TBT 270ms → 0ms.
- Verified paired mobile Lighthouse evidence retained from run 14: performance 37 → 91; LCP 34.29s → 2.87s; TBT 759ms → 0ms. Treat all Lighthouse numbers as lab evidence, not business outcomes.
- No client testimonial exists for this project.

## Narrative direction

Primary story: UX-led redesign and rebuild of an aging product catalog into a richer product-evaluation and enquiry experience.

Supporting proof: catalog discovery, same-product PDP before/after, contact-flow redesign, performance improvement, maintainable WordPress editing, multilingual implementation.

The later 98-product content/AI production system remains a separate follow-up story.

## Portfolio design / branch decision

- Canonical design base: `release/new-site`, the beige case-study system used by `/case-studies/wp-ai-kits`.
- Superseded branch: `feat/alamaar-rebuild-case-study` based on old `main`; PR #10 closed without merge.
- Current branch: `feat/alamaar-rebuild-release-preview`, created directly from `release/new-site`.
- Current review surface: draft PR #11 targeting `release/new-site`.
- Cloudflare Pages builds the feature branch automatically; GitHub remains the source of truth.
- The feature branch contains the new headline `Rebuilding Alamaar HPL's digital product experience.` and the complete evidence-led narrative.

## Completed

- Dedicated case-study workspace, task ledger, Cloudinary folder, Playwright evidence capture and recurring work loop.
- Matched old/new homepage, products, Alaska PDP and contact captures; new mobile captures; catalog interaction recording; focused 9.88s hero montage.
- Curated selected evidence to Cloudinary.
- Locked headline, summary, role credit, seven-part story, Lighthouse methodology wording and AI-image disclosure.
- Rich media case-study schema supports image, video, before/after, gallery and stats blocks while preserving legacy image support.
- Full rebuild narrative is implemented on the correct `release/new-site` beige design branch.
- Case-study video respects `prefers-reduced-motion`.
- Verified run-14 mobile Lighthouse evidence is preserved separately as the canonical paired mobile comparison.
- Capture scripts were hardened after run 15 exposed false-success behavior: required capture validation now fails missing routes/media, and Lighthouse retries then exits non-zero when either target fails.
- Added dedicated `Alamaar rebuild release QA` on `feat/alamaar-rebuild-release-preview` for `npm run check`, narrative guardrails and crawlable-route validation.
- Fixed the release-preview rendering mismatch: the custom beige Alamaar story now renders shared case-study data rather than an older hard-coded Elementor narrative.
- Added automated responsive QA for desktop/tablet/mobile, overflow/runtime checks, story assertions and reduced-motion video behavior.
- Completed a line-by-line factual portfolio audit. Current live 98 count, matched Alaska evidence, retained desktop/run-14 mobile Lighthouse figures, Gutenberg/FSE + ACF architecture and shared English/Arabic/Hindi structure are reconciled.
- Confirmed the custom rebuild story contains no testimonial and uses the accurate generic collaborating-UI-designer credit. Media captions distinguish matched/live evidence from conceptual imagery.
- Completed the final editorial pass on the release-preview source.
- Synced the storyboard's performance chapter to the reviewed portfolio heading `More visual, faster in lab tests` and recorded the verified mobile methodology there.
- Added final deployed-preview Lighthouse automation: `capture/portfolio-audit.mjs` runs mobile and desktop Lighthouse against the Cloudflare branch preview, retains raw reports plus a compact summary, and is wired into `capture-evidence.yml` as a required QA stage.
- Run 43 produced a fully green automated preview QA result: capture, hero, Alamaar mobile audit, portfolio responsive QA and portfolio Lighthouse all succeeded.
- Run 43 responsive checks passed at 1440px, 834px and 390px with HTTP 200, the current H1, all required narrative headings, no runtime errors and no horizontal overflow. Reduced-motion video behavior also passed.
- Run 43 established a first retained portfolio-preview Lighthouse baseline: mobile Performance 80 / Accessibility 98 / Best Practices 100 / SEO 69; desktop 95 / 98 / 100 / 69. This is preview lab evidence, not an Alamaar-site outcome.
- The raw Lighthouse report exposed an avoidable ~8.9 MB page payload dominated by untransformed Cloudinary PNG evidence. Portfolio commit `19637914b7ff6320aa443a89847387bd6b22eb36` now delivers Alamaar evidence images through Cloudinary `f_auto/q_auto` while retaining the same source assets and content.

## Latest capture / preview QA evidence

- Latest committed scheduled capture evidence is run 43. `evidence/bootstrap/run-status.json` reports `capture: success`, `hero: success`, `audit: success`, `portfolio: success`, and `portfolio_audit: success`.
- `evidence/bootstrap/portfolio-preview/qa.json` reports `status: success` with no failures.
- Desktop, tablet and mobile all returned HTTP 200 with the correct new H1, no page errors and no horizontal overflow (1440/1440, 834/834 and 390/390 respectively).
- Normal video safeguards passed: the hero is muted, plays inline and uses metadata preload. Reduced-motion behavior passed: autoplay=false, loop=false, controls=true, paused=true.
- First retained final-preview Lighthouse baseline: mobile Performance 80, Accessibility 98, Best Practices 100, SEO 69, FCP 2.23s, LCP 4.78s, TBT 54.5ms, CLS 0.0017; desktop Performance 95, Accessibility 98, Best Practices 100, SEO 69, FCP 0.90s, LCP 1.32s, TBT 0ms, CLS 0.00037.
- The desktop Lighthouse diagnostics report a total page payload around 8,945 KiB. The largest resources were the original Cloudinary PNG captures, including `new-home-desktop.png` (~2.96 MB), `new-products-desktop.png` (~1.69 MB), `old-products-desktop.png` (~1.05 MB) and `old-home-desktop.png` (~1.00 MB).
- The portfolio branch now automatically requests optimized Cloudinary image delivery (`f_auto/q_auto`) for evidence images. Re-measure after Cloudflare deploys commit `19637914b7ff6320aa443a89847387bd6b22eb36` before treating the run-43 PageSpeed values as final.
- PR #11's Cloudflare Pages bot reports the stable Branch Preview URL as `https://feat-alamaar-rebuild-release.yasserhawas-preview.pages.dev`; the capture workflow targets that URL.

## Immediate next work

1. Re-run/inspect portfolio preview Lighthouse after Cloudflare deploys image-delivery optimization commit `19637914b7ff6320aa443a89847387bd6b22eb36`; compare payload and mobile LCP/Performance against the run-43 baseline before closing final PageSpeed QA.
2. Visually inspect the retained run-43 desktop/tablet/mobile full-page screenshots before closing the remaining responsive visual-review items. Automated layout/runtime/reduced-motion checks are already green.
3. Verify whether collection counts 54 + 55 overlap only if product-membership evidence becomes available; do not infer it from totals alone.
4. Keep multilingual recording blocked until the Arabic `Generate ...` prompt leakage is fixed and re-verified.
5. Keep PR #11 in draft until the optimized final PageSpeed measurement and visual screenshot review are complete.

## Blockers / unknowns

- Original client motivation/brief is unknown.
- Primary customer segment and buying process are unknown.
- UI designer name is not yet supplied; use generic `UI Designer` credit.
- Collection-count overlap remains unverified; current public/source checks do not expose enough membership data.
- Arabic homepage still exposes English image-generation prompt text; do not record polished multilingual proof yet.
- WordPress editor proof requires authenticated editor access and remains optional until access exists.
- Portfolio repository Actions remain unreliable for QA because jobs can fail before their first step; the working `casestudy` capture workflow is the active QA path against the deployed Cloudflare preview.
