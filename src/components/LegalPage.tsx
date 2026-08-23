import { ReactNode } from "react";
import PageHero from "./PageHero";
import { Wrap } from "./ui";

export type LegalSection = {
  heading?: string;
  body: ReactNode;
};

const cardClass =
  "rounded-2xl border border-white/15 bg-white/[0.03] p-6 transition-colors hover:border-white/30 hover:bg-white/[0.06]";

export default function LegalPage({
  title,
  lead,
  image,
  intro,
  sections,
}: {
  title: string;
  lead: string;
  image: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lead={lead} image={image} />
      <section className="bg-midnight pt-10 pb-24">
        <Wrap className="max-w-3xl">
          <p className="mb-8 font-mono text-sm text-white/50">Last updated: August 2026</p>
          <div className="space-y-5">
            <div className={`${cardClass} text-white/70`}>{intro}</div>
            {sections.map((s, i) => (
              <div key={i} className={cardClass}>
                {s.heading && <h2 className="mb-3 text-xl font-semibold text-white">{s.heading}</h2>}
                <div className="space-y-2 text-white/70 [&_li]:mt-1 [&_ul]:list-disc [&_ul]:pl-6">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}
