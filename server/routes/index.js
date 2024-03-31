const router = require("express").Router();
const routeUser = require("./user");

router.use(routeUser);

module.exports = router;
