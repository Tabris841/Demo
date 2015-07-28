var express = require('express');
var router = express.Router();
var demoCtrl = require('../controllers/demo.server.controller.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendfile('public/home.html');
});

/*Post filter inquiries - admin */
router.post('/admin', function (req, res) {
    return demoCtrl.filterByUrgency(req, res);
});

/*Get New Inquiry page. */
router.get('/Contacts.html', function (req, res) {
    return demoCtrl.getNote(req, res);
});

/*Post New Inquiry page. */
router.post('/Contacts.html', function (req, res) {
    return demoCtrl.create(req, res);
});

router.get('/admin', function (req, res) {
    return demoCtrl.list(req, res);
});

module.exports = router;
