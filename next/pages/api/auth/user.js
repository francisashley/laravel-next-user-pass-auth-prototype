import axios from "axios";

const handler = async (req, res) => {
  let access_token = req.body.access_token;
  let user = null;

  if (access_token) {
    try {
      const url = `${process.env.API_DOMAIN}/api/user`;
      const headers = { authorization: "Bearer " + access_token };
      const response = await axios.get(url, { headers });
      user = { name: response.data.name, email: response.data.email };
    } catch (error) {
      user = null;
    }
  }

  return res.status(200).json({ user });
};

export default handler;
