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
- Run 43 produced a fully green automated preview QA result and established the first retained portfolio-preview Lighthouse baseline.
- The initial final-preview Lighthouse evidence exposed an avoidable ~8.9 MB page payload dominated by untransformed Cloudinary PNG evidence. Portfolio commit `19637914b7ff6320aa443a89847387bd6b22eb36` now delivers Alamaar evidence images through Cloudinary `f_auto/q_auto` while retaining the same source assets and content.
- Cloudflare Pages confirmed commit `19637914b7ff6320aa443a89847387bd6b22eb36` deployed successfully to the release-preview branch at 2026-08-23T19:43:30Z; the bot reported immutable preview `https://09ce347b.yasserhawas-preview.pages.dev` and the stable branch preview URL.
- Hardened the final portfolio Lighthouse audit in case-study commit `b2e92aa237daba8a5e6f038cf5cf081fc25b0800`: each profile records total byte weight, largest network resources, and counts optimized vs unoptimized known Alamaar evidence-image requests.
- Copied the retained full-page QA captures into Cloudinary as `qa-run43-desktop`, `qa-run43-tablet`, and `qa-run43-mobile` for durable visual-review access while preserving the original repository evidence.
- Run 47 provides valid post-optimization final-preview Lighthouse evidence: measured page weight fell to 2.85 MB mobile / 3.28 MB desktop from the earlier ~8.9 MB baseline; every known evidence image requested by Lighthouse was served through `f_auto/q_auto` as WebP with zero unoptimized URLs. Mobile measured Performance 78 / LCP 5.16s / TBT 93ms; desktop measured Performance 95 / LCP 1.42s / TBT 0ms. These remain preview lab measurements, not production analytics.
- Run 47 responsive QA is fully green at desktop/tablet/mobile: HTTP 200, current H1 and narrative headings, no runtime errors, no horizontal overflow, and correct normal/reduced-motion video attributes.
- Closed a remaining image-delivery QA blind spot in case-study commit `28000fff5efb5dd902ffbf3410b0a9e10a801794`: responsive Playwright QA forces lazy evidence images into view, records deployed DOM image URLs, requires all 12 expected Alamaar evidence images, and fails if any deployed image URL lacks `/image/upload/f_auto/q_auto/`. This complements Lighthouse network evidence, which can omit below-fold lazy images.
- Added a final deployed-layout health layer in case-study commit `1a4720c8740132339a143f7bea62693c5b278b7f`: responsive QA now records broken images, zero-sized image/video elements, clipped text and text extending outside the viewport at desktop/tablet/mobile, and fails on any such regression. This targets the remaining responsive visual-review task without replacing the required human screenshot inspection.
- Re-checked the durable Cloudinary QA screenshot assets during the 2026-08-24 run: desktop is 1440×13718 / 1.22 MB, tablet 834×12823 / 1.09 MB, and mobile 390×16610 / 0.82 MB; all three remain active assets with valid image dimensions and nonzero payloads.

## Latest capture / preview QA evidence

- Latest committed scheduled capture evidence is **run 47**. `evidence/bootstrap/run-status.json` reports `capture: success`, `hero: success`, `audit: success`, `portfolio: success`, and `portfolio_audit: success`.
- Run 47 responsive QA: desktop 1440/1440, tablet 834/834, mobile 390/390 body/scroll widths; HTTP 200, zero page errors and zero horizontal overflow.
- Run 47 normal video checks: hero autoplay=true, muted=true, loop=true, playsInline=true, controls=false, preload=`metadata`. Reduced-motion: autoplay=false, loop=false, controls=true, paused=true.
- Run 47 portfolio Lighthouse was generated at 2026-08-23T21:41:41Z, well after the confirmed image-optimization deployment, so it is valid post-optimization evidence.
- Run 47 post-optimization preview scores: mobile Performance 78 / Accessibility 98 / Best Practices 100 / SEO 69, FCP 2.24s, LCP 5.16s, TBT 93ms, total byte weight 2.85 MB; desktop Performance 95 / Accessibility 98 / Best Practices 100 / SEO 69, FCP 0.90s, LCP 1.42s, TBT 0ms, total byte weight 3.28 MB.
- Lighthouse requested 2 known evidence images on mobile and 4 on desktop; all were delivered through `/image/upload/f_auto/q_auto/` as WebP with zero unoptimized URLs.
- The newer Playwright DOM-delivery assertion in commit `28000fff5efb5dd902ffbf3410b0a9e10a801794` and deployed-layout assertions in `1a4720c8740132339a143f7bea62693c5b278b7f` trigger a fresh capture run. Until its report is published, run 47 remains the latest retained evidence and the new assertions must not be treated as passed.
- PR #11's Cloudflare Pages bot reports the stable Branch Preview URL as `https://feat-alamaar-rebuild-release.yasserhawas-preview.pages.dev`; the capture workflow targets that URL.

## Immediate next work

1. Inspect the next published responsive QA result after commits `28000fff5efb5dd902ffbf3410b0a9e10a801794` and `1a4720c8740132339a143f7bea62693c5b278b7f`; require all 12 evidence images transformed plus zero broken/zero-sized media, clipped text or off-viewport text at desktop/tablet/mobile.
2. Visually inspect the retained desktop/tablet/mobile full-page screenshots, also copied to Cloudinary as `qa-run43-desktop`, `qa-run43-tablet`, and `qa-run43-mobile`, before closing the remaining responsive visual-review items.
3. Verify whether collection counts 54 + 55 overlap only if product-membership evidence becomes available; do not infer it from totals alone.
4. Keep multilingual recording blocked until the Arabic `Generate ...` prompt leakage is fixed and re-verified.
5. Keep PR #11 in draft until the final visual screenshot review is complete.

## Blockers / unknowns

- Original client motivation/brief is unknown.
- Primary customer segment and buying process are unknown.
- UI designer name is not yet supplied; use generic `UI Designer` credit.
- Collection-count overlap remains unverified; current public/source checks do not expose enough membership data.
- Arabic homepage still exposes English image-generation prompt text; do not record polished multilingual proof yet.
- WordPress editor proof requires authenticated editor access and remains optional until access exists.
- Portfolio repository Actions remain unreliable for QA because jobs can fail before their first step; the working `casestudy` capture workflow is the active QA path against the deployed Cloudflare preview.
