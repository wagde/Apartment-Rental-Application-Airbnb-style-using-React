var express = require('express');
var userDB = require('../models/userDB.js')
var router = express.Router();
router.post('/regist', function (req, res, next) {
console.log("Asd")
    userDB.CheckMail( {email: req.body.email}, function (err, result) {
        if (result) {

            res.json({ message: 'This Mail Used' });

        }
       else {
            var user = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                img: req.body.img
            }
            userDB.AddUser(user, function (err, data) {

                if (err) {
                    res.json({ message: 'false' });
                }
                res.json({ message: 'the registering successes' });
            });
        }
    });
});
module.exports = router;
