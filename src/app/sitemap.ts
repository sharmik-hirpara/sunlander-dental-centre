import type { MetadataRoute } from "next";
import { services, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/contact", "/services", ...services.map((service) => `/services/${service.slug}`)];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
