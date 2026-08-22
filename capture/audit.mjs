import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const outDir = path.resolve('evidence/lighthouse');
mkdirSync(outDir, { recursive: true });

const targets = [
  { id: 'old-mobile', url: 'https://feedbackcentral.site/' },
  { id: 'new-mobile', url: 'https://alamaarhpl.com/' },
];

const summary = {
  generatedAt: new Date().toISOString(),
  methodology: 'Lighthouse CLI mobile form factor, simulated throttling, GitHub Actions runner. Lab measurements vary by run.',
  results: {},
};

for (const target of targets) {
  const outputPath = path.join(outDir, `${target.id}.json`);
  const args = [
    '--yes',
    'lighthouse@latest',
    target.url,
    '--output=json',
    `--output-path=${outputPath}`,
    '--form-factor=mobile',
    '--throttling-method=simulate',
    '--only-categories=performance,accessibility,best-practices,seo',
    '--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage',
    '--quiet',
  ];

  const run = spawnSync('npx', args, { encoding: 'utf8', timeout: 240000 });
  if (run.status !== 0) {
    summary.results[target.id] = {
      url: target.url,
      error: (run.stderr || run.stdout || `Lighthouse exited ${run.status}`).trim().slice(0, 4000),
    };
    continue;
  }

  const report = JSON.parse(readFileSync(outputPath, 'utf8'));
  const audits = report.audits;
  summary.results[target.id] = {
    url: target.url,
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
  };
}

writeFileSync(path.resolve('evidence/lighthouse-summary.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
