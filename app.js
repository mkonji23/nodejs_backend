var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registRouter = require('./routes/regist');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('etag', false);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/regist', registRouter);
app.use('/api/regist', registRouter);

app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	//sss
	res.render('error');
});

// view engine setup

// // insert
// app.post('/regist', function(req, res) {
//     var user = {
//         'userid': req.body.userid,
//         'name': req.body.name,
//         'address': req.body.address
//     };
//     var query = connection.query('insert into users set ?', user, function(err, result) {
//         if (err) {
//             console.error(err);
//             throw err;
//         }
//         res.status(200).send('success');
//     });
// });
module.exports = app;
