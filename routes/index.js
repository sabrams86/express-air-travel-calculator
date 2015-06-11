var express = require('express');
var router = express.Router();
var logic = require('./../public/javascripts/logic.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Travel Calculator'});
});


router.post('/', function(req, res, next) {
  var departure = req.body.departure;
  var arrival = req.body.arrival;
  var bags = req.body.bags;
  var planeClass = req.body.flightclass;
  var wifi = req.body.wifi;
  var dcode = req.body.discount;
  var output = logic.calculatePrice(departure, arrival, bags, planeClass, wifi, dcode)
  output = output.toFixed(2);
  res.render('index', { title: 'Air Travel Calculator', total: output });
});

module.exports = router;
