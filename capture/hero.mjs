import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve('evidence/videos');
const TMP = path.join(OUT, '_tmp-hero-montage');
await fs.mkdir(OUT, { recursive: true });
await fs.mkdir(TMP, { recursive: true });

const routes = [
  'https://alamaarhpl.com/',
  'https://alamaarhpl.com/shop/',
  'https://alamaarhpl.com/shop/finishes/alaska-wood-5225-sf/',
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  ignoreHTTPSErrors: true,
  recordVideo: { dir: TMP, size: { width: 1440, height: 900 } },
});
const page = await context.newPage();
const video = page.video();

async function ready() {
  await page.waitForLoadState('domcontentloaded');
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  }).catch(() => {});
  await page.waitForTimeout(350);
}

async function glide(target, ms = 1150) {
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'smooth' }), target);
  await page.waitForTimeout(ms);
}

try {
  await page.goto(routes[0], { waitUntil: 'domcontentloaded', timeout: 60000 });
  await ready();
  await page.waitForTimeout(550);
  await glide(760, 1200);

  await page.goto(routes[1], { waitUntil: 'domcontentloaded', timeout: 60000 });
  await ready();
  await glide(640, 1100);
  await page.waitForTimeout(350);

  await page.goto(routes[2], { waitUntil: 'domcontentloaded', timeout: 60000 });
  await ready();
  await page.waitForTimeout(450);
  await glide(1080, 1250);
  await page.waitForTimeout(450);
} finally {
  await context.close();
  if (video) {
    const src = await video.path();
    await fs.copyFile(src, path.join(OUT, 'hero-montage.webm'));
  }
  await fs.rm(TMP, { recursive: true, force: true });
  await browser.close();
}

console.log(JSON.stringify({ name: 'hero-montage', routes, targetSeconds: '10-15' }, null, 2));
