import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/data/work";

export default function CaseCard({
  study,
  showTags = true,
}: {
  study: CaseStudy;
  showTags?: boolean;
}) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group overflow-hidden rounded-2xl border border-line bg-white"
    >
      <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-navy to-midnight">
        {study.images?.[0] ? (
          <Image
            src={study.images[0]}
            alt={`${study.title} — ${study.category} platform built by Jupiter Technology`}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : (
          <span className="flex h-full items-center justify-center text-sm font-medium text-white/80">
            {study.category}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy">{study.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-soft">{study.blurb}</p>
        {showTags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-off-white px-2.5 py-1 text-xs font-medium text-slate-soft"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <span className="mt-4 inline-block text-sm font-semibold text-electric group-hover:underline">
          View case study →
        </span>
      </div>
    </Link>
  );
}
