    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {Ressource} 				from './ressource';
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
            
    @Component({
    	templateUrl: 'template/app.rh.html',
    	bindings: [HTTP_PROVIDERS]
    })
    
    export class AppRh {

    	log='';
    	ressources:Ressource[];
    	
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 
				   	}
	   	
	    ngOnInit() {
	        let id = this._routeParams.get('id');
	        this.log=id;
	        
	        //recupere les ressources de l'entreprise
	        this._http.get('/test/ressources.json').subscribe(res => {
		   	   	this.ressources = res.json();
		   	   	this.log=res.json() ;
		   	    });
	        
	      }
	    onSelectRessource(ressource:Ressource){
	    	this._router.navigate( ['AppRessource', { id: ressource.id }] );
	    }
	    
	    onClick(){
	    	
	    }
	}