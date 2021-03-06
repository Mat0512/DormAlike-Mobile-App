const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const saltRounds = 10;

const createUser = asyncHandler(async (req, res) => {
    try {
        const newUser = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            username: req.body.username,
            password: req.body.password,
        };

        console.log(newUser);
        if (
            !newUser.firstname ||
            !newUser.lastname ||
            !newUser.username ||
            !newUser.password ||
            !newUser.email
        ) {
            res.send(400);
            throw new Error("incomplete inputs for sign up");
        }
        const duplicateUser = await User.findOne({
            username: newUser.username,
        });

        if (duplicateUser) {
            res.status(409);
            throw new Error("username is taken");
        }

        const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
        newUser.password = hashedPassword;

        const user = await User.create(newUser);
        console.log("hi", user);
        res.status(200).json({ message: "account created" });
    } catch (err) {
        console.log(err);
        throw new Error(err.message);
    }
});

const editUser = asyncHandler(async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.userId,
            { $set: req.body },
            {
                returnDocument: "after",
            }
        ).exec();

        if (!updatedUser) {
            res.status(404);
            throw new Error("user does not exists, thus can't be updated");
        }

        console.log("updated ", updatedUser);
        res.status(200).json({
            message: "account updated",
        });
    } catch (err) {
        throw new Error(err);
    }
});

const loginUser = asyncHandler(async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400);
            throw new Error("username or password is missing");
        }

        const matchedUser = await User.findOne({ username: username }).exec();

        if (!matchedUser) {
            res.status(404);
            throw new Error("user does not exists");
        }

        const passwordMatched = await bcrypt.compare(
            password,
            matchedUser.password
        );

        if (!passwordMatched) {
            res.status(400);
            throw new Error("incorrect password");
        }
        matchedUser.token = createToken(matchedUser.id);
        console.log("hello");

        res.status(200).json({
            username: matchedUser.username,
            preference: matchedUser.preference,
            reservation: matchedUser.reservation,
            token: matchedUser.token,
        });
    } catch (err) {
        throw new Error(err);
    }
});

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

module.exports = {
    createUser,
    editUser,
    loginUser,
};
