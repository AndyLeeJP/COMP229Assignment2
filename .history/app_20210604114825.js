//  Chaehyun Lee #301084271 03-6-2021 


var createError = require('http-errors'); //1 Load modules related to server connections and errors
var express = require('express');//2 Loading modules related to frameworks
var path = require('path');//3 Loads modules related to path management
var cookieParser = require('cookie-parser');//4 Load modules related to cookies
var logger = require('morgan');//5 Load modules related to log output


var indexRouter = require('./routes/index');//Get the contents of the top page.

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
