const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const shoesSchema = Schema({
    model: Number,
    size: Number,
    price: Number,
    desc: String,
    code_shop: {type: Schema.Types.ObjectId, ref: 'Shop'},
    available: Boolean,
    picture: String
}, { timestamps: true });
const Shoes = mongoose.model('Shoes', shoesSchema);

module.exports = Shoes;