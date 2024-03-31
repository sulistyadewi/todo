const db = require("../models");
const User = db.User;

class Controller {
  static register(req, res) {
    const { email, password } = req.body;
    const object = { email, password };
    User.create(object)
      .then((data) => {
        res
          .status(201)
          .json({ msg: "register success", id: data.id, email: data.email });
      })
      .catch((err) => {
        res.status(500).json({ msg: "internal server error" });
      });
  }
  static login(req, res) {
    const { email, password } = req.body;
    const object = { email, password };
    User.create(object)
      .then((data) => {
        res
          .status(201)
          .json({ msg: "login success", id: data.id, email: data.email });
      })
      .catch((err) => {
        res.status(500).json({ msg: "internal server error" });
      });
  }
}

module.exports = Controller;
