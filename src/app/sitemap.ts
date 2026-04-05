import type { MetadataRoute } from "next";
import { collections, products } from "@/lib/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thenatelier.com";

  const staticPages = [
    "",
    "/collections",
    "/about",
    "/the-system",
    "/the-stones",
    "/custom",
    "/contact",
    "/faq",
    "/care-guide",
    "/shipping-returns",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const collectionPages = collections.map((c) => ({
    url: `${baseUrl}/collections/${c.handle}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const productPages = products.map((p) => ({
    url: `${baseUrl}/products/${p.handle}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...collectionPages, ...productPages];
}
