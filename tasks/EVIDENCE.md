# Evidence Manifest

Use this file as the source of truth for media and measurable proof. Add Cloudinary URLs only after a capture has been reviewed and selected.

## Sites

| ID | Type | URL | Status | Notes |
|---|---|---|---|---|
| site-old | old production snapshot | https://feedbackcentral.site/ | verified by user | Preserved old Alamaar site |
| site-new | current production | https://alamaarhpl.com/ | verified by user + crawl | New 2026 redesign |
| site-new-ar | current Arabic route | https://alamaarhpl.com/ar/home/ | verified by crawl | RTL route; currently has prompt-leak QA issue |
| site-new-hi | current Hindi route | https://alamaarhpl.com/hi/home/ | verified by crawl | Hindi route available |

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
| alaska-card-source | image | https://res.cloudinary.com/as9o12al/image/upload/v1787438474/alaska-5225-card-source.webp | current production product-card source image | durable source/reference only; not a final case-study screenshot |

## Public-site QA evidence

- Current Arabic homepage crawl exposes English image-generation prompt text inside collection content (including Ruby Collection / Classic Wood text). Treat this as a production QA issue and block polished multilingual evidence capture until resolved.

## Evidence still needed

- Matched desktop screenshots captured automatically from old/new URLs.
- Mobile captures of new core pages.
- Mobile PageSpeed old/new.
- Hero montage video.
- Catalog filter/search recording.
- Language-switch recording after Arabic prompt leakage is fixed.
- WordPress editor recording if authenticated access is provided.

## Evidence rules

1. Never use a performance number unless the raw test evidence is retained.
2. Never describe AI application imagery as actual project photography or exact product evidence.
3. Never imply a business outcome (sales, conversion, traffic, leads) without analytics or client evidence.
4. Never use an unrelated testimonial.
5. Retrospective diagrams must be labelled as retrospective explanations, not historical process artifacts.
