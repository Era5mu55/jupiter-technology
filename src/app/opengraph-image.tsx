import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Jupiter Technology — Software & Web Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/android-chrome-512x512.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A1330 0%, #152150 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={180} height={180} alt="" />
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1,
            display: "flex",
          }}
        >
          JUPITER TECHNOLOGY
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 30,
            color: "#9db3e8",
            display: "flex",
          }}
        >
          Software and websites built to launch
        </div>
      </div>
    ),
    { ...size },
  );
}
