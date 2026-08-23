import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/data/work";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jupitertechnology.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE_URL}/work/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...caseStudyPages];
}
