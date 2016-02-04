    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Router}		from 'angular2/router';
  	import {NgForm}		from 'angular2/common';
    import {Client} 	from './client';
    import {Tache} 		from './tache';
    import {HTTP_PROVIDERS, Http} 	from 'angular2/http';
    
    @Component({
      templateUrl: 'template/app.projet.html',
      inputs: ['projet']
    })
    
    export class AppNouveauProjet {

    	log='';
		projet:Projet=new Projet(0,'',new Client(0,''),0,0);
    	clients:Client[];
    	index:number=0;
    	
	   	constructor(private _router: Router,private _http:Http) { 
	   		
	   		this._http.get('/test/clients.json').subscribe(res => {
		   	   	console.log('projet', res.json());
		   	   	this.clients = res.json();
		   	    });
	   	}
		
	    
	    onCreationProjet(nouveauProjet:Projet) { 
	    	this.log=nouveauProjet.nom;
	    	this._router.navigate(['Projets'] );
	    }
	    
	    onAddTache()
	    {
	    	this.log='Add tache';
	    	this.index++;
	    	this.projet.taches.push(new Tache(this.index,'',0,null));
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

	}