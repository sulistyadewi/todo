const db = require("../models");
const Todo = db.Todo;

class Controller {
  static create(req, res) {
    const { name, desc, status, due_date } = req.body;
    const UserId = req.loggedInUser.id;
    // const object = { name, desc, status: false, due_date, UserId };
    Todo.create(name, desc, status, due_date, UserId)
      .then((data) => {
        res.status(201).json({ data });
        console.log(data);
      })
      .catch((err) => {
        res.status(500).json({ msg: "Internal Server Error" });
      });
  }
}

module.exports = Controller;
