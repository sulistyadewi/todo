const router = require("express").Router();
const routeUser = require("./user");
const routeTodo = require("./todo");

router.use(routeUser);
router.use("/todo", routeTodo);

module.exports = router;
