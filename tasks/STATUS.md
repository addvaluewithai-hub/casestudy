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
- Product catalog currently contains 98 finishes.
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
- **First automated capture succeeded.** GitHub Actions committed `evidence/bootstrap/` with the exact old/new routes, matched 1440px desktop screenshots, 390px new-site mobile screenshots, and two WebM recordings.
- Verified matched Alaska routes: old `https://feedbackcentral.site/product/alaska-wood-5225-sf-2/` and new `https://alamaarhpl.com/shop/finishes/alaska-wood-5225-sf/`.
- Curated and uploaded matched old/new homepage, product archive, Alaska PDP, and contact screenshots to Cloudinary.
- Curated and uploaded mobile new homepage/products/Alaska/contact captures to Cloudinary.
- Uploaded the 8.88s catalog search/filter recording to Cloudinary; it fits the intended 6–10s evidence slot.
- Uploaded the 20.24s new-site montage bootstrap to Cloudinary as source material; it still needs a tighter 10–15s final edit.
- Added automated mobile Lighthouse capture for both old and new homepages to the GitHub Actions pipeline. A new run is expected from the capture-code push; do not claim mobile numbers until its JSON evidence exists.
- Logged the Arabic prompt-leak issue as a blocker for polished multilingual recording.

## Immediate next work

1. Inspect the new Lighthouse-enabled capture output and record mobile old/new measurements when available.
2. Trim/replace the 20.24s bootstrap montage with a deliberate 10–15s hero sequence.
3. Verify catalog collection-count overlap before interpreting 54 + 55 against 98 finishes.
4. Lock final headline, summary, role credit, Lighthouse methodology note, and AI-image disclosure.
5. Resolve/re-verify multilingual QA blocker before recording EN → AR → HI proof.
6. Begin the `yasserhawas.site` richer case-study media model and implementation once story/media contracts are locked.

## Blockers / unknowns

- Original client motivation/brief is unknown. Do not invent it.
- Primary customer segment and buying process are unknown. Avoid claims that depend on these facts.
- UI designer name/credit is not yet known. Use generic `UI Designer` until supplied.
- Need to verify whether collection counts can overlap (54 + 55 vs 98 total finishes) before interpreting the numbers.
- **Multilingual QA blocker:** the current Arabic homepage crawl exposes English image-generation prompt text inside at least the Ruby Collection and Classic Wood content. Do not record a polished EN/AR/HI case-study video until this visible content issue is fixed and re-verified.
- WordPress editor proof requires authenticated editor access; this is optional until access exists.
