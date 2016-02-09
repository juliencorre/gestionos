var express = require('express');
var router = express.Router();
var tokenLib = require('../lib/token');
//var mongojs = require('mongojs');
//var db = mongojs('mongodb://admin:admin123@ds037827.mongolab.com:37827/ng2todoapp', ['todos']);
 
/* Racine de api */
router.post('/login', function(req, res) {
	console.log('racine de api');
	
	// nom passé en paramètre
	var user= req.body.user;
	console.log('user = '+user.mail);
	
	if(typeof user != 'undefined' && user!= null 
			
	) // Any scope)
	{
		// recupere un token
		var token = tokenLib.getToken('julien');
		
		var decoded = tokenLib.verifyToken(token);
		
		res.json({
	        success: true,
	        message: 'Enjoy your token!',
	        token: token,
	        decoded: decoded,
	        ressource: {
	        	id:7,
	        	prenom:'julien',
	        	nom:'corre',
	        	mail:'jcorre@gmail.com',
	        	salaire:'5000',
	        	role:'developpeur'}
	      });
	}
	else
	{
		res.json({
	        success: false,
	        message: 'no user!',
	        token: null,
	        decoded: null
	      });
	}
	

});
 
/* GET About */
router.get('/about', function(req, res, next) {
	console.log('racine de api');
    res.json({Nom:'API Gestionos',Autheur:'Julien Corre', version: '1.0' });
});

module.exports = router;