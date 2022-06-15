/**
 * 
 * @param {import('express').Application} app 
 */
function setupProxy(app) {
    app.get('/get-data', function(req, res) {
        res.json({
            hey: 1
        });
    });
};


module.exports = setupProxy;