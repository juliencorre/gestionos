    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Router}		from 'angular2/router';
  	import {NgForm}		from 'angular2/common';
    import {Client} 	from './client';
    import {Tache} 		from './tache';
    import {HTTP_BINDINGS,Http, Response,Headers, RequestOptions} 	from 'angular2/http';
    import {AppMenu} 				from './app.menu';
    import {ProjetResponse} 		from './model/projet.response';
    
    @Component({
      templateUrl: 'template/app.projet.html',
      inputs: ['projet'],
      directives: [AppMenu]
    })
    
    export class AppNouveauProjet {

    	log='';
		projet:Projet=new Projet(0,'',new Client(0,''),0,0);
    	clients:Client[];
    	index:number=0;
    	
    	private _Url = 'http://localhost:3000/api/v1/projet/new';
    	
	   	constructor(private _router: Router,private _http:Http) { 
	   		
	   		//recupere les clients
	        this._http.get('http://localhost:3000/api/v1/clients').subscribe(res => {
		   	   	console.log('projets', res.json().clients);
		   	   	this.clients = res.json().clients;
		   	    });
	        
	   	}
		
	    
	    onCreationProjet(nouveauProjet:Projet) { 
	    	console.log(nouveauProjet);
	    	this.log=nouveauProjet.nom;
	    	
	    	let body = JSON.stringify({ nouveauProjet });
		    let headers = new Headers({ 'Content-Type': 'application/json' });
		    let options = new RequestOptions({ headers: headers });
		    
			this._http.post(this._Url, body, options).subscribe(res => {
				console.log(res.json().projet);
			});
	  
	        
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