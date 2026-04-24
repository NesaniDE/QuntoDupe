"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Blog", href: "/blog" },
];

type HeaderProps = {
  variant?: "transparent" | "solid";
};

export function Header({ variant = "solid" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (variant !== "transparent") return;
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [variant]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const original = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  const isLight = variant === "transparent" ? !scrolled : false;

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-[100] h-20 transition-all duration-300",
          menuOpen
            ? "backdrop-blur-md bg-black/90 text-white"
            : variant === "transparent"
              ? scrolled
                ? "backdrop-blur-md bg-black/70 text-white"
                : "bg-transparent text-white"
              : "backdrop-blur-md bg-white/85 text-[#050505] border-b border-black/5",
        ].join(" ")}
      >
        <nav className="relative flex h-full items-center justify-between px-5 lg:px-12">
          <Link href="/" aria-label="Nesani" className="flex items-center gap-2.5">
            <Image
              src={
                menuOpen || isLight || variant === "transparent"
                  ? "/images/shm-logo-white.png"
                  : "/images/shm-logo-black.png"
              }
              alt="Nesani"
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain"
            />
            <span
              className={[
                "font-sans font-semibold text-[18px] tracking-[0.08em]",
                menuOpen || isLight || variant === "transparent"
                  ? "text-white"
                  : "text-[#050505]",
              ].join(" ")}
            >
              NESANI
            </span>
          </Link>

          <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-x-8 text-[15px] font-normal">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/kontakt"
              className={[
                "hidden sm:inline-flex items-center justify-center rounded-full text-sm font-semibold px-4 py-2.5 transition",
                menuOpen
                  ? "bg-white text-black hover:bg-white/90"
                  : variant === "transparent"
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-[#050505] text-white hover:bg-black/90",
              ].join(" ")}
            >
              Projekt anfragen
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className={[
                "lg:hidden relative w-11 h-11 flex items-center justify-center rounded-full transition-colors",
                menuOpen
                  ? "bg-white/10 text-white"
                  : variant === "transparent"
                    ? "hover:bg-white/10 text-white"
                    : "hover:bg-black/5 text-[#050505]",
              ].join(" ")}
            >
              <span className="relative block w-5 h-4">
                <span
                  className={[
                    "absolute left-0 right-0 h-[2px] bg-current rounded transition-all duration-300",
                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-current rounded transition-opacity duration-200",
                    menuOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 right-0 h-[2px] bg-current rounded transition-all duration-300",
                    menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={[
          "lg:hidden fixed inset-0 z-[90] bg-[#050505] text-white transition-all duration-300",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-6">
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.label}
                style={{
                  transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms",
                }}
                className={[
                  "transition-all duration-500 ease-out",
                  menuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4",
                ].join(" ")}
              >
                <Link
                  href={item.href}
                  className="block py-4 text-[32px] font-semibold tracking-[-0.02em] border-b border-white/10 hover:opacity-70 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            style={{
              transitionDelay: menuOpen
                ? `${120 + NAV_ITEMS.length * 60}ms`
                : "0ms",
            }}
            className={[
              "mt-auto transition-all duration-500 ease-out",
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2",
            ].join(" ")}
          >
            <Link
              href="/kontakt"
              className="flex items-center justify-center w-full h-14 rounded-full bg-white text-[#050505] font-semibold text-[15px] hover:bg-white/90 transition"
            >
              Projekt anfragen
            </Link>
            <div className="mt-6 text-[13px] text-white/50">
              info@nesani.de · Schwäbisch Gmünd
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
