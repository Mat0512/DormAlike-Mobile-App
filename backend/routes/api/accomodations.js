const accomodationsController = require("../../controllers/accomodationsControllers");

const express = require("express");
const router = express.Router();

router.get("/", accomodationsController.getAllAccomodations);

module.exports = router;
