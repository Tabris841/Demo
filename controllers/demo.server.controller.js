var Demo = require('../models/inquiry.server.model.js');

exports.create = function (req, res) {
    var entry = new Demo({
        name: req.body.name,
        phoneNumber: req.body.phone,
        email: req.body.email,
        category: req.body.category,
        budget: req.body.budget,
        notes: req.body.notes
    });

    entry.save();

    //redirect to home page...
    res.redirect(301, '/');

};

exports.getNote = function (req, res) {
    res.render('newnote', {title: 'Standup - New Note'});
};
