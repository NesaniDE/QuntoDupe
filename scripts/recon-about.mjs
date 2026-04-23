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

await page.screenshot({ path: 'docs/design-references/about/desktop-full.png', fullPage: true });
await page.screenshot({ path: 'docs/design-references/about/desktop-viewport.png', fullPage: false });

// Map sections
const sections = await page.evaluate(() => {
  return [...document.querySelectorAll('section')].map((s, i) => {
    const h1 = s.querySelector('h1')?.textContent?.trim().slice(0, 100);
    const h2 = s.querySelector('h2')?.textContent?.trim().slice(0, 100);
    const r = s.getBoundingClientRect();
    return {
      idx: i,
      class: s.className?.toString().slice(0, 120),
      h1, h2,
      top: Math.round(r.top + window.scrollY),
      height: Math.round(r.height),
      text: s.textContent?.trim().slice(0, 200)
    };
  }).filter(s => s.height > 40);
});
fs.writeFileSync('docs/research/about/sections.json', JSON.stringify(sections, null, 2));

// Assets
const assets = await page.evaluate(() => ({
  images: [...document.querySelectorAll('img')].map(img => ({
    src: img.currentSrc || img.src,
    alt: img.alt,
    w: img.naturalWidth,
    h: img.naturalHeight,
    displayW: img.width,
    displayH: img.height,
    top: Math.round(img.getBoundingClientRect().top + window.scrollY)
  })),
  videos: [...document.querySelectorAll('video')].map(v => ({
    src: v.currentSrc || v.src || v.querySelector('source')?.src,
    top: Math.round(v.getBoundingClientRect().top + window.scrollY)
  }))
}));
fs.writeFileSync('docs/research/about/assets.json', JSON.stringify(assets, null, 2));

console.log('sections:', sections.length, 'images:', assets.images.length, 'videos:', assets.videos.length);
await browser.close();
