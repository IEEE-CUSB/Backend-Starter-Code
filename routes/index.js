var express = require('express');
var router = express.Router();
const User = require("../models").User;
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        arr: ['Hi', 'Bye'],
        title: "Hi"
    });
});

router.post('/', function (req, res, next) {
    let name = req.body.name;
    let phone = req.body.phone;
    let mail = req.body.email;
    User.create({
        Name: name,
        Phone: phone,
        Email: mail
    }).then((user) => {
        name = user.id
        res.render('hi', {name, phone, mail});
    }).catch((err) => {

    })


});
module.exports = router;
