const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  env: {
    API_DOMAIN: process.env.API_DOMAIN,
    AUTH_CLIENT_ID: process.env.AUTH_CLIENT_ID,
    AUTH_CLIENT_SECRET: process.env.AUTH_CLIENT_SECRET,
    CLIENT_DOMAIN: process.env.CLIENT_DOMAIN
  }
};
