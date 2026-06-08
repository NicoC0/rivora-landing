import { siteConfig } from "@/lib/config";
import { logoSrc } from "@/lib/brand";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: logoSrc,
    apple: logoSrc,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
