module.exports = function() {

    return function(err, req, res, next) {
        console.info('error is simulated', err);
    }
}