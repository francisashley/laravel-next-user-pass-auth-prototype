import axios from "axios";
import nookies from "nookies";

const login = async (req, res) => {
  const { username, password } = await req.body;

  try {
    const response = await axios.post(`${process.env.API_DOMAIN}/oauth/token`, {
      username,
      password,
      grant_type: "password",
      client_id: process.env.AUTH_CLIENT_ID,
      client_secret: process.env.AUTH_CLIENT_SECRET
    });

    const { access_token, refresh_token, expires_in } = response.data;

    nookies.set({ res }, "access_token", access_token, { path: "/" });
    nookies.set({ res }, "refresh_token", refresh_token, { path: "/", httpOnly: true });

    return res.status(200).json({ access_token });
  } catch (error) {
    const status = error.response.status === 404 ? 503 : error.response.status;
    return error.response.status === 404
      ? res.status(status).end()
      : res.status(status).json(error.response.data);
  }
};

export default login;
