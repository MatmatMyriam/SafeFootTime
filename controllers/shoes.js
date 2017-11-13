const Shoes = require('../models/Shoes.js');
const Shop = require('../models/Shop.js');

exports.getShoes = (req, res) =>{
    Shoes.find((err, docs) =>{
        res.render('shoes',{allshoes: docs});
    });
};