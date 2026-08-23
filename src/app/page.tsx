import Link from "next/link";
import Image from "next/image";
import { Wrap, Eyebrow, SectionHead } from "@/components/ui";
import { GhostButton } from "@/components/Button";
import CaseCard from "@/components/CaseCard";
import CTABand from "@/components/CTABand";
import StartProjectButton from "@/components/StartProjectButton";
import { CASE_STUDIES } from "@/data/work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & Web Development for US Startups & Small Businesses",
  description:
    "Jupiter Technology partners with startups and small businesses across the United States to design, build, and ship reliable websites, custom software, and MVPs. No bloated process, no agency overhead — just a senior team that ships.",
  keywords: [
    "web development company USA",
    "software development agency",
    "custom software development",
    "MVP development company",
    "startup software partner",
    "small business website design",
    "e-commerce development company",
    "Next.js development agency",
    "fixed-scope software quote",
    "remote development team USA",
    "hire a web developer",
    "digital product development company",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jupiter Technology — Software & Web Development",
    description:
      "Startups and small businesses across the United States partner with us to design, build, and ship reliable digital products.",
    url: "/",
  },
};

const SERVICES = [
  {
    title: "Web Development",
    blurb: "Marketing sites and business websites built to convert, load fast, and rank.",
    image:
      "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Custom Software & MVPs",
    blurb: "Web apps and platforms built from scratch — from first prototype to production.",
    image:
      "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "E-commerce",
    blurb: "Storefronts and booking systems that make it easy for customers to pay you.",
    image:
      "https://images.pexels.com/photos/7289719/pexels-photo-7289719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Support & Maintenance",
    blurb: "Ongoing updates, monitoring, and fixes after launch — no project left behind.",
    image:
      "https://images.pexels.com/photos/8681899/pexels-photo-8681899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const WHY = [
  {
    num: "01",
    title: "Direct communication",
    blurb: "You talk directly to the people building your product — no account managers relaying messages.",
  },
  {
    num: "02",
    title: "Fixed-scope delivery",
    blurb: "We agree on what's being built and when — and we deliver against that, not an open-ended clock.",
  },
  {
    num: "03",
    title: "Senior team, no bench",
    blurb: "Every project is built by people who've shipped this kind of work before, not junior staff learning on your dime.",
  },
];

export default function HomePage() {
  const featured = CASE_STUDIES.filter((c) =>
    ["bushland-adventure-travel", "careerlink-africa", "tax-and-loans"].includes(c.slug)
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy to-midnight py-24 text-white">
        <Image
          src="https://images.pexels.com/photos/34212916/pexels-photo-34212916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=1800"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/90 to-midnight/85" />
        <Wrap className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow onDark>Software &amp; Web Development</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Software and websites built to launch — not to linger in development.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Jupiter Technology partners with startups and small businesses to
              design, build, and ship reliable digital products. No bloated
              process, no agency overhead — just a senior team that ships.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <StartProjectButton />
              <GhostButton href="/work" onDark>
                See our work
              </GhostButton>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md text-center lg:max-w-none">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/jupiter-logo.png"
                alt="Jupiter Technology"
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1024px) 40vw, 80vw"
              />
            </div>
            <span className="mt-8 block font-display text-3xl font-bold tracking-tight text-white">
              JUPITER
              <span className="mt-1 block text-xs font-medium tracking-[0.3em] text-white/60">
                TECHNOLOGY
              </span>
            </span>
          </div>
        </Wrap>
      </section>

      <div className="border-y border-line bg-white">
        <Wrap className="grid grid-cols-2 gap-y-8 py-12 sm:grid-cols-4 sm:divide-x sm:divide-line">
          {[
            { stat: "7", label: "Platforms shipped" },
            { stat: "4", label: "Industries served" },
            { stat: "US-focused", label: "Remote-first team" },
            { stat: "Fixed-scope", label: "Delivery model" },
          ].map((item) => (
            <div key={item.label} className="px-4 text-center first:px-0 sm:first:pl-0">
              <div className="font-display text-2xl font-bold text-navy md:text-3xl">
                {item.stat}
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-soft">
                {item.label}
              </div>
            </div>
          ))}
        </Wrap>
      </div>

      <section className="bg-midnight py-24">
        <Wrap>
          <SectionHead onDark eyebrow="What we build" title="Four ways we help businesses ship digital products" />
          <div className="grid gap-6 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                href="/services"
                className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-2xl"
              >
                <Image
                  src={s.image}
                  alt={`${s.title} services by Jupiter Technology`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/10" />
                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">{s.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="border-y border-line bg-white py-24">
        <Wrap>
          <SectionHead eyebrow="Selected work" title="Real platforms, shipped for real businesses" />
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((c) => (
              <CaseCard key={c.slug} study={c} />
            ))}
          </div>
          <div className="mt-10">
            <GhostButton href="/work">See all work →</GhostButton>
          </div>
        </Wrap>
      </section>

      <section className="bg-midnight py-24">
        <Wrap>
          <SectionHead onDark eyebrow="Why Jupiter" title="Built for businesses that don't have time to babysit a vendor" />
          <div className="grid gap-6 md:grid-cols-3">
            {WHY.map((w) => (
              <div
                key={w.num}
                className="rounded-2xl border-2 border-line bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan font-mono text-sm font-semibold text-white">
                  {w.num}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">{w.blurb}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <CTABand
        eyebrow="Have a project in mind?"
        title="Let's talk about what you're building."
        blurb="Tell us about your project on WhatsApp or email — we typically reply within a business day."
        image="https://images.pexels.com/photos/8866739/pexels-photo-8866739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      >
        <StartProjectButton />
      </CTABand>
    </>
  );
}
