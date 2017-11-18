const Shop = require('./models/Shop');
const Shoes = require('./models/Shoes');
const User = require('./models/User');
var mongoose = require('mongoose');


var fixtures = require('node-mongoose-fixtures');
const moment = require('moment');

fixtures.reset();

var shop = {};

fixtures({
    Shop: [
        {
            idShop: 'Shop1',
            name: 'Notre super magasin',
            latitude: 43.3269942,
            longitude: -0.7532809,
            mountain: 'Pyrénée',
            rating: 1,
            description: 'okokokokoko'
        },
        {
            idShop: 'Shop2',
            name: 'Lumberjack Party time',
            latitude: 43.85,
            longitude: 1.3333,
            mountain: 'Pyrénée 1',
            rating: 2,
            description: 'okokokokoko'
        },
        {
            idShop: 'Shop3',
            name: 'Les t Lumberjack',
            latitude: 44.0167,
            longitude: -1.35,
            mountain: 'Pyrénée 2',
            rating: 4,
            description: 'okokokokoko'
        },
        {
            idShop: 'Shop4',
            name: 'WoodsMan',
            latitude: 44,
            longitude: -1,
            mountain: 'Pyrénée 3',
            rating: 5,
            description: 'okokokokoko'
        }
    ]


}, function (err, data) {

    shop = data[0];

});


fixtures({

    Shoes:[
        {model: 1, size: 43, price: 25, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop1', available:true, picture:'TestPct.jpg', date_cart:"2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 1, size: 41, price: 25, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop1', available:false, picture:'TestPct.jpg', date_cart: moment().format(), id_user: '5a0d5a350eb4a8000f6915fe'},
        {model: 1, size: 44, price: 25, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop1', available:true, picture:'TestPct.jpg', date_cart: moment().format(), id_user: '5a0d5a350eb4a8000f6915fe'},
        {model: 2, size: 33, price: 25, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop1', available:true, picture:'TestPct.jpg', date_cart: moment().format(), id_user: '59e4cfa50c6c61000f980805'},
        {model: 4, size: 75, price: 25, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop2', available:true, picture:'TestPct.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'}


    ]

}, function (err, data) {


});