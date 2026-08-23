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
- [ ] Verify catalog filter behavior and whether filter counts overlap.
- [x] Decide final headline and one-sentence project summary.
- [x] Lock concise story: Context → Product discovery → PDP → Enquiry → Performance → Engineering/multilingual → 98-product next chapter.
- [x] Write concise role credit: UX strategy / information architecture / design direction / development; UI design by collaborating designer.
- [x] Draft Lighthouse methodology note and avoid treating lab scores as business outcomes.
- [x] Draft AI-image disclosure language: exact material reference vs conceptual application imagery.

## P2 — Portfolio implementation

- [x] Upgrade `yasserhawas.site` case-study schema to support video, before/after, gallery, stats, and rich media blocks. Implemented on `feat/alamaar-rebuild-case-study`; legacy image field retained for compatibility.
- [x] Implement Alamaar website-rebuild case study as separate story from catalog automation. The branch now contains the full seven-part rebuild narrative wired to curated Cloudinary evidence.
- [x] Remove/replace conflicting 67-product Alamaar framing where it can mislead readers about the current 98-product project. The primary Alamaar data object now represents the 2026 website rebuild and no longer presents the old 67-product catalog-system headline/metrics.
- [x] Add media lazy-loading/performance safeguards. Content images use lazy loading + async decoding, videos use metadata preload, and autoplaying case-study/hero videos now respect `prefers-reduced-motion` by disabling autoplay/loop and exposing controls.
- [x] Replace provisional hero URL in portfolio data with the focused Cloudinary hero and add verified mobile Lighthouse proof without changing the evidence guardrails.
- [ ] Add responsive/mobile QA for the case-study page.
- [ ] Ensure all important narrative copy is crawlable HTML and metadata, not visual-only client rendering.

## P3 — Final QA

- [ ] Fact-check every number, technology, and before/after statement against evidence.
- [ ] Confirm no unrelated testimonial is shown.
- [ ] Confirm UI designer is credited accurately if name becomes available.
- [ ] Verify media captions distinguish factual evidence from retrospective diagrams.
- [ ] Test case study at desktop/tablet/mobile.
- [ ] Test video autoplay/mute/playsInline/reduced-motion behavior.
- [ ] Run PageSpeed on final portfolio case-study page.
- [ ] Final editorial pass: remove hype, redundancy, unexplained jargon, and claims not backed by proof.
