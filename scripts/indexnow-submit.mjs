/**
 * Reicht alle URLs aus der Sitemap bei IndexNow ein (Bing, Yandex, Seznam, Naver).
 *
 * Nutzung:
 *   node scripts/indexnow-submit.mjs
 *
 * Voraussetzung: das Key-File public/<KEY>.txt muss live unter
 * https://www.nesani.de/<KEY>.txt erreichbar sein.
 */

const HOST = "www.nesani.de";
const KEY = "da9aaf5e1e0a4792836ed2b67dacd9c0";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

async function main() {
  // 1. Key-File live prüfen
  const keyRes = await fetch(KEY_LOCATION);
  if (!keyRes.ok) throw new Error(`Key-File nicht erreichbar: ${KEY_LOCATION}`);
  const keyContent = (await keyRes.text()).trim();
  if (keyContent !== KEY) {
    throw new Error(
      `Key-File-Inhalt stimmt nicht: erwartet "${KEY}", gefunden "${keyContent}"`,
    );
  }
  console.log(`✓ Key-File live: ${KEY_LOCATION}`);

  // 2. Sitemap laden + URLs extrahieren
  const sitemapRes = await fetch(SITEMAP_URL);
  if (!sitemapRes.ok) throw new Error(`Sitemap nicht erreichbar: ${SITEMAP_URL}`);
  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`✓ ${urls.length} URLs in Sitemap gefunden`);

  // 3. URL-Liste an IndexNow senden — api.indexnow.org leitet an alle Suchmaschinen weiter
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const submitRes = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  console.log(`IndexNow Response: ${submitRes.status} ${submitRes.statusText}`);
  const responseText = await submitRes.text();
  if (responseText) console.log(responseText);

  if (submitRes.status >= 200 && submitRes.status < 300) {
    console.log(`✅ ${urls.length} URLs erfolgreich eingereicht.`);
  } else {
    console.error(`❌ Einreichung fehlgeschlagen.`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
