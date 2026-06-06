import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Products } from "@/components/Products";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return buildPageMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    ogTitle: t("ogTitle"),
    ogDescription: t("ogDescription"),
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Products />
      <FAQ />
      <Contact />
    </>
  );
}
