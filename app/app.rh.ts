    import {Component,  OnInit} 	from 'angular2/core';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Ressource} 				from './ressource';
    import {AppRessourceForm} 		from './app.ressource.form';    
    import {HTTP_PROVIDERS, Http} 	from 'angular2/http';
            
    @Component({
    	templateUrl: 'template/app.rh.html',
    	bindings: [HTTP_PROVIDERS],
    	directives: [AppRessourceForm]
    })
    
    export class AppRh {

    	log='';
    	ressources:Ressource[];
    	isNewRessource=false;
    	
    	ressource:Ressource=new Ressource(0,'','','',0,'');
    	
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,
	   				private _http:Http) { }
	   	
	    ngOnInit() {
	        
	        // recupere les ressources de l'entreprise
	        this._http.get('/test/ressources.json').subscribe(res => {
		   	   	this.ressources = res.json();
		   	   	this.log=res.json() ;
		   	    });
	        
	      }
	    
	    onSelectRessource(ressource:Ressource){
	    	this._router.navigate( ['AppRessource', { id: ressource.id }] );
	    }
	    
	    onClick(){
	    	this.isNewRessource = true;
	    	this.log="isNewRessource true";
	    }
	    
	    onCancel(ressource:Ressource){
	    	this.log="onCancel";
	    	this.isNewRessource = false;
	    }
	    
	    onSaved(ressource:Ressource){
	    	this.log="onSaved";
	    	this.isNewRessource = false;
	    }
	    
	}