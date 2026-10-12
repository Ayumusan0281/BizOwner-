import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const lock = JSON.parse(readFileSync(new URL('../public/brand/official-logo-lock.json', import.meta.url), 'utf8'));
const manifest = readFileSync(new URL('../src/app/manifest.ts', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../src/app/layout.tsx', import.meta.url), 'utf8');
const errors = [];
for (const [file, expected] of Object.entries(lock.sha256)) {
  const actual = createHash('sha256').update(readFileSync(new URL('../' + file, import.meta.url))).digest('hex');
  if (actual !== expected) errors.push('Official logo changed: ' + file);
}
const manifestIcons = [...manifest.matchAll(/src:\s*["']([^"']+)["']/g)].map(m => m[1]);
const approvedIcons = ['icon-192', 'icon-512', 'icon-maskable-512'].map(n => '/brand/derabiz-db-20261012-' + n + '.png');
if (JSON.stringify(manifestIcons) !== JSON.stringify(approvedIcons)) errors.push('Installation icons must reference the approved versioned DB logo.');
for (const url of ['/brand/derabiz-db-20261012.ico', '/brand/derabiz-db-20261012.png', '/brand/derabiz-db-20261012-apple.png']) {
  if (!layout.includes(url)) errors.push('Missing approved HTML icon: ' + url);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Official DeraBiz logo: assets and installation references verified.');
