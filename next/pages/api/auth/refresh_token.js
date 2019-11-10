import axios from "axios";
import nookies from "nookies";

const refresh_token = async (req, res) => {
  let REFRESH_TOKEN = req.body.refresh_token;
  let refresh_token = "";
  let access_token = "";

  try {
    const response = await axios.post(`${process.env.API_DOMAIN}/oauth/token`, {
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
      client_id: process.env.AUTH_CLIENT_ID,
      client_secret: process.env.AUTH_CLIENT_SECRET,
      scope: ""
    });

    refresh_token = response.data.refresh_token;
    access_token = response.data.access_token;
  } catch (error) {}

  nookies.set({ res }, "refresh_token", refresh_token, { path: "/", httpOnly: true });
  nookies.set({ res }, "access_token", access_token, {});

  return res.status(200).json({ access_token, refresh_token });
};

export default refresh_token;
