import Router from "next/router";

export default function routeTo(destination, { res, status = 302 } = {}) {
  if (res) {
    res.writeHead(status, { Location: destination });
    res.end();
  } else {
    Router.push(destination);
  }
}
