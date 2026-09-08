import { ImageResponse } from "next/og";

export const alt = "HastRekhaAI – AI Palm Reading & Vedic Astrology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "linear-gradient(160deg, #fbf7ef 0%, #f6ecd8 100%)",
        color: "#1c1410",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          ह
        </div>
        <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -1 }}>HastRekhaAI</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c2410c",
            fontFamily: "sans-serif",
          }}
        >
          Hastrekha Vigyan · Vedic Astrology
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>
          Read the lines of your palm, in Hindi and English.
        </div>
        <div style={{ fontSize: 28, color: "#4a3a2c", fontFamily: "sans-serif", maxWidth: 900 }}>
          AI-assisted palm analysis, twelve rashis, and guides rooted in Indian palmistry tradition.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          color: "#6b5a49",
          fontFamily: "sans-serif",
          borderTop: "2px solid #e8d9bf",
          paddingTop: 24,
        }}
      >
        <span>hastrekhaa.com</span>
        <span>हस्तरेखा विज्ञान · ज्योतिष</span>
      </div>
    </div>,
    { ...size },
  );
}
