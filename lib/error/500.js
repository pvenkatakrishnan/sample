'use strict';
module.exports = function() {

    return function (err, req, res, next) {
        console.info('\n\n\n\n\n\n\n\n\n error is simulated', err);
        res.json(err);
    };
};