import { useTranslations } from "next-intl";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroWaves } from "./hero/HeroWaves";
import { HeroContent } from "./hero/HeroContent";
import { HeroBrowserMockup } from "./hero/HeroBrowserMockup";
import { TechStrip } from "./TechStrip";

export function Hero() {
  const t = useTranslations("hero");
  const tTech = useTranslations("techStrip");

  return (
    <>
      <section className="gradient-hero relative min-h-[92vh] overflow-hidden pt-32 pb-8 md:pt-36 md:pb-12">
        <HeroBackground />
        <HeroWaves />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-12">
          <HeroContent
            tagline={t("tagline")}
            title={t("title")}
            subtitle={t("subtitle")}
            cta={t("cta")}
            secondary={t("secondary")}
            pills={t("pills")}
            builtBy={t("builtBy")}
          />
          <div className="flex justify-center lg:justify-end">
            <HeroBrowserMockup />
          </div>
        </div>
      </section>

      <TechStrip label={tTech("label")} />
    </>
  );
}
