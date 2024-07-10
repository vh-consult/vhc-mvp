import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
  // '/chat(.*)',
  // '/user(.*)',
])


export default clerkMiddleware((auth, req)=>{
  if (protectedRoute(req)) {
    auth().protect()
  };
});


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};