var express = require('express');

var router = express.Router();

router.get('/', function (req, res){
  res.render('index');
});

router.get('/members', function (req, res){
  res.render('members');
});

module.exports = router;