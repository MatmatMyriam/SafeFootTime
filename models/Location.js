const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    id_loc: { type: Number, unique: true },
    final_shop: Number,
    date_start: Number,
    date_end: String,
    code_customer: Number,
}, { timestamps: true });