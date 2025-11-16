import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.1031exchangeofjacksonville.com";

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services",
    "/service-areas",
    "/property-types",
    "/blog",
  ];

  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}${service.route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locationPages = locationsData.map((location) => ({
    url: `${baseUrl}${location.route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.9,
    })),
    ...servicePages,
    ...locationPages,
  ];
}

