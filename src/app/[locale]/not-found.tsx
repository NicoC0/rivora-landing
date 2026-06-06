import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("nav");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-muted">404</h1>
      <p className="mt-4 text-lg text-muted">Page not found</p>
      <Link href="/" className="btn-primary mt-8">
        {t("cta")}
      </Link>
    </div>
  );
}
