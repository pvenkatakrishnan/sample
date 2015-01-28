'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res, next) {
        
        next(new Error('ohnooos'));
        //res.render('index', model);
        
        
    });

};
