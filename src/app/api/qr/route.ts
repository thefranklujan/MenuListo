export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import QRCode from "qrcode";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    const size = parseInt(searchParams.get("size") || "400", 10);

    if (!url) {
      return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
    }

    const qrBuffer = await QRCode.toBuffer(url, {
      width: size,
      margin: 2,
      color: {
        dark: "#1C1917",
        light: "#FFFFFF",
      },
      errorCorrectionLevel: "H",
    });

    return new NextResponse(new Uint8Array(qrBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate QR code" }, { status: 500 });
  }
}
