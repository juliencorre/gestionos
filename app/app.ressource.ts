    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {Ressource} 				from './ressource';
    import {Role} 				from './role';    
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
            
    @Component({
    	templateUrl: 'template/app.ressource.html',
    	bindings: [HTTP_PROVIDERS]
    })
    
    export class AppRessource {

    	log='';
    	ressource:Ressource=new Ressource(0,'','','',0,'');
    	roles:Role[];
    	
    	
    	editable=false;
    	
    	people: Object[];
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 
	   	}
        
	    ngOnInit() {
	        let id = this._routeParams.get('id');
	        this.log=id;
	        
	        //recupere le projet
	        this._http.get('/test/ressource'+parseInt(id)+'.json').subscribe(res => {
		   	   	this.ressource = res.json();
		   	    });
	        
	        //recupere les clients
	        this._http.get('/test/roles.json').subscribe(res => {
		   	   	console.log('roles', res.json());
		   	   	this.roles = res.json();
		   	    });
	        
	      }
	    
	    onEdit(){
	    	this.editable=true;
	    	this.log="editable";
	    }
	    
	    onCancel(){
	    	//recupere le projet
	        this._http.get('/test/ressource'+this.ressource.id +'.json').subscribe(res => {
		   	   	this.ressource = res.json();
		   	    });
	        
	    	this.editable=false;
	    	this.log="not editable";
	    }
	    
	    onEditRessource(ressource:Ressource){
	    	this.editable=false;
	    	this.log="not editable";
	    }
	    
	    onBack(){
	    	this._router.navigate( ['Rh'] );
	    }

	}