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
- Capture validation is confirmed in practice: run 20 was complete, and the newer published run 21 also reports `capture: success`, `hero: success`, `audit: success`, with no errors.
- Run-21 route evidence was rechecked against `evidence/bootstrap/manifest.json`; the canonical automated routes are old/new `/shop/`, old/new `/contact/`, old Alaska `/product/alaska-wood-5225-sf-2/`, and new Alaska `/shop/finishes/alaska-wood-5225-sf/`.
- Added dedicated `Alamaar rebuild release QA` on `feat/alamaar-rebuild-release-preview` for `npm run check`, narrative guardrails and crawlable-route validation.
- Fixed the release-preview rendering mismatch: the custom beige Alamaar story now renders shared case-study data rather than an older hard-coded Elementor narrative.
- Added automated responsive QA for desktop/tablet/mobile, overflow/runtime checks, story assertions and reduced-motion video behavior.
- The PR-triggered release QA is observable but remains blocked at GitHub Actions infrastructure level: run 9 (`32634593790`) and its rerun failed before any workflow step started, with no artifact. This is not evidence of a page-level responsive/build failure.
- Fresh live shop verification still reports 98 results, but public/source evidence remains insufficient to prove whether collection counts 54 + 55 overlap.
- Completed a line-by-line factual portfolio audit. Current live 98 count, matched Alaska evidence, retained desktop/run-14 mobile Lighthouse figures, Gutenberg/FSE + ACF architecture and shared English/Arabic/Hindi structure are reconciled. The source repo's separate 99-finish staging snapshot remains explicitly distinguished from current live production.
- Confirmed the custom rebuild story contains no testimonial and uses the accurate generic collaborating-UI-designer credit. Media captions distinguish matched/live evidence from conceptual imagery.
- **Completed the final editorial pass on the release-preview source.** Commit `abbe6fa11f028473b77f3997ff7602b015d6e3e7` tightens the seven-part narrative without changing facts: removes defensive/meta copy around conversion claims, replaces subjective performance phrasing with lab-test language, reduces repetition in discovery/PDP sections, and simplifies multilingual/next-chapter wording.

## Latest capture evidence

- Latest committed scheduled evidence remains run 21, published by commit `4854dd5f8bb01a8522a832a23b02ff00a26e2ce8`.
- `evidence/bootstrap/run-status.json`: capture success, hero success, audit success, no errors.
- Run-21 mobile Lighthouse measured old/new performance 38 → 90 and LCP ~32.88s → 2.88s; these later valid numbers are retained as evidence but do not replace canonical run 14 in the published case study, avoiding cherry-picking normal Lighthouse variance.

## Immediate next work

1. Re-check portfolio Actions after the latest source commit; when a job actually starts, inspect responsive screenshots/report and fix any page-level issue before closing responsive/reduced-motion QA.
2. Run final PageSpeed on the actual release-preview case-study page once the final branch state is stable.
3. Verify whether collection counts 54 + 55 overlap only if product-membership evidence becomes available; do not infer it from totals alone.
4. Keep multilingual recording blocked until the Arabic `Generate ...` prompt leakage is fixed and re-verified.
5. Resolve any branch/base divergence on PR #11 before moving it out of draft, but do not merge until responsive and final PageSpeed QA are complete.

## Blockers / unknowns

- Original client motivation/brief is unknown.
- Primary customer segment and buying process are unknown.
- UI designer name is not yet supplied; use generic `UI Designer` credit.
- Collection-count overlap remains unverified; current public/source checks do not expose enough membership data.
- Arabic homepage still exposes English image-generation prompt text; do not record polished multilingual proof yet.
- WordPress editor proof requires authenticated editor access and remains optional until access exists.
- Portfolio responsive QA is temporarily blocked by a GitHub Actions run that fails before any step starts; no page-level failure has been established from that run.
