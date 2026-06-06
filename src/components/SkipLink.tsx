import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("nav");

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent-orange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      {t("skipToContent")}
    </a>
  );
}
