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
- Automated mobile Lighthouse evidence from GitHub Actions run 14: performance 37 → 91; LCP 34.29s → 2.87s; TBT 759ms → 0ms. Methodology is Lighthouse CLI mobile form factor with simulated throttling on a GitHub Actions runner; retain the lab-measurement disclaimer.
- There is no client testimonial for this project. Never use unrelated portfolio testimonials.

## Current narrative direction

Primary story: UX-led redesign and rebuild of an aging product catalog into a richer product-evaluation and enquiry experience.

Supporting proof: catalog discovery, same-product PDP before/after, contact-flow redesign, performance improvement, maintainable WordPress editor, multilingual implementation.

Secondary/follow-up story: scaling high-quality product content and application imagery consistently across 98 products. Keep the AI/catalog-production deep dive out of the main case study except as a teaser.

## Completed

- Reviewed old/new supplied screenshots and source repositories.
- Created the dedicated case-study workspace, task system, Cloudinary folder, Playwright capture tooling, GitHub Actions workflow, and recurring work loop.
- First automated capture succeeded with matched desktop/mobile evidence and videos.
- Verified matched Alaska routes and curated old/new homepage, products, Alaska, contact, mobile evidence, and catalog interaction video to Cloudinary.
- Locked the headline, summary, role credit, seven-part story, Lighthouse methodology language, and AI-image disclosure in `STORYBOARD.md`.
- Logged the Arabic prompt-leak issue as a blocker for polished multilingual recording.
- Portfolio implementation is active on branch `feat/alamaar-rebuild-case-study` in `addvaluewithai-hub/yasserhawas.site`.
- The case-study schema supports ordered rich media blocks: image, video, before/after, gallery, and stats while retaining the legacy image field for existing studies.
- `CaseStudyBody` renders those rich media blocks with lazy-loaded images, metadata-preloaded video, matched before/after grids, galleries, and evidence-oriented stat comparisons.
- **The complete Alamaar website-rebuild narrative is now implemented on the portfolio branch.** It uses the locked seven-part story and curated Cloudinary evidence for matched homepage, catalog, Alaska PDP, contact, responsive captures, the catalog interaction video, and verified Lighthouse stats.
- **The misleading primary 67-product catalog-system framing has been removed from the Alamaar portfolio data object.** The primary Alamaar slug is now `alamaar-website-rebuild`; the 98-product production-system story remains a clearly separate next chapter rather than being presented as the same case study.
- Added `prefers-reduced-motion` handling to both hero and inline case-study videos. Reduced-motion users get a non-autoplaying, non-looping video with controls rather than forced motion.
- Strengthened reduced-motion behavior so the preference is read synchronously at initial render; this prevents a brief autoplay flash before the effect subscribes to preference changes.
- Added a dedicated GitHub Actions QA workflow on the portfolio branch to run `npm run check` and enforce narrative guardrails against the old 67-product headline, unrelated testimonial names, unsupported conversion claims, and similar regressions.
- Opened draft portfolio PR #10 (`Alamaar website rebuild case study`) so implementation, QA findings, and final review have a single merge surface. The branch is currently mergeable but remains intentionally draft until evidence and responsive QA are complete.
- Capture evidence publishing is deterministic and resilient to partial failures through `evidence/bootstrap/run-status.json` and committed outputs.
- **Scheduled evidence run 15 succeeded end-to-end:** capture, focused hero, and mobile Lighthouse all report `success`.
- **Focused hero media is curated:** `hero-montage-focused.webm` is hosted on Cloudinary at 1440×900, 25fps, 9.88s and replaces the earlier blind 12-second trim as the preferred hero source.
- **Mobile performance proof is retained and verified:** raw Lighthouse JSON plus summary are committed under `evidence/bootstrap/`; mobile performance measured 37 → 91 and LCP 34.29s → 2.87s under the recorded lab methodology.
- **Portfolio branch uses the focused hero asset and includes a concise second stats block for the verified mobile Lighthouse evidence.**
- **Crawlability gap identified and addressed in the portfolio branch:** the SPA's shared `index.html` previously contained only homepage metadata and no Alamaar narrative in the raw HTML. A build-time generator now creates `/case-studies/alamaar-website-rebuild/index.html` with route-specific title, description, canonical/OG/Twitter metadata and a crawlable progressive fallback containing the important case-study narrative. Verification is pending automated build QA.
- **Added cross-repository portfolio QA to this workspace.** `.github/workflows/portfolio-qa.yml` checks out the case-study branch, runs `npm run check`, verifies the generated static route, starts the production preview, captures full-page desktop/tablet/mobile screenshots, checks horizontal overflow and rendered narrative, and validates normal/reduced-motion video behavior. Results are published into `evidence/portfolio-qa/` for deterministic review.
- Updated PR #10 description so completed hero/mobile evidence and the new crawlability work are reflected accurately.

## Immediate next work

1. Inspect `evidence/portfolio-qa/run-status.json`, `qa.json`, and desktop/tablet/mobile screenshots from the new cross-repo QA workflow; fix any build, overflow, rendering, or media-behavior failures.
2. Once automated evidence passes, mark crawlability/responsive/video QA tasks complete only if screenshots and JSON support it.
3. Verify catalog collection-count overlap before interpreting 54 + 55 against 98 finishes.
4. Resolve/re-verify multilingual QA blocker before recording EN → AR → HI proof.
5. Run final portfolio PageSpeed and complete the final fact/editorial pass before moving PR #10 out of draft.

## Blockers / unknowns

- Original client motivation/brief is unknown. Do not invent it.
- Primary customer segment and buying process are unknown. Avoid claims that depend on these facts.
- UI designer name/credit is not yet known. Use generic `UI Designer` until supplied.
- Need to verify whether collection counts can overlap (54 + 55 vs 98 total finishes) before interpreting the numbers.
- Multilingual QA blocker: the current Arabic homepage crawl previously exposed English image-generation prompt text inside at least the Ruby Collection and Classic Wood content. Do not record polished EN/AR/HI evidence until fixed and re-verified.
- WordPress editor proof requires authenticated editor access; optional until access exists.
