import nookies from "nookies";

const logout = (req, res) => {
  nookies.set({ res }, "access_token", "", { path: "/" });
  return res.status(200).end();
};

export default logout;
