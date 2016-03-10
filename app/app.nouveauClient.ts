    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Router}		from 'angular2/router';
  	import {NgForm}		from 'angular2/common';
    import {Client} 	from './client';
    import {Tache} 		from './tache';
    import {AppMenu} 				from './app.menu';
            
    @Component({
      templateUrl: 'template/app.nouveau.client.html',
      directives: [AppMenu]
    })
    
    export class AppNouveauClient {

    	log='';
        client:Client=new Client(0,'');
    	
	   	constructor(private _router: Router) { 	   			
	   	}

	    onCreationClient(client:Client) { 
	    	this.log=client.nom;
	    	this._router.navigate(['Clients'] );
	    }

	}