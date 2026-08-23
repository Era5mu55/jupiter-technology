import { MessageCircle, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Wrap, Eyebrow } from "@/components/ui";
import { GhostButton, PrimaryButton } from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { SITE, whatsappHref } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Jupiter Technology about your project on WhatsApp or email — we typically reply within one business day. No published pricing, every quote is scoped to what you need.",
  keywords: [
    "contact web development agency",
    "get a software development quote",
    "hire a developer USA",
    "request a project quote",
    "website development inquiry",
    "custom software quote",
    "contact Jupiter Technology",
    "WhatsApp business inquiry",
    "startup software consultation",
    "small business website quote",
    "book a discovery call software",
    "software development company contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Jupiter Technology",
    description:
      "Tell us about your project on WhatsApp or email — we typically reply within one business day.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        lead="The fastest way to reach us is WhatsApp or email — pick whichever you prefer. We typically reply within one business day."
        image="https://images.pexels.com/photos/6918529/pexels-photo-6918529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      />

      <section className="bg-midnight py-24">
        <Wrap className="grid gap-14 md:grid-cols-2">
          <ContactForm />

          <div>
            <Eyebrow onDark>Prefer to chat directly?</Eyebrow>
            <h2 className="mt-3 mb-6 text-2xl font-bold text-white">
              Reach us on WhatsApp or email.
            </h2>

            <div className="mb-4 flex items-center justify-between rounded-2xl border border-line bg-white px-6 py-5">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy">WhatsApp</h3>
                  <p className="text-sm text-slate-soft">Fastest way to reach us directly.</p>
                </div>
              </div>
              <PrimaryButton href={whatsappHref()} target="_blank">
                Chat now
              </PrimaryButton>
            </div>

            <div className="mb-4 flex items-center justify-between rounded-2xl border border-line bg-white px-6 py-5">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy">Email</h3>
                  <p className="text-sm text-slate-soft">{SITE.email}</p>
                </div>
              </div>
              <GhostButton href={`mailto:${SITE.email}`}>Email us</GhostButton>
            </div>

            <div className="mb-8 flex items-center gap-4 rounded-2xl border border-line bg-white px-6 py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-cyan">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-navy">Office</h3>
                <address className="mt-1 not-italic text-sm leading-relaxed text-slate-soft">
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </address>
              </div>
            </div>

            <Eyebrow onDark>Response time</Eyebrow>
            <p className="mt-2 text-white/70">
              We typically reply within one business day. For urgent requests, WhatsApp is the fastest path.
            </p>
          </div>
        </Wrap>
      </section>
    </>
  );
}
