/**
 * Created by Myriam on 12/10/2017.
 */
/**
 * Get /shop
 */
const Shop = require('../models/Shop.js');

exports.getShop =(req,res) =>{
    Shop.find((err, docs) => {
        res.render('shop', {allshop: docs});
    });
};