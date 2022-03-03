const Router = require("express");
const router = Router();

const { createLog, getLogs } = require("../controllers/ttl.controller.js");

router.post("/", createLog);

router.get("/", getLogs);

module.exports = router;
