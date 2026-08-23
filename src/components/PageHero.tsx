import { ReactNode } from "react";
import Image from "next/image";
import { Wrap, Eyebrow } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imagePosition = "center",
}: {
  eyebrow: ReactNode;
  title: string;
  lead?: string;
  image?: string;
  imagePosition?: "center" | "top" | "bottom";
}) {
  const positionClass =
    imagePosition === "top"
      ? "object-top"
      : imagePosition === "bottom"
        ? "object-bottom"
        : "";
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-midnight py-20 text-white">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className={`object-cover ${positionClass}`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/88 to-midnight/80" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-white/20" />
      <Wrap className="relative z-10">
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            {lead}
          </p>
        )}
      </Wrap>
    </section>
  );
}
