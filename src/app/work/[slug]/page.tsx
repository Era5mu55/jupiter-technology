import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Wrap, Eyebrow, Card } from "@/components/ui";
import { GhostButton } from "@/components/Button";
import CaseCard from "@/components/CaseCard";
import StartProjectButton from "@/components/StartProjectButton";
import { CASE_STUDIES, getCaseStudy } from "@/data/work";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study" };

  const keywords = [
    `${study.title} case study`,
    `${study.category} software development`,
    ...study.tags.map((t) => `${t} development`),
    "web development case study",
    "custom software development example",
    "startup MVP case study",
    "Jupiter Technology portfolio",
    "US software development agency",
    "software development company results",
  ];

  return {
    title: `${study.title} — Case Study`,
    description: study.blurb,
    keywords,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.title} — Case Study — Jupiter Technology`,
      description: study.blurb,
      url: `/work/${study.slug}`,
      images: study.images?.[0] ? [{ url: study.images[0] }] : undefined,
    },
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const more = CASE_STUDIES.filter((c) => c.slug !== study.slug).slice(0, 3);

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.blurb,
    about: study.category,
    creator: { "@type": "Organization", name: "Jupiter Technology" },
    ...(study.liveUrl ? { url: study.liveUrl } : {}),
    ...(study.images?.[0] ? { image: study.images[0] } : {}),
    keywords: study.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <PageHero
        eyebrow={
          <>
            <Link href="/work" className="hover:underline">← All work</Link>
            &nbsp;/&nbsp;{study.category}
          </>
        }
        title={study.title}
        lead={study.blurb}
        image="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1600"
      />

      {study.images && study.images.length > 0 && (
        <section className="bg-midnight pt-14">
          <Wrap>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src={study.images[0]}
                alt={`${study.title} — ${study.category} platform built by Jupiter Technology, main screen`}
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority
              />
            </div>
            {study.images.length > 1 && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {study.images.slice(1).map((img, i) => (
                  <div
                    key={img}
                    className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line"
                  >
                    <Image
                      src={img}
                      alt={`${study.title} — ${study.category} platform built by Jupiter Technology, screen ${i + 2}`}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </Wrap>
        </section>
      )}

      <section className="bg-midnight py-24">
        <Wrap>
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <Eyebrow onDark>Challenge</Eyebrow>
              <p className="mt-3 text-white/70">{study.challenge}</p>
              <div className="orbit-divider" />
              <Eyebrow onDark>What we built</Eyebrow>
              <p className="mt-3 text-white/70">{study.built}</p>
              <div className="orbit-divider" />
              <Eyebrow onDark>Outcome</Eyebrow>
              <p className="mt-3 text-white/70">{study.outcome}</p>
            </div>

            <div>
              <Card className="mb-6">
                <h3 className="mb-5 text-lg font-semibold text-navy">Project details</h3>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((t) => (
                    <span key={t} className="rounded-full bg-off-white px-2.5 py-1 text-xs font-medium text-slate-soft">
                      {t}
                    </span>
                  ))}
                </div>
                {study.liveUrl && (
                  <GhostButton href={study.liveUrl} target="_blank" className="mt-5 w-full justify-center">
                    Visit live site ↗
                  </GhostButton>
                )}
              </Card>
              <StartProjectButton className="w-full justify-center">
                Start a project like this
              </StartProjectButton>
            </div>
          </div>
        </Wrap>
      </section>

      <section className="border-t border-line bg-white py-24">
        <Wrap>
          <Eyebrow>More work</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-navy">Other projects worth a look</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((c) => (
              <CaseCard key={c.slug} study={c} showTags={false} />
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}
