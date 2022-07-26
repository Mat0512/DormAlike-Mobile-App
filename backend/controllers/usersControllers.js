const data = {
    users: require("../models/userData.js"),
    setData: function (data) {
        this.users = data;
    },
};

const createUser = (req, res) => {
    const newUser = {
        id: data.users[data.users.length - 1].userID + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        reservation: [
            {
                accomodationName: "",
                status: "pending",
            },
        ],
    };

    console.log(newUser);
    if (
        !newUser.firstname ||
        !newUser.lastname ||
        !newUser.password ||
        !newUser.email
    ) {
        res.status(400);
        res.json({
            error: "all parameters must have value",
        });
    }
    data.setData([...data.users, newUser]);
    res.status(201).json(data.users);
};

const editUser = (req, res) => {
    const matchedUser = data.users.find(
        (user) => user.userID === parseInt(req.body.id)
    );
    if (!matchedUser) {
        res.status(404).json({ message: "user not found" });
    }

    const properties = Object.getOwnPropertyNames(req.body);
    properties.forEach((prop) => (matchedUser[prop] = req.body[prop]));

    const newUserLists = data.users.map((user) =>
        user.userID == matchedUser.id ? matcheduser : user
    );
    setData(newUserLists);

    res.json(data.users);
};

const loginUser = (req, res) => {
    if (!req.body.username && !req.body.username) {
        res.status(400).json({ message: "required usename and password" });
    }
    const matchedUser = data.users.find(
        (user) => user.username === req.body.username
    );

    if (!matchedUser) {
        res.status(404).json({ message: "user not found" });
    } else if (matchedUser.password !== req.body.password) {
        res.send(401).json({ message: "unauthorized" });
    } else {
        res.send(matchedUser);
    }
};

module.exports = {
    createUser,
    editUser,
    loginUser,
};
