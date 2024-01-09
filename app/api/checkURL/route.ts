import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");
  try {
    const response = await fetch(url as string, { method: "HEAD" });
    if (response.ok) {
      return Response.json({ live: true });
    } else {
      return Response.json({ live: false });
    }
  } catch (error) {
    return Response.json({ live: false });
  }
}
