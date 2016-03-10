    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {HTTP_PROVIDERS, Http} 	from 'angular2/http';
    import {AppMenu} 				from './app.menu';
            
    @Component({
    	templateUrl: 'template/app.projet.detail.html',
    	bindings: [HTTP_PROVIDERS],
    	directives: [AppMenu]
    })
    
    export class AppProjet {

    	log='';
    	projet:Projet=new Projet(0,'',new Client(0,''),0,0);
    	clients:Client[]=[];
    	
    	editable=false;
    	
    	people: Object[];
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 
				   	}
	   	
	    ngOnInit() {
	        let id = this._routeParams.get('id');
	        this.log=id;

	        //recupere le projet
	        this._http.get('http://localhost:3000/api/v1/projet/'+parseInt(id)).subscribe(res => {
		   	   	this.projet = res.json().projet;
		   	    });
	        
	        //recupere les clients
	        this._http.get('http://localhost:3000/api/v1/clients').subscribe(res => {
		   	   	console.log('projet', res.json().clients);
		   	   	this.clients = res.json();
		   	    });
	        
	      }
	    
	    onEdit(){
	    	this.editable=true;
	    	this.log="editable";
	    }
	    
	    onCancel(){
	    	let id = this._routeParams.get('id');
	    	//recupere le projet
	        this._http.get('http://localhost:3000/api/v1/projet/'+parseInt(id)).subscribe(res => {
		   	   	this.projet = res.json().projet;
		   	    });
	        
	    	this.editable=false;
	    	this.log="not editable";
	    }
	    
	    onEditProjet(projet:Projet){
	    	this.editable=false;
	    	this.log="not editable";
	    }
	    
	    onAddTache()
	    {
	    	this.log='Add tache';
	    	this.projet.taches.push(new Tache(0,''));
	    }
	    
	    onRemoveTache(tache:Tache)
	    {
	    	this.log='Remove tache:'+tache.id;
	    	var removeIndex = this.projet.taches.indexOf(tache);
	    	if (removeIndex > -1) {
	    		this.projet.taches.splice(removeIndex, 1);
	    	}
	    	this.log='remove index:'+removeIndex;
	    }
	    
	    onBack(){
	    	this._router.navigate( ['Projets'] );
	    }

	}