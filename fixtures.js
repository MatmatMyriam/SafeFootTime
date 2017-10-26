
const Shop  = require('./models/Shop');
const Shoes = require('./models/Shoes');
const {
    expect
} = require('chai');
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


var shop= Shop.findOne({name:'Magasin1'},(err, result)=>{

});

var shop2= Shop.findOne({name:'Magasin2'},(err, result)=>{

});

var shop3= Shop.findOne({name:'Magasin3'},(err, result)=>{

});


fixtures({
    Shoes:[
        {model: 1,
  size: 45, 
  price: 25,
  desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', 
  code_shop:shop._id,
  available:true, 
  picture:'TestPct.jpg',
  date_cart: moment().format(),
  id_user: '59e4cfa50c6c61000f980805'
},
        {model: 2, 
         size: 33,
         price: 25, 
         desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.',
         code_shop:shop2._id, 
         available:true, 
         picture:'TestPct.jpg',
        date_cart: moment().format(),
            id_user: '59e4cfa50c6c61000f980805'},
        {model: 4, 
         size: 75, 
         price: 25, 
         desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', 
         code_shop:shop3._id, 
         available:true,
         picture:'TestPct.jpg',
        date_cart: moment().format(),
            id_user: '59e4cfa50c6c61000f980805'}
    ]

    },function (err, data) {
        console.warn(err, data);

    }
);
