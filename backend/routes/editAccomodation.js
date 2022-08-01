const express = require("express");
const router = express.Router();
const accomodationsControllers = require("../controllers/accomodationsControllers");

router.put("/", accomodationsControllers.editAccomodation);

module.exports = router;
