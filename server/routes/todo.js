const router = require("express").Router();
const controller = require("../controllers/todo");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router.use(authentication);

router.post("/", controller.create);
router.get("/", controller.findAll);
router.delete("/:id", authorization, controller.deleteData);
router.get("/:id", controller.findEdit);
router.put("/:id", authorization, controller.editData);

module.exports = router;
