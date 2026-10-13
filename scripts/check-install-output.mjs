import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
const root = new URL('../', import.meta.url);
const read = p => readFileSync(new URL(p, root));
const lock = JSON.parse(read('public/brand/official-logo-lock.json'));
const manifest = JSON.parse(read('.next/server/app/manifest.webmanifest.body'));
assert.equal(manifest.id, '/');
assert.equal(manifest.scope, '/');
assert.equal(manifest.start_url, '/');
assert.equal(manifest.display, 'standalone');
assert.equal(manifest.name, '株式会社DeraBiz');
const expected = ['icon-192', 'icon-512', 'icon-maskable-512'].map(n => '/brand/derabiz-db-20261012-' + n + '.png');
assert.deepEqual(manifest.icons.map(i => i.src), expected);
function checkAsset(url, sizes) {
  const pathname = new URL(url, 'https://derabiz-nagoya.vercel.app').pathname;
  const file = pathname === '/favicon.ico' ? 'src/app/favicon.ico' : 'public' + pathname;
  assert.ok(lock.sha256[file], 'Unapproved icon: ' + pathname);
  const bytes = read(file);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), lock.sha256[file], file);
  if (pathname.endsWith('.png')) {
    assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
    const actual = bytes.readUInt32BE(16) + 'x' + bytes.readUInt32BE(20);
    if (sizes) assert.equal(actual, sizes, pathname);
  } else {
    assert.equal(bytes.readUInt16LE(0), 0);
    assert.equal(bytes.readUInt16LE(2), 1);
    const count = bytes.readUInt16LE(4);
    const dimensions = [];
    for (let n = 0; n < count; n++) {
      const offset = 6 + n * 16;
      const start = bytes.readUInt32LE(offset + 12);
      const length = bytes.readUInt32LE(offset + 8);
      assert.ok(start >= 6 + count * 16 && length > 0 && start + length <= bytes.length);
      dimensions.push(bytes[offset] || 256);
    }
    for (const size of [16, 32, 48, 256]) assert.ok(dimensions.includes(size), 'Missing ICO size: ' + size);
  }
}
for (const icon of manifest.icons) checkAsset(icon.src, icon.sizes);
const pages = readdirSync(new URL('.next/server/app/', root)).filter(f => f.endsWith('.html') && !f.startsWith('_'));
assert.ok(pages.includes('index.html'));
for (const page of pages) {
  const html = read('.next/server/app/' + page).toString();
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m => Object.fromEntries([...m[0].matchAll(/([\w-]+)="([^"]*)"/g)].map(a => [a[1], a[2]])));
  assert.equal(links.filter(l => l.rel === 'manifest').length, 1, page);
  assert.equal(links.find(l => l.rel === 'manifest').href, '/manifest.webmanifest', page);
  const icons = links.filter(l => /(^|[- ])icon$/.test(l.rel || ''));
  assert.ok(icons.some(l => l.rel === 'apple-touch-icon'), page);
  assert.ok(icons.some(l => l.rel === 'shortcut icon'), page);
  for (const icon of icons) checkAsset(icon.href, icon.href.includes('.png') ? icon.sizes : undefined);
}
console.log('Install output verified: ' + pages.length + ' HTML pages, manifest, PNG dimensions, multi-size ICO and approved hashes.');
