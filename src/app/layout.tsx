import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EnquiryModal from "@/components/EnquiryModal";
import { EnquiryProvider } from "@/components/EnquiryProvider";
import { SITE } from "@/data/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jupitertechnology.tech";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jupiter Technology — Software & Web Development for US Startups & Small Businesses",
    template: "%s — Jupiter Technology",
  },
  description:
    "Jupiter Technology partners with startups and small businesses across the United States to design, build, and ship reliable websites, custom software, and MVPs. No bloated process, no agency overhead — just a senior team that ships.",
  keywords: [
    "web development company",
    "software development agency",
    "custom software development USA",
    "MVP development company",
    "startup web development",
    "small business website design",
    "e-commerce website development",
    "website maintenance and support",
    "fixed-scope software development",
    "remote software development team",
    "Next.js development agency",
    "US web design agency",
  ],
  authors: [{ name: "Jupiter Technology" }],
  creator: "Jupiter Technology",
  publisher: "Jupiter Technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Jupiter Technology",
    title: "Jupiter Technology — Software & Web Development for US Startups & Small Businesses",
    description:
      "Jupiter Technology partners with startups and small businesses across the United States to design, build, and ship reliable websites, custom software, and MVPs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jupiter Technology — Software & Web Development",
    description:
      "Startups and small businesses across the United States partner with us to design, build, and ship reliable digital products.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Jupiter Technology",
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  image: `${SITE_URL}/android-chrome-512x512.png`,
  description:
    "Jupiter Technology partners with startups and small businesses across the United States to design, build, and ship reliable websites, custom software, and MVPs.",
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: "Bowling Green",
    addressRegion: "OH",
    postalCode: "43402",
    addressCountry: "US",
  },
  areaServed: "US",
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HVMCBB3BLP"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HVMCBB3BLP');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-off-white text-slate">
        <EnquiryProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <EnquiryModal />
        </EnquiryProvider>
      </body>
    </html>
  );
}
