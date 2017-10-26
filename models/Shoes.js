const UserSchema = require("./User");
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const shoesSchema = Schema({
    model: Number,
    size: Number,
    price: Number,
    desc: String,
    code_shop: {type: Schema.Types.ObjectId, ref: 'Shop'},
    available: Boolean,
    picture: String,
    date_cart: Date,
    id_user: { type: Schema.Types.ObjectId, ref: 'User' }

}, { timestamps: true });

const Shoes = mongoose.model('Shoes', shoesSchema);

const User = mongoose.model('User', UserSchema.schema);

module.exports = Shoes;