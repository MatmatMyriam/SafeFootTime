const Cart = require('../models/Shoes.js');
const Location = require('../models/Location.js');
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

    Cart.update({
        model: req.params.id
    }, {
        $set: {
            "id": req.user.id,
            "date_cart": moment().format(),
        }
    })
};

exports.delCart = (req, res) => {

};

exports.finishCart = (req, res) => {
    
    Cart.update({
        model: req.params.idshoes
    }, {
        $set: {
            "id": req.user.id,
            "available": false;
        }
    })
    
    Location.insertOne({
        code_Shoes: req.params.idshoes, 
        final_shop: req.params.final,
        date_start: moment().format(),
        date_end: req.params.date,
        code_customer: req.user.id,
    })
};
