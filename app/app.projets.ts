    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Client}		from './client';
    import {Router}		from 'angular2/router';
          
    @Component({
      templateUrl: 'template/app.projets.html'
    })
    
    export class AppProjets {
		
		projets:Projet[];
		log='';
		  
		constructor(private _router: Router) {
	      this.projets = [
		    new Projet(1,'projet1',new Client(1,'client1'),50,23),
		    new Projet(2,'projet2',new Client(2,'client2'),75,53)
		  ];
	    }
	    
	    onClick(){
	    	this.log='click';
	    	this._router.navigate(['NouveauProjet'] );
	    }
	    
	    onSelectProjet(projet:Projet){
	    	this.log=projet.id.toString();
	    	this._router.navigate( ['AppProjet', { id: projet.id }] );
	    }
	    
	    onSelectClient(client:Client){
	    	this.log=client.id.toString();
	    	this._router.navigate( ['AppClient', { id: client.id }] );
	    }

	}