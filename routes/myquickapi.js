var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('You sent a get request');
});

router.post('/', function(req, res) {
	res.send('You sent me ' + req.param('data'));
});

module.exports = router;
