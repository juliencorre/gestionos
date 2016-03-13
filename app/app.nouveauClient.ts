    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Router}		from 'angular2/router';
  	import {NgForm}		from 'angular2/common';
    import {Client} 	from './client';
    import {Tache} 		from './tache';
    import {HTTP_BINDINGS,Http, Response,Headers, RequestOptions} 	from 'angular2/http';    
    import {AppMenu} 				from './app.menu';
            
    @Component({
      templateUrl: 'template/app.nouveau.client.html',
      directives: [AppMenu]
    })
    
    export class AppNouveauClient {

    	log='';
        client:Client=new Client();
        private _Url = 'http://localhost:3000/api/v1/client/new';
    	
	   	constructor(private _router: Router,private _http:Http) { 	   			
	   	}

	    onCreationClient(nouveauClient:Client) { 
	    	this.log=nouveauClient.nom;
	    	let body = JSON.stringify({ nouveauClient });
	    	console.log(body);
		    let headers = new Headers({ 'Content-Type': 'application/json' });
		    let options = new RequestOptions({ headers: headers });
		    
			this._http.post(this._Url, body, options).subscribe(res => {
				console.log(res.json().projet);
			});
	  
	  
	    	this._router.navigate(['Clients'] );
	    }

	}