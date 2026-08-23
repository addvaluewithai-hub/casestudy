import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const BASE = process.env.PORTFOLIO_PREVIEW_URL || 'https://feat-alamaar-rebuild-release.yasserhawas-preview.pages.dev';
const URL = `${BASE.replace(/\/$/, '')}/case-studies/alamaar-website-rebuild`;
const OUT = new URL('./evidence/portfolio-preview/', import.meta.url);

const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 834, height: 1112 },
  { name: 'mobile', width: 390, height: 844 },
];

const requiredText = [
  "Rebuilding Alamaar HPL's digital product experience.",
  '98',
  'Restructuring product discovery',
  'More visual, substantially faster',
];
const forbiddenText = [
  'From Elementor pages to a structured WordPress product system.',
  'I rebuilt an Elementor site as a custom Gutenberg + ACF Pro system',
  'One WooCommerce template. 67 products. Three languages.',
];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ headless: true });
const report = { generatedAt: new Date().toISOString(), url: URL, viewports: {}, reducedMotion: null };
let failed = false;

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`console: ${message.text()}`);
  });

  try {
    const response = await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
    const status = response?.status() ?? null;
    await page.waitForTimeout(1200);
    const bodyText = await page.locator('body').innerText();
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      scrollHeight: document.documentElement.scrollHeight,
    }));
    const missing = requiredText.filter((token) => !bodyText.includes(token));
    const forbidden = forbiddenText.filter((token) => bodyText.includes(token));
    const horizontalOverflow = dimensions.scrollWidth > dimensions.clientWidth + 2;
    const videos = await page.locator('video').evaluateAll((nodes) => nodes.map((video) => ({
      muted: video.muted,
      autoplay: video.autoplay,
      loop: video.loop,
      playsInline: video.playsInline,
      controls: video.controls,
    })));

    await page.screenshot({ path: new URL(`${viewport.name}.png`, OUT).pathname, fullPage: true });
    const passed = Boolean(status && status < 400) && !horizontalOverflow && missing.length === 0 && forbidden.length === 0 && errors.length === 0;
    report.viewports[viewport.name] = { status, dimensions, horizontalOverflow, missing, forbidden, errors, videos, passed };
    if (!passed) failed = true;
  } catch (error) {
    report.viewports[viewport.name] = { passed: false, error: String(error) };
    failed = true;
  } finally {
    await context.close();
  }
}

try {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(800);
  const videos = await page.locator('video').evaluateAll((nodes) => nodes.map((video) => ({
    autoplay: video.autoplay,
    loop: video.loop,
    controls: video.controls,
    paused: video.paused,
    muted: video.muted,
    playsInline: video.playsInline,
  })));
  const passed = videos.every((video) => !video.autoplay && !video.loop && video.controls && video.paused && video.muted && video.playsInline);
  report.reducedMotion = { videos, passed };
  if (!passed) failed = true;
  await context.close();
} catch (error) {
  report.reducedMotion = { passed: false, error: String(error) };
  failed = true;
}

await browser.close();
await writeFile(new URL('report.json', OUT), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
if (failed) process.exit(1);
