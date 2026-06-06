import { useTranslations } from "next-intl";
import { Lock } from "lucide-react";
import { portfolioKeys } from "@/lib/config";

const gradients = [
  "from-blue-600/30 to-blue-900/10",
  "from-indigo-600/30 to-indigo-900/10",
  "from-cyan-600/30 to-cyan-900/10",
  "from-violet-600/30 to-violet-900/10",
];

export function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <section id="portfolio" className="border-t border-card-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">{t("label")}</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{t("subtitle")}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolioKeys.map((key, i) => (
            <article
              key={key}
              className="card-hover group overflow-hidden border border-card-border bg-card"
            >
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${gradients[i % gradients.length]}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-blue/30" />
                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-blue/15" />
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-background/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm">
                  <Lock className="h-3 w-3" aria-hidden />
                  {t("nda")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`items.${key}.description`)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(t.raw(`items.${key}.tags`) as string[]).map((tag) => (
                    <span
                      key={tag}
                      className="border border-card-border px-2 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
