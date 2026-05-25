import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const runtime = "edge";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 110,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          position: "relative",
        }}
      >
        Jk
        <span
          style={{
            position: "absolute",
            right: 28,
            top: 28,
            width: 28,
            height: 28,
            background: "#E8B900",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    size,
  );
}
