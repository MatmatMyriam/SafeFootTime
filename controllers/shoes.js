const Shoes = require('../models/Shoes.js');
const Shop = require('../models/Shop.js');

exports.getShoes = (req, res) =>{
/**console.log('ouiiiiiiiiiiiiiii');
    var shop = Shop.find({"_id" : "5a0abea837d69c20049522df"});
    console.log('okkkkkkkkkkkkk'.shop);
    var shoes = Shoes.find({"code_shop" : {'$code': shop.idShop}});
    var allshoes=shoes.toArray();
    res.render('shoes',{allshoes: docs});
*/
    /** Afficher toutes les chaussures
     * Shoes.find((err, docs) =>{
        res.render('shoes',{allshoes: docs});
    });*/
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

/**
Shop.find({ "_id" : "5a0abea837d69c20049522df" }, function (err, shop) {
    Shoes.find({"code_shop" : {'$code': shop.idShop} }, function (err, docs) {
        res.render('shoes',{allshoes: docs});
    });
});*/

var shop= Shop.find();
shop.where('_id', "5a0abea837d69c20049522df");
console.log(shop);

};