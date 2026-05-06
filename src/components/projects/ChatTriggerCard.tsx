"use client";

import type { ReactNode } from "react";

import { CHAT_OPEN_EVENT } from "@/lib/chat-events";

export function ChatTriggerCard({ children }: { children: ReactNode }) {
  function handle() {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent(CHAT_OPEN_EVENT));
  }

  return (
    <button
      type="button"
      onClick={handle}
      aria-label="Chat-Widget öffnen"
      className="block w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#050505]/30 rounded-2xl"
    >
      {children}
    </button>
  );
}
