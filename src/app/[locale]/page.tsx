import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

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
      <Contact />
    </>
  );
}
