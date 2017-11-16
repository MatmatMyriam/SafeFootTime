const Cart = require('../models/Shoes.js');
const moment = require('moment');
const mongoose = require('mongoose');

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
    
};

exports.delCart = (req, res) => {

};

exports.finishCart = (req, res) => {

};
