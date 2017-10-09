const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    size: Number,
    price: Number,
    desc: String,
    code_shop: Number,
    available: Boolean,
    picture: Blob,
}, { timestamps: true });