import { useTranslations } from "next-intl";
import {
  Code2,
  Server,
  Wrench,
  Lightbulb,
  Plug,
  Package,
} from "lucide-react";
import { serviceKeys, type ServiceKey } from "@/lib/config";

const icons: Record<ServiceKey, React.ElementType> = {
  fullstack: Code2,
  deployment: Server,
  maintenance: Wrench,
  consulting: Lightbulb,
  api: Plug,
  products: Package,
};

export function Services() {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">{t("label")}</p>
        <h2 id="services-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-12 grid gap-px bg-card-border md:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, i) => {
            const Icon = icons[key];
            return (
              <article
                key={key}
                className="card-hover group bg-card p-8"
              >
                <span className="text-xs font-mono text-muted">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <Icon className="mt-4 h-6 w-6 text-accent-blue" aria-hidden />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(`items.${key}.description`)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
