/**
 * In-Memory Rate Limiter — pro IP (Sliding Window) plus globaler Tagesdeckel.
 *
 * Bewusst keine Persistenz: für die Größenordnung von Nesani reicht
 * Memory in der Lambda. Cold Starts setzen den Counter zurück, das ist
 * akzeptabel solange der globale Tagesdeckel + Provider-Spend-Cap
 * (Resend, OpenAI) als Backstops dahinter sitzen.
 */

export type RateLimitConfig = {
  /** Eindeutiger Bucket-Name pro Route, damit Limits separat zählen. */
  bucketName: string;
  /** Sliding-Window-Größe in Millisekunden. */
  windowMs: number;
  /** Maximale Requests pro IP innerhalb des Sliding Windows. */
  maxPerIp: number;
  /** Maximale Requests global pro Kalendertag (UTC). */
  maxPerDay: number;
};

type Bucket = Map<string, number[]>;
type DayCounter = { day: string; count: number };

const ipBucketsByName = new Map<string, Bucket>();
const dayCountersByName = new Map<string, DayCounter>();

function getIpBucket(name: string): Bucket {
  let b = ipBucketsByName.get(name);
  if (!b) {
    b = new Map();
    ipBucketsByName.set(name, b);
  }
  return b;
}

function getDayCounter(name: string): DayCounter {
  let c = dayCountersByName.get(name);
  if (!c) {
    c = { day: "", count: 0 };
    dayCountersByName.set(name, c);
  }
  return c;
}

export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

export type RateLimitResult =
  | { ok: true }
  | { ok: false; reason: "ip" | "daily"; retryAfter: number };

export function checkRateLimit(
  ip: string,
  config: RateLimitConfig,
): RateLimitResult {
  const now = Date.now();
  const today = new Date().toISOString().slice(0, 10);

  // Daily global cap
  const day = getDayCounter(config.bucketName);
  if (day.day !== today) {
    day.day = today;
    day.count = 0;
  }
  if (day.count >= config.maxPerDay) {
    return { ok: false, reason: "daily", retryAfter: 3600 };
  }

  // Per-IP sliding window
  const buckets = getIpBucket(config.bucketName);
  const recent = (buckets.get(ip) ?? []).filter(
    (t) => now - t < config.windowMs,
  );
  if (recent.length >= config.maxPerIp) {
    const retryAfter = Math.ceil((config.windowMs - (now - recent[0])) / 1000);
    buckets.set(ip, recent);
    return { ok: false, reason: "ip", retryAfter };
  }

  recent.push(now);
  buckets.set(ip, recent);
  day.count++;

  // Lazy GC alle ~50 Requests, wenn die Map größer als 500 wird
  if (Math.random() < 0.02 && buckets.size > 500) {
    for (const [k, v] of buckets) {
      if (v.length === 0 || now - v[v.length - 1] > config.windowMs) {
        buckets.delete(k);
      }
    }
  }

  return { ok: true };
}
