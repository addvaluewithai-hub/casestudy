import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('evidence');
const manifestPath = path.join(root, 'manifest.json');
const failures = [];

if (!fs.existsSync(manifestPath)) {
  failures.push('manifest.json is missing');
} else {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const requiredUrls = [
    'oldHome', 'newHome', 'oldProducts', 'newProducts',
    'oldContact', 'newContact', 'oldAlaska', 'newAlaska',
  ];
  for (const key of requiredUrls) {
    if (!manifest.urls?.[key]) failures.push(`Missing required route: ${key}`);
  }
}

const desktop = [
  'oldHome', 'newHome', 'oldProducts', 'newProducts',
  'oldContact', 'newContact', 'oldAlaska', 'newAlaska',
];
for (const label of desktop) {
  const file = path.join(root, 'screenshots', `${label}-desktop.png`);
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) failures.push(`Missing desktop capture: ${label}`);
}

for (const label of ['newHome', 'newProducts', 'newAlaska', 'newContact']) {
  const file = path.join(root, 'screenshots', `${label}-mobile.png`);
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) failures.push(`Missing mobile capture: ${label}`);
}

for (const name of ['new-site-montage', 'catalog-search-filter']) {
  const file = path.join(root, 'videos', `${name}.webm`);
  if (!fs.existsSync(file) || fs.statSync(file).size === 0) failures.push(`Missing video capture: ${name}`);
}

if (failures.length) {
  console.error(`Capture evidence incomplete:\n${failures.join('\n')}`);
  process.exit(1);
}

console.log('Capture evidence completeness checks passed');
