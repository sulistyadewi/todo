const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return jwt.sign(payload, "sulis");
};
const verifyToken = (token) => {
  return new Promise(function (resolve, reject) {
    jwt.verify(token, "sulis", (err, decoded) => {
      if (err) {
        reject({ msg: "Invalid Token" });
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = { generateToken, verifyToken };
