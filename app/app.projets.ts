    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Client}		from './client';
    import {Router}		from 'angular2/router';
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
    import {UserSingleton} 				from './user.singleton';
    
    @Component({
      templateUrl: 'template/app.projets.html'
    })
    
    export class AppProjets {
		
		projets:Projet[];
		log='';
		  
		constructor(private _router: Router,
				private _http:Http,
				private _userSingleton:UserSingleton) {
			
			 this._http.get('/test/projets.json').subscribe(res => {
			   	   	this.projets = res.json();
			   	    });
			 console.log('AppProjets');
			 console.log('Token: '+this._userSingleton.token);
			 
	    }
		
		 ngOnInit() {
			 console.log('ngOnInit AppProjets');
			 console.log('Token: '+this._userSingleton.token);
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