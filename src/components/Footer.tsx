import { useTranslations } from "next-intl";
import { sectionAnchors } from "@/lib/config";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card/30 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <nav aria-label={t("navLabel")} className="mb-8 flex flex-wrap gap-x-6 gap-y-2">
          {sectionAnchors.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:text-foreground"
            >
              {tNav(key)}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
          <div>
            <span className="font-bold tracking-[0.2em] text-foreground">RIVORA</span>
            <p className="mt-1">{t("tagline")}</p>
          </div>
          <p>
            © {year} Rivora. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
