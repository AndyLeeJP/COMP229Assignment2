//   Chaehyun Lee #301084271 03-6-2021 

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);
/* GET home page. */
router.get('/home', indexController.displayHomePage);
/* GET about us page. */
router.get('/about', indexController.displayAboutPage);
/* GET product page. */
router.get('/project', indexController.displayProductPage);
/* GET service page. */
router.get('/service', indexController.displayServicePage);
/* GET contact page. */
router.get('/contact', indexController.displayContactPage);
/* GET route for displaying the login page. */
router.get('/login', indexController.displayLoginPage);
/* POST route for processing the login page. */
router.post('/login', indexController.processLoginPage);
/* GET route for displaying the login page. */
router.get('/register', indexController.displayRegisterPage);
/* POST route for processing the login page. */
router.post('/register', indexController.processRegisterPage);
/* GET product page. */
router.get('/logout', indexController.performLogout);

module.exports = router;

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', page: 'home' });
// });

// router.get('/about.ejs', function(req, res, next) {
//   res.render('index', { title: 'About Me', page: 'about' });
// });

// router.get('/contactme.ejs', function(req, res, next) {
//   res.render('index', { title: 'Contact me', page: 'contactme' });
// });

// router.get('/project.ejs', function(req, res, next) {
//   res.render('index', { title: 'My project', page: 'project' });
// });

// router.get('/service.ejs', function(req, res, next) {
//   res.render('index', { title: 'service', page: 'service' });
// });

// router.get('/login.ejs', function(req, res, next) {
//   res.render('index', { title: 'log in', page: 'login' });
// });


