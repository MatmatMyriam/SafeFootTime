const Shoes = require('../models/Shoes.js');
const Shop = require('../models/Shop.js');
const moment =require('moment');

exports.getShoes = (req, res) =>{
    var shop = {}
    var allshoes = {}
     var id = req.params.id;
     Shop.find({"_id" : id}, function (err, docs) {
         shop = docs[0];
         var idShop = docs[0].idShop;
         //recup seulement si pas dans le panier
         var value = moment().subtract(10,'minutes').format();
         //Chercher shoes en fonction de la date
         var query = {
             code_shop : idShop,
             date_cart: {
                 $lte: value,
             },
         };
         console.log(query);
         Shoes.find(query,function (err,docs) {

             allshoes = docs;
             res.render('shoes',{shop: shop,allshoes:allshoes});
         });
     });
};

exports.getShoesOrder = (req, res) => {
    var shop = {}
    var allshoes = {}
    var id = req.params.id;
    var order = req.params.priceOrder;
    Shop.find({"_id" : id}, function (err, docs) {
        shop = docs[0];
        var idShop = docs[0].idShop;
        if(order === 'orderPrice'){
            Shoes.find({"code_shop" : idShop}).sort('price').exec(function(err, docs) {
                allshoes = docs;
                res.render('shoes',{shop: shop,allshoes:allshoes});
            });
        }else{
            Shoes.find({"code_shop" : idShop}).sort('-price').exec(function(err, docs) {
                allshoes = docs;
                res.render('shoes',{shop: shop,allshoes:allshoes});
            });
        }
    });
};



