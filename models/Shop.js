const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    idShop: String,
    name: String,
    latitude: Number,
    longitude: Number,
    mountain: String,
    rating: Number,
    description: String,
}, { timestamps: true });

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;