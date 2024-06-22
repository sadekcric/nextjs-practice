import { NextResponse } from "next/server";

export const middleware = (request) => {
  return NextResponse.redirect(new URL("/Login", request.url));
};

export const config = {
  matcher: ["/About", "/Services"],
};
