var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();
app.io = require('socket.io')();


var price = 0;

app.io.on('connection', function (socket) {
	
	socket.emit('update', price);
	
	socket.on('priceUp', function (data) {
		if (parseInt(data) > price && parseInt(data) > 0){
			price = parseInt(data);
		}
		socket.emit('update', price);
	});
	
	socket.on('reinit', function () {
		price = 0;
		socket.emit('update', price);
	});
});

app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/templates', express.static(__dirname + '/views/templates/'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
