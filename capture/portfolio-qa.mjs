import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const baseUrl = process.argv[2] || 'http://127.0.0.1:4173';
const outputDir = path.resolve(process.argv[3] || 'evidence/portfolio-qa');
const route = '/case-studies/alamaar-website-rebuild/';
const url = `${baseUrl.replace(/\/$/, '')}${route}`;

const evidenceImageNames = [
  'old-home-desktop.png',
  'new-home-desktop.png',
  'old-products-desktop.png',
  'new-products-desktop.png',
  'old-alaska-desktop.png',
  'new-alaska-desktop.png',
  'old-contact-desktop.png',
  'new-contact-desktop.png',
  'new-home-mobile.png',
  'new-products-mobile.png',
  'new-alaska-mobile.png',
  'new-contact-mobile.png',
];

fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = {
  url,
  checkedAt: new Date().toISOString(),
  viewports: {},
  narrative: {},
  video: {},
  reducedMotion: {},
  imageDelivery: {},
};

const viewports = {
  desktop: { width: 1440, height: 1100 },
  tablet: { width: 834, height: 1112 },
  mobile: { width: 390, height: 844 },
};

async function navigate(page) {
  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    return {
      ok: Boolean(response?.ok()),
      status: response?.status() ?? null,
      finalUrl: page.url(),
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      status: null,
      finalUrl: page.url(),
      error: String(error),
    };
  }
}

async function loadLazyImages(page) {
  const images = page.locator('img');
  const count = await images.count();
  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded().catch(() => {});
    await image.evaluate(node => {
      if (node.complete) return;
      return new Promise(resolve => {
        const done = () => resolve();
        node.addEventListener('load', done, { once: true });
        node.addEventListener('error', done, { once: true });
        setTimeout(done, 3000);
      });
    }).catch(() => {});
  }
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));
}

async function inspectVisualHealth(page) {
  return page.evaluate(() => {
    const textSelector = 'h1,h2,h3,p,li,a,figcaption,blockquote,button';
    const textNodes = Array.from(document.querySelectorAll(textSelector));
    const visible = element => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };
    const summarize = element => {
      const rect = element.getBoundingClientRect();
      return {
        tag: element.tagName.toLowerCase(),
        text: (element.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 140),
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        top: Math.round(rect.top),
        width: Math.round(rect.width),
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
        clientHeight: element.clientHeight,
        scrollHeight: element.scrollHeight,
        overflowX: getComputedStyle(element).overflowX,
        overflowY: getComputedStyle(element).overflowY,
      };
    };

    const offscreenText = textNodes
      .filter(visible)
      .filter(element => {
        const rect = element.getBoundingClientRect();
        return rect.left < -1 || rect.right > window.innerWidth + 1;
      })
      .map(summarize);

    const clippedText = textNodes
      .filter(visible)
      .filter(element => {
        const style = getComputedStyle(element);
        const clipsX = ['hidden', 'clip'].includes(style.overflowX) && element.scrollWidth > element.clientWidth + 1;
        const clipsY = ['hidden', 'clip'].includes(style.overflowY) && element.scrollHeight > element.clientHeight + 1;
        return clipsX || clipsY;
      })
      .map(summarize);

    const images = Array.from(document.images);
    const brokenImages = images
      .filter(image => image.complete && (image.naturalWidth === 0 || image.naturalHeight === 0))
      .map(image => image.currentSrc || image.src);

    const zeroSizedMedia = Array.from(document.querySelectorAll('img,video'))
      .filter(element => {
        const rect = element.getBoundingClientRect();
        return rect.width < 1 || rect.height < 1;
      })
      .map(element => ({
        tag: element.tagName.toLowerCase(),
        src: element.currentSrc || element.src || null,
      }));

    return {
      documentHeight: document.documentElement.scrollHeight,
      sectionCount: document.querySelectorAll('main section').length,
      figureCount: document.querySelectorAll('main figure').length,
      imageCount: images.length,
      brokenImages,
      zeroSizedMedia,
      offscreenText,
      clippedText,
    };
  });
}

