import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card/30 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
        <div>
          <span className="font-bold tracking-[0.2em] text-foreground">RIVORA</span>
          <p className="mt-1">{t("tagline")}</p>
        </div>
        <p>
          © {year} Rivora. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
