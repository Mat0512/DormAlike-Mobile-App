const User = require("../models/User");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const verifyToken = asyncHandler(async (req, res, next) => {
    let token;
    console.log("hello from authMiddleware");
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        console.log("has token");
        try {
            token = req.headers.authorization.split(" ")[1];
            console.log("token: ", token);
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log("before decoded");
            const user = await User.findById(decoded.id).select("__id").exec();

            if (!user) {
                res.status(401);
                throw new Error("unauthorized access");
            }

            req.userId = user.id;
            next();
        } catch (err) {
            console.log(err);
            res.status(401).json({
                message: "err",
            });
            return;
        }
    } else {
        console.log("no token");
        res.status(401);
        throw new Error("unauthorized access");
    }
});

module.exports = verifyToken;
