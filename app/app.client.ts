    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
            
    @Component({
    	templateUrl: 'template/app.client.detail.html',
    	bindings: [HTTP_PROVIDERS]
    })
    
    export class AppClient {

    	log='';
    	client:Client=new Client(0,'');
    	
    	 editable=false;
    	 
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 

				   	}
	   	
	    ngOnInit() {
	        let id = this._routeParams.get('id');
	        this.log=id;
	        this._http.get('/test/client'+parseInt(id)+'.json').subscribe(res => {
		   	   	this.client = res.json();
		   	    });
	        
	      }
	    
	    onEdit(){
        	this.editable=true;
	    	this.log="editable";
        }
        
        onCancel(){
        	this._http.get('/test/client'+this.client.id+'.json').subscribe(res => {
		   	   	this.client = res.json();
		   	    });
        	this.editable=false;
	    	this.log="not editable";
        }
        
        onEditClient(client:Client){
        	this.editable=false;
	    	this.log="not editable";
        }
        
	    onBack(){
	    	this._router.navigate( ['Clients'] );
	    }

	}