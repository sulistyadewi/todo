const db = require("../models");
const Todo = db.Todo;

function authorization(req, res, next) {
  const { id } = req.params;
  console.log(id, "ini dari authorization");
  Todo.findByPk(id)
    .then((data) => {
      if (!data) {
        throw { msg: "Data Not Found" };
      } else if (data.UserId === req.loggedInUser.id) {
        next();
      } else {
        throw { msg: "Authorization Failed" };
      }
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = authorization;
