import { ImageResponse } from "next/og";
import { getVenture, ventures } from "@/data/ventures";

export const alt = "Nx Conglo Venture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// This forces Next.js to generate a static image for every venture ID during build
export function generateStaticParams() {
  return ventures.map((v) => ({ id: v.id }));
}

export default async function Image({ params }: { params: { id: string } }) {
  const venture = getVenture(params.id);

  if (!venture) {
    return new ImageResponse(
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#fff" }}>
        <h1>Not found</h1>
      </div>,
      { ...size }
    );
  }

  // Base URL for fetching the logo/image. You need the absolute URL for ImageResponse.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nxt3r.github.io/nx-conglo";

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
          backgroundColor: "#09090b", // zinc-950 (matches your dark mode)
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
          {/* Nx Logo */}
          <img 
            src={`${baseUrl}/brand/nx-mark.png`} 
            alt="Nx Logo" 
            width="60" 
            height="60" 
            style={{ filter: "invert(1)" }} // Makes the black logo white
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