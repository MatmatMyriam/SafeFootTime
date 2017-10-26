require('./models/Shop');
require('./models/Shoes');
var mongoose = require('mongoose');
var fixtures = require('node-mongoose-fixtures');
const moment = require('moment');

fixtures.clear();
fixtures({
    Shop: [
        {
            name: 'Magasin1',
            lalitude: 1,
            longitude: 0,
            mountain: 'Pyrénée',
            rating: 1,
            id_shop: 1,
            description: 'okokokokoko'
        },
        {
            name: 'Magasin2',
            lalitude: 2,
            longitude: 0,
            mountain: 'Pyrénée 1',
            rating: 1,
            id_shop: 2,
            description: 'okokokokoko'
        },
        {
            name: 'Magasin3',
            lalitude: 3,
            longitude: 0,
            mountain: 'Pyrénée 2',
            rating: 1,
            id_shop: 3,
            description: 'okokokokoko'
        },
        {
            name: 'Magasin4',
            lalitude: 4,
            longitude: 0,
            mountain: 'Pyrénée 3',
            rating: 1,
            id_shop: 4,
            description: 'okokokokoko'
        }

    ],

}, function (err, data) {
    console.warn(err, data);
});

fixtures({
    Shoes: [
        {
            id: 1,
            sizesArray: [{
                size: 38
            }, {
                size: 45
            }],
            price: 25,
            desc: 'Beautiful',
            code_shop: 1,
            available: true,
            picture: 'TestPct.jpg',
            date_cart: moment().format(),
            id_user: '59e4cfa50c6c61000f980805',
        },
        {
            id: 2,
            sizesArray: [{
                size: 38
            }, {
                size: 44
            }, {
                size: 45
            }],
            price: 30,
            desc: 'Burk',
            code_shop: 2,
            available: false,
            picture: 'TestPct.jpg',
            date_cart: moment().format(),
            id_user: '59e4cfa50c6c61000f980805',
        },
        {
            id: 3,
            sizesArray: [{
                size: 38
            }, {
                size: 44
            }, {
                size: 45
            }],
            price: 30,
            desc: 'Burk',
            code_shop: 2,
            available: false,
            picture: 'TestPct.jpg',
            date_cart: moment().format(),
            id_user: '59e4cfa50c6c61000f980805',
        }
    ]

}, function (err, data) {
    console.warn(err, data);
});

