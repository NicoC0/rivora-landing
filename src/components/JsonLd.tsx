import { siteConfig } from "@/lib/config";

type JsonLdProps = {
  locale: string;
  description: string;
};

export function JsonLd({ locale, description }: JsonLdProps) {
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
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description,
        inLanguage: [locale, locale === "en" ? "es" : "en"],
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.name,
        url: siteConfig.url,
        description,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: "Worldwide",
        serviceType: [
          "Full-Stack Web Development",
          "VPS Deployment",
          "Custom Software Development",
        ],
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
