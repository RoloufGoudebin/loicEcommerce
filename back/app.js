import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const firebaseConfig = {
  apiKey: "AIzaSyCN0iIkpDseo0dWeV76eLfkMouJAjykAMs",
  authDomain: "loicecommerce-87dcf.firebaseapp.com",
  databaseURL: "https://loicecommerce-87dcf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "loicecommerce-87dcf",
  storageBucket: "loicecommerce-87dcf.appspot.com",
  messagingSenderId: "963093991826",
  appId: "1:963093991826:web:11bd01fd59ce7560b3714b",
  measurementId: "G-ZBP82WXYZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
