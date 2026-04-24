"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Phase = "idle" | "splash" | "covering" | "held" | "revealing";

const SPLASH_HOLD_MS = 650;
const COVER_MS = 520;
const HOLD_MS = 320;
const REVEAL_MS = 520;

export function RouteTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("splash");
  const pendingHref = useRef<string | null>(null);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion.current) {
      setPhase("idle");
    }
  }, []);

  useEffect(() => {
    if (phase !== "splash") return;
    const id = window.setTimeout(() => setPhase("revealing"), SPLASH_HOLD_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (reduceMotion.current) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const targetAttr = anchor.getAttribute("target");
      if (targetAttr && targetAttr !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const rel = anchor.getAttribute("rel") || "";
      if (rel.includes("external")) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (!href.startsWith("/")) return;
      if (href.startsWith("//")) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      const samePath =
        url.pathname === pathname ||
        url.pathname + url.search === pathname + window.location.search;
      if (samePath) return;

      e.preventDefault();
      pendingHref.current = href;
      setPhase("covering");
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  useEffect(() => {
    if (phase === "covering") {
      const id = window.setTimeout(() => {
        const href = pendingHref.current;
        pendingHref.current = null;
        if (href) router.push(href);
        setPhase("held");
      }, COVER_MS);
      return () => window.clearTimeout(id);
    }
    if (phase === "held") {
      const id = window.setTimeout(() => setPhase("revealing"), HOLD_MS);
      return () => window.clearTimeout(id);
    }
  }, [phase, router]);

  useEffect(() => {
    if (phase !== "revealing") return;
    if (pendingHref.current !== null) return;
    const id = window.setTimeout(() => setPhase("idle"), REVEAL_MS);
    return () => window.clearTimeout(id);
  }, [phase]);

  const active = phase !== "idle";
  const showLogo =
    phase === "splash" || phase === "covering" || phase === "held";

  let translate: string;
  let transitionDuration: number;

  switch (phase) {
    case "splash":
    case "covering":
    case "held":
      translate = "translate-y-0";
      transitionDuration = phase === "splash" ? 0 : COVER_MS;
      break;
    case "revealing":
      translate = "-translate-y-full";
      transitionDuration = REVEAL_MS;
      break;
    default:
      translate = "translate-y-full";
      transitionDuration = 0;
  }

  return (
    <div
      aria-hidden={!active}
      className={[
        "fixed inset-0 z-[150] bg-[#050505] flex items-center justify-center",
        "ease-[cubic-bezier(0.76,0,0.24,1)]",
        translate,
        active ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      style={{
        transitionProperty: "transform",
        transitionDuration: `${transitionDuration}ms`,
      }}
    >
      <div
        className={[
          "transition-all duration-500 ease-out",
          showLogo ? "opacity-100 scale-100" : "opacity-0 scale-90",
        ].join(" ")}
        style={{
          transitionDelay: showLogo ? "80ms" : "0ms",
        }}
      >
        <div className="rt-logo w-20 h-20 md:w-24 md:h-24 relative">
          <Image
            src="/images/shm-logo-white.png"
            alt="NESANI"
            fill
            priority
            sizes="96px"
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
}
