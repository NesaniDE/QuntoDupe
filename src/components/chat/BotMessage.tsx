"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/icons";

/**
 * Rendert eine Bot-Nachricht als Fließtext mit:
 * - Markdown-Stripping (Sternchen, Unterstriche, Backticks)
 * - automatischer Linkifizierung interner Pfade (/kontakt, /leistungen/...)
 * - optionalem CTA-Button am Ende, wenn /kontakt erwähnt wird
 */

const INTERNAL_PATH_REGEX =
  /(\/kontakt|\/leistungen\/[a-z0-9-]+|\/leistungen|\/projekte|\/blog|\/ueber-uns)\b/g;

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1") // **fett** → fett
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, "$1") // *kursiv* → kursiv
    .replace(/__([^_]+)__/g, "$1") // __fett__
    .replace(/(?<!_)_([^_\n]+)_(?!_)/g, "$1") // _kursiv_
    .replace(/`([^`]+)`/g, "$1") // `code`
    .replace(/^#{1,6}\s+/gm, "") // # Überschrift
    .replace(/^[-*+]\s+/gm, ""); // - bullet
}

function linkify(text: string, onLinkClick?: () => void): ReactNode[] {
  const out: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  // Regex muss bei jedem Aufruf zurückgesetzt werden (global flag → state)
  INTERNAL_PATH_REGEX.lastIndex = 0;
  while ((match = INTERNAL_PATH_REGEX.exec(text))) {
    if (match.index > lastIndex) {
      out.push(text.slice(lastIndex, match.index));
    }
    const path = match[0];
    out.push(
      <Link
        key={`link-${key++}`}
        href={path}
        onClick={onLinkClick}
        className="underline underline-offset-2 hover:opacity-70 transition"
      >
        {path}
      </Link>,
    );
    lastIndex = match.index + path.length;
  }
  if (lastIndex < text.length) {
    out.push(text.slice(lastIndex));
  }
  return out;
}

type Props = {
  content: string;
  /** Wird bei Klick auf interne Links / CTA aufgerufen, z. B. zum Schließen des Widgets. */
  onClose?: () => void;
};

export function BotMessage({ content, onClose }: Props) {
  const cleaned = stripMarkdown(content);
  const showContactCta = /\/kontakt\b/.test(cleaned);

  return (
    <>
      <div className="whitespace-pre-wrap">
        {linkify(cleaned, onClose)}
      </div>
      {showContactCta && (
        <div className="mt-3">
          <Link
            href="/kontakt"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#050505] text-white text-[13px] font-semibold px-4 py-2 hover:bg-black/85 transition"
          >
            Zur Kontaktseite
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </>
  );
}
