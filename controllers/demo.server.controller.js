var Demo = require('../models/inquiry.server.model.js');

exports.list = function (req, res) {
    var query = Demo.find();

    query.sort({createdOn: 'desc'})
        .exec(function (err, results) {
            res.render('admin', {title: 'Admin', notes: results});
        })
};

exports.remove = function (req, res) {
    var query = Demo.find();
    var filter = req.body.name;

    query.sort({createdOn: 'desc'});

    if (filter.length > 0) {
        query.remove({name: filter})
    }

    query.exec(function (req, results) {
        res.render('admin', {title: 'Admin', notes: results})
    })
};

exports.filterByUrgency = function (req, res) {
    var query = Demo.find();
    var filterU = req.body.urgency;
    var filterB = req.body.budget;
    var filterC = req.body.category;
    var filter = req.body.name;

    query.sort({createdOn: 'desc'});


    if (filterU.length > 0) {
        query.where({urgency: filterU})
    }

    if (filterB.length > 0) {
        query.where({budget: filterB})
    }

    if (filterC.length > 0) {
        query.where({category: filterC})
    }

    query.exec(function (req, results) {
        res.render('admin', {title: 'Admin', notes: results})
    })
};

exports.create = function (req, res) {
    var entry = new Demo({
        name: req.body.name,
        phoneNumber: req.body.phone,
        email: req.body.email,
        category: req.body.choose_category,
        urgency: req.body.urgency,
        budget: req.body.planned_budget,
        notes: req.body.notes
    });

    entry.save();

    //redirect to home page...
    res.redirect(301, '/Contacts.html');

};

exports.getNote = function (req, res) {
    res.render('/Contacts');
};
