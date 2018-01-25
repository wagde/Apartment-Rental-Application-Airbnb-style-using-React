var express = require('express');
var userDb = require('../models/userDB');
var router = express.Router();

router.post('/login', function (req, res, next) {
    
    userDb.matchUser(req.body, function (err, result) {
        if (result) {
            
            res.json({ 'message': 'true', result: result });
        }
        else {
            res.json({ 'message': 'false' });
        }
    });

});



module.exports = router;
