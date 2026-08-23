# Status

Last updated: 2026-08-23

## Goal

Produce an exceptional evidence-led Alamaar HPL redesign case study for Yasser's portfolio, with polished before/after visuals, short interaction recordings, accurate performance proof, concise UX narrative, transparent role attribution, and a clear bridge to the later 98-product AI/catalog-production case study.

## Verified project facts

- Project year: 2026.
- Old website remains available at https://feedbackcentral.site/.
- New website is live at https://alamaarhpl.com/.
- Yasser created the UX, information architecture, page structure, and new page concepts.
- Yasser hired and directed a UI designer, iterating through feedback to final visual designs.
- Yasser developed the finished site.
- Stack: native WordPress Gutenberg/FSE + ACF; no page builder and no translation plugin for the shared multilingual architecture.
- English, Arabic, and Hindi are supported through shared structure plus language-specific overrides; Arabic uses RTL.
- Product catalog currently contains 98 finishes; the live shop crawl currently reports “Showing 1–16 of 98 results.”
- Product discovery includes name/code search, collection filter, finish filter, design-family filter, result count, and pagination.
- Many application/interior images are AI-generated; exact product/material reference must remain distinct from conceptual application imagery.
- Desktop PageSpeed/Lighthouse evidence supplied by Yasser: old performance 45 vs new 96; old LCP 6.8s vs new 1.1s; old TBT 270ms vs new 0ms. Treat as lab evidence, not a business outcome.
- Verified paired mobile Lighthouse evidence is from run 14: performance 37 → 91; LCP 34.29s → 2.87s; TBT 759ms → 0ms. Methodology is Lighthouse CLI mobile form factor with simulated throttling on a GitHub Actions runner; retain the lab-measurement disclaimer.
- There is no client testimonial for this project. Never use unrelated portfolio testimonials.

## Current narrative direction

Primary story: UX-led redesign and rebuild of an aging product catalog into a richer product-evaluation and enquiry experience.

Supporting proof: catalog discovery, same-product PDP before/after, contact-flow redesign, performance improvement, maintainable WordPress editor, multilingual implementation.

Secondary/follow-up story: scaling high-quality product content and application imagery consistently across 98 products. Keep the AI/catalog-production deep dive out of the main case study except as a teaser.

## Portfolio design / branch decision

- **The canonical portfolio design base is `release/new-site`**, which is the beige case-study design used by `/case-studies/wp-ai-kits` and the Cloudflare `release-new-site` preview.
- The earlier implementation branch `feat/alamaar-rebuild-case-study` was based on the older `main` shell and is superseded. PR #10 was closed without merging.
- Current working branch: **`feat/alamaar-rebuild-release-preview`**, created directly from `release/new-site`.
- Current review surface: **draft PR #11**, targeting `release/new-site`.
- Cloudflare Pages is already building this feature branch automatically. Do not depend on Cloudflare tooling for project control; GitHub is the source of truth.
- The existing page visible on the plain `release-new-site` branch still shows the older Elementor-focused copy. The feature branch contains the new headline `Rebuilding Alamaar HPL's digital product experience.` and the complete evidence-led narrative.

## Completed

- Reviewed old/new supplied screenshots and source repositories.
- Created the dedicated case-study workspace, task system, Cloudinary folder, Playwright capture tooling, GitHub Actions workflow, and recurring work loop.
- Verified matched Alaska routes and curated old/new homepage, products, Alaska, contact, mobile evidence, and catalog interaction video to Cloudinary.
- Locked the headline, summary, role credit, seven-part story, Lighthouse methodology language, and AI-image disclosure in `STORYBOARD.md`.
- The case-study schema supports ordered image, video, before/after, gallery, and stats media blocks while retaining the legacy image field.
- The complete Alamaar website-rebuild narrative is implemented with curated evidence and verified Lighthouse stats.
- The misleading primary 67-product catalog-system framing has been removed from the rebuild story; the 98-product production-system story is a separate next chapter.
- Case-study videos respect `prefers-reduced-motion`; reduced-motion users do not receive forced autoplay/loop and get controls.
- Focused hero media is curated on Cloudinary at 1440×900, 25fps, 9.88s.
- Verified paired mobile Lighthouse run 14 is preserved under `evidence/verified/mobile-lighthouse-run14/summary.json`, with source commit `3dec250846d447b491f6d376b637bccee955a3ba` retaining the original raw run artifacts.
- Added route-specific crawlability/static-generation work and cross-repository portfolio QA during the first implementation pass; re-validate or port only what is still needed on the `release/new-site`-based branch.
- Evidence integrity issue found and fixed: scheduled run 15 was marked success by step exit codes even though the old site timed out during route discovery and its Lighthouse run failed with `NO_FCP`. `capture/validate-capture.mjs` now rejects missing required evidence, and `audit.mjs` retries and exits non-zero if either Lighthouse target fails.
- Created `feat/alamaar-rebuild-release-preview` from `release/new-site` and ported the rich media schema, renderer, reduced-motion hook/hero behavior, and new `alamaar-website-rebuild` narrative onto the correct beige design system.
- Opened draft PR #11 targeting `release/new-site` specifically for the Cloudflare/new-site preview workflow.
- Updated hourly-agent instructions so future runs cannot accidentally continue against the older dark/main portfolio shell.

## Latest capture health

- Run 15's committed `run-status.json` says success, but that status is **not trustworthy** because it predates the new validators.
- Run 15 Lighthouse summary contains an old-site `NO_FCP` error; its new-site mobile result was 99 with LCP 1.86s, but it is not a valid paired before/after run and must not replace verified run 14 in the case study.
- Run 15 route capture also timed out against the preserved old site and produced null old product/contact/Alaska discovery fields.
- The capture and audit scripts have been hardened so subsequent runs report these conditions as failures rather than false success.

## Immediate next work

1. QA the actual Cloudflare build of `feat/alamaar-rebuild-release-preview` / PR #11 against the `release/new-site` beige visual system.
2. Run build/type validation and responsive desktop/tablet/mobile review on the new-site-based branch; fix any layout/media issues without drifting from the established WP AI Kits design language.
3. Confirm important narrative content and metadata remain crawlable on the new branch, porting the earlier static-route solution only if required by the `release/new-site` build architecture.
4. Verify catalog collection-count overlap before interpreting 54 + 55 against 98 finishes.
5. Keep multilingual recording blocked until the Arabic `Generate ...` prompt leakage is fixed and re-verified.
6. Run final portfolio PageSpeed and complete the final fact/editorial pass before moving PR #11 out of draft.

## Blockers / unknowns

- Original client motivation/brief is unknown. Do not invent it.
- Primary customer segment and buying process are unknown. Avoid claims that depend on these facts.
- UI designer name/credit is not yet known. Use generic `UI Designer` until supplied.
- Need to verify whether collection counts can overlap (54 + 55 vs 98 total finishes) before interpreting the numbers.
- Multilingual QA blocker: the Arabic homepage still exposes English image-generation prompt text within collection content. Do not record polished EN/AR/HI evidence until fixed and re-verified.
- WordPress editor proof requires authenticated editor access; optional until access exists.
