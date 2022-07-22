const usersData = require("../models/user.js");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);

    if (username === "" && password === "") {
        res.status(401);
        res.send("unauthorized");
    }

    const matchedUser = usersData.filter(
        (user) => user.username === username && user.password === password
    );

    console.log(matchedUser);

    if (matchedUser.length !== 0) {
        res.status(200);
        res.json(matchedUser);
    } else {
        res.status(403);
        res.json({ message: "wrong credentials" });
    }
});

module.exports = router;
