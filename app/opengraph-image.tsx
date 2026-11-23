import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "./content";

export const alt = `${profile.name} — ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public", "profile.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 96px",
          background: "#fafaf9",
          color: "#18181b",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={200} height={200} style={{ borderRadius: 100, objectFit: "cover" }} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 64, fontWeight: 600, letterSpacing: -1 }}>{profile.name}</div>
          <div style={{ fontSize: 30, color: "#71717a" }}>{profile.headline}</div>
          <div style={{ fontSize: 26, color: "#a1a1aa" }}>{profile.location}</div>
        </div>
      </div>
    ),
    size
  );
}
