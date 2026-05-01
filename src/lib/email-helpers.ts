/**
 * Helpers für E-Mail-HTML-Erstellung und Input-Validierung.
 *
 * `escapeHtml` / `escapeAttr` werden in API-Routen genutzt, um User-Input
 * sicher in HTML-Templates zu rendern.
 */

const HTML_ESCAPE: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;",
};

export function escapeHtml(value: string | null | undefined): string {
  if (value == null) return "";
  return String(value).replace(/[&<>"']/g, (c) => HTML_ESCAPE[c]);
}

/**
 * Escapet eine User-bereitgestellte URL für ein href-Attribut.
 * Erlaubt nur sichere Schemata (http/https/mailto/tel). Wenn die Eingabe
 * wie eine nackte Domain aussieht, wird automatisch https:// ergänzt.
 * Sonst wird "#" zurückgegeben — der Link ist dann tot, kein XSS-Vektor.
 */
export function escapeAttr(value: string | null | undefined): string {
  if (value == null) return "#";
  const trimmed = String(value).trim();
  if (trimmed.length === 0) return "#";

  let url: string;
  if (/^(https?:\/\/|mailto:|tel:)/i.test(trimmed)) {
    url = trimmed;
  } else if (/^[\w-]+(\.[\w-]+)+([/?#].*)?$/i.test(trimmed)) {
    url = "https://" + trimmed;
  } else {
    return "#";
  }
  // Nur die Zeichen ersetzen, die im Attribut-Kontext gefährlich sind.
  // Bestehende Entities (&amp;, &lt;) werden NICHT erneut escaped.
  return url
    .replace(/&(?!(?:amp|lt|gt|quot|#039);)/g, "&amp;")
    .replace(/"/g, "&quot;");
}

/**
 * Strenger Email-Check inkl. Schutz gegen Header-Injection
 * (\r, \n, sehr lange Strings).
 */
export function isValidEmail(value: unknown): value is string {
  if (typeof value !== "string") return false;
  if (value.length === 0 || value.length > 254) return false;
  if (/[\r\n]/.test(value)) return false; // SMTP header injection guard
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Sicheres Lesen eines String-Feldes aus einem unbekannten Body.
 * Trimmt + cap't Länge. Liefert leeren String wenn nicht-string.
 */
export function asString(value: unknown, maxLen = 2000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}
