import { siteConfig } from "@/lib/config";

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: "Full-stack development & VPS deployment",
    start_url: "/",
    display: "standalone" as const,
    background_color: "#060a12",
    theme_color: "#060a12",
  };
}
