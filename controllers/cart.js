const Cart = require('../models/Shoes.js');
const Location = require('../models/Location.js');
const Shop = require('../models/Shop.js');
const moment = require('moment');
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

var now = new Date();

exports.showCart = (req, res) => {
    //Date actuel
    var value = moment().subtract(10, 'minutes').format();
    //Chercher item client en fonction de la date
    var query = {
        id_user: mongoose.Types.ObjectId(req.user.id),
        date_cart: {
            $gte: value,
        },
    };

    //Executé requete
    Cart.find(query, function (err, result) {
        if (err) throw err;
        res.render('cart', {
            pageData: result
        });
    });
};

exports.addCart = (req, res) => {


    Cart.findOneAndUpdate({
        _id: ObjectId(req.params.id)
    }, {
        $set: {
            id_user: req.user.id,
            date_cart: moment().format(),
        }
    }, {
        new: true
    }, function (err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
        }

        console.log(doc);
    });
    // On renvois la page du panier
    
    //Date actuel
    var value = moment().subtract(10, 'minutes').format();
    //Chercher item client en fonction de la date
    var query = {
        id_user: mongoose.Types.ObjectId(req.user.id),
        date_cart: {
            $gte: value,
        },
    };

    //Executé requete
    Cart.find(query, function (err, result) {
        if (err) throw err;
        res.render('cart', {
            pageData: result
        });
    });
};

exports.delCart = (req, res) => {
    
    //Methode pour supprimer la chaussure du panier
    
    Cart.findOneAndUpdate({
        _id: ObjectId(req.params.id)
    }, {
        $set: {
            id_user: req.user.id,
            date_cart: moment().subtract(20, 'minutes').format(),
        }
    }, {
        new: true
    }, function (err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    });
    //On Retourne la page du panier
   //Date actuel
    var value = moment().subtract(10, 'minutes').format();
    //Chercher item client en fonction de la date
    var query = {
        id_user: mongoose.Types.ObjectId(req.user.id),
        date_cart: {
            $gte: value,
        },
    };

    //Executé requete
    Cart.find(query, function (err, result) {
        if (err) throw err;
        res.render('cart', {
            pageData: result
        });
    });
};

exports.finishCart = (req, res) => {
    
    
    //Methode pour updade la chaussure et la rendre non disponible
    
    Cart.findOneAndUpdate({
        _id: ObjectId(req.params.idshoes)
    }, {
        $set: {
            id_user: req.user.id,
            available: false,
        }
    }, {
        new: true
    }, function (err, doc) {
        if (err) {
            console.log("Something wrong when updating data!");
        }
    });
    

    Location.insertOne({
        code_Shoes: req.params.idshoes,
        final_shop: req.params.final,
        date_start: moment().format(),
        date_end: req.params.date,
        code_customer: req.user.id,
    })
};
