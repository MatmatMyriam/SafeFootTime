var express = require('express');
var session = require('express-session');

var app = express();
app.use(session({shoes:198,type:"Botte"}));


exports.showCart =(req,res) =>{
    var data = ["test","test1"];
    res.render('cart', {item : data});
};

exports.addCart =(req,res) =>{
    
};

exports.delCart =(req,res) =>{
    
};

exports.finishCart =(req,res) =>{
    
};