const router = require("express").Router();
const routeUser = require("./user");
const routeTodo = require("./todo");

router.use(routeUser);
router.use(routeTodo);

module.exports = router;
