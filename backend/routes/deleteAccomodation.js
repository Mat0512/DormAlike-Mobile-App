const express = require("express");
const router = express.Router();
const accomodationsControllers = require("../controllers/accomodationsControllers");

router.delete("/", accomodationsControllers.deleteAccomodation);

module.exports = router;
