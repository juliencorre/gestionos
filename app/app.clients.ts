    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {HTTP_PROVIDERS, Http} 	from 'angular2/http';
    import {AppMenu} 					from './app.menu';
    
    @Component({
    	templateUrl: 'template/app.clients.html',
    	bindings: [HTTP_PROVIDERS],
    	directives: [AppMenu]
    })
    
    export class AppClients {

    	clients:Client[]=[];
        log='';
    	
	   	constructor(private _router: Router,private _http:Http) { 	        
	        
		        this._http.get('http://localhost:3000/api/v1/clients').subscribe(res => {
			   	   	console.log('clients', res.json());
			   	   	this.clients = res.json().clients;
			   	    });
	   	
				   	}
	   	
	   	onSelectClient(client:Client){
	    	this._router.navigate( ['AppClient', { id: client.id }] );
	    }
        
        onClick(){
        this.log='click';
	    	this._router.navigate(['NouveauClient'] );
            }
        
	}