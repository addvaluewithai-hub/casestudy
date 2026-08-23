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

const failures = [];

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
    '--max-wait-for-load=90000',
    '--chrome-flags=--headless=new --no-sandbox --disable-dev-shm-usage',
    '--quiet',
  ];

  let run;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    run = spawnSync('npx', args, { encoding: 'utf8', timeout: 300000 });
    if (run.status === 0) break;
    if (attempt < 2) console.warn(`${target.id} Lighthouse attempt ${attempt} failed; retrying once.`);
  }

  if (!run || run.status !== 0) {
    const error = (run?.stderr || run?.stdout || `Lighthouse exited ${run?.status ?? 'without status'}`).trim().slice(0, 4000);
    summary.results[target.id] = { url: target.url, error };
    failures.push(`${target.id}: ${error}`);
    continue;
  }

  try {
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
  } catch (error) {
    const message = `Could not parse Lighthouse report: ${String(error)}`;
    summary.results[target.id] = { url: target.url, error: message };
    failures.push(`${target.id}: ${message}`);
  }
}

writeFileSync(path.resolve('evidence/lighthouse-summary.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));

if (failures.length) {
  console.error(`Lighthouse evidence incomplete:\n${failures.join('\n')}`);
  process.exitCode = 1;
}
