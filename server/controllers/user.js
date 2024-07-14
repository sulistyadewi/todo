const db = require("../models");
const User = db.User;
const { comparePass } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");

class Controller {
  static register(req, res, next) {
    const { email, password } = req.body;
    const object = { email, password };
    User.create(object)
      .then((data) => {
        res
          .status(201)
          .json({ msg: "register success", id: data.id, email: data.email });
      })
      .catch((err) => {
        next(err);
      });
  }
  static login(req, res, next) {
    const { email, password } = req.body;
    // const object = { email, password };
    User.findOne({ where: { email } })
      .then((data) => {
        if (!data) {
          const err = new Error("invalid email or password");
          err.name = "LOGIN_FAILED";
          throw err;
        } else {
          let comparePassword = comparePass(password, data.password);
          if (!comparePassword) {
            const err = new Error("invalid email or password");
            err.name = "LOGIN_FAILED";
            throw err;
          } else {
            let payload = {
              id: data.id,
              email: data.email,
            };
            let token = generateToken(payload);
            res.status(200).json({ token });
          }
        }
      })
      .catch((err) => {
        console.log(err, "err login");
        // res.status(500).json({ msg: "internal server error" });
        next(err);
      });
  }
}

module.exports = Controller;
