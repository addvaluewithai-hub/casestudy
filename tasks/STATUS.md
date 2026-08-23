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
- **Capture validation is now confirmed in practice:** scheduled run 20 reports `capture: success`, `hero: success`, `audit: success`; the manifest contains all matched routes and no notes/errors. Run 20 also produced another valid paired mobile lab run (38 → 90 performance, 33.48s → 2.89s LCP, 709ms → 0ms TBT), reinforcing that the pipeline now reports complete runs correctly. Run 14 remains the published canonical comparison to avoid silently changing case-study numbers between lab runs.
- Added a dedicated `Alamaar rebuild release QA` GitHub Actions workflow directly to `feat/alamaar-rebuild-release-preview`. It runs `npm ci`, `npm run check`, and narrative guardrails against the old Elementor/67-product wording and unsupported outcome claims. Commit: `cef6a14c1f6f51f4bc659b84e5b7235cc629b72f`.

## Immediate next work

1. Inspect the new release-branch QA run and fix any build/type failure.
2. Perform responsive desktop/tablet/mobile visual QA on the Cloudflare build while preserving the established WP AI Kits design language.
3. Confirm important narrative content and metadata are crawlable on the `release/new-site` architecture; port the earlier static-route solution only if needed.
4. Verify whether collection counts 54 + 55 overlap before interpreting them against 98 finishes.
5. Keep multilingual recording blocked until the Arabic `Generate ...` prompt leakage is fixed and re-verified.
6. Run final portfolio PageSpeed and complete final fact/editorial QA before moving PR #11 out of draft.

## Blockers / unknowns

- Original client motivation/brief is unknown.
- Primary customer segment and buying process are unknown.
- UI designer name is not yet supplied; use generic `UI Designer` credit.
- Collection-count overlap still needs verification.
- Arabic homepage still exposes English image-generation prompt text; do not record polished multilingual proof yet.
- WordPress editor proof requires authenticated editor access and remains optional until access exists.
