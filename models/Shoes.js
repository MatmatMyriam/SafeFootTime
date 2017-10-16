const mongoose = require('mongoose');

const shoesSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    size: Number,
    price: Number,
    desc: String,
    code_shop: Number,
    available: Boolean,
    picture: String
}, { timestamps: true });
const Shoes = mongoose.model('Shoes', shoesSchema);

module.exports = Shoes;