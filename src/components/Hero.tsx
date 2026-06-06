import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroWaves } from "./hero/HeroWaves";
import { HeroSphere } from "./hero/HeroSphere";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="gradient-hero relative min-h-[90vh] overflow-hidden pt-32 pb-16 md:pt-36 md:pb-24">
      <HeroBackground />
      <HeroWaves />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_auto] lg:gap-8">
        <div className="hero-content">
          <p className="section-label hero-fade-up mb-6">{t("tagline")}</p>
          <h1 className="hero-fade-up hero-fade-up--2 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl lg:leading-[1.08]">
            <span className="gradient-text">{t("title")}</span>
          </h1>
          <p className="hero-fade-up hero-fade-up--3 mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {t("subtitle")}
          </p>
          <div className="hero-fade-up hero-fade-up--4 mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary group">
              {t("cta")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="btn-outline">
              {t("secondary")}
            </a>
          </div>

          <div className="hero-fade-up hero-fade-up--5 mt-14 flex items-center gap-6 border-t border-card-border/60 pt-8">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="hero-stack-dot flex h-8 w-8 items-center justify-center rounded-full border border-card-border bg-card text-[10px] font-mono text-accent-blue"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {["01", "02", "03"][i]}
                </div>
              ))}
            </div>
            <p className="text-xs uppercase tracking-widest text-muted">
              Full-stack · VPS · SaaS
            </p>
          </div>
        </div>

        <div className="hero-visual hero-fade-up hero-fade-up--3 relative hidden lg:block">
          <HeroSphere />
          <div className="absolute -right-4 top-1/2 h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-accent-blue/50 to-transparent" />
        </div>
      </div>

      <div className="hero-visual relative mt-8 flex justify-center lg:hidden">
        <HeroSphere />
      </div>
    </section>
  );
}
