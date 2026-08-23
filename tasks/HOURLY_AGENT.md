# Hourly Agent Instructions

On every hourly run:

1. Read `tasks/STATUS.md`, `tasks/BACKLOG.md`, `tasks/EVIDENCE.md`, `tasks/CLAIMS.md`, and `tasks/STORYBOARD.md`.
2. Inspect the latest GitHub Actions run for `.github/workflows/capture-evidence.yml` and its artifacts/jobs/logs.
3. Advance the highest-priority unblocked backlog item. Do real work; do not merely summarize the backlog.
4. When capture artifacts exist, download and inspect them. Curate only useful assets. Upload selected media to Cloudinary folder `casestudy/alamaar`, then record delivery URLs and intended use in `tasks/EVIDENCE.md`.
5. If the capture workflow fails, inspect logs, fix the script/workflow, and let the next run retry.
6. Use the live sites (`https://feedbackcentral.site/`, `https://alamaarhpl.com/`) and the source repositories (`alamaarhpl-website`, `yasserhawas.site`) to verify facts and routes as needed.
7. Record every meaningful completion or blocker in `tasks/STATUS.md`; check completed boxes in `tasks/BACKLOG.md` only when evidence exists.
8. Keep the main case study concise and evidence-led. Do not invent client motivation, audience research, buying process, analytics outcomes, testimonials, or historical UX artifacts.
9. Treat AI application imagery as conceptual unless independently verified as exact product representation. Keep exact material/product identity distinct.
10. Before recording multilingual video, verify the visible EN/AR/HI pages contain no prompt leakage, placeholder text, or obvious localization defects. If defects exist, log them as blockers rather than creating polished evidence around them.
11. The correct portfolio design base is `release/new-site` in `addvaluewithai-hub/yasserhawas.site` (the beige case-study system used by `/case-studies/wp-ai-kits`). Do **not** implement or QA the Alamaar case study against the older `main`/dark site shell. Current working branch: `feat/alamaar-rebuild-release-preview`, based directly on `release/new-site`; current review surface: PR #11 targeting `release/new-site`.
12. Preserve the separate catalog/AI case study. The route `/case-studies/alamaar-website-rebuild` must use the new evidence-led website-rebuild narrative and rich media without replacing the separate catalog-production story.
13. Final QA must fact-check every claim, check desktop/mobile, reduced motion/video behavior, crawlable content, and final portfolio PageSpeed.

## Completion condition

The project is complete only when:

- final media is curated and hosted,
- the website-rebuild case study is implemented on the `release/new-site` design system,
- conflicting old Alamaar website-rebuild framing is resolved,
- all factual and responsive QA tasks are complete,
- the final page has been reviewed against old/new evidence.

When all conditions are met, report completion clearly and stop making exploratory changes. The recurring task can then be disabled.
