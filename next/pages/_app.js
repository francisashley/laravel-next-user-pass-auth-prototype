import App from "next/app";
import routeTo from "../utils/routeTo";
import nookies from "nookies";
import auth from "../utils/auth";

export default class extends App {
  static async getInitialProps(appCtx) {
    const ctx = appCtx.ctx;
    let access_token = nookies.get(ctx).access_token;
    let refresh_token = null;
    let appProps = await App.getInitialProps(appCtx);
    let user = null;

    /**
     * Get user if access_token is set
     */
    if (access_token) {
      user = await auth.user(access_token);
    }

    /**
     * Refresh token if access_token is set and no user was found (server side only)
     */
    if (access_token && !user && ctx.req) {
      try {
        await auth.refreshToken(nookies.get(ctx).refresh_token).then(tokens => {
          access_token = tokens.access_token;
          refresh_token = tokens.refresh_token;
        });

        // Second attempt to get user.
        user = await auth.user(access_token);
      } catch (error) {
        access_token = "";
        refresh_token = "";
      }

      nookies.set(ctx, "refresh_token", refresh_token, { httpOnly: true });
      nookies.set(ctx, "access_token", access_token, {});
    }

    // Redirect restricted pages if unauthorised.
    if (user) {
      if (ctx.pathname === "/login") routeTo("/", { res: ctx.res });
    } else {
      if (ctx.pathname === "/profile") routeTo("/login", { res: ctx.res });
    }

    return { ...appProps, user };
  }

  render() {
    const { Component, pageProps, user } = this.props;

    return <Component {...pageProps} user={user} />;
  }
}
