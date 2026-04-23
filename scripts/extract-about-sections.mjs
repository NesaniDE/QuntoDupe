import { chromium } from 'playwright';
import fs from 'node:fs';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, locale: 'de-DE' });
const page = await ctx.newPage();
await page.goto('https://qonto.com/de/about', { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(4500);
try { await page.click('button:has-text("Akzeptieren")', { timeout: 3000 }); } catch(e) {}
try { await page.click('button:has-text("Alle akzeptieren")', { timeout: 3000 }); } catch(e) {}
await page.waitForTimeout(2000);

// Scroll to each section and screenshot + extract detail
const out = await page.evaluate(() => {
  return [...document.querySelectorAll('section')].map((s, i) => ({
    idx: i,
    class: s.className,
    bgColor: getComputedStyle(s).backgroundColor,
    html: s.outerHTML.slice(0, 8000),
    images: [...s.querySelectorAll('img')].map(i => ({ src: i.currentSrc || i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight })),
    videos: [...s.querySelectorAll('video')].map(v => ({ src: v.currentSrc || v.src || v.querySelector('source')?.src }))
  }));
});
fs.writeFileSync('docs/research/about/sections-detail.json', JSON.stringify(out, null, 2));

// Scroll and screenshot each
for (let i = 0; i < out.length; i++) {
  await page.evaluate((idx) => {
    const s = document.querySelectorAll('section')[idx];
    if (s) s.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, i);
  await page.waitForTimeout(1000);
  const loc = await page.locator('section').nth(i);
  try { await loc.screenshot({ path: `docs/design-references/about/s${String(i).padStart(2,'0')}.png` }); } catch(e) {}
}
console.log('done', out.length);
await browser.close();
