//  Chaehyun Lee #301084271 03-6-2021 


var createError = require('http-errors'); //1 Load modules related to server connections and errors
var express = require('express');//2 Loading modules related to frameworks
var path = require('path');//3 Loads modules related to path management
var cookieParser = require('cookie-parser');//4 Load modules related to cookies
var logger = require('morgan');//5 Load modules related to log output

//module for authentication
var session  = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');
var localStrategy = passportLocal.Strategy;
var flash = require('connect-flash');

//Database Setup
var mongoose = require('mongoose');
var DB = require('./db');

// point mongoose to the DB URL
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

var mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB');
});

var indexRouter = require('../routes/index');//Get the contents of the top page.
var usersRouter = require('../routes/users');
var contactsRouter = require('../routes/contactList');

var app = express();//10 Put the result of the 'express()' module into 'app'.

// view engine setup
app.set('views', path.join(__dirname, '../views'));// Check that the template files are in 'views/'.
app.set('view engine', 'ejs');//Set the template engine to 'ejs'

app.use(logger('dev'));// Use 'dev' as the format for log output
app.use(express.json());//Use a method to parse json files
app.use(express.urlencoded({ extended: false }));//Use URL encoding method without extension
app.use(cookieParser());// Using the method to parse cookies
app.use(express.static(path.join(__dirname, '../public')));//Understand that static files are in 'public/'.
app.use(express.static(path.join(__dirname, '../node_modules')));

//setUp express session
app.use(session({
  secret: "secret",
  saveUninitialized: false,
  resave: false
}));

//initialize flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// create a User Model Instance
let User = require('../models/user');

//implement a UserAuthentication Strategy
passport.use(User.createStrategy());

//serialize and deserialize the User  info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);//Display 'index.js' when accessing the top page
app.use('/users', usersRouter);
app.use('/contact-list', contactsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});//If you get a 404 error, move on to the next process for now

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'Error'});
});// If any of the contents of 'err.status' is a 500 error, display the error contents on the screen.

module.exports = app;
