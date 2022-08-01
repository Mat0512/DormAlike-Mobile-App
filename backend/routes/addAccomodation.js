const express = require("express");
const router = express.Router();
const {
    addAccomodation,
} = require("../controllers/accomodationsControllers.js");

router.post("/", addAccomodation);

module.exports = router;
