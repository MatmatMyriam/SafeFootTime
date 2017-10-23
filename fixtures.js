require('./models/Shop');
require('./models/Shoes');
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

fixtures({
    Shoes:[
        {id: 1, size: 41, price:25, desc:'Beautiful', code_shop:1, available:true, picture:'pct/testPct.jpg'},
        {id: 2, size: 36, price:30, desc:'Burk', code_shop:2, available:false, picture:'pct/testPct.jpg'}
    ]

    },function (err, data) {
        console.warn(err, data);
    }
);