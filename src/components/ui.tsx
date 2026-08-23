import { ReactNode } from "react";

export function Wrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`eyebrow ${onDark ? "on-dark" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  onDark?: boolean;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2 className={`mt-3 text-3xl font-bold ${onDark ? "text-white" : "text-navy"}`}>{title}</h2>
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-7 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
