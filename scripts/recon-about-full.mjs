import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

mkdirSync("docs/research/about", { recursive: true });

const URL = "https://qonto.com/de/about";

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  locale: "de-DE",
});
const page = await ctx.newPage();
await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);

// Scroll to load everything
await page.evaluate(async () => {
  const step = 500;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 80));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1500);

const data = await page.evaluate(() => {
  const sections = Array.from(
    document.querySelectorAll("main section, main > div > section")
  );
  return sections.slice(0, 12).map((sec, idx) => {
    const cs = getComputedStyle(sec);
    return {
      idx,
      className: sec.className,
      bgColor: cs.backgroundColor,
      color: cs.color,
      id: sec.id,
      htmlFull: sec.outerHTML,
    };
  });
});

writeFileSync("docs/research/about/sections-full.json", JSON.stringify(data, null, 2));
console.log("Wrote", data.length, "sections, total size:", JSON.stringify(data).length);

await browser.close();
