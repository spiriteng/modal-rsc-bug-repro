import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     */
    "/((?!api/|_next/).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  console.log(`path: ${path}`);
  return NextResponse.rewrite(new URL(`/domain${path}`, req.url));
}
