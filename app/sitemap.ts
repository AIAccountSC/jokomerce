import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const SITE = "https://jokomerce.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE}/leistungen/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...staticRoutes, ...services];
}
