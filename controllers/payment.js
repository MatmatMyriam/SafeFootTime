const Cart = require('../models/Shoes.js');
const Location = require('../models/Location.js');
const Shop = require('../models/Shop.js');
const moment = require('moment');
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
const User = require('../models/User');

exports.getPayment = (req, res) => {
	var prixtot=0;
	//Date actuel
    var value = moment().subtract(10, 'minutes').format();
    //Chercher item client en fonction de la date
    var query = {
        id_user: mongoose.Types.ObjectId(req.user.id),
        date_cart: {
            $gte: value,
        },
    };

    console.log('panier');
    Cart.find(query, function (err, doc) {
        doc.forEach(function (item) {
        	if(item.available)
        	prixtot+=item.price;
        });
	if(req.body.usediscount=="on"){
		res.render('payment', {
            total : prixtot,
            discount : 0
        });
	}
	else{
		res.render('payment', {
            total : prixtot
        });
	}
    });
	console.log(req.body.usediscount);
};

