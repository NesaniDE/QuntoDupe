"use client";

import { useEffect, useRef } from "react";

type Props = {
  desktop: string;
  mobile: string;
  poster: string;
  className?: string;
};

/**
 * Lädt mobile/desktop-spezifisches Hero-Video erst nach Mount (über JS).
 * Bis dahin zeigt der Browser das Poster-Bild — Page wirkt sofort befüllt.
 */
export function HeroVideo({ desktop, mobile, poster, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const src = isMobile ? mobile : desktop;
    if (v.src !== src) {
      v.src = src;
      v.load();
    }
    const playPromise = v.play();
    if (playPromise) playPromise.catch(() => {});
  }, [desktop, mobile]);

  return (
    <video
      ref={ref}
      poster={poster}
      preload="none"
      loop
      muted
      playsInline
      autoPlay
      className={className}
    />
  );
}
