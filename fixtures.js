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
            description: 'Un grand magasin est un commerce de centre ville caractérisé par une grande surface de vente répartie sur plusieurs niveaux, un assortiment très large essentiellement basé sur l\'équipement de la maison et de la personne et par des ventes réalisées en libre service assisté.'
        },
        {
            idShop: 'Shop2',
            name: 'Lumberjack Party time',
            latitude: 43.85,
            longitude: 1.3333,
            mountain: 'Pyrénée 1',
            rating: 2,
            description: 'Un grand magasin est un commerce de centre ville caractérisé par une grande surface de vente répartie sur plusieurs niveaux, un assortiment très large essentiellement basé sur l\'équipement de la maison et de la personne et par des ventes réalisées en libre service assisté.'
        },
        {
            idShop: 'Shop3',
            name: 'Les t Lumberjack',
            latitude: 44.0167,
            longitude: -1.35,
            mountain: 'Pyrénée 2',
            rating: 4,
            description: 'Un grand magasin est un commerce de centre ville caractérisé par une grande surface de vente répartie sur plusieurs niveaux, un assortiment très large essentiellement basé sur l\'équipement de la maison et de la personne et par des ventes réalisées en libre service assisté.'
        },
        {
            idShop: 'Shop4',
            name: 'WoodsMan',
            latitude: 44,
            longitude: -1,
            mountain: 'Pyrénée 3',
            rating: 5,
            description: 'Un grand magasin est un commerce de centre ville caractérisé par une grande surface de vente répartie sur plusieurs niveaux, un assortiment très large essentiellement basé sur l\'équipement de la maison et de la personne et par des ventes réalisées en libre service assisté.'
        }
    ]


}, function (err, data) {

    shop = data[0];

});


fixtures({

    Shoes:[
        {model: 1, size: 43, price: 40, desc:'Une chaussure de marche est une chaussure spécialement conçue pour la marche à pied ou la randonnée pédestre.', code_shop:'Shop1', available:true, picture:'TestPct.jpg', date_cart:"2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 2, size: 41, price: 50, desc:'Une bonne chaussure possède une semelle amortissant les chocs afin de soulager votre corps et une semelle adhérente pour vous sentir en sécurité. Plus le terrain pratiqué est accidenté, plus la chaussure doit être rigide.', code_shop:'Shop1', available:false, picture:'TestPct2.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '5a0d5a350eb4a8000f6915fe'},
        {model: 3, size: 44, price: 25, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop1', available:true, picture:'TestPct3.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '5a0d5a350eb4a8000f6915fe'},
        {model: 4, size: 30, price: 30, desc:'Cela regroupe tout ce qui permet à la chaussure de se différencier : système de serrage, cramponnage, guêtre intégrée... autant d\'atouts pouvant faire la différence selon votre pratique.', code_shop:'Shop1', available:true, picture:'TestPct4.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 1, size: 39, price: 25, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop2', available:true, picture:'TestPct.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 2, size: 40, price: 50, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop2', available:true, picture:'TestPct2.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 3, size: 42, price: 100, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop2', available:true, picture:'TestPct3.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 4, size: 45, price: 26, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop2', available:true, picture:'TestPct4.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 1, size: 40, price: 65, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop3', available:true, picture: 'TestPct.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 2, size: 42, price: 25, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop3', available:true, picture:'TestPct2.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 3, size: 45, price: 25, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop3', available:true, picture:'TestPct3.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 4, size: 50, price: 35, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop3', available:true, picture:'TestPcT4.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 1, size: 40, price: 15, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop4', available:true, picture:'TestPct.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 2, size: 39, price: 165, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop4', available:true, picture:'TestPct2.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 3, size: 43, price: 55, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop4', available:true, picture:'TestPct3.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'},
        {model: 4, size: 41, price: 45, desc:'Avec une protection anti-coupures haute technologie classe 1, ce mdifficiles.', code_shop:'Shop4', available:true, picture:'TestPct4.jpg', date_cart: "2016-11-16 11:09:44.000Z", id_user: '59e4cfa50c6c61000f980805'}


    ]

}, function (err, data) {


});