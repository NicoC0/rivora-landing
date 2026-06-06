import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "./config";

const LOCALE_TAGS: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
};

export function getLocaleUrl(locale: string) {
  return `${siteConfig.url}/${locale}`;
}

export function buildHreflangAlternates(currentLocale: string) {
  const languages: Record<string, string> = {
    "x-default": getLocaleUrl(routing.defaultLocale),
  };

  for (const locale of routing.locales) {
    languages[LOCALE_TAGS[locale] ?? locale] = getLocaleUrl(locale);
  }

  return {
    canonical: getLocaleUrl(currentLocale),
    languages,
  };
}

export function buildPageMetadata(
  locale: string,
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogTitle?: string;
    ogDescription?: string;
  },
): Metadata {
  const localeTag = LOCALE_TAGS[locale] ?? locale;
  const alternateLocale = routing.locales
    .filter((l) => l !== locale)
    .map((l) => LOCALE_TAGS[l] ?? l);

  const ogTitle = meta.ogTitle ?? meta.title;
  const ogDescription = meta.ogDescription ?? meta.description;

  const verification: Metadata["verification"] = {};
  if (process.env.GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.GOOGLE_SITE_VERIFICATION;
  }
  if (process.env.BING_SITE_VERIFICATION) {
    verification.other = {
      "msvalidate.01": process.env.BING_SITE_VERIFICATION,
    };
  }

  return {
    metadataBase: new URL(siteConfig.url),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords.split(",").map((k) => k.trim()),
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    applicationName: siteConfig.name,
    category: "technology",
    alternates: buildHreflangAlternates(locale),
    openGraph: {
      type: "website",
      locale: localeTag.replace("-", "_"),
      alternateLocale,
      url: getLocaleUrl(locale),
      siteName: siteConfig.name,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: `${getLocaleUrl(locale)}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: ogTitle,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [`${getLocaleUrl(locale)}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
  };
}

export const faqKeys = [
  "services",
  "vps",
  "stack",
  "timeline",
  "products",
  "pricing",
] as const;

export type FaqKey = (typeof faqKeys)[number];
