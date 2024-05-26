const { where } = require("sequelize");
const db = require("../models");
const Todo = db.Todo;

class Controller {
  static create(req, res, next) {
    const { name, desc, due_date } = req.body;
    const UserId = req.loggedInUser.id;
    // const object = { name, desc, status: false, due_date, UserId };
    Todo.create({ name, desc, status: false, due_date, UserId })
      .then((data) => {
        res.status(201).json({ data });
        console.log(data, "ini dari controller");
      })
      .catch((err) => {
        next(err);
      });
  }
  static findAll(req, res, next) {
    const UserId = req.loggedInUser.id;
    Todo.findAll({ where: { UserId } })
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((err) => {
        next(err);
      });
  }
  static deleteData(req, res, next) {
    const { id } = req.params;
    console.log(id, "ini todoId");
    Todo.destroy({ where: { id } })
      .then((data) => {
        res.status(200).json({ msg: "Success Delete" });
      })
      .catch((err) => {
        next(err);
      });
  }
  static findEdit(req, res, next) {
    const { id } = req.params;
    console.log(id);
    Todo.findByPk(id)
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((err) => {
        next(err);
      });
  }
  static editData(req, res, next) {
    const { id } = req.params;
    const { name, desc, due_date } = req.body;
    const objectTodo = { id, name, desc, due_date };
    Todo.update({ name, desc, due_date }, { where: { id } })
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = Controller;
