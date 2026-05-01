import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { BASE_URL, INDEXNOW_KEY } from "@/lib/site";

export const runtime = "nodejs";
export const maxDuration = 30;

/**
 * Vercel Cron Job — reicht alle Sitemap-URLs bei IndexNow
 * (Bing, Yandex, Seznam, Naver) ein.
 *
 * Schutz: Vercel Cron schickt den Header `Authorization: Bearer <CRON_SECRET>`
 *         automatisch mit. Vergleich erfolgt timing-safe.
 */
function verifyCronAuth(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = req.headers.get("authorization");
  if (!auth) return false;
  const expected = `Bearer ${secret}`;
  // Längen müssen übereinstimmen, sonst wirft timingSafeEqual.
  if (auth.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(auth), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function GET(req: Request) {
  if (!verifyCronAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`, {
      cache: "no-store",
    });
    if (!sitemapRes.ok) {
      return NextResponse.json(
        { error: "Sitemap unreachable" },
        { status: 500 },
      );
    }
    const xml = await sitemapRes.text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

    if (urls.length === 0) {
      return NextResponse.json({ ok: true, submitted: 0 });
    }

    const host = new URL(BASE_URL).host;
    const submitRes = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      ok: submitRes.ok,
      status: submitRes.status,
      submitted: urls.length,
    });
  } catch (err) {
    console.error("[indexnow cron] error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
