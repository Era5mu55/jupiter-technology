import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/android-chrome-512x512.png"
        alt="Jupiter Technology"
        width={512}
        height={512}
        priority
        className="h-14 w-[5.5rem] object-fill"
      />
      <span className="font-display font-bold text-navy tracking-tight leading-none">
        JUPITER
        <small className="block text-[0.55rem] font-medium tracking-[0.18em] text-slate-soft">
          TECHNOLOGY
        </small>
      </span>
    </span>
  );
}
