

import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { ROUTE_CONST } from "./app/_constants/routeConstants";
import { doesRoleHaveAccessToURL, Role } from "./app/_utils/session";

export default withAuth(
  async function  middleware(req) {
  if (!req?.nextauth?.token?.accessToken) {
    return NextResponse.redirect(new URL(ROUTE_CONST.LOGIN, req.url));
  }

  // if(req?.nextauth?.token?.accessToken && req.url.includes('/login')) {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  const role = req?.nextauth?.token.role as Role;
  const haveAccess = doesRoleHaveAccessToURL(role, req.nextUrl.pathname);
  if (!haveAccess) {
    // Redirect to dashboard page if user has no access to that particular page
    if(role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", req.url));
    } else {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }
}

)

export const config = { matcher: [
  // "/((?!api|_next|favicon.ico).*)",
  "/dashboard",
  "/admin",
  "/admin/plans",
] }



