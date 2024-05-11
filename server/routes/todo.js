const router = require("express").Router();
const controller = require("../controllers/todo");
const authentication = require("../middleware/authentication");

router.use(authentication);

router.post("/todo", controller.create);

module.exports = router;
