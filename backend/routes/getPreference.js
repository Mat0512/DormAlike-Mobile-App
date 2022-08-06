const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

router.post("/", usersController.getPreference);

module.exports = router;
