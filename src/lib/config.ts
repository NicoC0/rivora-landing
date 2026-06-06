export const siteConfig = {
  name: "Rivora",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rivora.dev",
  email: process.env.CONTACT_EMAIL ?? "hello@rivora.dev",
  ogImage: "/opengraph-image",
  foundingDate: "2025",
  knowsAbout: [
    "Full-Stack Web Development",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "VPS Deployment",
    "Docker",
    "DevOps",
    "SaaS Development",
    "API Integration",
  ],
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

export const sectionAnchors = [
  "services",
  "portfolio",
  "products",
  "faq",
  "contact",
] as const;
