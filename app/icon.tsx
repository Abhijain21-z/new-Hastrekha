import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
        borderRadius: 96,
        color: "#1c1410",
        fontFamily: "Georgia, serif",
        fontSize: 300,
        fontWeight: 700,
        letterSpacing: -12,
      }}
    >
      ह
    </div>,
    { ...size },
  );
}
