export const siteConfig = {
  name: "Rivora",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rivora.dev",
  email: process.env.CONTACT_EMAIL ?? "hello@rivora.dev",
  ogImage: "/opengraph-image",
} as const;

export const portfolioKeys = [
  "erp",
  "booking",
  "dashboard",
  "crm",
] as const;

export const productKeys = ["starter", "admin", "saas"] as const;

export const serviceKeys = [
  "fullstack",
  "deployment",
  "maintenance",
  "consulting",
  "api",
  "products",
] as const;

export type PortfolioKey = (typeof portfolioKeys)[number];
export type ProductKey = (typeof productKeys)[number];
export type ServiceKey = (typeof serviceKeys)[number];
