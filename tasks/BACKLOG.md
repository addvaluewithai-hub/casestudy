# Backlog

Work top-to-bottom unless a task is blocked. Every completed task should update `STATUS.md` and relevant evidence/claim records.

## P0 — Evidence capture

- [x] Create automated browser capture workflow using Playwright.
- [x] Capture old/new homepage at matched desktop viewport.
- [x] Capture old/new product archive at matched desktop viewport.
- [x] Capture old/new Alaska Wood product detail at matched desktop viewport.
- [x] Capture old/new contact experience at matched desktop viewport.
- [x] Capture new homepage/products/PDP/contact at mobile viewport.
- [x] Record polished focused new-site hero montage. Run 14 produced a 9.88s 1440×900 homepage → products → Alaska sequence, curated to Cloudinary as `hero-montage-focused`.
- [x] Record 6–10s catalog search/filter interaction (name/code + collection + design family/finish). Bootstrap recording is 8.88s.
- [ ] Record 6–10s EN → AR → HI same-page language sequence if routes/language control are stable. Blocked by Arabic prompt leakage.
- [ ] Record 6–10s WordPress editor → frontend proof if authenticated editor access becomes available.
- [x] Capture/verify mobile PageSpeed old vs new. Run 14 raw Lighthouse evidence retained; performance 37 → 91, LCP 34.29s → 2.87s, TBT 759ms → 0ms under automated mobile lab conditions.
- [x] Curate selected captures to Cloudinary `casestudy/alamaar` and record URLs in `EVIDENCE.md`.

## P1 — Story and claims

- [x] Verify exact old/new Alaska Wood URLs and matched product code.
- [ ] Verify catalog filter behavior and whether filter counts overlap. Current public/source evidence does not expose enough collection membership detail to prove overlap; keep unresolved rather than infer 54 + 55 against 98.
- [x] Decide final headline and one-sentence project summary.
- [x] Lock concise story: Context → Product discovery → PDP → Enquiry → Performance → Engineering/multilingual → 98-product next chapter.
- [x] Write concise role credit: UX strategy / information architecture / design direction / development; UI design by collaborating designer.
- [x] Draft Lighthouse methodology note and avoid treating lab scores as business outcomes.
- [x] Draft AI-image disclosure language: exact material reference vs conceptual application imagery.

## P2 — Portfolio implementation

- [x] Upgrade `yasserhawas.site` case-study schema to support video, before/after, gallery, stats, and rich media blocks. Legacy image field retained for compatibility.
- [x] Implement Alamaar website-rebuild case study as separate story from catalog automation on `feat/alamaar-rebuild-release-preview`, based directly on the approved `release/new-site` beige design.
- [x] Remove/replace conflicting 67-product Alamaar framing where it can mislead readers about the current 98-product rebuild story; the catalog-production case study remains a separate next chapter.
- [x] Add media lazy-loading/performance safeguards. Content images use lazy loading + async decoding, videos use metadata preload, and autoplaying case-study/hero videos respect `prefers-reduced-motion`.
- [x] Replace provisional hero URL with the focused Cloudinary hero and add verified mobile Lighthouse proof without changing evidence guardrails.
- [x] Add build-time dedicated Alamaar case-study HTML generation with route-specific metadata and crawlable progressive fallback content.
- [x] Fix the custom-route content split: `AlamaarWebsiteRebuildStory.tsx` now renders the shared new case-study data rather than maintaining the old Elementor narrative separately.
- [x] Add release-branch QA guardrails that reject the superseded Elementor/67-product wording and require the custom story to render shared headline/sections.
- [ ] Add responsive/mobile QA for the case-study page. Run 47 is green at 1440/834/390px with HTTP 200, current H1, all required narrative headings, no runtime errors and no horizontal overflow. Retained full-page screenshots are copied to Cloudinary as `qa-run43-desktop`, `qa-run43-tablet`, and `qa-run43-mobile`; final visual review still required before closing this item. The QA now forces lazy evidence images into view and verifies all expected deployed image URLs use `f_auto/q_auto`; commit `1a4720c8740132339a143f7bea62693c5b278b7f` additionally records and fails obvious visual-health regressions such as broken/zero-sized media, clipped text, or text extending outside the viewport. Await the next published run before treating these new assertions as evidence.
- [x] Ensure important narrative copy is crawlable HTML and route-specific metadata; build-time output and QA assertions are implemented.
- [x] Optimize Alamaar evidence image delivery on the portfolio page. Commit `19637914b7ff6320aa443a89847387bd6b22eb36` routes Cloudinary image evidence through `f_auto/q_auto`; run 47 confirms deployed Lighthouse requests are WebP-transformed and the measured page payload fell from the earlier ~8.9 MB baseline to 2.85 MB mobile / 3.28 MB desktop.

## P3 — Final QA

- [x] Fact-check every number, technology, and before/after statement against evidence. Current live 98 count, retained desktop/mobile lab measurements, matched Alaska routes/captures, and Gutenberg/FSE + ACF + multilingual architecture were reconciled on 2026-08-23; the source repo's separate 99-finish staging snapshot is explicitly noted so it is not conflated with live production.
- [x] Confirm no unrelated testimonial is shown. The custom Alamaar rebuild story and route wrapper contain no testimonial block.
- [ ] Confirm UI designer is credited accurately if name becomes available. Current generic collaborating-designer credit is accurate; specific name remains unavailable.
- [x] Verify media captions distinguish factual evidence from retrospective diagrams. Current rebuild media is matched capture/live evidence or explicitly labelled conceptual application imagery; no retrospective process diagram is presented as historical evidence.
- [ ] Test case study at desktop/tablet/mobile. Run 47 automated checks are green at 1440, 834 and 390px with no overflow/runtime failures; visually review retained screenshots before closing. The next run will also report broken media, clipped text and off-viewport text at all three viewport sizes.
- [x] Test video autoplay/mute/playsInline/reduced-motion behavior. Run 47 confirms hero autoplay=true, muted=true, loop=true, playsInline=true, controls=false and preload=`metadata` in normal mode; reduced-motion confirms autoplay=false, loop=false, controls=true and paused=true.
- [x] Run PageSpeed on final portfolio case-study page. Post-optimization run 47 is retained: mobile Performance 78 / Accessibility 98 / Best Practices 100 / SEO 69, FCP 2.24s, LCP 5.16s, TBT 93ms, total byte weight 2.85 MB; desktop Performance 95 / Accessibility 98 / Best Practices 100 / SEO 69, FCP 0.90s, LCP 1.42s, TBT 0ms, total byte weight 3.28 MB. Lighthouse requested 2 known evidence images on mobile and 4 on desktop; all were served through `/image/upload/f_auto/q_auto/` as WebP with zero unoptimized URLs. Treat these as preview lab measurements, not production analytics.
- [x] Final editorial pass: tightened the release-preview source on 2026-08-23 to remove defensive/meta wording, subjective performance language, repetition, and unnecessary jargon while preserving the locked evidence and role attribution.
