import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/site", "/api/uploadthing"],
  async beforeAuth(auth, req) {},
  async afterAuth(auth, req) {
    const url = req?.nextUrl;
    const searchParams = url.searchParams.toString();
    const hostName = req?.headers;
    const urlWithSearchParams = `${url.pathname}${
      searchParams.length > 0 ? `${searchParams}` : ``
    }`;

    const customSubDomain = hostName
      .get("host")
      ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
      .filter(Boolean)[0];

    // if subDomain exists
    if (customSubDomain) {
      return NextResponse.rewrite(
        new URL(`/${customSubDomain}${urlWithSearchParams}`,req.url)
      );
    }
    // if pathname = signin
    if (url.pathname === "sign-in" || url.pathname === "sign-up") {
      return NextResponse.redirect(new URL(`/agency/sign-in`, req.url));
    }
    // if they are trying to acccess the site
    if(url.pathname === "/" || url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN){
         return NextResponse.rewrite(new URL(`/site`,req.url))
    }
    // if they are trying to access their agency account 
    if(url.pathname.startsWith("/agency") || url.pathname.startsWith("/subaccount")){
      return NextResponse.rewrite(
        new URL(`${urlWithSearchParams}`,req.url)
      )
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
