import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const baseUrl = process.argv[2] || 'http://127.0.0.1:4173';
const outputDir = path.resolve(process.argv[3] || 'evidence/portfolio-qa');
const route = '/case-studies/alamaar-website-rebuild/';
const url = `${baseUrl.replace(/\/$/, '')}${route}`;

fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = {
  url,
  checkedAt: new Date().toISOString(),
  viewports: {},
  narrative: {},
  video: {},
  reducedMotion: {},
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
  };

  if (navigation.ok) {
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
    };

    if (name === 'desktop') {
      const bodyText = await page.locator('body').innerText();
      const requiredText = [
        "Rebuilding Alamaar HPL's digital product experience.",
        'Restructuring product discovery',
        'Giving each finish more context',
        'From contact information to project enquiry',
        'More visual, substantially faster',
        'Built to remain editable and multilingual',
        'The next problem is doing it 98 times',
        'Application scenes are conceptual visualizations',
      ];
      results.narrative = Object.fromEntries(requiredText.map(text => [text, bodyText.includes(text)]));

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
}
for (const [text, present] of Object.entries(results.narrative)) {
  if (!present) failures.push(`Missing rendered narrative: ${text}`);
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
