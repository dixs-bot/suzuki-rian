import { siteConfig } from "../data/siteConfig";

export default function sitemap() {
  const baseUrl = "https://suzuki-rian.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}