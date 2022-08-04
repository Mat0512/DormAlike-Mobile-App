const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    phone: String,
    email: String,
    preference: [{ type: Schema.Types.ObjectId, ref: "Accomodation" }],
    reservation: [
        {
            accomodation: { type: Schema.Types.ObjectId, ref: "Accomodation" },
            approved: { type: Boolean, default: false },
        },
    ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
