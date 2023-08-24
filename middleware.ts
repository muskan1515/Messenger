import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = { 
  matcher: [
    "/conversations/:path*",
    "/users/:path*",
  ]
};

// import { withAuth } from 'next-auth/middleware';

// export default withAuth({
//   pages: {
//     signIn: '/',
//     signOut: '/signout', // Custom sign-out page URL
//     error: '/error', // Custom error page URL
//     verifyRequest: '/verify-request', // Custom email verification page URL
//   },
//   // ... other configuration options ...
// });