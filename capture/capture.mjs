import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const OLD = 'https://feedbackcentral.site/';
const NEW = 'https://alamaarhpl.com/';
const OUT = path.resolve('evidence');
const SHOTS = path.join(OUT, 'screenshots');
const VIDEOS = path.join(OUT, 'videos');
await fs.mkdir(SHOTS, { recursive: true });
await fs.mkdir(VIDEOS, { recursive: true });

const browser = await chromium.launch({ headless: true });
const manifest = { generatedAt: new Date().toISOString(), urls: {}, notes: [] };

async function settle(page) {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(1800);
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  }).catch(() => {});
}

async function getLinks(base) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, ignoreHTTPSErrors: true });
  try {
    await page.goto(base, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await settle(page);
    const links = await page.locator('a').evaluateAll((nodes) => nodes.map((a) => ({
      text: (a.textContent || '').replace(/\s+/g, ' ').trim(),
      href: a.href,
    })).filter((x) => x.href));
    return links;
  } finally {
    await page.close();
  }
}

function chooseLink(links, textPattern, hrefPattern) {
  return links.find((x) => textPattern.test(x.text))?.href || links.find((x) => hrefPattern.test(x.href))?.href || null;
}

async function capture(label, url, viewport) {
  if (!url) return;
  const page = await browser.newPage({ viewport, ignoreHTTPSErrors: true });
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await settle(page);
    await page.screenshot({ path: path.join(SHOTS, `${label}-${viewport.width <= 500 ? 'mobile' : 'desktop'}.png`), fullPage: true });
  } catch (error) {
    manifest.notes.push(`${label}: ${String(error)}`);
  } finally {
    await page.close();
  }
}

async function findAlaska(productsUrl) {
  if (!productsUrl) return null;
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, ignoreHTTPSErrors: true });
  try {
    await page.goto(productsUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await settle(page);
    const anchors = await page.locator('a').evaluateAll((nodes) => nodes.map((a) => ({
      text: (a.textContent || '').replace(/\s+/g, ' ').trim(), href: a.href,
    })).filter((x) => x.href));
    return anchors.find((x) => /alaska wood/i.test(x.text))?.href || anchors.find((x) => /alaska/i.test(x.href))?.href || null;
  } finally {
    await page.close();
  }
}

const oldLinks = await getLinks(OLD).catch((e) => { manifest.notes.push(`old links: ${String(e)}`); return []; });
const newLinks = await getLinks(NEW).catch((e) => { manifest.notes.push(`new links: ${String(e)}`); return []; });
await fs.writeFile(path.join(OUT, 'old-links.json'), JSON.stringify(oldLinks, null, 2));
await fs.writeFile(path.join(OUT, 'new-links.json'), JSON.stringify(newLinks, null, 2));

const urls = {
  oldHome: OLD,
  newHome: NEW,
  oldProducts: chooseLink(oldLinks, /shop|products/i, /shop|products/i),
  newProducts: chooseLink(newLinks, /products/i, /products/i) || new URL('/products/', NEW).href,
  oldContact: chooseLink(oldLinks, /contact/i, /contact/i),
  newContact: chooseLink(newLinks, /contact/i, /contact/i) || new URL('/contact/', NEW).href,
};
urls.oldAlaska = await findAlaska(urls.oldProducts).catch(() => null);
urls.newAlaska = await findAlaska(urls.newProducts).catch(() => null);
manifest.urls = urls;

const desktop = { width: 1440, height: 1000 };
const mobile = { width: 390, height: 844 };
for (const [label, url] of Object.entries(urls)) {
  if (/oldHome|newHome|oldProducts|newProducts|oldContact|newContact|oldAlaska|newAlaska/.test(label)) {
    await capture(label, url, desktop);
  }
}
for (const [label, url] of Object.entries({ newHome: urls.newHome, newProducts: urls.newProducts, newAlaska: urls.newAlaska, newContact: urls.newContact })) {
  await capture(label, url, mobile);
}

async function record(name, sequence) {
  const tmp = path.join(VIDEOS, `_tmp-${name}`);
  await fs.mkdir(tmp, { recursive: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    recordVideo: { dir: tmp, size: { width: 1440, height: 900 } },
  });
  const page = await context.newPage();
  const video = page.video();
  try {
    await sequence(page);
  } catch (error) {
    manifest.notes.push(`${name} video: ${String(error)}`);
  }
  await context.close();
  if (video) {
    const src = await video.path();
    await fs.copyFile(src, path.join(VIDEOS, `${name}.webm`));
  }
  await fs.rm(tmp, { recursive: true, force: true });
}

await record('new-site-montage', async (page) => {
  for (const url of [urls.newHome, urls.newProducts, urls.newAlaska, urls.newContact].filter(Boolean)) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await settle(page);
    await page.waitForTimeout(700);
    await page.evaluate(() => window.scrollTo({ top: Math.min(document.body.scrollHeight * 0.38, 1500), behavior: 'smooth' }));
    await page.waitForTimeout(1200);
  }
});

await record('catalog-search-filter', async (page) => {
  await page.goto(urls.newProducts, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await settle(page);
  const search = page.locator('input[placeholder*="product" i], input[placeholder*="code" i], input[type="search"]').first();
  if (await search.count()) {
    await search.fill('5225');
    await page.waitForTimeout(1800);
    await search.fill('');
    await page.waitForTimeout(900);
  }
  const selects = page.locator('select');
  const count = await selects.count();
  for (let i = 0; i < Math.min(count, 3); i++) {
    const select = selects.nth(i);
    const options = await select.locator('option').count();
    if (options > 1) {
      await select.selectOption({ index: 1 });
      await page.waitForTimeout(1200);
      await select.selectOption({ index: 0 });
      await page.waitForTimeout(500);
    }
  }
});

await fs.writeFile(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
await browser.close();
console.log(JSON.stringify(manifest, null, 2));
