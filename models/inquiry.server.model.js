var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inquirySchema = new Schema({
    name: String,
    phoneNumber: String,
    email: String,
    category: String,
    budget: String,
    urgency: String,
    notes: String,
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Inquiry', inquirySchema);