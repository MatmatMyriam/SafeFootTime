const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id_customer: { type: Number, unique: true },
    name: String,
    surname: String,
    adress: String,
    fidelity: Number,
}, { timestamps: true });