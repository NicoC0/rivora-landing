import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="gradient-hero relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/3 h-px w-full -translate-x-1/2 glow-line" />
        <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-accent-blue/20 blur-[100px]" />
        <div className="absolute right-0 top-1/4 h-48 w-48 rounded-full bg-accent-blue/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="section-label mb-6">{t("tagline")}</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
          <span className="gradient-text">{t("title")}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {t("subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="btn-primary">
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#portfolio" className="btn-outline">
            {t("secondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
