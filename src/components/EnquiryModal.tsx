"use client";

import { useState } from "react";
import { MessageCircle, Mail, User, Phone, Briefcase, DollarSign, Calendar, X } from "lucide-react";
import { useEnquiry } from "./EnquiryProvider";
import { whatsappHref } from "@/data/site";
import { GhostButton, PrimaryButton } from "./Button";

const PROJECT_TYPES = [
  "Website",
  "Custom software / MVP",
  "E-commerce",
  "Support & maintenance",
  "Other",
];

const BUDGET_RANGES = [
  "Under $2k",
  "$2k – $5k",
  "$5k – $15k",
  "$15k+",
  "Not sure yet",
];

const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Just exploring"];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

function FieldIcon({ icon: Icon }: { icon: typeof User }) {
  return <Icon className="h-4 w-4 text-slate-soft" />;
}

function buildWhatsappSummary(form: typeof EMPTY_FORM) {
  const lines = [
    "*New project inquiry — Jupiter Technology*",
    "",
    `*Name:* ${form.name}`,
    `*Email:* ${form.email}`,
    form.phone ? `*Phone:* ${form.phone}` : null,
    `*Project type:* ${form.projectType}`,
    `*Budget:* ${form.budget}`,
    `*Timeline:* ${form.timeline}`,
    form.message ? "" : null,
    form.message ? "*Project details:*" : null,
    form.message ? form.message : null,
  ].filter((line) => line !== null);
  return lines.join("\n");
}

export default function EnquiryModal() {
  const { isOpen, close, open } = useEnquiry();
  const [form, setForm] = useState(EMPTY_FORM);
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "error">("idle");

  function handleClose() {
    close();
    setForm(EMPTY_FORM);
    setEmailStatus("idle");
  }

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function sendViaWhatsapp() {
    window.open(whatsappHref(buildWhatsappSummary(form)), "_blank", "noreferrer");
    handleClose();
  }

  async function sendViaEmail() {
    setEmailStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      handleClose();
    } catch {
      setEmailStatus("error");
    }
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4"
          onClick={handleClose}
        >
          <div
            className="no-scrollbar max-h-[85vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={handleClose}
              className="float-right text-slate-soft hover:text-navy"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-bold text-navy">Let&apos;s start a project</h3>
            <p className="mt-1 text-sm text-slate-soft">
              Tell us a bit about your project — you&apos;ll choose how to send it at the end.
            </p>

            <form
              className="mt-6 flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex items-center gap-2 rounded-lg border border-line px-3.5 py-3">
                <FieldIcon icon={User} />
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-line px-3.5 py-3">
                <FieldIcon icon={Mail} />
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-line px-3.5 py-3">
                <FieldIcon icon={Phone} />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-line px-3.5 py-3">
                <FieldIcon icon={Briefcase} />
                <select
                  required
                  value={form.projectType}
                  onChange={(e) => update("projectType", e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-soft outline-none"
                >
                  <option value="" disabled>
                    Project type
                  </option>
                  {PROJECT_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-line px-3.5 py-3">
                <FieldIcon icon={DollarSign} />
                <select
                  required
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-soft outline-none"
                >
                  <option value="" disabled>
                    Budget range
                  </option>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-line px-3.5 py-3">
                <FieldIcon icon={Calendar} />
                <select
                  required
                  value={form.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-soft outline-none"
                >
                  <option value="" disabled>
                    Timeline
                  </option>
                  {TIMELINES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Tell us a bit about your project"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="min-h-[100px] resize-y rounded-lg border border-line px-3.5 py-3 text-sm"
              />

              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-soft">
                Send this to us via
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton
                  type="button"
                  onClick={sendViaWhatsapp}
                  className="flex-1 justify-center bg-[#25D366] hover:bg-[#1ebd5a]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </PrimaryButton>
                <GhostButton
                  type="button"
                  onClick={sendViaEmail}
                  disabled={emailStatus === "sending"}
                  className="flex-1 justify-center"
                >
                  <Mail className="h-4 w-4" />
                  {emailStatus === "sending" ? "Sending…" : "Email"}
                </GhostButton>
              </div>
              {emailStatus === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong sending that — try WhatsApp instead, or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      <a
        href={whatsappHref()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[6.5rem] right-6 z-40 flex items-center gap-3"
      >
        <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-lg">
          WhatsApp
        </span>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebd5a]">
          <MessageCircle className="h-6 w-6" />
        </span>
      </a>
      <button onClick={open} className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow-lg">
          Start a project
        </span>
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-electric text-white shadow-lg hover:bg-[#2359c9]">
          <Mail className="h-6 w-6" />
        </span>
      </button>
    </>
  );
}
