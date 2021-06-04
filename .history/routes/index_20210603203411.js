//   Chaehyun Lee #301084271 03-6-2021 

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', page: 'home' });
});

router.get('/about.ejs', function(req, res, next) {
  res.render('index', { title: 'About Me', page: 'about' });
});

router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact me', page: 'contactme' });
});

router.get('/project', function(req, res, next) {
  res.render('index', { title: 'My project', page: 'project' });
});

router.get('/service', function(req, res, next) {
  res.render('index', { title: 'service', page: 'service' });
});

module.exports = router;
