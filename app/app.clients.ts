    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {HTTP_PROVIDERS, Http} 	from 'angular2/http';
            
    @Component({
    	templateUrl: 'template/app.clients.html',
    	bindings: [HTTP_PROVIDERS]
    })
    
    export class AppClients {

    	clients:Client[]=[];
    	
	   	constructor(private _router: Router,private _http:Http) { 
	   		
	        this._http.get('/test/clients.json').subscribe(res => {
		   	      
		   	   	console.log('projet', res.json());
		   	   	this.clients = res.json();
		   	    });
				   	}
	   	
	   	onSelectClient(client:Client){
	    	this._router.navigate( ['AppClient', { id: client.id }] );
	    }

	}