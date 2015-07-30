var express = require('express');
var router = express.Router();
var demoCtrl = require('../controllers/demo.server.controller.js');

module.exports = function (passport) {

    /* GET home page. */
    router.get('/', function (req, res, next) {
        res.sendfile('public/home.html');
    });

    /*Post filter inquiries - admin */
    router.post('/admin', isLoggedIn, function (req, res) {
        return demoCtrl.filterByUrgency(req, res)
    });

    /*Get New Inquiry page. */
    router.get('/Contacts.html', function (req, res) {
        return demoCtrl.getNote(req, res);
    });

    /*Post New Inquiry page. */
    router.post('/Contacts.html', function (req, res) {
        return demoCtrl.create(req, res);
    });

    router.get('/admin', isLoggedIn, function (req, res) {
        return demoCtrl.list(req, res)

    });

    router.get('/login', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login', {message: req.flash('loginMessage')});
    });

    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/admin', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    router.get('/signup', function (req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup', {message: req.flash('signupMessage')});
    });

    // process the signup form
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/admin', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}

