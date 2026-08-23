import PageHero from "@/components/PageHero";
import { Wrap, Eyebrow } from "@/components/ui";
import CTABand from "@/components/CTABand";
import StartProjectButton from "@/components/StartProjectButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jupiter Technology is a remote-first development team working with startups and small businesses across the United States — direct communication, fixed-scope delivery, senior engineers.",
  keywords: [
    "about Jupiter Technology",
    "remote software development team",
    "US-based web development team",
    "senior software engineers for hire",
    "fixed-scope software delivery",
    "startup development partner",
    "small business tech partner",
    "software development company USA",
    "hire a development team",
    "trusted web development agency",
    "software company values",
    "digital product development team",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Jupiter Technology",
    description:
      "A remote-first development team working with startups and small businesses across the United States — direct communication, fixed-scope delivery, senior engineers.",
    url: "/about",
  },
};

const VALUES = [
  {
    title: "Clarity over jargon",
    blurb:
      "We explain what we're building and why, in plain terms — not to sell you, but so you can make good decisions about your own product.",
  },
  {
    title: "Reliability over speed-at-any-cost",
    blurb: "We move fast, but not by cutting corners that come back to bite you after launch.",
  },
  {
    title: "Ownership",
    blurb: "Your code, your data, your product. Nothing about how we build should ever lock you in.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small team that ships real software."
        lead="Jupiter Technology is a remote-first development team working with startups and small businesses across the United States. We've built everything from tourism operations platforms to job marketplaces to fintech-adjacent tools — always with the same approach: understand the business first, then build exactly what it needs."
        image="https://images.pexels.com/photos/3865639/pexels-photo-3865639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
        imagePosition="bottom"
      />

      <section className="bg-midnight py-24">
        <Wrap className="grid gap-16 md:grid-cols-2">
          <div>
            <Eyebrow onDark>How we work</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Scope it clearly. Build it right. Ship it on time.
            </h2>
            <p className="mt-5 text-white/70">
              Every engagement starts with a clear conversation about what
              you&apos;re trying to accomplish — not a sales pitch. From
              there, we scope a fixed plan: what&apos;s being built, what it
              costs, and when you&apos;ll have it. No open-ended hourly
              billing, no scope drift without a conversation first.
            </p>
            <p className="mt-4 text-white/70">
              Once a project starts, you&apos;re talking directly to the
              people building it. That&apos;s deliberate — the fewer layers
              between you and the work, the faster problems get solved and
              the better the final product turns out.
            </p>
          </div>

          <div>
            <Eyebrow onDark>What we value</Eyebrow>
            <div className="mt-5 flex flex-col gap-6">
              {VALUES.map((v) => (
                <div key={v.title}>
                  <h3 className="text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{v.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      <CTABand
        eyebrow="Ready when you are"
        title="Let's talk about your project."
        blurb="No pressure, no sales script — just a straightforward conversation about what you need."
        image="https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      >
        <StartProjectButton />
      </CTABand>
    </>
  );
}
