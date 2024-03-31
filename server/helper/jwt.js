const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, "sulis");
};

module.exports = { generateToken };
