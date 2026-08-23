# Evidence Manifest

Use this file as the source of truth for media and measurable proof. Add Cloudinary URLs only after a capture has been reviewed enough to establish its intended use.

## Sites and exact matched routes

| ID | Type | URL | Status | Notes |
|---|---|---|---|---|
| site-old | old production snapshot | https://feedbackcentral.site/ | verified | Preserved old Alamaar site |
| site-new | current production | https://alamaarhpl.com/ | verified | New 2026 redesign |
| old-products | old product archive | https://feedbackcentral.site/shop/ | automated capture verified | exact route recorded by run 21 manifest |
| new-products | new product archive | https://alamaarhpl.com/shop/ | automated capture verified | 98-finish discovery interface; exact route recorded by run 21 manifest |
| old-contact | old contact | https://feedbackcentral.site/contact/ | automated capture verified | exact route recorded by run 21 manifest |
| new-contact | new contact | https://alamaarhpl.com/contact/ | automated capture verified | exact route recorded by run 21 manifest |
| old-alaska | old Alaska Wood PDP | https://feedbackcentral.site/product/alaska-wood-5225-sf-2/ | automated capture verified | matched Alaska before state; exact route recorded by run 21 manifest |
| new-alaska | new Alaska Wood PDP | https://alamaarhpl.com/shop/finishes/alaska-wood-5225-sf/ | automated capture verified | matched Alaska after state; exact route recorded by run 21 manifest |
| site-new-ar | current Arabic route | https://alamaarhpl.com/ar/home/ | verified by crawl | RTL route; currently has prompt-leak QA issue |
| site-new-hi | current Hindi route | https://alamaarhpl.com/hi/home/ | verified by crawl | Hindi route available |

Latest automated route discovery is run 21. `evidence/bootstrap/run-status.json` reports `capture: success`, `hero: success`, `audit: success`, with no errors. The exact route strings above now match `evidence/bootstrap/manifest.json`; earlier route variants such as `/product/`, `/contact-us/` and `/product/alaska-wood/` may redirect or remain reachable, but they are not the latest automated discovery output and are therefore not treated as canonical capture evidence.

## Supplied screenshot evidence

| ID | Evidence | Verified fact / use |
|---|---|---|
| supplied-old-home | Old homepage full-page screenshot | Before-state visual |
| supplied-new-home | New homepage full-page screenshot | After-state visual |
| supplied-old-products | Old product archive screenshot | Before-state catalog presentation |
| supplied-new-products | New product archive screenshot | Search/filter/product-card proof |
| supplied-old-alaska | Old Alaska Wood PDP | Matched-product before state |
| supplied-new-alaska | New Alaska Wood PDP | Matched-product after state |
| supplied-new-orchid | New Orchid Elegance PDP | Proof PDP system generalizes across product families |
| supplied-old-contact | Old contact page | Information-led contact flow |
| supplied-new-contact | New contact page | Project-enquiry flow with WhatsApp continuation |
| supplied-pagespeed-old | Old desktop PageSpeed screenshot | Performance 45; Accessibility 83; Best Practices 69; SEO 85; FCP 3.9s; LCP 6.8s; TBT 270ms; Speed Index 5.8s; CLS 0.061 |
| supplied-pagespeed-new | New desktop PageSpeed screenshot | Performance 96; Accessibility 100; Best Practices 100; SEO 100; FCP 0.8s; LCP 1.1s; TBT 0ms; Speed Index 1.4s; CLS 0.001 |
| supplied-filter-collection | New collection dropdown | Alamaar HPL Vol-II (54), Ruby Collection (55) |
| supplied-filter-finish | New finish dropdown | Finish-code filtering exists |
| supplied-filter-family | New design-family dropdown | Design-family filtering exists |

## Automated bootstrap captures

GitHub Actions successfully generated and committed matched evidence under `evidence/bootstrap/`.

Desktop: old/new homepage, product archive, Alaska Wood PDP, contact page at 1440px width.

Mobile: new homepage, products, Alaska Wood PDP, contact page at 390px width.

Videos: `new-site-montage.webm` (20.24s bootstrap montage; source only), `catalog-search-filter.webm` (8.88s interaction proof), and `hero-montage.webm` (focused homepage → products → Alaska capture).

The latest published capture-health evidence is run 21: `capture: success`, `hero: success`, `audit: success`, with an empty errors array. This confirms the hardened validators continue to report a complete paired capture rather than the false-success behavior seen in run 15.

Focused hero capture metadata after Cloudinary import: 1440×900, VP8/WebM, 25fps, 9.88s, 1,255,730 bytes. This is the preferred hero asset over the earlier blind 12-second trim.

## Automated mobile Lighthouse evidence

Raw evidence is retained under `evidence/bootstrap/lighthouse/` with a compact summary in `evidence/bootstrap/lighthouse-summary.json`.

Methodology: Lighthouse CLI mobile form factor, simulated throttling, GitHub Actions runner. Lab measurements vary by run. Captured 2026-08-23.

| Metric | Old mobile | New mobile |
|---|---:|---:|
| Performance | 37 | 91 |
| Accessibility | 79 | 100 |
| Best Practices | 65 | 100 |
| SEO | 54 | 100 |
| FCP | 13.86s | 2.79s |
| LCP | 34.29s | 2.87s |
| TBT | 759ms | 0ms |
| Speed Index | 14.52s | 2.79s |
| CLS | 0.0002 | 0 |

These are automated lab measurements, not analytics, conversion, or business outcomes. The exceptionally poor old-site mobile timing should be presented with the methodology note rather than generalized into a universal real-user claim.

