"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

type Status = "idle" | "sending" | "success" | "error";

const PDF_URL = "/downloads/checkliste-website.pdf";
const PDF_FILENAME = "Nesani-Website-Checkliste.pdf";

function triggerDownload() {
  const a = document.createElement("a");
  a.href = PDF_URL;
  a.download = PDF_FILENAME;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function LpChecklistForm({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    // Form-Referenz vor await sichern — React nullt e.currentTarget sonst.
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = (data.get("email") || "").toString().trim();
    if (!email) return;

    setStatus("sending");
    setError("");

    let ok = false;
    let errMsg = "";
    try {
      const res = await fetch("/api/checklist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        errMsg = json.error ?? "Bitte erneut versuchen.";
      } else {
        ok = true;
      }
    } catch {
      errMsg = "Netzwerkfehler. Bitte erneut versuchen.";
    }

    if (ok) {
      setStatus("success");
      try {
        form.reset();
      } catch {
        // form unmounted — egal
      }
      window.setTimeout(triggerDownload, 250);
    } else {
      setStatus("error");
      setError(errMsg);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white text-[#050505] px-5 py-5 max-w-[520px]">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#050505] text-white">
            <CheckIcon className="h-3 w-3" />
          </span>
          <div>
            <div className="font-semibold text-[15px]">Vielen Dank!</div>
            <div className="text-[14px] leading-[1.5] text-[#050505]/75 mt-0.5">
              Ihr Download startet automatisch. Falls nicht, nutzen Sie den
              Button unten.
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={PDF_URL}
            download={PDF_FILENAME}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#050505] text-white text-[14px] font-semibold px-5 py-2.5 hover:bg-black/85 transition"
          >
            Checkliste herunterladen
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </a>
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
        {status === "sending" ? "Wird gesendet…" : "Checkliste herunterladen"}
        {status !== "sending" && <ArrowUpRightIcon className="w-4 h-4" />}
      </button>
      {status === "error" && (
        <p className="sm:basis-full text-[13px] text-red-300">{error}</p>
      )}
    </form>
  );
}
