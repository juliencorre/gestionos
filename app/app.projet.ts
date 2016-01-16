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
    	projet:Projet='';
    	taches:Tache[]=[];
    	tache1:Tache;
    	tache2:Tache;
    	
    	people: Object[];
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 
//	   	 this._http.get('/test/projet1.json').subscribe(res => {
//	   	      this.log = res.json();
//	   	    });
				   	}
	   	
	    ngOnInit() {
	        let id = this._routeParams.get('id');
//	        this.projet=new Projet(parseInt(id),'nom','client',0,0);
//
//		    this.tache1=new Tache(1,'tache 1');
//		    this.tache2=new Tache(2,'tache 2');
//	        this.taches.push(this.tache1);
//	        this.taches.push(this.tache2);
//	        
//	        this.projet.setTaches(this.taches);
	        this._http.get('/test/projet'+parseInt(id)+'.json').subscribe(res => {
		   	      
		   	   	console.log('projet', res.json());
		   	   	this.projet = res.json();
		   	    });
	        
	      }

	}