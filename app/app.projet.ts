    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
            
    @Component({
      templateUrl: 'template/app.projet.detail.html'
    })
    
    export class AppProjet {

    	log='';
    	projet:Projet;
    	taches:Tache[]=[];
    	tache1:Tache;
    	tache2:Tache;
    	
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams) { 
	
	   	}
	   	
	    ngOnInit() {
	        let id = this._routeParams.get('id');
	        this.projet=new Projet(parseInt(id),'nom','client',0,0);

		    this.tache1=new Tache(1,'tache 1');
		    this.tache2=new Tache(2,'tache 2');
	        this.taches.push(this.tache1);
	        this.taches.push(this.tache2);
	        
	        this.projet.setTaches(this.taches);
	      }


	}