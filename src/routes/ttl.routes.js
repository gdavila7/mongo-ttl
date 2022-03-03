const Router = require("express");
const router = Router();

const logsCtrl = require("../controllers/ttl.controller.js");

router.post("/", logsCtrl);

module.exports = router;
