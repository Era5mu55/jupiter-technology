import { ReactNode } from "react";
import Image from "next/image";
import { Wrap, Eyebrow } from "./ui";

export default function CTABand({
  eyebrow,
  title,
  blurb,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy to-midnight py-24 text-center text-white">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/88 to-midnight/80" />
      <div className="absolute inset-x-0 top-0 z-10 h-1 bg-white/20" />
      <Wrap className="relative z-10">
        <Eyebrow onDark className="justify-center">
          {eyebrow}
        </Eyebrow>
        <h2 className="mt-4 text-3xl font-bold text-white">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">{blurb}</p>
        <div className="mt-8 flex justify-center">{children}</div>
      </Wrap>
    </section>
  );
}
