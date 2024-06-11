import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
  '/consultation(.*)',
  '/meeting(.*)',
  // '/user(.*)',
])


export default clerkMiddleware((auth, req)=>{
  ['/', '/api/webhooks/clerk']
  if (protectedRoute(req)) {
    auth().protect()
  };
});

// export default authMiddleware({
//   publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe']
// });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};