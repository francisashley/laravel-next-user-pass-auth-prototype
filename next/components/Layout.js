import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";

const Layout = props => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      {props.title && <title>{props.title}</title>}
    </Head>

    <Nav user={props.user} />

    <div className="content">{props.children}</div>

    <style jsx>{`
      .content {
        width: 100%;
        color: #333;
      }
      :global(a) {
        color: #067df7;
        text-decoration: none;
      }
      :global(a:hover) {
        text-decoration: underline;
      }
      :global(a.active) {
        color: #333;
      }
    `}</style>
  </div>
);

Layout.defaultProps = {
  user: "",
  online: true,
  title: ""
};

export default Layout;
