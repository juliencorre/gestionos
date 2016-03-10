var express = require('express');
var router = express.Router();
var tokenLib = require('../lib/token');
//var mongojs = require('mongojs');
//var db = mongojs('mongodb://admin:admin123@ds037827.mongolab.com:37827/ng2todoapp', ['todos']);
var mongoose = 		require('mongoose');

/////////////////////////////////////////////

var ProjetSchema = mongoose.Schema({
	nom: String, 
	client: {nom: String }, 
	avancement: Number, 
	marge: Number, 
	taches: [{ nom: String,charge:Number }] 
});

var ProjetModel = mongoose.model('projet', ProjetSchema);

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
//		        projets: 
//		        	[
//		        		{ 
//		        			"id": 1, 
//		        			"nom": "gestionos", 
//		        			"client": { "id": 1, "nom": "arnaud attagnant" }, 
//		        			"avancement": 1, 
//		        			"marge": 0, 
//		        			"taches": [ 
//		        			            { "id": 1, "nom": "creation projet","charge":2.5 }, 
//		        			            { "id": 2, "nom": "affichage projet","charge":2.5 } 
//		        			          ] 
//		        		},
//		        		{ 
//		        			"id": 2, 
//		        			"nom": "kstudio", 
//		        			"client": { "id": 2, "nom": "julien corre" }, 
//		        			"avancement": 1, 
//		        			"marge": 0, 
//		        			"taches": [ 
//		        			            { "id": 1, "nom": "OK","charge":2.5 }, 
//		        			            { "id": 2, "nom": "tache1","charge":2.5 },
//		        			            { "id": 3, "nom": "tache2","charge":2.5 },
//		        			            { "id": 4, "nom": "tache3","charge":2.5 },
//		        			            { "id": 5, "nom": "tache4","charge":2.5}
//		        			            
//		        			          ] 
//		        		}
//		        	]
		      });
			
		});
		
});

/* PROJET X */
router.get('/projet/:id', function(req, res) {
	
	var id=req.params.id;
	var projet;
	console.log('projet:'+id);
	
//	switch(id) {
//    case 1 :
//    	 projet={ 
//			    	"id": 1, 
//			    	"nom": "gestionos", 
//			    	"client": { "id": 1, "nom": "arnaud attagnant" }, 
//			    	"avancement": 1, 
//			    	"marge": 0, 
//			    	"taches": [ 
//			    	            { "id": 1, "nom": "creation projet","charge":2.5 }, 
//			    	            { "id": 2, "nom": "affichage projet","charge":3 } 
//			    	          ] 
//			    };
//        break;
//    case 2 :
//	        projet={ 
//	        	"id": 2, 
//	        	"nom": "kstudio", 
//	        	"client": { "id": 2, "nom": "julien corre" }, 
//	        	"avancement": 1, 
//	        	"marge": 0, 
//	        	"taches": [ 
//	        	            { "id": 1, "nom": "OK","charge":2.5 }, 
//	        	            { "id": 2, "nom": "tache1","charge":1 },
//	        	            { "id": 3, "nom": "tache2","charge":2 },
//	        	            { "id": 4, "nom": "tache3","charge":2.5 },
//	        	            { "id": 5, "nom": "tache4","charge":5 }
//	        	            
//	        	          ] 
//	        };
//        break;
//	}; 
	
	
	 projet={ 
		    	"id": 1, 
		    	"nom": "gestionos", 
		    	"client": { "id": 1, "nom": "arnaud attagnant" }, 
		    	"avancement": 1, 
		    	"marge": 0, 
		    	"taches": [ 
		    	            { "id": 1, "nom": "creation projet","charge":2.5 }, 
		    	            { "id": 2, "nom": "affichage projet","charge":3 } 
		    	          ] 
		    };
			 
	console.log('projet:'+projet);
	res.json({
        success: true,
        message: 'Enjoy your token!',
        token: "",
        decoded: "",
        projet: projet
        
      });


});

/* Racine de api */
router.post('/projet/new', function(req, res) {
	console.log('nouveau projet');

	// nom passé en paramètre
	var nouveauProjet= req.body.nouveauProjet;
	console.log('projet = '+nouveauProjet);
	
	//On se connecte à la base de données
	//N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
	mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) { throw err; }
	});
	
	var projetInstance = new ProjetModel(nouveauProjet);
	
	projetInstance.save({$inc: { id: 1}},function (err) {
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
	console.log('liste des ressources');
	
	var ressources=[ 
	        		{ "id": 1, "prenom": "julien", "nom": "corre", "mail": "jcorre@gmail.com", "salaire": "2000", "role": "developpeur" }, 
	        		{ "id": 2, "prenom": "arnaud", "nom": "Attagnant", "mail": "aattagnant@gmail.com", "salaire": "3000", "role": "directeur" } 
	        	];
		
		res.json({
	        success: true,
	        message: 'Enjoy your token!',
	        token: "",
	        decoded: "",
	        ressources:ressources
	      });

});

/* RESSOURCES */
router.get('/ressource/:id', function(req, res) {
	
	var id=req.params.id;
	console.log('ressource:'+id);
	
	var ressource={ "id": 1, "prenom": "julien", "nom": "corre", "mail": "jcorre@gmail.com", "salaire": "2000", "role": "developpeur" };
	
		res.json({
	        success: true,
	        message: 'Enjoy your token!',
	        token: "",
	        decoded: "",
	        ressource: ressource 
	      });

});

/* CLIENTS */
router.get('/clients', function(req, res, next) {
	console.log('liste des ressources');
	
	
		
		res.json({
	        success: true,
	        message: 'Enjoy your token!',
	        token: "",
	        decoded: "",
	        clients: 
	        	[ 
	        		{ "id": 1, "nom": "arnaud attagnant" }, 
	        		{ "id": 2, "nom": "julien corre" }
	        	]
	      });

});

/* CLIENT X */
router.get('/client/:id', function(req, res) {
	
	var id=req.params.id;
	var client;
	console.log('client:'+id);
	
	
	 client={ "id": 1, "nom": "arnaud attagnant" };
			 
	console.log('client:'+client);
	res.json({
        success: true,
        message: 'Enjoy your token!',
        token: "",
        decoded: "",
        client: client
        
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