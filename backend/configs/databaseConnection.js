const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

const connectDB = asyncHandler(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(typeof conn);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
});

module.exports = connectDB;
