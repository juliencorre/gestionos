    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
            
    @Component({
    	templateUrl: 'template/app.pwa.html',
    	bindings: [HTTP_PROVIDERS]
    })
    
    export class AppPwa {

    	log='';
    	
    	people: Object[];
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 
				   	}
	   	
	    ngOnInit() {
	        
	      }
	

	}