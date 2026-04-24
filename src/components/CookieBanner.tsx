"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "nesani.cookie-consent";

type Consent = "accepted" | "declined";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null;
      if (!stored) {
        const id = window.setTimeout(() => setVisible(true), 400);
        return () => window.clearTimeout(id);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    setVisible(false);
  };

  if (!mounted) return null;

  return (
    <div
      aria-hidden={!visible}
      className={[
        "fixed inset-x-3 bottom-3 md:inset-x-auto md:right-6 md:bottom-6 md:w-[420px] z-[200]",
        "transition-all duration-500 ease-out",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none",
      ].join(" ")}
    >
      <div className="rounded-2xl bg-[#050505] text-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.45)] border border-white/10 p-5 md:p-6">
        <p className="text-[13px] font-semibold uppercase tracking-widest text-white/60">
          Cookies
        </p>
        <h3 className="mt-2 font-sans font-semibold text-[18px] md:text-[20px] leading-[1.3]">
          Wir verwenden nur das Nötigste.
        </h3>
        <p className="mt-2 text-[14px] leading-[1.55] text-white/70">
          Technisch notwendige Cookies sind immer aktiv. Optionale Cookies
          helfen uns, die Website zu verbessern. Mehr in unserer{" "}
          <Link
            href="/datenschutz"
            className="underline underline-offset-2 hover:text-white"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={() => save("accepted")}
            className="flex-1 h-11 rounded-full bg-white text-[#050505] font-semibold text-[14px] hover:bg-white/90 transition-colors"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={() => save("declined")}
            className="flex-1 h-11 rounded-full border border-white/20 text-white font-semibold text-[14px] hover:bg-white/5 transition-colors"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
