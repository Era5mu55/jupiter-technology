import Image from "next/image";
import Link from "next/link";
import { Wrap } from "./ui";
import { SITE } from "@/data/site";
import { FacebookIcon } from "./icons";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy text-white/70">
      <Wrap className="grid gap-10 py-16 text-center md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10 md:text-left">
        <div className="md:pr-10">
          <div className="inline-flex items-center gap-2.5 text-left">
            <div className="inline-flex items-center justify-center rounded-lg bg-white p-2">
              <Image
                src="/android-chrome-512x512.png"
                alt="Jupiter Technology"
                width={512}
                height={512}
                className="h-14 w-[5.5rem] object-fill"
              />
            </div>
            <span className="font-display font-bold leading-none text-white tracking-tight">
              JUPITER
              <small className="block text-[0.55rem] font-medium tracking-[0.18em] text-white/60">
                TECHNOLOGY
              </small>
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed">
            Software and web development for startups and small businesses
            across the United States.
          </p>
        </div>
        <div className="md:px-10">
          <h4 className="text-sm font-semibold text-white">Site</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/work" className="hover:text-white">Work</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div className="md:px-10">
          <h4 className="text-sm font-semibold text-white">Get in touch</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
          <address className="mt-3 not-italic text-sm leading-relaxed">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </address>
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Jupiter Technology on Facebook"
            className="mt-4 inline-flex items-center gap-2 text-sm hover:text-white"
          >
            <FacebookIcon className="h-4 w-4" />
            Facebook
          </a>
        </div>
        <div className="md:pl-10">
          <h4 className="text-sm font-semibold text-white">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </Wrap>
      <div className="border-t border-white/10">
        <Wrap className="flex flex-col items-center gap-2 py-6 text-center text-xs text-white/50 md:flex-row md:items-center md:justify-between md:text-left">
          <span>© {new Date().getFullYear()} Jupiter Technology. All rights reserved.</span>
          <span>Remote-first · Serving clients across the United States</span>
        </Wrap>
      </div>
    </footer>
  );
}
