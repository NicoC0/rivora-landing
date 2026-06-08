"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const projectTypes = ["custom", "deployment", "product", "other"] as const;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-card-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-label mb-3">{t("label")}</p>
            <h2 id="contact-heading" className="text-3xl font-bold tracking-tight md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-muted">{t("subtitle")}</p>

            <div className="mt-8 space-y-2 text-sm text-muted">
              <p>
                <span className="text-foreground">Email:</span>{" "}
                <a
                  href="mailto:hello@rivora.dev"
                  className="text-accent-blue hover:underline"
                >
                  hello@rivora.dev
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-muted">
                {t("name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-muted">
                {t("email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-muted">
                {t("type")}
              </label>
              <select id="type" name="type" required className="input-field">
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {t(`types.${type}`)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted">
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === "sending" ? t("sending") : t("submit")}
              <Send className="h-4 w-4" />
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle className="h-4 w-4" />
                {t("success")}
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" />
                {t("error")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
