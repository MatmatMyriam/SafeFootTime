require('./models/Shop');
require('./models/Shoes');
var mongoose = require('mongoose');

var fixtures = require('node-mongoose-fixtures');
const moment = require('moment');

fixtures.clear();
fixtures({
    Shop: [
          {name:'Magasin1', latitude:1, longitude:0,mountain:'Pyrénée',rating:1, id_shop:1, description:'okokokokoko'},
        {name:'Magasin2', latitude:2, longitude:0,mountain:'Pyrénée 1',rating:2, id_shop:2, description:'okokokokoko'},
        {name:'Magasin3', latitude:3, longitude:0,mountain:'Pyrénée 2',rating:4, id_shop:3, description:'okokokokoko'},
        {name:'Magasin4', latitude:4, longitude:0,mountain:'Pyrénée 3',rating:5, id_shop:4, description:'okokokokoko'}
    ]


}, function (err, data) {
    console.warn(err, data);
});

fixtures({
    Shoes: [
        {
            id: 1,
            sizes: 41,
            price: 25,
            desc: 'Beautiful',
            code_shop: 1,
            available: true,
            picture: 'TestPct.jpg',
            date_cart: moment().format(),
            id_user: '5a0d5a350eb4a8000f6915fe',
        },
        {
            id: 2,
            sizesArray: 40,
            price: 30,
            desc: 'Burk',
            code_shop: 2,
            available: false,
            picture: 'TestPct.jpg',
            date_cart: moment().format(),
            id_user: '5a0d5a350eb4a8000f6915fe',
        },
        {
            id: 3,
            sizesArray: 38,
            price: 30,
            desc: 'Burk',
            code_shop: 2,
            available: false,
            picture: 'TestPct.jpg',
            date_cart: moment().format(),
            id_user: '5a0d5a350eb4a8000f6915fe',
        }
    ]

}, function (err, data) {
    console.warn(err, data);
});


