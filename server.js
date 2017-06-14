var http = require('http');
var express = require('express');
var routes_v1 = require('./api/routes_v1');
var routes_films = require('./api/routes_films');
var routes_rentals = require('./api/routes_rentals');

var app = express();

app.use('/api/v1', routes_v1);
app.use('/api/v1/films', routes_films);
app.use('/api/v1/rentals', routes_rentals);

app.listen(process.env.PORT || 3000, function(){
	console.log('Server is listening on port 3000');	
});

module.exports = app;