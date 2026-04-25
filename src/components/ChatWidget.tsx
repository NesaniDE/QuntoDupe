"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

type Mode = "intro" | "typing" | "blocked";

const TYPING_MS = 900;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [mode, setMode] = useState<Mode>("intro");
  const [draft, setDraft] = useState("");
  const [submitted, setSubmitted] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Mount + open animation lifecycle
  useEffect(() => {
    if (open) {
      setMounted(true);
      // give the DOM one frame to apply the "from" state, then flip to "to"
      const id = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setAnimateIn(true));
      });
      return () => window.cancelAnimationFrame(id);
    }
    setAnimateIn(false);
    const id = window.setTimeout(() => setMounted(false), 220);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (animateIn && mode === "intro") {
      const id = window.setTimeout(() => inputRef.current?.focus(), 220);
      return () => window.clearTimeout(id);
    }
  }, [animateIn, mode]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Auto-scroll body when new bubbles appear
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [mode, submitted]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = draft.trim();
    if (value.length === 0) return;
    setSubmitted(value);
    setDraft("");
    setMode("typing");
    window.setTimeout(() => setMode("blocked"), TYPING_MS);
  }

  function reset() {
    setMode("intro");
    setSubmitted("");
    setDraft("");
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }

  return (
    <>
      {/* Trigger button */}
      <button
        type="button"
        aria-label={open ? "Chat schließen" : "Chat öffnen"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full bg-[#050505] text-white ring-1 ring-white/25 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:scale-[1.04] active:scale-[0.96] transition-transform duration-200 flex items-center justify-center"
      >
        <span className="relative w-7 h-7 flex items-center justify-center">
          <span
            className={[
              "absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out",
              open
                ? "opacity-0 scale-50 rotate-90"
                : "opacity-100 scale-100 rotate-0",
            ].join(" ")}
            aria-hidden={open}
          >
            <Image
              src="/images/shm-logo-white.png"
              alt=""
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
              priority
            />
          </span>
          <span
            className={[
              "absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out",
              open
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 -rotate-90",
            ].join(" ")}
            aria-hidden={!open}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </span>
        </span>
      </button>

      {/* Panel */}
      {mounted && (
        <div
          role="dialog"
          aria-label="Nesani Chat"
          aria-hidden={!open}
          style={{ transformOrigin: "bottom right" }}
          className={[
            "fixed bottom-24 right-5 md:right-6 z-50 w-[calc(100vw-2.5rem)] max-w-[360px] rounded-2xl bg-white text-[#050505] shadow-[0_24px_60px_rgba(0,0,0,0.25)] border border-black/10 overflow-hidden",
            "transition-[opacity,transform] duration-200 ease-out",
            animateIn
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-[0.96] pointer-events-none",
          ].join(" ")}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 bg-[#050505] text-white">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Image
                src="/images/shm-logo-white.png"
                alt=""
                width={22}
                height={22}
                className="w-5 h-5 object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="text-[14px] font-semibold leading-tight">
                Nesani
              </div>
              <div className="text-[12px] text-white/70 leading-tight">
                Schreib uns eine Nachricht
              </div>
            </div>
          </div>

          {/* Body */}
          <div
            ref={bodyRef}
            className="px-5 py-5 max-h-[60vh] overflow-y-auto"
          >
            {/* Intro bubble (always visible) */}
            <BotRow>
              <div className="bg-[#F4F1EA] rounded-2xl rounded-tl-md px-3.5 py-2.5 text-[14px] leading-[1.45] max-w-[260px] chat-pop">
                Hi, schön dass du hier bist. Womit können wir dir helfen?
              </div>
            </BotRow>

            {submitted && (
              <div className="mt-3 flex justify-end">
                <div className="bg-[#050505] text-white rounded-2xl rounded-tr-md px-3.5 py-2.5 text-[14px] leading-[1.45] max-w-[260px] break-words chat-pop">
                  {submitted}
                </div>
              </div>
            )}

            {mode === "typing" && (
              <div className="mt-3">
                <BotRow>
                  <div className="bg-[#F4F1EA] rounded-2xl rounded-tl-md px-3.5 py-3 chat-pop">
                    <TypingDots />
                  </div>
                </BotRow>
              </div>
            )}

            {mode === "blocked" && (
              <div className="mt-3">
                <BotRow>
                  <div className="bg-[#F4F1EA] rounded-2xl rounded-tl-md px-3.5 py-3 text-[14px] leading-[1.5] max-w-[260px] chat-pop">
                    Unser Chat-Tool wird gerade gewartet und ist aktuell
                    leider nicht verfügbar. Schreib uns deine Anfrage gern
                    direkt über das Kontaktformular — wir melden uns innerhalb
                    von 24 Stunden.
                    <div className="mt-3 flex flex-col gap-2">
                      <Link
                        href="/kontakt"
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#050505] text-white text-[13px] font-semibold px-4 py-2 hover:bg-black/85 transition"
                      >
                        Zur Kontaktseite
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        type="button"
                        onClick={reset}
                        className="text-[12px] text-[#050505]/65 hover:text-[#050505] transition self-start"
                      >
                        Nachricht ändern
                      </button>
                    </div>
                  </div>
                </BotRow>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-black/10 px-3 py-3 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Nachricht schreiben…"
              disabled={mode !== "intro"}
              className="flex-1 bg-transparent text-[14px] placeholder:text-[#050505]/45 px-3 py-2 outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              aria-label="Senden"
              disabled={draft.trim().length === 0 || mode !== "intro"}
              className="w-9 h-9 rounded-full bg-[#050505] text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/85 active:scale-95 transition"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function BotRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5 items-start">
      <div className="w-7 h-7 rounded-full bg-[#050505] flex items-center justify-center shrink-0">
        <Image
          src="/images/shm-logo-white.png"
          alt=""
          width={16}
          height={16}
          className="w-4 h-4 object-contain"
        />
      </div>
      {children}
    </div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1.5 h-4">
      <span className="chat-dot" />
      <span className="chat-dot" style={{ animationDelay: "0.15s" }} />
      <span className="chat-dot" style={{ animationDelay: "0.3s" }} />
    </span>
  );
}
