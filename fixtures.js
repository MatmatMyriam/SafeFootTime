require('./models/Shop');
require('./models/Shoes');
var fixtures = require('node-mongoose-fixtures');
fixtures.clear();
fixtures({
    Shop: [

        {name:'Notre super magasin', latitude: 43.3269942, longitude:-0.7532809,mountain:'Pyrénée',rating:1, id_shop:1, description:'okokokokoko'},
        {name:'Lumberjack Party time', latitude:43.85, longitude:1.3333,mountain:'Pyrénée 1',rating:2, id_shop:2, description:'okokokokoko'},
        {name:'Les t Lumberjack', latitude:44.0167, longitude:-1.35,mountain:'Pyrénée 2',rating:4, id_shop:3, description:'okokokokoko'},
        {name:'WoodsMan', latitude:44, longitude:-1,mountain:'Pyrénée 3',rating:5, id_shop:4, description:'okokokokoko'}
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

