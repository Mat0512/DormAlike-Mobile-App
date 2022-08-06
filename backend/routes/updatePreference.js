const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

router.put("/", usersController.updatePreference);

module.exports = router;
