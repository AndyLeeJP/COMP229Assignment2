var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me', page: 'about' });
});

module.exports = router;
