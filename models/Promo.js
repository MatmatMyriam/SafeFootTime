const mongoose = require('mongoose');

const promoSchema = new mongoose.Schema({
    id_promo: { type: Number, unique: true },
    name: String,
    available: Boolean,
    pourcentage: Number,
}, { timestamps: true });