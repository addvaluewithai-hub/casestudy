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
- Capture validation is confirmed in practice: run 20 was complete, and the newer published **run 21** also reports `capture: success`, `hero: success`, `audit: success`, with no errors.
- **Run-21 route evidence was rechecked against the actual committed `evidence/bootstrap/manifest.json` and the task ledger was corrected.** Exact run-21 discovery is old products `/shop/`, old contact `/contact/`, old Alaska `/product/alaska-wood-5225-sf-2/`, new products `/shop/`, new contact `/contact/`, and new Alaska `/shop/finishes/alaska-wood-5225-sf/`. Earlier `/product/`, `/contact-us/`, and alternate Alaska variants are no longer labelled as canonical automated evidence.
- Added dedicated `Alamaar rebuild release QA` on `feat/alamaar-rebuild-release-preview` for `npm run check`, narrative guardrails and crawlable-route validation.
- Fixed a release-preview rendering mismatch discovered in Cloudflare: the listing card was reading the new `alamaarWebsiteRebuildCaseStudy.ts` data while `/case-studies/alamaar-website-rebuild` still rendered an older hard-coded `AlamaarWebsiteRebuildStory.tsx`. The custom beige story now renders `study.headline`, `study.summary`, metrics and `study.sections` from the shared new data source.
- Added automated responsive QA to the release branch. `scripts/alamaar-responsive-qa.mjs` launches the production build at desktop/tablet/mobile widths, captures full-page screenshots, checks for horizontal overflow, runtime/console errors, the new headline/98-finish narrative, absence of superseded Elementor copy, video flags and reduced-motion behavior.
- Diagnosed a QA evidence blind spot: no `qa-artifacts/alamaar/run-status.json` has yet been published from the self-publishing push workflow. The workflow now also listens to `pull_request` updates targeting `release/new-site`, so PR synchronizations create an additional inspectable QA run even if branch self-publishing fails. Commit: `334d2fac68eec0cb8069d5b9cfb2aa1764232c1d`.
- Fresh live shop verification still reports `Showing 1–16 of 98 results` and exposes collection navigation, but public HTML/source evidence remains insufficient to prove whether the supplied collection counts 54 + 55 overlap. The claim remains intentionally unresolved rather than inferred.

## Immediate next work

1. Inspect the next `Alamaar rebuild release QA` run triggered after commit `334d2fac68eec0cb8069d5b9cfb2aa1764232c1d`; review its build result, responsive report/screenshots and reduced-motion checks, then fix any failure before closing responsive QA.
2. Verify whether collection counts 54 + 55 overlap only if product-membership evidence becomes available; do not infer it from totals alone.
3. Keep multilingual recording blocked until the Arabic `Generate ...` prompt leakage is fixed and re-verified.
4. Run final portfolio PageSpeed and complete final fact/editorial QA before moving PR #11 out of draft.

## Blockers / unknowns

- Original client motivation/brief is unknown.
- Primary customer segment and buying process are unknown.
- UI designer name is not yet supplied; use generic `UI Designer` credit.
- Collection-count overlap remains unverified; current public/source checks do not expose enough membership data.
- Arabic homepage still exposes English image-generation prompt text; do not record polished multilingual proof yet.
- WordPress editor proof requires authenticated editor access and remains optional until access exists.
