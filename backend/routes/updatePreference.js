const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

router.post("/", usersController.updatePreference);

module.exports = router;
