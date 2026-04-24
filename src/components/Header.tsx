"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Leistungen", href: "/open-account" },
  { label: "Über uns", href: "/about" },
  { label: "Blog", href: "/blog" },
];

type HeaderProps = {
  variant?: "transparent" | "solid";
};

export function Header({ variant = "solid" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "transparent") return;
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [variant]);

  const isLight =
    variant === "transparent" ? !scrolled : false;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[100] h-20 transition-all duration-300",
        variant === "transparent"
          ? scrolled
            ? "backdrop-blur-md bg-black/70 text-white"
            : "bg-transparent text-white"
          : "backdrop-blur-md bg-white/85 text-[#050505] border-b border-black/5",
      ].join(" ")}
    >
      <nav className="relative flex h-full items-center justify-between px-5 lg:px-12">
        <Link href="/" aria-label="Nesani" className="flex items-center">
          <Image
            src={
              isLight || variant === "transparent"
                ? "/images/shm-logo-white.png"
                : "/images/shm-logo-black.png"
            }
            alt="Nesani"
            width={40}
            height={40}
            priority
            className="h-9 w-9 object-contain"
          />
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

        <Link
          href="/kontakt"
          className={[
            "inline-flex items-center justify-center rounded-full text-sm font-semibold px-4 py-2.5 transition",
            variant === "transparent"
              ? "bg-white text-black hover:bg-white/90"
              : "bg-[#050505] text-white hover:bg-black/90",
          ].join(" ")}
        >
          Projekt anfragen
        </Link>
      </nav>
    </header>
  );
}
