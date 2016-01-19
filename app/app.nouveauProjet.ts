    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Router}		from 'angular2/router';
  	import {NgForm}		from 'angular2/common';
    import {Client} 	from './client';
    import {Tache} 		from './tache';
            
    @Component({
      templateUrl: 'template/app.projet.html',
      inputs: ['projet']
    })
    
    export class AppNouveauProjet {

    	log='';
		projet:Projet=new Projet(0,'',new Client(0,''),0,0);
    	clients:Client[];
    	taches:Tache[];
    	index:number=0;
    	
	   	constructor(private _router: Router) { 
	   			this.clients = [
	   	  		    new Client(1,'client1'),
	   	  		    new Client(2,'client2')
	   	  		  ];
	   			this.taches = [];
	   			
	   	}
	   	
		
	    
	    onCreationProjet(nouveauProjet:Projet) { 
	    	this.log=nouveauProjet.nom;
	    	this._router.navigate(['Projets'] );
	    }
	    
	    onAddTache()
	    {
	    	this.log='Add tache';
	    	this.index++;
	    	this.taches.push(new Tache(this.index,''));
	    }
	    
	    onRemoveTache(tache:Tache)
	    {
	    	this.log='Remove tache:'+tache.id;
	    	var removeIndex = this.taches.indexOf(tache);
	    	if (removeIndex > -1) {
	    		this.taches.splice(removeIndex, 1);
	    	}
	    	this.log='remove index:'+removeIndex;
	    }

	}