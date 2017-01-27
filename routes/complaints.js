var express = require('express');
var router = express.Router();
var Complaint = require('../models/Complaint.js')

/* GET /complaints listing. */
router.get('/:hostel', function(req, res, next) {
  Complaint.find({hostel: req.params.hostel}, function (err, complaints) {
    if (err) return next(err);
    res.json(complaints);
  });
});

/* POST /complaints */
router.post('/', function(req, res, next) {
  Complaint.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
