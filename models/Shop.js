const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: { type: Number, unique: true },
    latitude: Number,
    longitude: Number,
    mountain: String,
    rating: Number,
    id_shop: Number,
    desciption: String,
}, { timestamps: true });