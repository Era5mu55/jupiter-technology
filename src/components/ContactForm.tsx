"use client";

import { useState } from "react";
import { PrimaryButton } from "./Button";

const PROJECT_TYPES = [
  "Website",
  "Custom software / MVP",
  "E-commerce",
  "Support & maintenance",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8">
        <h3 className="text-lg font-semibold text-navy">Message sent</h3>
        <p className="mt-2 text-sm text-slate-soft">
          Thanks for reaching out — we typically reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-8">
      <h3 className="text-lg font-semibold text-navy">Send us a message</h3>
      <p className="mt-1 mb-6 text-sm text-slate-soft">
        Fill this out and we&apos;ll get back to you by email.
      </p>
      <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="rounded-lg border border-line px-3.5 py-3 text-sm"
        />
        <input
          type="email"
          required
          placeholder="Your email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="rounded-lg border border-line px-3.5 py-3 text-sm"
        />
        <select
          required
          value={form.projectType}
          onChange={(e) => update("projectType", e.target.value)}
          className="rounded-lg border border-line px-3.5 py-3 text-sm text-slate-soft"
        >
          <option value="" disabled>
            Project type
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <textarea
          placeholder="Tell us about your project"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="min-h-[120px] resize-y rounded-lg border border-line px-3.5 py-3 text-sm"
        />
        <PrimaryButton type="submit" disabled={status === "sending"} className="justify-center">
          {status === "sending" ? "Sending…" : "Send message"}
        </PrimaryButton>
        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong — try WhatsApp instead, or email us directly.
          </p>
        )}
      </form>
    </div>
  );
}
