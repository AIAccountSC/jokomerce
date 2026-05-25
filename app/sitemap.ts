import type { MetadataRoute } from "next";

const SITE = "https://jokomerce.de";

export default function sitemap(): MetadataRoute.Sitemap {
  // v2 is a single onepager; all sections are hash-anchors on /.
  return [
    { url: `${SITE}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}
