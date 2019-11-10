import React from "react";
import Link from "../components/ActiveLink";
import { withRouter } from "next/router";
import auth from "../utils/auth";
import Router from "next/router";
import classnames from "classnames";
import LogOutLink from "../components/LogOutLink";

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
];

const Nav = props => {
  const user = props.user;

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {user && (
          <li>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
        )}
        {user && (
          <li>
            <LogOutLink>Log out</LogOutLink>
          </li>
        )}
        {!user && (
          <li>
            <Link href="/login">
              <a>Log in</a>
            </Link>
          </li>
        )}
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: flex-end;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
      `}</style>
    </nav>
  );
};

Nav.defaultProps = {
  user: false
};

export default withRouter(Nav);
