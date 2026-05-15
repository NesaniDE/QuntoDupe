// Mini-Helper, der gtag-Events nur feuert, wenn das Tag tatsächlich
// auf der aktuellen Seite geladen ist. Außerhalb von /lp/websites
// passiert nichts (kein Fehler, keine Daten).

type GtagFn = (
  command: "event",
  eventName: string,
  params?: Record<string, unknown>,
) => void;

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  try {
    gtag("event", eventName, params);
  } catch {
    // Tag fehlt oder geblockt – ignorieren.
  }
}
