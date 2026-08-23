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
- [ ] Add responsive/mobile QA for the case-study page. Automated production-build QA is implemented, but portfolio Actions run 9 fails before any step starts and publishes no artifact; this task is blocked on a runnable Actions job, not yet on a known page defect.
- [x] Ensure important narrative copy is crawlable HTML and route-specific metadata; build-time output and QA assertions are implemented.

## P3 — Final QA

- [x] Fact-check every number, technology, and before/after statement against evidence. Current live 98 count, retained desktop/mobile lab measurements, matched Alaska routes/captures, and Gutenberg/FSE + ACF + multilingual architecture were reconciled on 2026-08-23; the source repo's separate 99-finish staging snapshot is explicitly noted so it is not conflated with live production.
- [x] Confirm no unrelated testimonial is shown. The custom Alamaar rebuild story and route wrapper contain no testimonial block.
- [ ] Confirm UI designer is credited accurately if name becomes available. Current generic collaborating-designer credit is accurate; specific name remains unavailable.
- [x] Verify media captions distinguish factual evidence from retrospective diagrams. Current rebuild media is matched capture/live evidence or explicitly labelled conceptual application imagery; no retrospective process diagram is presented as historical evidence.
- [ ] Test case study at desktop/tablet/mobile. Automated evidence blocked by the pre-step Actions failure above.
- [ ] Test video autoplay/mute/playsInline/reduced-motion behavior. Automated evidence blocked by the pre-step Actions failure above.
- [ ] Run PageSpeed on final portfolio case-study page.
- [x] Final editorial pass: tightened the release-preview source on 2026-08-23 to remove defensive/meta wording, subjective performance language, repetition, and unnecessary jargon while preserving the locked evidence and role attribution.
