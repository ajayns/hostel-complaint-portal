var mongoose = require('mongoose');

var ComplaintSchema = new mongoose.Schema({
    subject: String,
    category: String,
    description: String,
    hostel: String,
    name: String,
    date: Date,
    status: String
});

module.exports = mongoose.model('Complaint', ComplaintSchema);

