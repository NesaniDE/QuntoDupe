"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Geschäftskonto", href: "/open-account" },
  { label: "Finanzierung", href: "/financing" },
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
          <Link href="/" aria-label="SHM" className="flex items-center">
            <Image
              src="/images/shm-logo-white.png"
              alt="SHM"
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain"
            />
          </Link>
          <ul className="hidden lg:flex items-center gap-x-7 text-[15px] font-normal">
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
        </div>
      </nav>
    </header>
  );
}
