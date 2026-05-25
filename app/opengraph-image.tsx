import { ImageResponse } from "next/og";

export const alt =
  "Jokomerce — Joachim Heidel · Marketplace & D2C Wachstum mit P&L-Verantwortung";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "system-ui, sans-serif",
          color: "#0A0A0A",
        }}
      >
        {/* Top row — brand + accent dot */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Jokomerce
          </span>
          <span
            style={{
              width: 14,
              height: 14,
              background: "#E8B900",
              borderRadius: "50%",
            }}
          />
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 1000,
          }}
        >
          <span
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: "#1F7A3F",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Marketplace Operator · End-to-End
          </span>
          <span
            style={{
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
              color: "#0A0A0A",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Marketplace & D2C growth — with real{" "}
            <span style={{ color: "#E8B900", marginLeft: 16 }}>P&amp;L ownership.</span>
          </span>
        </div>

        {/* Bottom row — author + meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #DDDDDD",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em" }}>
              Joachim Heidel
            </span>
            <span style={{ fontSize: 18, color: "#444444" }}>
              Head of Marketplace · Interim CMO · DE / US
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              color: "#898987",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            jokomerce.de
          </span>
        </div>
      </div>
    ),
    size,
  );
}
