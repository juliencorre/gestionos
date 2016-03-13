    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
    import {AppMenu} 					from './app.menu';
    
    @Component({
    	templateUrl: 'template/app.client.detail.html',
    	bindings: [HTTP_PROVIDERS],
    	directives: [AppMenu]
    })
    
    export class AppClient {

    	client:Client=new Client();
    	
    	 editable=false;
    	 
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 

	        let id = this._routeParams.get('id');
//	        this._http.get('/test/client'+parseInt(id)+'.json').subscribe(res => {
//		   	   	this.client = res.json();
//		   	    });
	        
	        
		        this._http.get('http://localhost:3000/api/v1/client/'+id).subscribe(res => {
		        	console.log("client return="+res.json().client);
			   	   	this.client = res.json().client;
			   	   	
			   	    });
		        
				   	}
	   	
	    ngOnInit() {

	        
	      }
	    
	    onEdit(){
        	this.editable=true;
	    	console.log("editable");
        }
        
        onCancel(){
        	this._http.get('/test/client'+this.client._id+'.json').subscribe(res => {
		   	   	this.client = res.json();
		   	    });
        	this.editable=false;
        	console.log("not editable");
        }
        
        onEditClient(client:Client){
        	this.editable=false;
        	console.log("not editable");
        }
        
	    onBack(){
	    	this._router.navigate( ['Clients'] );
	    }

	}