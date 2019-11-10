# Laravel & nextjs OAuth2 user/pass prototype attempt

This was an attempt at building a OAuth2 user/pass system with nextJS and laravel. The attempt failed because of a failure to find a way to safely refresh tokens after initial page load.


## Features included are

- [x] (Laravel) request access and refresh tokens with username / password
- [x] (Laravel) refresh access token with refresh token
- [ ] (Laravel) revoke access token
- [ ] (Laravel) handle api CRUD operations with access token
- [x] (Nextjs) login from login page
- [ ] (Nextjs) register from register page
- [x] (Nextjs) logout with logout button
- [x] (Nextjs) restrict auth pages (and redirect to login)
- [x] (Nextjs) restrict pages that require user to be logged out (for example login)
- [x] (Nextjs) show auth pages in nav menu
- [x] (Nextjs) store access / refresh tokens in cookies
- [x] (Nextjs) logout by clearing cookies
- [ ] (Nextjs) automatically refresh expired access tokens (PARTIAL SUCCESS. CAN ONLY GET TO WORK ON INITIAL PAGE LOAD.)