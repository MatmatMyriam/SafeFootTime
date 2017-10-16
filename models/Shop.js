const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    latitude: Number,
    longitude: Number,
    mountain: String,
    rating: Number,
    id_shop: Number,
    description: String,
}, { timestamps: true });

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;