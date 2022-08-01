const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers");

router.put("/", usersController.editUser);

module.exports = router;
