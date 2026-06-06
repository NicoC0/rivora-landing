import { getTranslations } from "next-intl/server";
import {
  siteConfig,
  serviceKeys,
  productKeys,
  portfolioKeys,
} from "@/lib/config";
import { faqKeys, getLocaleUrl } from "@/lib/seo";

type JsonLdProps = {
  locale: string;
};

export async function JsonLd({ locale }: JsonLdProps) {
  const tMeta = await getTranslations({ locale, namespace: "metadata" });
  const tFaq = await getTranslations({ locale, namespace: "faq" });
  const tServices = await getTranslations({ locale, namespace: "services" });
  const tProducts = await getTranslations({ locale, namespace: "products" });
  const tPortfolio = await getTranslations({ locale, namespace: "portfolio" });

  const pageUrl = getLocaleUrl(locale);
  const description = tMeta("description");

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        description,
        foundingDate: siteConfig.foundingDate,
        knowsAbout: siteConfig.knowsAbout,
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description,
        inLanguage: ["en-US", "es-ES"],
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: tMeta("title"),
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: locale === "es" ? "es-ES" : "en-US",
        breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteConfig.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.name,
        url: pageUrl,
        description,
        email: siteConfig.email,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "Place", name: "Worldwide" },
        serviceType: siteConfig.knowsAbout,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: tServices("title"),
          itemListElement: serviceKeys.map((key, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: tServices(`items.${key}.title`),
              description: tServices(`items.${key}.description`),
              provider: { "@id": `${siteConfig.url}/#organization` },
            },
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#portfolio`,
        name: tPortfolio("title"),
        description: tPortfolio("subtitle"),
        numberOfItems: portfolioKeys.length,
        itemListElement: portfolioKeys.map((key, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: tPortfolio(`items.${key}.title`),
          description: tPortfolio(`items.${key}.description`),
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}/#products`,
        name: tProducts("title"),
        description: tProducts("subtitle"),
        numberOfItems: productKeys.length,
        itemListElement: productKeys.map((key, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: tProducts(`items.${key}.title`),
            description: tProducts(`items.${key}.description`),
            brand: { "@type": "Brand", name: siteConfig.name },
            offers: [
              {
                "@type": "Offer",
                price: tProducts(`items.${key}.priceOnce`).replace(/[^0-9.]/g, ""),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: `${pageUrl}#products`,
              },
            ],
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: faqKeys.map((key) => ({
          "@type": "Question",
          name: tFaq(`items.${key}.question`),
          acceptedAnswer: {
            "@type": "Answer",
            text: tFaq(`items.${key}.answer`),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
