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
        available: true,
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

    var allshoes = {}

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
        allshoes = result;
        res.render('cart', {
            pageData: allshoes
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

    //Date actuel
    var value = moment().subtract(10, 'minutes').format();
    //Chercher item client en fonction de la date
    var query = {
        id_user: mongoose.Types.ObjectId(req.user.id),
        date_cart: {
            $gte: value,
        },
    };


    Cart.find(query, function (err, doc) {
        console.log(doc);
        doc.forEach(function (item) {
            
            console.log('test :');
            console.log(item.desc);
            console.log('Objectid :');
            console.log(ObjectId(item._id));

            Cart.findOneAndUpdate({
                _id: ObjectId(item._id)
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

            Location.create({
                code_Shoes: item._id,
                date_start: moment().format(),
                date_end: moment().add(10, 'days'),
                code_customer: req.user.id,
            }, function (err, res) {
                console.log(res);
                console.log(err);
            })
        });
    });

    /*

        item.updateOne({
            $set: {
                id_user: req.user.id,
                available: false
            }
        });

        Location.insertOne({
            code_Shoes: item._id,
            date_start: moment().format(),
            date_end: moment().add(10, 'days'),
            code_customer: req.user.id,
        })
    
        */

    res.render('test', {});
}
