/**
 * Get /shop
 */
const Shop = require('../models/Shop.js');

exports.getShop = (req, res) => {
    Shop.find((err, docs) => {
        res.render('shop', {
            allshop: docs
        });
    });
};
