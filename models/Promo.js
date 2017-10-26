const mongoose = require('mongoose');

const promoSchema = new mongoose.Schema({
    name: String,
    available: Boolean,
    pourcentage: Number,
}, { timestamps: true });
const Promo = mongoose.model('Promo', promoSchema);

module.exports = Promo;