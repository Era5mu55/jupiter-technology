import PageHero from "@/components/PageHero";
import { Wrap, Eyebrow } from "@/components/ui";
import CaseCard from "@/components/CaseCard";
import CTABand from "@/components/CTABand";
import StartProjectButton from "@/components/StartProjectButton";
import { CASE_STUDIES } from "@/data/work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Seven real platforms across tourism, jobs marketplaces, hiring, media tools, insurance, and fintech-adjacent products — see how Jupiter Technology builds for different industries.",
  keywords: [
    "web development portfolio",
    "software development case studies",
    "custom software examples",
    "startup MVP examples",
    "jobs marketplace development",
    "travel booking website development",
    "fintech website development",
    "SaaS platform development",
    "web app development projects",
    "software agency portfolio USA",
    "e-commerce platform examples",
    "React Native app examples",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Jupiter Technology",
    description:
      "Seven real platforms across tourism, jobs marketplaces, hiring, media tools, insurance, and fintech-adjacent products.",
    url: "/work",
  },
};

const CATEGORY_COUNTS = Array.from(
  CASE_STUDIES.reduce((counts, c) => {
    counts.set(c.category, (counts.get(c.category) ?? 0) + 1);
    return counts;
  }, new Map<string, number>()),
).map(([category, count]) => ({ category, count }));

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Platforms we've designed, built, and shipped."
        lead="Seven projects across tourism, marketplaces, media tools, and fintech-adjacent products — a look at how we approach different kinds of problems."
        image="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      />

      <section className="bg-midnight py-24">
        <Wrap className="grid gap-16 md:grid-cols-2">
          <div>
            <Eyebrow onDark>How we approach it</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Different businesses, the same disciplined approach.
            </h2>
            <p className="mt-5 text-white/70">
              Every project on this page started the same way: a clear
              conversation about what the business actually needed, a scoped
              plan before any code was written, and direct communication the
              whole way through. No account managers relaying messages, no
              scope drift without a conversation first.
            </p>
            <p className="mt-4 text-white/70">
              That discipline is why the work below spans tourism operators,
              a jobs marketplace, a hiring platform, and privacy-first
              consumer tools — different industries, same fixed-scope
              delivery.
            </p>
          </div>

          <div>
            <Eyebrow onDark>Industries covered</Eyebrow>
            <div className="mt-5 flex flex-col gap-4">
              {CATEGORY_COUNTS.map((c) => (
                <div
                  key={c.category}
                  className="flex items-center justify-between border-b border-white/15 pb-4"
                >
                  <span className="font-semibold text-white">{c.category}</span>
                  <span className="font-mono text-sm text-white/60">
                    {c.count} {c.count === 1 ? "project" : "projects"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      <section className="bg-midnight pb-24">
        <Wrap>
          <div className="grid gap-6 md:grid-cols-3">
            {CASE_STUDIES.map((c) => (
              <CaseCard key={c.slug} study={c} />
            ))}
          </div>
        </Wrap>
      </section>

      <CTABand
        eyebrow="Your project could be next"
        title="Tell us what you're building."
        blurb="We'll come back with a clear, fixed-scope quote — no pressure, no obligation."
        image="https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      >
        <StartProjectButton />
      </CTABand>
    </>
  );
}
