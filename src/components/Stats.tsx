import { useTranslations } from "next-intl";

export function Stats() {
  const t = useTranslations("stats");

  const items = [
    { value: "20+", label: t("projects"), desc: t("projectsDesc") },
    { value: "100%", label: t("stack"), desc: t("stackDesc") },
    { value: "VPS", label: t("deploy"), desc: t("deployDesc") },
  ];

  return (
    <section className="border-y border-card-border bg-card/50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {t("title")}
        </p>
        <div className="grid gap-10 md:grid-cols-3">
          {items.map(({ value, label, desc }) => (
            <div key={label}>
              <div className="flex items-baseline gap-3">
                <span className="inline-block h-2 w-2 bg-accent-orange" aria-hidden />
                <span className="text-4xl font-bold tracking-tight md:text-5xl">
                  {value}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider">
                {label}
              </p>
              <p className="mt-1 text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
