
require('./models/Shop');
var fixtures = require('node-mongoose-fixtures');
fixtures.clear();
fixtures({
    Shop: [
        {name:'Magasin1', latitude:1, longitude:0,mountain:'Pyrénée',rating:1, id_shop:1, description:'okokokokoko'},
        {name:'Magasin2', latitude:2, longitude:0,mountain:'Pyrénée 1',rating:2, id_shop:2, description:'okokokokoko'},
        {name:'Magasin3', latitude:3, longitude:0,mountain:'Pyrénée 2',rating:4, id_shop:3, description:'okokokokoko'},
        {name:'Magasin4', latitude:4, longitude:0,mountain:'Pyrénée 3',rating:5, id_shop:4, description:'okokokokoko'}

    ]
},function (err, data) {
    console.warn(err, data);
    }
);