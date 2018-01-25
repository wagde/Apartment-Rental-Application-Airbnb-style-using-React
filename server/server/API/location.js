var express = require('express');
var homesDb = require('../models/homesDB');
var router = express.Router();

router.post('/addreview', function (req, res, next) {
    console.log(req.body.locationId)
    homesDb.addReview(req.body.locationId, req.body.review, function (err, home) {
        if (err) {
            res.json(err);
        }
        res.json(home);
    });
});
router.post('/bookhome', function (req, res, next) {
    var inOut = {
        checkin: req.body.checkIn,
        checkout: req.body.checkOut
    }
    homesDb.bookHome( req.body.id,inOut, function (err, home) {
        if (err) {
            res.json(err);
        }
        res.json(home);
    });
});












module.exports = router;