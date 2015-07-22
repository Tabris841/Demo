var express = require('express');
var router = express.Router();
var demoCtrl = require('../controllers/demo.server.controller.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendfile('public/home.html');
});

/*Get New Note page. */
router.get('../public/Contacts.html', function (req, res) {
    return demoCtrl.getNote(req.res)
});

/*Post New Note page. */
router.post('../public/Contacts.html', function (req, res) {
    return demoCtrl.create(req, res);
});

module.exports = router;
