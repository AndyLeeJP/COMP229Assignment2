let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let contactController = require('../controllers/contact')


/**
 * Check if the user is logged in, and if not, send to login page
 * 
 * If the user is logged in, the next function is called.
 */
function requireAuth(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}

router.get('/', requireAuth, contactController.displayContactList);

//get route for displaying the add page - create operation
router.get('/add', requireAuth, contactController.displayAddPage);

//post route for processing the add page - create operation
router.post('/add', requireAuth, contactController.processAddPage);

//get route for displaying the edit page - update operation
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

//post route for processing the edit page - update operation
router.post('/edit/:id', requireAuth, contactController.processEditPage);

//get to perform deletion - delete operation
router.get('/delete/:id', requireAuth, contactController.performDelete);


module.exports = router;