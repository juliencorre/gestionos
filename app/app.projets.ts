    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Client}		from './client';
    import {Router}		from 'angular2/router';
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
    import {UserSingleton} 				from './user.singleton';
    import {AppMenu} 					from './app.menu';
    
    @Component({
      templateUrl: 'template/app.projets.html',
      directives: [AppMenu]
    })
    
    export class AppProjets {
		
		projets:Projet[];
		log='';
		  
		constructor(private _router: Router,
				private _http:Http,
				private _userSingleton:UserSingleton) {
			
				 this._http.get('http://localhost:3000/api/v1/projets').subscribe(res => {
				   	   	this.projets = res.json().projets;
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
	    	this.log=projet._id.toString();
	    	this._router.navigate( ['AppProjet', { id: projet._id }] );
	    }
	    
	    onSelectClient(client:Client){
	    	this.log=client.id.toString();
	    	this._router.navigate( ['AppClient', { id: client.id }] );
	    }

	}