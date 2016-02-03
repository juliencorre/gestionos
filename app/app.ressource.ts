    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {Ressource} 				from './ressource';
    import {Role} 					from './role';    
    import {HTTP_PROVIDERS, Http} 	from 'angular2/http';
    import {AppRessourceForm} 		from './app.ressource.form';
    
    @Component({
    	templateUrl: 'template/app.ressource.html',
    	bindings: [HTTP_PROVIDERS],
    	directives: [AppRessourceForm]
    })
    
    export class AppRessource {

    	log1='';
    	ressource:Ressource=new Ressource(0,'','','',0,'');
    	
    	editable=false;
    	
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 
	   	}
        
	    ngOnInit() {
	        let id = this._routeParams.get('id');
	        this.log1=id;
	        
	        //recupere le projet
	        this._http.get('/test/ressource'+parseInt(id)+'.json').subscribe(res => {
		   	   	this.ressource = res.json();
		   	    });
	        
	      }
	    
	    onEdit(){
	    	this.editable=true;
	    	this.log1="editable";
	    }
	    
	    onCancel(ressource:Ressource){
	    	this.editable=false;
	    	this.log1="not editable";
	    }
	    
	    onSaved(ressource:Ressource){
	    	this.editable=false;
	    	this.log1="not editable";
	    }
	    
	    onBack(){
	    	this._router.navigate( ['Rh'] );
	    }
	}