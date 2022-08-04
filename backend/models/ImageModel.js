const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageSchema = new Schema(
    (imageSchema = new mongoose.Schema({
        name: String,
        desc: String,
        img: {
            data: Buffer,
            contentType: String,
        },
    }))
);
