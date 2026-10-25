import { ImageResponse } from "next/og";
import { getVenture, ventures } from "@/data/ventures";
import fs from "fs";
import path from "path";

export const alt = "Nx Conglo Venture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return ventures.map((v) => ({ id: v.id }));
}

export default async function Image({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params;
  const venture = getVenture(id);

  if (!venture) {
    return new ImageResponse(
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#fff" }}>
        <h1>Not found</h1>
      </div>,
      { ...size }
    );
  }

  const logoPath = path.join(process.cwd(), "public/brand/nx-mark.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#09090b",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
          <img 
            src={logoBase64} 
            alt="Nx Logo" 
            width="60" 
            height="60" 
            style={{ filter: "invert(1)" }} 
          />
          <span style={{ color: "#a1a1aa", fontSize: "30px", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Nx Conglo
          </span>
        </div>

        <h1
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            color: "white",
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          {venture.name}
        </h1>
        
        <p
          style={{
            fontSize: "36px",
            color: "#a1a1aa",
            margin: 0,
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          {venture.tagline}
        </p>

        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span style={{ color: "#a1a1aa", fontSize: "24px" }}>
            nxt3r.github.io/nx-conglo
          </span>
          {venture.status === "live" && (
            <span style={{ color: "#34d399", fontSize: "24px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ display: "flex", width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#34d399" }} />
              Live
            </span>
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}