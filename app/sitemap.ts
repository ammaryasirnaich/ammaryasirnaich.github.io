import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-06");
  return [
    { url: `${site.url}/`, lastModified },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}/`,
      lastModified,
    })),
  ];
}
