import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function fetchImage(url: string): Promise<{ body: ArrayBuffer; type: string } | null> {
  const res = await fetch(url, {
    headers: { Accept: "image/*,*/*" },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const type = res.headers.get("content-type") || "image/jpeg";
  const body = await res.arrayBuffer();
  if (body.byteLength < 8000) return null;
  return { body, type };
}

export async function GET(req: NextRequest) {
  const target = req.nextUrl.searchParams.get("url");
  if (!target || !/^https:\/\//i.test(target)) {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  const mshot = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(target)}?w=1280`;
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const shot = await fetchImage(mshot);
    if (shot && shot.type.startsWith("image") && !shot.type.includes("gif")) {
      return new NextResponse(shot.body, {
        headers: {
          "Content-Type": shot.type,
          "Cache-Control": "public, max-age=604800, stale-while-revalidate=86400",
        },
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 1200));
  }

  const thum = `https://image.thum.io/get/width/1280/crop/800/noanimate/${target}`;
  const fallback = await fetchImage(thum);
  if (!fallback) {
    return NextResponse.json({ error: "Preview failed" }, { status: 502 });
  }

  return new NextResponse(fallback.body, {
    headers: {
      "Content-Type": fallback.type,
      "Cache-Control": "public, max-age=604800, stale-while-revalidate=86400",
    },
  });
}
