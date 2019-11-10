import axios from "axios";

export function login(username, password) {
  return axios.post(`${process.env.CLIENT_DOMAIN}/api/auth/login`, { username, password });
}

export async function user(access_token = "") {
  return await axios
    .post(`${process.env.CLIENT_DOMAIN}/api/auth/user`, { access_token })
    .then(response => response.data.user)
    .catch(error => null);
}

export async function refreshToken(refresh_token = "") {
  return axios
    .post(`${process.env.CLIENT_DOMAIN}/api/auth/refresh_token`, { refresh_token })
    .then(response => ({
      refresh_token: response.data.refresh_token,
      access_token: response.data.access_token
    }))
    .catch(error => ({ refresh_token: "", access_token: "" }));
}

export function logout() {
  return axios.post(`/api/auth/logout`);
}

export default {
  login,
  user,
  refreshToken,
  logout
};
