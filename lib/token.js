
var jwt = require('jwt-simple'); // used to create, sign, and verify tokens
		var config = require('../config'); // get our config file
module.exports = {

	// =======================
	// configuration =========
	// =======================
	// app.set('superSecret', config.secret); // secret variable

	getToken : function(user) {
		
		console.log('User: '+user);
		
		// create a token
		var token = jwt.encode(user, config.secret);
		
		console.log('Token encoded : '+token);
		
		// renoi le token
		return token;
	},
	
	verifyToken : function(token){
		try {
			console.log('Token : '+token);
			var decoded = jwt.decode(token, config.secret);
			console.log('Token decoded: '+decoded);
		}
		 catch (err) {
			 console.error('Erreur lors du decodage du Token: '+err.message);
			    return err.message;
			  }
		
		return decoded;
	}

};