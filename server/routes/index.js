const express = require("express");
const user = require("../controller/userController");
const router = express.Router();

router.get("/api", user.connection);
router.get("/aladin", user.get_aladin);

router.post("/signup", user.signup);

module.exports = router;
