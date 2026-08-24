# Status

Last updated: 2026-08-24

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
- Current review surface: draft PR #11 targeting `release/new-site`; currently open and mergeable.
- Cloudflare Pages builds the feature branch automatically; GitHub remains the source of truth.
- The feature branch contains the new headline `Rebuilding Alamaar HPL's digital product experience.` and the complete evidence-led narrative.

## Completed

- Dedicated case-study workspace, task ledger, Cloudinary folder, Playwright evidence capture and recurring work loop.
- Matched old/new homepage, products, Alaska PDP and contact captures; new mobile captures; catalog interaction recording; focused 9.88s hero montage.
- Curated selected evidence to Cloudinary.
- Locked headline, summary, role credit, seven-part story, Lighthouse methodology wording and AI-image disclosure.
- Rich media case-study schema supports image, video, before/after, gallery and stats blocks while preserving legacy image support.
- Full rebuild narrative is implemented on the correct `release/new-site` beige design branch.
- Fixed the custom-route content split so the beige Alamaar story renders the shared new case-study data instead of a hard-coded Elementor-era narrative.
- Case-study video respects `prefers-reduced-motion`.
- Verified run-14 mobile Lighthouse evidence is preserved separately as the canonical paired mobile comparison.
- Capture scripts were hardened after run 15 exposed false-success behavior; required capture validation and Lighthouse failures now exit non-zero.
- Release-branch QA validates build/typecheck, narrative guardrails and crawlable route output.
- Important narrative copy is emitted as crawlable route-specific HTML and metadata.
- Completed factual audit, testimonial check, generic collaborating-UI-designer credit, caption review and final editorial pass.
- Optimized portfolio evidence delivery through Cloudinary `f_auto/q_auto`; post-optimization preview payload fell from the earlier ~8.9 MB baseline to roughly 2.85 MB mobile / 3.28 MB desktop.
- Run 47 established the retained post-optimization PageSpeed baseline and closed final PageSpeed/video QA.
- Added DOM-level image-delivery validation requiring all 12 expected unique evidence images and transformed Cloudinary URLs.
- Added deployed-layout visual-health assertions for broken images, zero-sized media, clipped text and off-viewport text at desktop/tablet/mobile.
- Re-inspected the committed run-51 artifacts on 2026-08-24: `run-status.json`, the deployed `portfolio-preview/qa.json`, and the latest evidence commit all agree that capture, hero, Alamaar audit, portfolio responsive QA and portfolio Lighthouse completed successfully. PR #11 is still open, draft and mergeable on the expected release-preview branch.

## Latest capture / preview QA evidence

- Latest committed scheduled capture evidence is **run 51**. `evidence/bootstrap/run-status.json` reports `capture: success`, `hero: success`, `audit: success`, `portfolio: success`, and `portfolio_audit: success`.
- Run 51 responsive QA checked the deployed Cloudflare branch preview at desktop 1440px, tablet 834px and mobile 390px. All returned HTTP 200 with the current H1 and required narrative headings, zero runtime errors, zero horizontal overflow, zero broken images, zero zero-sized media, zero clipped text and zero off-viewport text.
- Run 51 DOM delivery verification found 13 evidence image elements representing all **12 expected unique evidence images**; `missingEvidenceImages` and `unoptimizedEvidenceImages` are both empty. Every deployed evidence URL uses `/image/upload/f_auto/q_auto/`.
- Run 51 normal video checks: hero autoplay=true, muted=true, loop=true, playsInline=true, controls=false, preload=`metadata`. Reduced-motion: autoplay=false, loop=false, controls=true, paused=true.
- Run 51 final-preview Lighthouse is valid post-optimization lab evidence. Mobile measured Performance 73 / Accessibility 98 / Best Practices 100 / SEO 69, FCP 3.08s, LCP 5.66s, TBT 82ms, total byte weight 2.85 MB. Desktop measured Performance 95 / Accessibility 98 / Best Practices 100 / SEO 69, FCP 0.87s, LCP 1.39s, TBT 0ms, total byte weight 3.28 MB. This later run is normal lab variance and does not replace the retained run-47 baseline used to close final PageSpeed.
- Run 51 therefore closes the previously pending automated DOM-transform and deployed visual-health verification. The only remaining responsive QA requirement is human visual inspection of the full-page desktop/tablet/mobile captures.

## Immediate next work

1. Visually inspect the retained desktop/tablet/mobile full-page screenshots before closing the remaining responsive visual-review items. Durable copies remain on Cloudinary as `qa-run43-desktop`, `qa-run43-tablet`, and `qa-run43-mobile`; the newest captures are also under `evidence/bootstrap/portfolio-preview/`.
2. Verify whether collection counts 54 + 55 overlap only if product-membership evidence becomes available; do not infer it from totals alone.
3. Keep multilingual recording blocked until the Arabic `Generate ...` prompt leakage is fixed and re-verified.
4. Keep PR #11 in draft until the final visual screenshot review is complete.

## Blockers / unknowns

- Original client motivation/brief is unknown.
- Primary customer segment and buying process are unknown.
- UI designer name is not yet supplied; use generic `UI Designer` credit.
- Collection-count overlap remains unverified; current public/source checks do not expose enough membership data.
- Arabic homepage still exposes English image-generation prompt text; do not record polished multilingual proof yet.
- WordPress editor proof requires authenticated editor access and remains optional until access exists.
- Portfolio repository Actions remain unreliable for QA because jobs can fail before their first step; the working `casestudy` capture workflow is the active QA path against the deployed Cloudflare preview.
- Final human screenshot inspection is now the only completion-condition task not already covered by automated evidence. The current automation runtime can read the GitHub/Cloudinary asset metadata and QA reports but cannot render the retained remote PNG pixels for a genuine human visual judgment; do not mark responsive visual review complete without an actual visual inspection.
