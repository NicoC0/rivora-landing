import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Full-Stack Development`,
    short_name: siteConfig.name,
    description:
      "Custom full-stack web development, VPS deployment, and ready-made digital products.",
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#060a12",
    theme_color: "#060a12",
    lang: "en",
    dir: "ltr",
    categories: ["business", "productivity", "developer"],
  };
}
