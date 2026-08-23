export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  tags: string[];
  challenge: string;
  built: string;
  outcome: string;
  liveUrl?: string;
  images?: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bushland-adventure-travel",
    title: "Bushland Adventure Travel",
    category: "Tourism & Travel",
    blurb:
      "Full website rebuild and operations platform for a safari tour operator, including an admin dashboard and client portal.",
    tags: ["Next.js", "Cloudflare Workers", "D1", "R2", "Tailwind CSS"],
    liveUrl: "https://www.bushlandsafaris.com",
    images: [
      "/work/gallery/bushland-adventure-travel-1.png",
      "/work/gallery/bushland-adventure-travel-2.png",
      "/work/gallery/bushland-adventure-travel-3.png",
    ],
    challenge:
      "Bushland's existing site was slow, hard to update, and didn't reflect the quality of the trips they run. There was no way for the team to manage safari listings, inquiries, or content without going through a developer for every change.",
    built:
      "A full front-end rebuild with a custom design system, plus a Next.js application backing it — including an admin dashboard for managing safari listings and content, and a client portal groundwork for future booking management. Migrated hosting to Cloudflare's edge network for speed and reliability.",
    outcome:
      "A modern, fast-loading site with a design system built specifically around the operator's brand, and an admin layer that lets the team manage content without developer involvement going forward.",
  },
  {
    slug: "extreme-wilderness",
    title: "Extreme Wilderness",
    category: "Tourism & Travel",
    blurb:
      "A locally-owned safari outfitter's booking site covering Tanzania, Kenya, and Rwanda safaris, Kilimanjaro treks, and Zanzibar beach combos.",
    tags: ["Next.js", "Multi-language"],
    liveUrl: "https://www.theextremewilderness.com/en",
    images: [
      "/work/gallery/extreme-wilderness-1.png",
      "/work/gallery/extreme-wilderness-2.png",
      "/work/gallery/extreme-wilderness-3.png",
    ],
    challenge:
      "A locally-owned safari outfitter needed to win trust with international travelers over larger foreign agencies — communicating tailor-made safari, Kilimanjaro trekking, and Zanzibar packages while proving local expertise and credibility.",
    built:
      "A fast, multi-language site covering safari packages across Tanzania, Kenya, and Rwanda, Kilimanjaro summit expeditions, and Zanzibar beach combinations. Integrated TripAdvisor reviews, a blog with destination guides, monthly migration and Kilimanjaro condition trackers, and WhatsApp-based direct contact for fast inquiry response.",
    outcome:
      "A 4.9 TripAdvisor rating with 200+ verified guest reviews showcased on-site, travelers served across 40+ countries, and an under 2-hour average inquiry response time via WhatsApp integration.",
  },
  {
    slug: "careerlink-africa",
    title: "CareerLink Africa",
    category: "Marketplace",
    blurb:
      "A multi-sided jobs marketplace connecting employers and job seekers, built for scale from day one.",
    tags: ["Next.js", "Supabase", "Cloudflare Workers"],
    liveUrl: "https://careerlinkafrica.com",
    images: [
      "/work/gallery/careerlink-africa-0.png",
      "/work/gallery/careerlink-africa-1.png",
      "/work/gallery/careerlink-africa-2.png",
      "/work/gallery/careerlink-africa-3.png",
    ],
    challenge:
      "African job seekers and employers needed a single trustworthy platform spanning multiple countries and currencies — one that could filter out ghost listings and scams, and handle payments in KES, TZS, NGN, ZAR, RWF, UGX, and USD without confusing conversions.",
    built:
      "A multi-sided marketplace with AI-powered job matching, an AI CV builder that scores resumes out of 100 with actionable feedback, in-app messaging that keeps personal contact details private, and an employer verification process to filter out ghost jobs. Payments run through Stripe and PesaPal for multi-currency support, with Groq (Llama 3.1) powering the AI features and Supabase as the backend. Originally built on Vercel, later migrated to Cloudflare Workers via the OpenNext adapter.",
    outcome:
      "A live platform free for jobseekers across the continent — browsing, applying, messaging employers, and using the AI career coach all cost nothing, with employer verification keeping the marketplace trustworthy.",
  },
  {
    slug: "hireqo",
    title: "Hireqo",
    category: "SaaS Platform",
    blurb:
      "A verified hiring platform for US small businesses — background checks, scheduling, and payroll in one place.",
    tags: ["React", "Node.js", "Stripe"],
    liveUrl: "https://hireqo.com",
    images: [
      "/work/gallery/hireqo-0.png",
      "/work/gallery/hireqo-1.png",
      "/work/gallery/hireqo-2.png",
      "/work/gallery/hireqo-3.png",
    ],
    challenge:
      "US small businesses were losing candidates to slow, fragmented hiring tools — background checks, interview scheduling, and payroll lived in three different platforms. Hireqo needed a single, fast product to unify the entire workflow.",
    built:
      "An end-to-end hiring platform with Stripe-backed payments, an integrated background check API, calendar scheduling, and a payroll summary module — designed around a clean dashboard that keeps hiring managers in flow from posting a job to sending an offer.",
    outcome:
      "Time-to-hire reduced by 60% for early adopters, background check results returned within 24 hours, and the platform deployed and live within 10 weeks.",
  },
  {
    slug: "want2convert",
    title: "want2convert.com",
    category: "Media Tool",
    blurb:
      "A free, browser-based file conversion platform with 50+ tools — files never leave the browser thanks to WebAssembly.",
    tags: ["Next.js", "WebAssembly"],
    liveUrl: "https://want2convert.com",
    images: [
      "/work/gallery/want2convert-1.png",
      "/work/gallery/want2convert-2.png",
      "/work/gallery/want2convert-3.png",
    ],
    challenge:
      "Users needed a fast, privacy-first tool for everyday file conversions — PDFs, images, and developer utilities — without uploading sensitive files to a third-party server or creating an account.",
    built:
      "A web app with 50+ tools powered by WebAssembly, keeping all processing entirely in the browser. Covers PDF merging, splitting, and compression, format conversions (PDF ↔ Word/Excel/JPG/PNG), image resizing, OCR, and developer tools like a JSON formatter, Base64 encoder, and QR code generator.",
    outcome:
      "50+ tools shipped across PDF, image, and developer categories, with zero file uploads — 100% client-side processing — and no account required.",
  },
  {
    slug: "zeember",
    title: "Zeember.com",
    category: "Web Platform",
    blurb:
      "A privacy-first insurance estimation platform with 50+ calculators, all data sourced from the NAIC and calculated locally in the browser.",
    tags: ["Next.js"],
    liveUrl: "https://zeember.com",
    images: [
      "/work/gallery/zeember-1.png",
      "/work/gallery/zeember-2.png",
      "/work/gallery/zeember-3.png",
    ],
    challenge:
      "Consumers wanting to understand insurance costs faced a frustrating choice: share personal data with lead-gen aggregators, or get nothing useful at all. There was no transparent, privacy-first tool that gave real cost breakdowns without demanding a phone number or email.",
    built:
      "A platform with 50+ insurance calculators covering auto, life, home, renters, and health policies. All estimates run client-side using formulas derived from NAIC data, alongside insurance guides and life-event-triggered recommendations.",
    outcome:
      "50+ calculators across 5 insurance categories at launch, zero personal data collected, and no account required for instant results.",
  },
  {
    slug: "tax-and-loans",
    title: "Tax & Loans",
    category: "Fintech",
    blurb:
      "A free financial calculator platform for US & Canadian users — mortgage, income tax, and auto loan estimates, all run in the browser.",
    tags: ["Next.js"],
    liveUrl: "https://taxandloans.com",
    images: [
      "/work/gallery/tax-and-loans-1.png",
      "/work/gallery/tax-and-loans-2.png",
      "/work/gallery/tax-and-loans-3.png",
    ],
    challenge:
      "Homebuyers, employees, and loan applicants needed accurate, no-signup financial calculators using real IRS and CRA formulas — without trusting a third-party server with sensitive financial data.",
    built:
      "A calculator platform covering mortgage payments (full PITI breakdown), federal/state income tax and FICA withholding, and auto loan estimates with sales tax — all math running client-side using the same formulas lenders and tax agencies use, with full workings shown to the user.",
    outcome:
      "Covers both US and Canadian tax and loan scenarios with zero server-side data transmission, formulas sourced from IRS and CRA official publications, and instant results with no account required.",
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
