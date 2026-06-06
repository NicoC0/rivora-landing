import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rivora — Full-Stack Development & VPS Deployment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          background: "linear-gradient(135deg, #060a12 0%, #0d1420 50%, #1a2332 100%)",
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
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: 800,
          }}
        >
          Full-Stack Development & VPS Deployment
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#8892a4",
            marginTop: 24,
          }}
        >
          Build. Deploy. Scale.
        </div>
      </div>
    ),
    { ...size },
  );
}
