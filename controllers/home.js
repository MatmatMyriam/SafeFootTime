/**
 * GET /
 * Home page.
 */
const Shop = require('../models/Shop.js');

exports.index = (req, res) => {

    Shop.find((err, docs) => {
        console.log('TEST#', docs);
    res.render('home', {allshop: docs, title: 'home'});
});

};
