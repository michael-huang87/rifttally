// Crawls the built Pages site from its home page, fails on any broken link, stylesheet or image,
// and screenshots each page at phone and desktop width.
// node check-site.mjs <base-url> <screenshot-dir>   (needs playwright or playwright-core resolvable)
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';

const require = createRequire(process.cwd() + '/');
let pw;
try { pw = require('playwright'); } catch { pw = require('playwright-core'); }
const [base, outDir] = process.argv.slice(2);
mkdirSync(outDir, { recursive: true });

const browser = await pw.chromium.launch({ executablePath: process.env.CHROMIUM || undefined });
const page = await browser.newPage();
const queue = [new URL(base).href], seen = new Set(queue), checked = new Map();
let failures = 0;

async function status(url) {
  if (!checked.has(url)) checked.set(url, (await page.request.get(url)).status());
  return checked.get(url);
}

while (queue.length) {
  const url = queue.shift();
  const res = await page.goto(url);
  console.log(`${res.status()} page ${url}`);
  if (res.status() !== 200) { failures++; continue; }
  const refs = await page.$$eval('a[href], link[href], img[src]', els => els.map(e => ({
    tag: e.tagName, url: e.href || e.src, broken: e.tagName === 'IMG' && !(e.complete && e.naturalWidth > 0),
  })));
  for (const r of refs) {
    if (r.url.startsWith('mailto:')) { console.log(`  ok   ${r.url}`); continue; }
    const code = await status(r.url);
    const ok = code === 200 && !r.broken;
    if (!ok) failures++;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${code} ${r.tag.toLowerCase()} ${r.url}`);
    const clean = r.url.split('#')[0];
    if (r.tag === 'A' && clean.startsWith(base) && clean.match(/(\/|\.html)$/) && !seen.has(clean)) {
      seen.add(clean); queue.push(clean);
    }
  }
  const name = new URL(url).pathname.split('/').pop().replace('.html', '') || 'home';
  for (const [label, width] of [['phone', 390], ['desktop', 1280]]) {
    await page.setViewportSize({ width, height: 844 });
    await page.screenshot({ path: `${outDir}/${name}-${label}.png`, fullPage: true });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    if (overflow) { failures++; console.log(`  FAIL horizontal scroll at ${width}px`); }
  }
}
const robots = await status(new URL('robots.txt', base).href);
console.log(`${robots} robots.txt`);
if (robots !== 200) failures++;
await browser.close();
console.log(`${seen.size} pages, ${checked.size} distinct URLs, ${failures} failures`);
process.exit(failures ? 1 : 0);
