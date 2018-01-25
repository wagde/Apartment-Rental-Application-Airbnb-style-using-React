var express = require('express');
var homesDb = require('../models/homesDB');
var getUsers = require('../getUsers/getUsers');
var userDB = require('../models/userDB.js');

var router = express.Router();

router.get('/homes', function (req, res, next) {
    homesDb.getAllHomes(function (err, homes) {
        if (err) {
            res.json(err);
        }
        res.json(homes)
    });
});

router.post('/homeid', function (req, res, next) {
    homesDb.getOneHome(req.body.homeId, function (err, home) {
        if (err) {
            res.json(err);
        }
        userDB.getUserLocation(getUsers.getUsers(home), function (err, users) {
            var usersInfo = getUsers.findUserById(users, getUsers.getUsers(home));
            res.json({ home, usersInfo });

        });
    });
});




module.exports = router;