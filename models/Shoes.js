const UserSchema = require("./User");
const ShopSchema = require("./Shop");
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const shoesSchema = Schema({
    model: Number,
    size: Number,
    price: Number,
    desc: String,
    code_shop:  String,
    available: Boolean,
    picture: String,
    date_cart: Date,
    id_user: { type: Schema.Types.ObjectId, ref: 'User' }

}, { timestamps: true });

const Shoes = mongoose.model('Shoes', shoesSchema);

const User = mongoose.model('User', UserSchema.schema);

const Shop = mongoose.model('Shop', ShopSchema.schema);

module.exports = Shoes;