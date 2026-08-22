# Evidence Manifest

Use this file as the source of truth for media and measurable proof. Add Cloudinary URLs only after a capture has been reviewed enough to establish its intended use.

## Sites and exact matched routes

| ID | Type | URL | Status | Notes |
|---|---|---|---|---|
| site-old | old production snapshot | https://feedbackcentral.site/ | verified | Preserved old Alamaar site |
| site-new | current production | https://alamaarhpl.com/ | verified | New 2026 redesign |
| old-products | old product archive | https://feedbackcentral.site/shop/ | automated capture verified | matched archive route |
| new-products | new product archive | https://alamaarhpl.com/shop/ | automated capture verified | 98-finish discovery interface |
| old-contact | old contact | https://feedbackcentral.site/contact/ | automated capture verified | information-led contact page |
| new-contact | new contact | https://alamaarhpl.com/contact/ | automated capture verified | project-enquiry flow |
| old-alaska | old Alaska Wood PDP | https://feedbackcentral.site/product/alaska-wood-5225-sf-2/ | automated capture verified | same product/code family before state |
| new-alaska | new Alaska Wood PDP | https://alamaarhpl.com/shop/finishes/alaska-wood-5225-sf/ | automated capture verified | same product after state |
| site-new-ar | current Arabic route | https://alamaarhpl.com/ar/home/ | verified by crawl | RTL route; currently has prompt-leak QA issue |
| site-new-hi | current Hindi route | https://alamaarhpl.com/hi/home/ | verified by crawl | Hindi route available |

Automated capture manifest generated 2026-08-22T22:43:13Z and committed in `evidence/bootstrap/manifest.json`.

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

Videos: `new-site-montage.webm` (20.24s bootstrap montage; useful source but longer than the desired final 10–15s hero) and `catalog-search-filter.webm` (8.88s; target-length interaction proof).

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
| new-site-montage-bootstrap | video | https://res.cloudinary.com/as9o12al/video/upload/v1787442304/new-site-montage.webm | automated 1440x900 capture | source for final hero edit; 20.24s, not final length |
| catalog-search-filter | video | https://res.cloudinary.com/as9o12al/video/upload/v1787442311/catalog-search-filter.webm | automated 1440x900 capture | interaction proof; 8.88s |

## Public-site QA evidence

- Current Arabic homepage crawl exposes English image-generation prompt text inside collection content (including Ruby Collection / Classic Wood text). Treat this as a production QA issue and block polished multilingual evidence capture until resolved.

## Evidence still needed

- Mobile PageSpeed old/new.
- Final trimmed/polished 10–15s hero montage (bootstrap source is 20.24s).
- Language-switch recording after Arabic prompt leakage is fixed.
- WordPress editor recording if authenticated access is provided.
- Verify whether collection membership counts overlap before interpreting 54 + 55 against 98 total finishes.

## Evidence rules

1. Never use a performance number unless the raw test evidence is retained.
2. Never describe AI application imagery as actual project photography or exact product evidence.
3. Never imply a business outcome (sales, conversion, traffic, leads) without analytics or client evidence.
4. Never use an unrelated testimonial.
5. Retrospective diagrams must be labelled as retrospective explanations, not historical process artifacts.
