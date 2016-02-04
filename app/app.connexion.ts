    import {Component} 					from 'angular2/core';
    import {User} 						from './user';
    import {NgForm}						from 'angular2/common';
    import {Router}						from 'angular2/router';
    import {AppConnexionService}        from './app.connexion.service';
    import {Ressource} 					from './ressource';
    
    @Component({
      templateUrl: 'template/app.connexion.html',
      providers:[AppConnexionService]
    })
    export class AppConnexion { 
    	data='...';
	    user = new User('', '');
	    log;
	    ressources;
	    
	   	constructor(
		    private _router: Router,private connexionService:AppConnexionService) { }
    
	    onSubmit(userConnexion:User) { 
	    	this.log='connexion'
	    	this.data='OK !';
	    	this.data=userConnexion.mail;
	    	this.connexionService.authenticate2(userConnexion).subscribe(
                    ressources => this.ressources = ressources,
                    error =>  this.log = <any>error);
	    	
	    }
	    
	    }