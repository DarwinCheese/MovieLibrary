var express = require('express');
var routes = express.Router();


routes.get('/login', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({'pagina': 'Login'});
});

routes.get('/register', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({ 'pagina': 'Register!'});
});

module.exports = routes;