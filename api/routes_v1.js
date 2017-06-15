var express = require('express');
var routes = express.Router();
var auth = require('../auth/authentication');
var CryptoJS = require('crypto-js');


routes.post('/login', function(req, res) {

    // Even kijken wat de inhoud is
    console.dir(req.body);

    // De username en pwd worden meegestuurd in de request body
    var username = req.body.username;
    var password = req.body.password;

    // Dit is een dummy-user - die haal je natuurlijk uit de database.
    var _dummy_username = "username";
    var _dummy_password = "test";

    // Kijk of de gegevens matchen. Zo ja, dan token genereren en terugsturen.
    if (username == _dummy_username && password == _dummy_password) {
        var token = auth.encodeToken(username);
        res.status(200).json({
            "token": token,
        });
    } else {
        console.log('Input: username = ' + username + ', password = ' + password);
        res.status(401).json({ "error": "Invalid credentials, bye" })
    }

});

// Hiermee maken we onze router zichtbaar voor andere bestanden. 

routes.post('/register', function(req, res){

	console.dir(req.body);

	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var username = req.body.username;
    var password = req.body.password;
    var EncPass = CryptoJS.MD5(password);

    //Create Date
    var dateCreated = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	dateCreated = mm+'-'+dd+'-'+yyyy;

	//Registration
   
    // if (username == (database user) && password == (database pass)) {
        
    // } else {
    //     console.log('Input: username = ' + username + ', password = ' + password);
    //     res.status(401).json({ "error": "Account already exists with that username, cya" })
    // }


});

module.exports = routes;