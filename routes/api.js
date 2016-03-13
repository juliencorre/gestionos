var express = require('express');
var router = express.Router();
var tokenLib = require('../lib/token');
//var mongojs = require('mongojs');
//var db = mongojs('mongodb://admin:admin123@ds037827.mongolab.com:37827/ng2todoapp', ['todos']);
var mongoose = 		require('mongoose');

/////////////////////////////////////////////

var ProjetSchema = mongoose.Schema({
	nom: String, 
	client_id : String, 
	avancement: Number, 
	marge: Number, 
	taches: [{_id:Number, nom: String,charge:Number }] 
});

var ProjetModel = mongoose.model('projet', ProjetSchema);

var ClientSchema = mongoose.Schema({
	nom: String
});

var ClientModel = mongoose.model('client', ClientSchema);

var RessourceSchema = mongoose.Schema({
	prenom: String,
	nom: String,
	mail:String,
	salaire:Number,
	role:String	
});

var RessourceModel = mongoose.model('ressource', RessourceSchema);
/////////////////////////////////////////////


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
	        	_id:7,
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
 

/* PROJETS */
router.get('/projets', function(req, res, next) {
	console.log('liste des projets');
	
	//On se connecte à la base de données
	//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
	mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) { throw err; }
	});
	
	ProjetModel.find(null, function (err, comms) {
		  if (err) { throw err; }
		  // comms est un tableau de hash
		  console.log(comms);
		  var projets=comms;
		// On se déconnecte de MongoDB maintenant
		  mongoose.connection.close();
		  
		  
		  
			console.log("Projets = "+projets);
			
			res.json({
		        success: true,
		        message: 'Enjoy your token!',
		        token: "",
		        decoded: "",
		        projets:projets
		      });
			
		});
		
});

/* PROJET X */
router.get('/projet/:id', function(req, res) {
	
	var id=req.params.id;
	console.log('projet:'+id);

	
	//On se connecte à la base de données
	//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
	mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) { throw err; }
	});
	
	// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
	ProjetModel.findOne({ '_id': id }, function (err, projet) {
	  if (err) return handleError(err);
	  console.log(projet);
	  
		// On se déconnecte de MongoDB maintenant
	  mongoose.connection.close();
	  
		res.json({
	        success: true,
	        message: 'Enjoy your token!',
	        token: "",
	        decoded: "",
	        projet:projet
	      });
		
	});

});

/* PROJET NEW */
router.post('/projet/new', function(req, res) {
	console.log('nouveau projet');
	 
	// nom passé en paramètre
	var nouveauProjet= req.body.nouveauProjet;

	//On se connecte à la base de données
	//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
	mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) {
		// On se déconnecte de MongoDB maintenant
		  mongoose.connection.close();
		  throw err; 
		  }
	});
	
	var projetInstance = new ProjetModel(nouveauProjet);
	
	projetInstance.save(function (err) {
		  if (err) { throw err; }
		  console.log('projet ajouté avec success !');
		  console.log(projetInstance);
		  // On se déconnecte de MongoDB maintenant
		  mongoose.connection.close();
		});
	
		
		res.json({
	        success: true,
	        message: 'Enjoy your token!',
	        token: '',
	        decoded: '',
	        projet: nouveauProjet
	      });

});

/* RESSOURCES */
router.get('/ressources', function(req, res, next) {
//	console.log('liste des ressources');
//	
//	var ressources=[ 
//	        		{ "_id": 1, "prenom": "julien", "nom": "corre", "mail": "jcorre@gmail.com", "salaire": "2000", "role": "developpeur" }, 
//	        		{ "_id": 2, "prenom": "arnaud", "nom": "Attagnant", "mail": "aattagnant@gmail.com", "salaire": "3000", "role": "directeur" } 
//	        	];
//		
//		res.json({
//	        success: true,
//	        message: 'Enjoy your token!',
//	        token: "",
//	        decoded: "",
//	        ressources:ressources
//	      });

		
		console.log('liste des ressources');
		
		//On se connecte à la base de données
		//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
		mongoose.connect('mongodb://localhost/test', function(err) {
		if (err) { throw err; }
		});
		
		RessourceModel.find(null, function (err, comms) {
			  if (err) { throw err; }
			  // comms est un tableau de hash
			  console.log(comms);
			  var ressources=comms;
			// On se déconnecte de MongoDB maintenant
			  mongoose.connection.close();
			  
			  
				console.log("ressources = "+ressources);
				
				res.json({
			        success: true,
			        message: 'Enjoy your token!',
			        token: "",
			        decoded: "",
			        ressources:ressources
			      });
				
			});
		
});

/* RESSOURCE X */
router.get('/ressource/:id', function(req, res) {
	
//	var id=req.params.id;
//	console.log('ressource:'+id);
//	
//	var ressource={ "_id": 1, "prenom": "julien", "nom": "corre", "mail": "jcorre@gmail.com", "salaire": "2000", "role": "developpeur" };
//	
//		res.json({
//	        success: true,
//	        message: 'Enjoy your token!',
//	        token: "",
//	        decoded: "",
//	        ressource: ressource 
//	      });

		
		var id=req.params.id;
		console.log('ressource:'+id);

		
		//On se connecte à la base de données
		//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
		mongoose.connect('mongodb://localhost/test', function(err) {
		if (err) { throw err; }
		});
		
		// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
		RessourceModel.findOne({ '_id': id }, function (err, ressource) {
		  if (err) return handleError(err);
		  console.log(ressource);
		  
			// On se déconnecte de MongoDB maintenant
		  mongoose.connection.close();
		  
			res.json({
		        success: true,
		        message: 'Enjoy your token!',
		        token: "",
		        decoded: "",
		        ressource:ressource
		      });
			
		});
		
});

