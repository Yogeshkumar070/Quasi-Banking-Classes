import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose"; // The Edge-compatible JWT library

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("qbc_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    // 'jose' requires your secret to be encoded into a Uint8Array
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

    // Verify the token
    await jwtVerify(token, secret);

    return NextResponse.next();

  } catch (err) {
    console.error("Middleware Auth Error:", err);
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};