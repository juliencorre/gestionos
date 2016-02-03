    import {Component,  OnInit, Input, Output, EventEmitter} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {Ressource} 				from './ressource';
    import {Role} 					from './role';    
    import {HTTP_PROVIDERS, Http} 	from 'angular2/http';
            
    @Component({
    	selector: 'ressource-form',
    	templateUrl: 'template/app.ressource.form.html',
    	bindings: [HTTP_PROVIDERS]
    })
    
    export class AppRessourceForm {

    	@Input() ressource:Ressource;
    	
    	@Output() editRessource = new EventEmitter();
    	@Output() cancel = new EventEmitter();
    	
    	log='';
    	
    	roles:Role[];

	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 
	   	 //recupere les clients
	        this._http.get('/test/roles.json').subscribe(res => {
		   	   	console.log('roles', res.json());
		   	   	this.roles = res.json();
		   	    });
	   	}
	    
	    onCancel(){
	    	//recupere le projet
	        this._http.get('/test/ressource'+this.ressource.id +'.json').subscribe(res => {
		   	   	this.ressource = res.json();
		   	    });
	        
	    	this.log="onCancel form";
	    	this.cancel.next(this.ressource);
	    }
	    
	    onEditRessource(){
	    	this.log="onEditRessource form";
	    	this.editRessource.next(this.ressource);
	    }
	}