/* RESSOURCES NEW */
router.post('/ressource/new', function(req, res) {
	console.log('nouvelle ressource');
	 
	// nom passé en paramètre
	var newRessource= req.body.newRessource;
	
	console.log(newRessource);

	//On se connecte à la base de données
	//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
	mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) {
		// On se déconnecte de MongoDB maintenant
		  mongoose.connection.close();
		  throw err; 
		  }
	});
	
	var ressourceInstance = new RessourceModel(newRessource);
	
	ressourceInstance.save(function (err) {
		  if (err) { throw err; }
		  console.log('ressource ajoutée avec success !');
		  console.log(ressourceInstance);
		  // On se déconnecte de MongoDB maintenant
		  mongoose.connection.close();
		});
	
		
		res.json({
	        success: true,
	        message: 'Enjoy your token!',
	        token: '',
	        decoded: '',
	        ressource: newRessource
	      });

});

/* CLIENTS */
router.get('/clients', function(req, res, next) {
	
	console.log('liste des clients');
	
	//On se connecte à la base de données
	//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
	mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) { throw err; }
	});
	
	ClientModel.find(null, function (err, comms) {
		  if (err) { throw err; }
		  // comms est un tableau de hash
		  console.log(comms);
		  var clients=comms;
		// On se déconnecte de MongoDB maintenant
		  mongoose.connection.close();
		  
		  
			console.log("Clients = "+clients);
			
			res.json({
		        success: true,
		        message: 'Enjoy your token!',
		        token: "",
		        decoded: "",
		        clients:clients
		      });
			
		});
});

/* CLIENT X */
router.get('/client/:id', function(req, res) {
	
	var id=req.params.id;
	console.log('client:'+id);

	//On se connecte à la base de données
	//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
	mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) { throw err; }
	});
	
	// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
	ClientModel.findOne({ '_id': id }, function (err, client) {
	  if (err) return handleError(err);
	  console.log(client);
	  
		// On se déconnecte de MongoDB maintenant
	  mongoose.connection.close();
	  
		res.json({
	        success: true,
	        message: 'Enjoy your token!',
	        token: "",
	        decoded: "",
	        client:client
	      });
		
	});
	

			

//	//On se connecte à la base de données
//	//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
//	mongoose.connect('mongodb://localhost/test', function(err) {
//	if (err) { throw err; }
//	});
//	
//	ClientModel.find({ '_id': id }, function (err, comms) {
//		  if (err) { throw err; }
//		  // comms est un tableau de hash
//		  console.log('comms='+comms);
//		  var client=comms;
//		// On se déconnecte de MongoDB maintenant
//		  mongoose.connection.close();
//		  
//		  
//			console.log("Client = "+client);
//			
//			res.json({
//		        success: true,
//		        message: 'Enjoy your token!',
//		        token: "",
//		        decoded: "",
//		        client:client
//		      });
//			
//		});


});

/* Racine de api */
router.post('/client/new', function(req, res) {
	console.log('nouveau client');
	 
	// nom passé en paramètre
	var nouveauClient= req.body.nouveauClient;
	//On se connecte à la base de données
	//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
	mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) {
		// On se déconnecte de MongoDB maintenant
		  mongoose.connection.close();
		  throw err; 
		  }
	});
	
	var clientInstance = new ClientModel(nouveauClient);
	
	clientInstance.save(function (err) {
		  if (err) { throw err; }
		  console.log('client ajouté avec success !');
		  console.log(clientInstance);
		  // On se déconnecte de MongoDB maintenant
		  mongoose.connection.close();
		});
	
		
		res.json({
	        success: true,
	        message: 'Enjoy your token!',
	        token: '',
	        decoded: '',
	        client: nouveauClient
	      });

});

/* PWA */
router.get('/pwa', function(req, res) {
	
	var pwa;
	
	pwa=[
	
{ 
	"id": 1, 
	"nom": "gestionos", 
	"taches": [ 
	            { "id": 1, "nom": "creation projet", "activites": [	{"date":"01/02/2016","temps":4},
					            									{"date":"02/02/2016","temps":0},
					            									{"date":"03/02/2016","temps":0},
					            									{"date":"04/02/2016","temps":1},
					            									{"date":"05/02/2016","temps":2}]
	            }, 
	            { "id": 2, "nom": "affichage projet", "activites": [{"date":"01/02/2016","temps":0},
					            									{"date":"02/02/2016","temps":1},
					            									{"date":"03/02/2016","temps":0},
					            									{"date":"04/02/2016","temps":1},
					            									{"date":"05/02/2016","temps":0}]
	            }  
	          ] 
},
{ 
	"id": 2, 
	"nom": "kstudio", 
	"taches": [ 
	            { "id": 1, "nom": "tache 1", "activites": [	{"date":"01/02/2016","temps":4},
					            									{"date":"02/02/2016","temps":0},
					            									{"date":"03/02/2016","temps":0},
					            									{"date":"04/02/2016","temps":1},
					            									{"date":"05/02/2016","temps":2}]
	            }, 
	            { "id": 2, "nom": "tache 2", "activites": [{"date":"01/02/2016","temps":0},
					            									{"date":"02/02/2016","temps":1},
					            									{"date":"03/02/2016","temps":0},
					            									{"date":"04/02/2016","temps":1},
					            									{"date":"05/02/2016","temps":0}]
	            }  
	          ] 
}


];
			 
	console.log('pwa:'+pwa);
	res.json({
        success: true,
        message: 'Enjoy your token!',
        token: "",
        decoded: "",
        pwa: pwa
        
      });


});

/* GET About */
router.get('/about', function(req, res, next) {
	console.log('racine de api');
    res.json({Nom:'API Gestionos',Autheur:'Julien Corre', version: '1.0' });
});

module.exports = router;