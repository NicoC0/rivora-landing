import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const runtime = "edge";
export const alt = "Rivora";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OgImage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #060a12 0%, #0d1420 50%, #1a2332 100%)",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.3em",
            color: "#3b82f6",
            marginBottom: 24,
          }}
        >
          RIVORA
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {t("ogTitle")}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#8892a4",
            marginTop: 24,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {t("ogDescription")}
        </div>
      </div>
    ),
    { ...size },
  );
}
