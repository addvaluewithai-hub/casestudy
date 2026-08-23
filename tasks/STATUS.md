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
- Added focused 10–15s hero capture and automated mobile Lighthouse capture to the evidence workflow; final outputs still require inspection before claims are updated.
- Updated the capture workflow so successful scheduled runs publish their latest evidence back into `evidence/bootstrap/`, removing the prior blind spot where scheduled hero/Lighthouse outputs existed only as Actions artifacts.
- Made evidence publishing resilient to partial capture failures: screenshot, hero, and Lighthouse steps now record individual outcomes, partial evidence is still committed to `evidence/bootstrap/`, and the workflow writes `run-status.json` before failing the job when a required step fails. This should expose whether hero or audit is blocking the missing outputs on the next run.
- Locked the headline, summary, role credit, seven-part story, Lighthouse methodology language, and AI-image disclosure in `STORYBOARD.md`.
- Logged the Arabic prompt-leak issue as a blocker for polished multilingual recording.
- Portfolio implementation is active on branch `feat/alamaar-rebuild-case-study` in `addvaluewithai-hub/yasserhawas.site`.
- The case-study schema supports ordered rich media blocks: image, video, before/after, gallery, and stats while retaining the legacy image field for existing studies.
- `CaseStudyBody` renders those rich media blocks with lazy-loaded images, metadata-preloaded video, matched before/after grids, galleries, and evidence-oriented stat comparisons.
- **The complete Alamaar website-rebuild narrative is now implemented on the portfolio branch.** It uses the locked seven-part story and curated Cloudinary evidence for matched homepage, catalog, Alaska PDP, contact, responsive captures, the catalog interaction video, and verified desktop Lighthouse stats.
- **The misleading primary 67-product catalog-system framing has been removed from the Alamaar portfolio data object.** The primary Alamaar slug is now `alamaar-website-rebuild`; the 98-product production-system story remains a clearly separate next chapter rather than being presented as the same case study.
- Added `prefers-reduced-motion` handling to both hero and inline case-study videos. Reduced-motion users get a non-autoplaying, non-looping video with controls rather than forced motion.
- Strengthened reduced-motion behavior so the preference is read synchronously at initial render; this prevents a brief autoplay flash before the effect subscribes to preference changes.
- Added a dedicated GitHub Actions QA workflow on the portfolio branch to run `npm run check` and enforce narrative guardrails against the old 67-product headline, unrelated testimonial names, unsupported conversion claims, and similar regressions.
- Opened draft portfolio PR #10 (`Alamaar website rebuild case study`) so implementation, QA findings, and final review have a single merge surface. The branch is currently mergeable but remains intentionally draft until evidence and responsive QA are complete.

## Immediate next work

1. Inspect the next published `evidence/bootstrap/run-status.json`, mobile Lighthouse JSON, and focused `hero-montage.webm`; curate only verified outputs.
2. Inspect the portfolio QA workflow result and fix any type/build failure on `feat/alamaar-rebuild-case-study`.
3. Perform responsive visual QA on the implemented case-study page at desktop/tablet/mobile.
4. Verify catalog collection-count overlap before interpreting 54 + 55 against 98 finishes.
5. Resolve/re-verify multilingual QA blocker before recording EN → AR → HI proof.
6. Confirm important narrative content remains crawlable and then run final portfolio PageSpeed before PR/merge.

## Blockers / unknowns

- Original client motivation/brief is unknown. Do not invent it.
- Primary customer segment and buying process are unknown. Avoid claims that depend on these facts.
- UI designer name/credit is not yet known. Use generic `UI Designer` until supplied.
- Need to verify whether collection counts can overlap (54 + 55 vs 98 total finishes) before interpreting the numbers.
- Multilingual QA blocker: the current Arabic homepage crawl exposes English image-generation prompt text inside at least the Ruby Collection and Classic Wood content. Do not record polished EN/AR/HI evidence until fixed and re-verified.
- WordPress editor proof requires authenticated editor access; optional until access exists.
- Actions-run enumeration remains limited through the connector, so scheduled capture evidence is published into the repository itself for deterministic inspection on subsequent runs.
