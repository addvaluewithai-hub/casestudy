# Backlog

Work top-to-bottom unless a task is blocked. Every completed task should update `STATUS.md` and relevant evidence/claim records.

## P0 — Evidence capture

- [x] Create automated browser capture workflow using Playwright.
- [x] Capture old/new homepage at matched desktop viewport.
- [x] Capture old/new product archive at matched desktop viewport.
- [x] Capture old/new Alaska Wood product detail at matched desktop viewport.
- [x] Capture old/new contact experience at matched desktop viewport.
- [x] Capture new homepage/products/PDP/contact at mobile viewport.
- [ ] Record polished 10–15s new-site hero montage. Bootstrap 20.24s source exists; trim/curate before marking complete.
- [x] Record 6–10s catalog search/filter interaction (name/code + collection + design family/finish). Bootstrap recording is 8.88s.
- [ ] Record 6–10s EN → AR → HI same-page language sequence if routes/language control are stable. Blocked by Arabic prompt leakage.
- [ ] Record 6–10s WordPress editor → frontend proof if authenticated editor access becomes available.
- [ ] Capture/verify mobile PageSpeed old vs new. Lighthouse automation added; awaiting run evidence.
- [x] Curate selected captures to Cloudinary `casestudy/alamaar` and record URLs in `EVIDENCE.md`.

## P1 — Story and claims

- [x] Verify exact old/new Alaska Wood URLs and matched product code.
- [ ] Verify catalog filter behavior and whether filter counts overlap.
- [ ] Decide final headline and one-sentence project summary.
- [ ] Lock six-section story: Context → Restructure → Product discovery/PDP → Enquiry → Performance → Engineering/multilingual → 98-product next chapter.
- [ ] Write concise role credit: UX strategy / information architecture / design direction / development; UI design by collaborating designer.
- [ ] Draft Lighthouse methodology note and avoid treating lab scores as business outcomes.
- [ ] Draft AI-image disclosure language: exact material reference vs conceptual application imagery.

## P2 — Portfolio implementation

- [ ] Upgrade `yasserhawas.site` case-study schema to support video, before/after, gallery, stats, and rich media blocks.
- [ ] Implement Alamaar website-rebuild case study as separate story from catalog automation.
- [ ] Remove/replace conflicting 67-product Alamaar framing where it can mislead readers about the current 98-product project.
- [ ] Add media lazy-loading/performance safeguards.
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