for (const [name, viewport] of Object.entries(viewports)) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(String(error)));

  const navigation = await navigate(page);
  results.viewports[name] = {
    navigation,
    h1: null,
    pageErrors,
    horizontalOverflow: null,
    bodyWidth: null,
    scrollWidth: null,
    visualHealth: null,
  };

  if (navigation.ok) {
    await loadLazyImages(page);

    await page.screenshot({
      path: path.join(outputDir, `${name}.png`),
      fullPage: true,
    });

    results.viewports[name] = {
      ...results.viewports[name],
      h1: await page.locator('h1').first().textContent().catch(() => null),
      horizontalOverflow: await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1),
      bodyWidth: await page.evaluate(() => document.documentElement.clientWidth),
      scrollWidth: await page.evaluate(() => document.documentElement.scrollWidth),
      visualHealth: await inspectVisualHealth(page),
    };

    if (name === 'desktop') {
      const bodyText = await page.locator('body').innerText();
      const requiredText = [
        "Rebuilding Alamaar HPL's digital product experience.",
        'Restructuring product discovery',
        'Giving each finish more context',
        'From contact information to project enquiry',
        'More visual, faster in lab tests',
        'Built to remain editable and multilingual',
        'The next problem is doing it 98 times',
        'Application scenes are conceptual visualizations',
      ];
      results.narrative = Object.fromEntries(requiredText.map(text => [text, bodyText.includes(text)]));

      const imageSources = await page.locator('img').evaluateAll(nodes => nodes.map(node => node.currentSrc || node.src));
      const evidenceSources = imageSources.filter(src => evidenceImageNames.some(imageName => src.includes(imageName)));
      const missingEvidenceImages = evidenceImageNames.filter(imageName => !evidenceSources.some(src => src.includes(imageName)));
      const unoptimizedEvidenceImages = evidenceSources.filter(src => !src.includes('/image/upload/f_auto/q_auto/'));
      results.imageDelivery = {
        imageCount: imageSources.length,
        evidenceImageCount: evidenceSources.length,
        expectedUniqueEvidenceImages: evidenceImageNames.length,
        missingEvidenceImages,
        unoptimizedEvidenceImages,
        evidenceSources,
      };

      const videos = await page.locator('video').count();
      results.video.count = videos;
      if (videos > 0) {
        results.video.hero = await page.locator('video').first().evaluate(video => ({
          autoplay: video.autoplay,
          muted: video.muted,
          loop: video.loop,
          playsInline: video.playsInline,
          controls: video.controls,
          preload: video.preload,
          paused: video.paused,
        }));
      }
    }
  }

  await context.close();
}

{
  const context = await browser.newContext({
    viewport: viewports.desktop,
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  const navigation = await navigate(page);
  results.reducedMotion.navigation = navigation;
  if (navigation.ok) {
    const video = page.locator('video').first();
    if (await video.count()) {
      results.reducedMotion = {
        navigation,
        ...(await video.evaluate(node => ({
          autoplay: node.autoplay,
          loop: node.loop,
          controls: node.controls,
          paused: node.paused,
        }))),
      };
    }
  }
  await context.close();
}

await browser.close();

const failures = [];
for (const [name, data] of Object.entries(results.viewports)) {
  if (!data.navigation.ok) failures.push(`${name}: navigation failed (${data.navigation.status ?? 'no status'}${data.navigation.error ? `; ${data.navigation.error}` : ''})`);
  if (data.horizontalOverflow) failures.push(`${name}: horizontal overflow (${data.scrollWidth}px > ${data.bodyWidth}px)`);
  if (data.pageErrors.length) failures.push(`${name}: ${data.pageErrors.length} page error(s)`);
  if (data.visualHealth?.brokenImages.length) failures.push(`${name}: ${data.visualHealth.brokenImages.length} broken image(s)`);
  if (data.visualHealth?.zeroSizedMedia.length) failures.push(`${name}: ${data.visualHealth.zeroSizedMedia.length} zero-sized media element(s)`);
  if (data.visualHealth?.offscreenText.length) failures.push(`${name}: ${data.visualHealth.offscreenText.length} text element(s) extend outside the viewport`);
  if (data.visualHealth?.clippedText.length) failures.push(`${name}: ${data.visualHealth.clippedText.length} clipped text element(s)`);
}
for (const [text, present] of Object.entries(results.narrative)) {
  if (!present) failures.push(`Missing rendered narrative: ${text}`);
}
if (results.imageDelivery.missingEvidenceImages?.length) {
  failures.push(`Missing expected evidence images in deployed DOM: ${results.imageDelivery.missingEvidenceImages.join(', ')}`);
}
if (results.imageDelivery.unoptimizedEvidenceImages?.length) {
  failures.push(`Unoptimized evidence image URLs in deployed DOM: ${results.imageDelivery.unoptimizedEvidenceImages.join(', ')}`);
}
if (!results.video.hero?.muted || !results.video.hero?.playsInline || results.video.hero?.preload !== 'metadata') {
  failures.push('Hero video media safeguards are incomplete');
}
if (!results.reducedMotion.navigation?.ok) {
  failures.push('Reduced-motion navigation failed');
} else if (results.reducedMotion.autoplay || results.reducedMotion.loop || !results.reducedMotion.controls) {
  failures.push('Reduced-motion hero video behavior failed');
}

results.failures = failures;
results.status = failures.length ? 'failure' : 'success';
fs.writeFileSync(path.join(outputDir, 'qa.json'), JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));

if (failures.length) process.exitCode = 1;
