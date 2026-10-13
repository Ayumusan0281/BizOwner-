import assert from 'node:assert/strict';
import { readFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname, basename } from 'node:path';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { createHash } from 'node:crypto';
import puppeteer from 'puppeteer';
const root = new URL('../', import.meta.url);
const lock = JSON.parse(readFileSync(new URL('public/brand/official-logo-lock.json', root)));
let server;
let browser;
const profile = mkdtempSync(join(tmpdir(), 'derabiz-install-qa-'));
let base = process.argv[2];
try {
  if (!base) {
    const probe = createServer();
    await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve));
    const port = probe.address().port;
    await new Promise(resolve => probe.close(resolve));
    base = 'http://127.0.0.1:' + port;
    server = spawn(process.execPath, [new URL('node_modules/next/dist/bin/next', root).pathname.replace(/^\/([A-Za-z]:)/, '$1'), 'start', '-H', '127.0.0.1', '-p', String(port)], { cwd: root, stdio: 'pipe' });
    server.stdout.resume(); server.stderr.resume();
    let ready = false;
    for (let i = 0; i < 120; i++) {
      try { if ((await fetch(base)).ok) { ready = true; break; } } catch {}
      if (server.exitCode !== null) throw new Error('Next server exited: ' + server.exitCode);
      await new Promise(resolve => setTimeout(resolve, 250));
    }
    assert.ok(ready, 'Server did not start');
  }
  const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
  // Dedicated temporary profile: never attach to the user's browser or install into Windows.
  const options = { headless: true, userDataDir: profile, args: process.env.CI ? ['--no-sandbox'] : [], ...(existsSync(edge) ? { executablePath: edge } : {}) };
  for (const phase of ['fresh-profile', 'browser-restarted']) {
    browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    for (const route of ['/', '/salon', '/bizowner']) {
      await page.goto(new URL(route, base).href, { waitUntil: 'networkidle2' });
      const client = await page.createCDPSession();
      const parsed = await client.send('Page.getAppManifest');
      assert.equal(parsed.errors.length, 0, JSON.stringify(parsed.errors));
      const manifest = JSON.parse(parsed.data);
      assert.equal(manifest.id, '/');
      assert.equal(manifest.start_url, '/');
      assert.equal(manifest.scope, '/');
      const result = await page.evaluate(async manifest => {
        const urls = [...document.querySelectorAll('link[rel*=icon]')].map(l => l.href);
        for (const icon of manifest.icons) urls.push(new URL(icon.src, location.origin).href);
        const records = [];
        for (const url of [...new Set(urls)]) {
          const response = await fetch(url);
          const data = await response.arrayBuffer();
          const bytes = [...new Uint8Array(data)];
          const image = new Image(); image.src = url; await image.decode();
          records.push({ url, status: response.status, type: response.headers.get('content-type'), width: image.naturalWidth, height: image.naturalHeight, bytes });
        }
        const response = await fetch(document.querySelector('link[rel=manifest]').href);
        return { records, cache: response.headers.get('cache-control'), type: response.headers.get('content-type') };
      }, manifest);
      assert.match(result.type, /manifest\+json/);
      assert.match(result.cache, /no-cache|no-store|max-age=0/);
      for (const record of result.records) {
        assert.equal(record.status, 200, record.url);
        assert.match(record.type, /^image\//, record.url);
        assert.ok(record.width > 0 && record.height > 0, record.url);
        const p = new URL(record.url).pathname;
        const file = p === '/favicon.ico' ? 'src/app/favicon.ico' : 'public' + p;
        assert.equal(createHash('sha256').update(Buffer.from(record.bytes)).digest('hex'), lock.sha256[file], record.url);
        const icon = manifest.icons.find(i => i.src === p);
        if (icon) assert.equal(record.width + 'x' + record.height, icon.sizes);
      }
      await client.detach();
      console.log(phase + ' ' + route + ': browser manifest, image decode, MIME, cache and official hashes passed');
    }
    await browser.close(); browser = undefined;
  }
} finally {
  if (browser) await browser.close();
  if (server && server.exitCode === null) { const exited = new Promise(resolve => server.once('exit', resolve)); server.kill(); await exited; }
  // Only the freshly created test profile under OS temp is removed.
  assert.equal(dirname(resolve(profile)), resolve(tmpdir()));
  assert.ok(basename(profile).startsWith('derabiz-install-qa-'));
  rmSync(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
}
