var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inquirySchema = new Schema({
    name: String,
    phoneNumber: Number,
    email: String,
    category: String,
    budget: String,
    notes: String,
    createdOn: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Inquiry', inquirySchema);