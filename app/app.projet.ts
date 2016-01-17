    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
            
    @Component({
    	templateUrl: 'template/app.projet.detail.html',
    	bindings: [HTTP_PROVIDERS]
    })
    
    export class AppProjet {

    	log='';
    	projet:Projet=new Projet(0,'',new Client(0,''),0,0);
    	
    	people: Object[];
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 
				   	}
	   	
	    ngOnInit() {
	        let id = this._routeParams.get('id');
	        this.log=id;
	        this._http.get('/test/projet'+parseInt(id)+'.json').subscribe(res => {
		   	      
		   	   	this.projet = res.json();
		   	    });
	        
	      }

	}