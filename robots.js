import { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.mitrayexim.com/sitemap.xml",
    host: "https://www.mitrayexim.com",
  };
}
