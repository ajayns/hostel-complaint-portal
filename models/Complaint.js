var mongoose = require('mongoose');

var ComplaintSchema = new mongoose.Schema({
    category: String,
    description: String,
    hostel: String,
    room: String,
    name: String,
    date: Date,
    status: String
});

module.exports = mongoose.model('Complaint', ComplaintSchema);

