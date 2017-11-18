const Shoes = require('../models/Shoes.js');
const Shop = require('../models/Shop.js');

exports.getShoes = (req, res) =>{
    var shop = {}
    var allshoes = {}
     var id = req.params.id;
     Shop.find({"_id" : id}, function (err, docs) {
         shop = docs[0];
         var idShop = docs[0].idShop;
         Shoes.find({"code_shop" : idShop},function (err,docs) {
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



