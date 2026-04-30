"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

type Status = "idle" | "sending" | "success" | "error";

export function LpChecklistForm({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const data = new FormData(e.currentTarget);
    const email = (data.get("email") || "").toString().trim();
    if (!email) return;

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/checklist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setError(json.error ?? "Bitte erneut versuchen.");
        return;
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setError("Netzwerkfehler. Bitte erneut versuchen.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white text-[#050505] px-5 py-4 max-w-[520px] flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#050505] text-white">
          <CheckIcon className="h-3 w-3" />
        </span>
        <div>
          <div className="font-semibold text-[15px]">Vielen Dank!</div>
          <div className="text-[14px] leading-[1.5] text-[#050505]/75 mt-0.5">
            Die Checkliste wurde an Ihre E-Mail-Adresse gesendet. Schauen Sie
            ggf. auch im Spam-Ordner nach.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-[520px]"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Ihre E-Mail-Adresse"
        autoComplete="email"
        disabled={status === "sending"}
        className="flex-1 rounded-full bg-white/[0.06] border border-white/15 px-5 py-3 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-6 py-3 hover:bg-white/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Wird gesendet…" : "Checkliste sichern"}
        {status !== "sending" && <ArrowUpRightIcon className="w-4 h-4" />}
      </button>
      {status === "error" && (
        <p className="sm:basis-full text-[13px] text-red-300">{error}</p>
      )}
    </form>
  );
}
