import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { routing } from "@/i18n/routing";
import { getLocaleUrl } from "@/lib/seo";

const LOCALE_TAGS: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const languageAlternates = Object.fromEntries([
    ["x-default", getLocaleUrl(routing.defaultLocale)],
    ...routing.locales.map((loc) => [LOCALE_TAGS[loc] ?? loc, getLocaleUrl(loc)]),
  ]);

  return routing.locales.map((locale) => ({
    url: getLocaleUrl(locale),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: { languages: languageAlternates },
  }));
}
