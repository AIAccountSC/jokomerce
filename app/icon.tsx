import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const runtime = "edge";

export default function Icon() {
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
          fontSize: 20,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          position: "relative",
        }}
      >
        Jk
        <span
          style={{
            position: "absolute",
            right: 4,
            top: 4,
            width: 6,
            height: 6,
            background: "#E8B900",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    size,
  );
}
