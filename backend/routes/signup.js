const express = require("express");
const router = express.Router();
const users = {
    data: require("../models/user.js"),
    setData: function (inputData) {
        this.data = inputData;
    },
};

router.post("/", (req, res) => {
    const matchedUser = users.data.filter(
        (user) =>
            user.username === req.body.username && user.email === req.body.email
    );

    const newUser = {
        id: users.data[users.data.length - 1].userID + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password,
    };

    console.log(newUser);

    if (matchedUser.length !== 0) {
        res.status(409);
        res.json({
            error: "username and email already exist",
        });
    } else if (
        !newUser.firstname &&
        !newUser.lastname &&
        !newUser.password &&
        !newUser.email
    ) {
        res.status(400);
        res.json({
            error: "all parameters must have value",
        });
    } else {
        users.setData([...users.data, newUser]);
        res.status(201);
        res.json({
            message: "account created",
        });
    }
});

module.exports = router;
