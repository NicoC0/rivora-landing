"use client";

import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", key: "services" },
  { href: "#portfolio", key: "portfolio" },
  { href: "#products", key: "products" },
  { href: "#faq", key: "faq" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-card-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-[0.25em] text-foreground">
          RIVORA
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              className="text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:text-foreground"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher />
          <a href="#contact" className="btn-outline py-2 text-xs">
            {t("cta")}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-card-border bg-background px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.map(({ href, key }) => (
              <a
                key={key}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-muted"
              >
                {t(key)}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              {t("cta")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
