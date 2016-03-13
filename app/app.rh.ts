    import {Component,  OnInit} 	from 'angular2/core';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Ressource} 				from './ressource';
    import {NewRessource} 				from './newRessource';    
    import {AppRessourceForm} 		from './app.ressource.form';    
    import {HTTP_PROVIDERS, HTTP_BINDINGS,Http, Response,Headers, RequestOptions} 	from 'angular2/http';
    import {AppMenu} 				from './app.menu';
    
    @Component({
    	templateUrl: 'template/app.rh.html',
    	bindings: [HTTP_PROVIDERS],
    	directives: [AppRessourceForm,AppMenu]
    })
    
    export class AppRh {

    	log='';
    	ressources:Ressource[];
    	isNewRessource=false;
    	
    	ressource:Ressource=new Ressource('','','','',0,'');

    	private _Url = 'http://localhost:3000/api/v1/ressource/new';
    	
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,
	   				private _http:Http) { }
	   	
	    ngOnInit() {
	        
//	        // recupere les ressources de l'entreprise
//	        this._http.get('/test/ressources.json').subscribe(res => {
//		   	   	this.ressources = res.json();
//		   	   	this.log=res.json() ;
//		   	    });
	        
	       
	        	 // recupere les ressources de l'entreprise
		        this._http.get('http://localhost:3000/api/v1/ressources').subscribe(res => {
			   	   	this.ressources = res.json().ressources;
			   	   	this.log=res.json() ;
			   	    });
	        
	      }
	    
	    onSelectRessource(ressource:Ressource){
	    	this._router.navigate( ['AppRessource', { id: ressource._id }] );
	    }
	    
	    onClick(){
	    	this.isNewRessource = true;
	    	console.log("isNewRessource true");
	    }
	    
	    onCancel(ressource:Ressource){
	    	console.log("onCancel");
	    	this.isNewRessource = false;
	    }
	    
	    // TODO: m:odifier nom
	    onEditRessource(newRessource:NewRessource){
	    	console.log("onSaved:"+newRessource);
	    	newRessource._id=null;
	    	let body = JSON.stringify({ newRessource });
	    	console.log(body);
		    let headers = new Headers({ 'Content-Type': 'application/json' });
		    let options = new RequestOptions({ headers: headers });
		    
			this._http.post(this._Url, body, options).subscribe(res => {
				console.log(res.json().ressource);
				
				// recupere les ressources de l'entreprise
		        this._http.get('http://localhost:3000/api/v1/ressources').subscribe(res => {
			   	   	this.ressources = res.json().ressources;
			   	   	this.log=res.json() ;
			   	    });
			});
	  
	        
	        this._router.navigate(['Rh'] );
	        
	    	this.isNewRessource = false;
	    }
	    
	}