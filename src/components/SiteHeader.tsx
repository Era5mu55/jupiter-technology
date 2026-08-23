"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Wrap } from "./ui";
import { GhostButton, PrimaryButton } from "./Button";
import { useEnquiry } from "./EnquiryProvider";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [navOpen, setNavOpen] = useState(false);
  const { open } = useEnquiry();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <Wrap className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="Jupiter Technology home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.filter((item) => item.href !== "/contact").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate hover:text-electric"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <GhostButton href="/contact" className="hidden md:inline-flex">
            Contact
          </GhostButton>
          <PrimaryButton onClick={open} className="hidden md:inline-flex">
            Start a project
          </PrimaryButton>
          <button
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
              <span className="block h-0.5 w-5 bg-navy" />
            </div>
          </button>
        </div>
      </Wrap>

      {navOpen && (
        <div className="border-t border-line bg-white md:hidden">
          <Wrap className="flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setNavOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate hover:bg-off-white hover:text-electric"
              >
                {item.label}
              </Link>
            ))}
            <PrimaryButton
              onClick={() => {
                setNavOpen(false);
                open();
              }}
              className="mt-2"
            >
              Start a project
            </PrimaryButton>
          </Wrap>
        </div>
      )}
    </header>
  );
}