The canonical published mobile comparison remains verified run 14 rather than being silently swapped for later valid runs; this avoids cherry-picking normal Lighthouse variance.

## Technical repository evidence

Source: `addvaluewithai-hub/alamaarhpl-website`.

- Custom WordPress Gutenberg/FSE implementation.
- ACF structured controls and generated block/editor/render architecture.
- Shared multilingual structure with language-specific overrides for English, Arabic, Hindi; Arabic RTL.
- Incremental deployment with dry-run diff, backups, atomic release, affected-page sync, rollback guidance.

## Cloudinary curated media

Folder: `casestudy/alamaar`

| ID | Kind | Cloudinary URL | Capture source | Approved use |
|---|---|---|---|---|
| alaska-card-source | image | https://res.cloudinary.com/as9o12al/image/upload/v1787438474/alaska-5225-card-source.webp | current product-card source | source/reference only |
| old-home-desktop | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442223/old-home-desktop.png | automated old homepage | before homepage evidence |
| new-home-desktop | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442230/new-home-desktop.png | automated new homepage | after homepage evidence |
| old-products-desktop | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442238/old-products-desktop.png | automated old archive | before product-discovery evidence |
| new-products-desktop | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442244/new-products-desktop.png | automated new archive | after product-discovery evidence |
| old-alaska-desktop | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442255/old-alaska-desktop.png | automated old PDP | matched Alaska before evidence |
| new-alaska-desktop | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442261/new-alaska-desktop.png | automated new PDP | matched Alaska after evidence |
| old-contact-desktop | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442268/old-contact-desktop.png | automated old contact | before enquiry evidence |
| new-contact-desktop | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442275/new-contact-desktop.png | automated new contact | after enquiry evidence |
| new-home-mobile | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442281/new-home-mobile.png | automated capture, 390px | responsive proof |
| new-products-mobile | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442287/new-products-mobile.png | automated capture, 390px | responsive catalog proof |
| new-alaska-mobile | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442292/new-alaska-mobile.png | automated capture, 390px | responsive PDP proof |
| new-contact-mobile | image | https://res.cloudinary.com/as9o12al/image/upload/v1787442298/new-contact-mobile.png | automated capture, 390px | responsive enquiry proof |
| new-site-montage-bootstrap | video | https://res.cloudinary.com/as9o12al/video/upload/v1787442304/new-site-montage.webm | automated 1440x900 capture | source only; 20.24s |
| new-site-montage-12s-trim | video | https://res.cloudinary.com/as9o12al/video/upload/du_12/v1787442304/new-site-montage.webm | Cloudinary derived trim of bootstrap source | superseded fallback |
| hero-montage-focused | video | https://res.cloudinary.com/as9o12al/video/upload/v1787463716/hero-montage-focused.webm | focused automated capture, run 14 | preferred hero; 9.88s homepage → products → Alaska sequence |
| catalog-search-filter | video | https://res.cloudinary.com/as9o12al/video/upload/v1787442311/catalog-search-filter.webm | automated 1440x900 capture | interaction proof; 8.88s |

## Portfolio QA evidence

- The release-preview branch is `feat/alamaar-rebuild-release-preview`, based on `release/new-site`.
- PR #11's Cloudflare bot reports the stable Branch Preview URL as `https://feat-alamaar-rebuild-release.yasserhawas-preview.pages.dev`.
- Earlier preview-QA failures did not produce the expected report, so they are not evidence of a responsive page defect.
- Root cause identified on 2026-08-23: the capture package's `portfolio-qa` command still invoked stale `portfolio-preview-qa.mjs`, while the hardened diagnostic implementation lived in `portfolio-qa.mjs`. Commit `0f05139ce83bd8098953beada959ec25fe2d70ac` changes the actual npm entrypoint to invoke `portfolio-qa.mjs`, passes the Cloudflare preview URL explicitly, and writes output into `evidence/portfolio-preview` so the normal evidence publisher can retain `qa.json` and screenshots.
- The hardened script uses `domcontentloaded` as the primary navigation gate, a bounded best-effort network-idle wait, structured navigation diagnostics, desktop/tablet/mobile screenshots, horizontal-overflow/page-error checks, required-story assertions and normal/reduced-motion video checks.
- Responsive/reduced-motion QA remains open until the first run after the corrected entrypoint publishes `evidence/bootstrap/portfolio-preview/qa.json` and screenshots and those images are visually reviewed.

## Public-site QA evidence

- Current Arabic homepage crawl exposes English image-generation prompt text inside collection content (including Ruby Collection / Classic Wood text). Treat this as a production QA issue and block polished multilingual evidence capture until resolved.
- A fresh shop crawl still exposes 98 total results and collection navigation, but does not expose enough product-membership data to prove whether the displayed collection counts overlap. Do not infer 54 + 55 = 109 unique products.

## Evidence still needed

- Responsive portfolio QA report/screenshots from the corrected preview QA entrypoint, followed by visual inspection.
- Language-switch recording after Arabic prompt leakage is fixed.
- WordPress editor recording if authenticated access is provided.
- Verify whether collection membership counts overlap before interpreting 54 + 55 against 98 total finishes.

## Evidence rules

1. Never use a performance number unless the raw test evidence is retained.
2. Never describe AI application imagery as actual project photography or exact product evidence.
3. Never imply a business outcome (sales, conversion, traffic, leads) without analytics or client evidence.
4. Never use an unrelated testimonial.
5. Retrospective diagrams must be labelled as retrospective explanations, not historical process artifacts.
