"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/gtag";

type Props = {
  /** wird als event_label in alle Events gefüttert, z.B. "lp-websites" */
  source: string;
};

/**
 * Hängt einmalig einen Klick-Listener an document, der relevante CTAs
 * auf der LP erkennt und gtag-Events feuert. Kein Markup-Touch nötig:
 * matcht über href bzw. nächsten Anker.
 *
 * Events:
 * - lp_contact_click   – beliebiger Klick auf /kontakt-Link oder mailto:info@nesani.de
 * - lp_checklist_anchor – Klick auf #checkliste (Hero-Button "Kostenlose Checkliste")
 */
export function LpAnalytics({ source }: Props) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";

      if (href === "/kontakt" || href.startsWith("mailto:info@nesani.de")) {
        trackEvent("lp_contact_click", {
          event_category: "engagement",
          event_label: source,
          link_text: anchor.textContent?.trim().slice(0, 80),
          link_href: href,
        });
        return;
      }

      if (href === "#checkliste") {
        trackEvent("lp_checklist_anchor", {
          event_category: "engagement",
          event_label: source,
        });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [source]);

  return null;
}
