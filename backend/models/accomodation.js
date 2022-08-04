const mongoose = require("mongoose");
const { Schema } = mongoose;

const accomodationSchema = new Schema({
    ownedBy: { type: Schema.Types.ObjectId, ref: "User" },
    name: String,
    address: String,
    roomCount: Number,
    houseimg: { type: String, default: "" },
    roomAvailable: Number,
    category: String,
    reservationFee: Number,
    monthlyFee: Number,
    phone: [String],
    space: Number,
    availability: { type: Boolean, default: true },
    facilities: [String],
    description: String,
    rate: {
        one: { type: Number, default: 0 },
        two: { type: Number, default: 0 },
        three: { type: Number, default: 0 },
        four: { type: Number, default: 0 },
        five: { type: Number, default: 0 },
    },
});

const Accomodation = mongoose.model("Accomodation", accomodationSchema);

module.exports = Accomodation;
