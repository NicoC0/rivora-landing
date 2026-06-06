import { useTranslations } from "next-intl";
import { faqKeys } from "@/lib/seo";

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-card-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label mb-3">{t("label")}</p>
        <h2 id="faq-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-muted">{t("subtitle")}</p>

        <dl className="mt-12 divide-y divide-card-border border-y border-card-border">
          {faqKeys.map((key) => (
            <div key={key} className="py-6">
              <dt className="text-base font-semibold text-foreground">
                {t(`items.${key}.question`)}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted">
                {t(`items.${key}.answer`)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
