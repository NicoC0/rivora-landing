import { useTranslations } from "next-intl";
import { ArrowRight, ShoppingCart, RefreshCw } from "lucide-react";
import { productKeys } from "@/lib/config";

export function Products() {
  const t = useTranslations("products");

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="border-t border-card-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">{t("label")}</p>
        <h2 id="products-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{t("subtitle")}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {productKeys.map((key) => (
            <article
              key={key}
              className="card-hover flex flex-col border border-card-border bg-card p-8"
            >
              <h3 className="text-lg font-semibold">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {t(`items.${key}.description`)}
              </p>

              <div className="mt-6 space-y-3 border-t border-card-border pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted">
                    <ShoppingCart className="h-4 w-4" aria-hidden />
                    {t("buyOnce")}
                  </span>
                  <span className="font-semibold">
                    {t(`items.${key}.priceOnce`)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted">
                    <RefreshCw className="h-4 w-4" aria-hidden />
                    {t("monthly")}
                  </span>
                  <span className="font-semibold text-accent-blue">
                    {t(`items.${key}.priceMonthly`)}
                    <span className="text-xs font-normal text-muted">
                      {t("perMonth")}
                    </span>
                  </span>
                </div>
              </div>

              <a
                href="#contact"
                className="btn-primary mt-6 w-full text-center text-xs"
              >
                {t("cta")}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
