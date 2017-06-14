var express = require('express');
var routes = express.Router();


routes.get('/login', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({'Pagina': 'Login'});
});

routes.get('/register', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({ 'Pagina': 'Register'});
});

module.exports = routes;