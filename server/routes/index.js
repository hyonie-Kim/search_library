const express = require("express");
const user = require("../controller/userController");
const router = express.Router();

router.get("/api", user.connection);

router.post("/signup", user.signup);

module.exports = router;
