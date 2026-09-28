import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card shown when the link is shared on LinkedIn, Messenger or Slack.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", width: "100%", height: "100%", padding: "72px 80px", background: "#0E1621" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 30 }}>
          <div style={{ width: 52, height: 52, background: "#C8F031" }} />
          <div style={{ fontSize: 26, color: "#C8F031", letterSpacing: 5 }}>AIRCON & ELECTRICAL · 24/7</div>
        </div>
        <div style={{ fontSize: 96, fontWeight: 800, color: "#FFFFFF", letterSpacing: -3, lineHeight: 1.05, maxWidth: 1000 }}>Cool again by Thursday. Guaranteed in writing.</div>
        <div style={{ marginTop: 26, fontSize: 32, color: "#B9C6D1" }}>Fixed prices agreed before we start · {SITE.phone.display}</div>
      </div>
    ),
    size,
  );
}
