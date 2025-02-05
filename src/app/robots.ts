import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://dougstractorworks.com"
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/gallery", "/book"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
