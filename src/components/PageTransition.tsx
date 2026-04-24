"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setShow(false);
    const id = window.requestAnimationFrame(() => setShow(true));
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div
      key={pathname}
      className={[
        "transition-all duration-500 ease-out",
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
