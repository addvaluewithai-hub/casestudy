import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const baseUrl = (process.argv[2] || process.env.PORTFOLIO_PREVIEW_URL || '').replace(/\/$/, '');
if (!baseUrl) throw new Error('Portfolio preview URL is required.');

const route = '/case-studies/alamaar-website-rebuild/';
const url = `${baseUrl}${route}`;
const outDir = path.resolve(process.argv[3] || 'evidence/portfolio-lighthouse');
mkdirSync(outDir, { recursive: true });

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

const summary = {
  generatedAt: new Date().toISOString(),
  url,
  methodology: 'Lighthouse CLI against the deployed Cloudflare branch preview on a GitHub Actions runner. Mobile uses simulated throttling; desktop uses the desktop preset. Lab measurements vary by run and are not field analytics.',
  results: {},
};

const failures = [];
const profiles = [
  {
    id: 'mobile',
    args: ['--form-factor=mobile', '--throttling-method=simulate'],
  },
  {
    id: 'desktop',
    args: ['--preset=desktop'],
  },
];

for (const profile of profiles) {
  const outputPath = path.join(outDir, `${profile.id}.json`);
  const args = [
    '--yes',
    'lighthouse@latest',
    url,
    '--output=json',
    `--output-path=${outputPath}`,
    '--only-categories=performance,accessibility,best-practices,seo',
    '--max-wait-for-load=90000',
    '--chrome-flags=--headless=new --no-sandbox --disable-dev-shm-usage',
    '--quiet',
    ...profile.args,
  ];

  let run;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    run = spawnSync('npx', args, { encoding: 'utf8', timeout: 300000 });
    if (run.status === 0) break;
    if (attempt < 2) console.warn(`Portfolio ${profile.id} Lighthouse attempt ${attempt} failed; retrying once.`);
  }

  if (!run || run.status !== 0) {
    const error = (run?.stderr || run?.stdout || `Lighthouse exited ${run?.status ?? 'without status'}`).trim().slice(0, 4000);
    summary.results[profile.id] = { error };
    failures.push(`${profile.id}: ${error}`);
    continue;
  }

  try {
    const report = JSON.parse(readFileSync(outputPath, 'utf8'));
    const audits = report.audits;
    const requests = audits['network-requests']?.details?.items || [];
    const requestedEvidenceImages = requests.filter((item) =>
      evidenceImageNames.some((name) => item.url?.includes(name)),
    );
    const optimizedEvidenceImages = requestedEvidenceImages.filter((item) =>
      item.url?.includes('/image/upload/f_auto/q_auto/'),
    );
    const unoptimizedEvidenceImages = requestedEvidenceImages
      .filter((item) => !item.url?.includes('/image/upload/f_auto/q_auto/'))
      .map((item) => item.url);
    const topResources = [...requests]
      .sort((a, b) => (b.transferSize || 0) - (a.transferSize || 0))
      .slice(0, 8)
      .map((item) => ({
        url: item.url,
        transferSize: item.transferSize ?? null,
        resourceSize: item.resourceSize ?? null,
        mimeType: item.mimeType ?? null,
      }));

    summary.results[profile.id] = {
      finalUrl: report.finalUrl,
      fetchTime: report.fetchTime,
      scores: {
        performance: Math.round((report.categories.performance?.score ?? 0) * 100),
        accessibility: Math.round((report.categories.accessibility?.score ?? 0) * 100),
        bestPractices: Math.round((report.categories['best-practices']?.score ?? 0) * 100),
        seo: Math.round((report.categories.seo?.score ?? 0) * 100),
      },
      metrics: {
        fcpMs: audits['first-contentful-paint']?.numericValue ?? null,
        lcpMs: audits['largest-contentful-paint']?.numericValue ?? null,
        tbtMs: audits['total-blocking-time']?.numericValue ?? null,
        speedIndexMs: audits['speed-index']?.numericValue ?? null,
        cls: audits['cumulative-layout-shift']?.numericValue ?? null,
      },
      payload: {
        totalByteWeight: audits['total-byte-weight']?.numericValue ?? null,
        topResources,
      },
      cloudinaryEvidenceDelivery: {
        requested: requestedEvidenceImages.length,
        optimized: optimizedEvidenceImages.length,
        unoptimizedUrls: unoptimizedEvidenceImages,
      },
    };

    if (requestedEvidenceImages.length > 0 && unoptimizedEvidenceImages.length > 0) {
      failures.push(
        `${profile.id}: deployed preview still requested unoptimized evidence images: ${unoptimizedEvidenceImages.join(', ')}`,
      );
    }
  } catch (error) {
    const message = `Could not parse Lighthouse report: ${String(error)}`;
    summary.results[profile.id] = { error: message };
    failures.push(`${profile.id}: ${message}`);
  }
}

writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));

if (failures.length) {
  console.error(`Portfolio Lighthouse audit incomplete:\n${failures.join('\n')}`);
  process.exitCode = 1;
}
