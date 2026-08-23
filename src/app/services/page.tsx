import Image from "next/image";
import { Code2, Smartphone, Server, Cloud } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Wrap, Eyebrow, SectionHead, Card } from "@/components/ui";
import { PrimaryButton, GhostButton } from "@/components/Button";
import CTABand from "@/components/CTABand";
import StartProjectButton from "@/components/StartProjectButton";
import { TESTIMONIALS } from "@/data/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, custom software and MVPs, e-commerce, and ongoing support — fixed-scope digital product services for US startups and small businesses.",
  keywords: [
    "web development services",
    "custom software development",
    "MVP development services",
    "e-commerce website development",
    "website maintenance services",
    "React Native app development",
    "startup software development",
    "small business web design",
    "Next.js web development",
    "fixed-scope quote software project",
    "hire a web development team",
    "post-launch support and maintenance",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Jupiter Technology",
    description:
      "Web development, custom software and MVPs, e-commerce, and ongoing support — fixed-scope digital product services for US startups and small businesses.",
    url: "/services",
  },
};

const SERVICES = [
  {
    title: "Web Development",
    blurb:
      "A marketing site, business website, or landing page built to load fast, rank well, and turn visitors into inquiries.",
    image:
      "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    included: [
      "Business & corporate websites",
      "Landing pages",
      "Portfolio websites",
      "Blog / CMS sites",
    ],
    timeline: "Typical timeline: 3–5 weeks",
  },
  {
    title: "Custom Software & MVPs",
    blurb:
      "A web or mobile application built from scratch — user accounts, dashboards, workflows, integrations.",
    image:
      "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    included: [
      "Custom web applications",
      "Systems & dashboards",
      "iOS & Android apps",
      "Cross-platform apps (React Native)",
      "Progressive web apps (PWA)",
    ],
    timeline: "Typical timeline: 5–10 weeks",
  },
  {
    title: "E-commerce",
    blurb:
      "A storefront or booking system that makes it easy for customers to pay you.",
    image:
      "https://images.pexels.com/photos/7289719/pexels-photo-7289719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    included: [
      "E-commerce stores",
      "Product catalogs & checkout",
      "Order management",
      "Booking / reservation flows",
    ],
    timeline: "Typical timeline: 4–7 weeks",
  },
  {
    title: "Support & Maintenance",
    blurb:
      "Ongoing updates, monitoring, and fixes after launch — no project left behind.",
    image:
      "https://images.pexels.com/photos/8681899/pexels-photo-8681899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    included: [
      "Domain registration & setup",
      "Hosting & deployment",
      "SSL & security setup",
      "Backups & uptime monitoring",
      "App maintenance & updates",
    ],
    timeline: "Billed monthly, cancel anytime",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Discovery Call",
    blurb:
      "We talk through your goals, audience, and timeline. We ask the right questions so there are no surprises later.",
  },
  {
    num: "02",
    title: "Design & Plan",
    blurb:
      "We produce wireframes and a clear scope document. You approve the look and feel before a single line of code is written.",
  },
  {
    num: "03",
    title: "Build & Review",
    blurb:
      "We build in focused sprints and share progress regularly. You give feedback, we iterate — no black-box development.",
  },
  {
    num: "04",
    title: "Launch & Support",
    blurb:
      "We handle deployment, DNS, and final checks. After launch you get free support built into every project.",
  },
];

const SUPPORT_TIERS = [
  { project: "Web Development", months: "1 month", note: "Bug fixes and small tweaks after launch." },
  { project: "E-commerce", months: "2 months", note: "Bug fixes, small tweaks, and uptime monitoring." },
  { project: "Custom Software & MVPs", months: "3 months", note: "Bug fixes, small tweaks, and monitoring while your product finds its footing." },
];

