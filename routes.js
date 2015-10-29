var express = require('express');

var router = express.Router();

router.get('/', function (req, res){
  res.render('index');
});

router.get('/members', function (req, res){
  res.render('members');
});

router.get('/contest', function (req, res) {
	res.redirect(301, 'http://goo.gl/forms/V03Q04bj1G');
});

module.exports = router;