"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, DEFlag, QontoLogo } from "@/components/icons";

const NAV_ITEMS = [
  { label: "Gründung", href: "#" },
  { label: "Geschäftskonto", href: "#" },
  { label: "Finanztools", href: "#" },
  { label: "Finanzierung", href: "#" },
  { label: "Preise", href: "#" },
  { label: "Über uns", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[100] h-20 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-black/70 text-white"
          : "bg-transparent text-white",
      ].join(" ")}
    >
      <nav className="flex h-full items-center justify-between px-5 lg:px-12">
        <div className="flex items-center gap-x-10">
          <Link href="/" aria-label="Qonto" className="flex items-center">
            <QontoLogo className="h-7 w-auto" />
          </Link>
          <ul className="hidden lg:flex items-center gap-x-7 text-[15px] font-normal">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                  {item.label !== "Preise" && item.label !== "Über uns" && (
                    <ChevronDownIcon className="w-3 h-3" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-x-3">
          <button className="hidden md:flex items-center gap-1.5 text-sm opacity-95 hover:opacity-100">
            <DEFlag className="w-5 h-5 rounded-full" />
            <span>DE</span>
            <ChevronDownIcon className="w-3 h-3" />
          </button>
          <Link
            href="#"
            className="hidden md:inline text-sm hover:opacity-80"
          >
            Anmelden
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-white text-black text-sm font-semibold px-4 py-2.5 hover:bg-white/90 transition"
          >
            Konto eröffnen
          </Link>
        </div>
      </nav>
    </header>
  );
}
