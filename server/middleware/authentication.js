const { verifyToken } = require("../helper/jwt");
const db = require("../models");
const User = db.User;
console.log(User);

function authentication(req, res) {
  const { token } = req.headers;
  console.log(token);
  let decodedTemp;
  if (!token) {
    throw { name: "authentication_failed" };
  } else {
    verifyToken(token)
      .then((decoded) => {
        decodedTemp = decoded;
        console.log(decodedTemp);
        return User.findOne({
          where: {
            email: decoded.email,
          },
        });
      })
      .then((data) => {
        console.log(data);
        if (!data) {
          throw { name: "authentication_failed" };
        } else {
          req.loggedInUser = decodedTemp;
          next();
        }
      })
      .catch((err) => {
        res.status(500).json({ msg: "Ini dari authentication" });
      });
  }
}

module.exports = authentication;