const STACK = [
  { group: "Frontend", icon: Code2, items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { group: "Mobile", icon: Smartphone, items: ["React Native"] },
  { group: "Backend", icon: Server, items: ["Node.js", "Supabase"] },
  { group: "Infrastructure", icon: Cloud, items: ["Cloudflare Workers", "Stripe"] },
];

const FAQS = [
  {
    q: "How much will my project cost?",
    a: "There's no published price list — custom software doesn't fit a fixed menu. Tell us what you're building and we'll come back with a clear, fixed-scope quote: what's included, what it costs, and when you'll have it.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope: a marketing site usually takes 3–5 weeks, a storefront or booking system 4–7 weeks, and custom software or an MVP 5–10 weeks. You'll get a specific timeline as part of your quote.",
  },
  {
    q: "I only have a rough idea, not a full spec — can you still help?",
    a: "Yes — that's what the discovery call is for. We'll help you turn a rough idea into a scoped plan before any building starts.",
  },
  {
    q: "Who owns the code and design after launch?",
    a: "You do. Your code, your data, your product — nothing about how we build should ever lock you in.",
  },
  {
    q: "What happens after my free support window ends?",
    a: "You can move to our Support & Maintenance plan — billed monthly, cancel anytime — or simply reach out if something comes up later.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Whatever stage your product is at, we build the next piece."
        lead="From a first marketing site to a full custom platform, we scope the work clearly and deliver on the timeline we agree to. No published price list — every project gets a quote built around what it actually needs."
        image="https://images.pexels.com/photos/8370959/pexels-photo-8370959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      />

      <section className="bg-midnight py-24">
        <Wrap>
          <SectionHead onDark eyebrow="What we build" title="Four ways we help businesses ship digital products" />
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={s.image}
                    alt={`${s.title} services by Jupiter Technology`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 45vw, 90vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-soft">{s.blurb}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-soft">
                    {s.included.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-electric" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="orbit-divider" />
                  <p className="text-sm text-slate-soft">{s.timeline}</p>
                  <GhostButton href="/contact" className="mt-4">
                    Get a custom quote
                  </GhostButton>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="border-t border-line bg-white py-24">
        <Wrap>
          <SectionHead eyebrow="How we work" title="From brief to launch" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border-2 border-line bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan font-mono text-sm font-semibold text-white">
                  {step.num}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">{step.blurb}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-midnight py-24">
        <Wrap>
          <SectionHead onDark eyebrow="Post-launch support" title="Every project ships with free support built in" />
          <div className="grid gap-6 md:grid-cols-3">
            {SUPPORT_TIERS.map((tier) => (
              <Card key={tier.project}>
                <div className="font-display text-2xl font-bold text-navy">{tier.months}</div>
                <div className="mt-1 text-sm font-semibold text-electric">{tier.project}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-soft">{tier.note}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/70">
            After your free support window, ongoing help is available through our Support &amp; Maintenance plan — billed monthly, cancel anytime.
          </p>
        </Wrap>
      </section>

      <section className="border-t border-line bg-white py-24">
        <Wrap>
          <Eyebrow>How pricing works</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-navy">
            Every quote is scoped to the actual project — not a price list.
          </h2>
          <p className="mt-5 max-w-xl text-slate-soft">
            Custom software doesn&apos;t fit a fixed menu. Tell us what you&apos;re
            building, and we&apos;ll come back with a clear, fixed-scope quote —
            what&apos;s included, what it costs, and when you&apos;ll have it. No
            hourly surprises.
          </p>
          <PrimaryButton href="/contact" className="mt-7">
            Get a custom quote
          </PrimaryButton>
        </Wrap>
      </section>

      <section className="bg-midnight py-24">
        <Wrap>
          <SectionHead onDark eyebrow="What we build with" title="A modern stack, chosen for reliability" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STACK.map((group) => (
              <div
                key={group.group}
                className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 transition-colors hover:border-white/30 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan text-white">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-cyan">
                  {group.group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="border-t border-line bg-white py-24">
        <Wrap>
          <SectionHead eyebrow="What clients say" title="Real feedback from real projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name}>
                <p className="text-slate-soft leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image src={t.image} alt={`${t.name}, ${t.role}`} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">{t.name}</div>
                    <div className="text-sm text-slate-soft">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-midnight py-24">
        <Wrap className="max-w-3xl">
          <SectionHead onDark eyebrow="Common questions" title="Questions we hear a lot" />
          <div>
            {FAQS.map((f) => (
              <details key={f.q} className="group border-b border-white/15 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-white">
                  {f.q}
                  <span className="ml-4 shrink-0 text-cyan transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Wrap>
      </section>

      <CTABand
        eyebrow="Ready when you are"
        title="Let's talk about your project."
        blurb="No pressure, no sales script — just a straightforward conversation about what you need."
        image="https://images.pexels.com/photos/8112160/pexels-photo-8112160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      >
        <StartProjectButton />
      </CTABand>
    </>
  );
}
