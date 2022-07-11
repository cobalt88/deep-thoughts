const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "secret";
const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

module.exports = {
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiresIn });
  },
};
