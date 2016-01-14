    import {Component} 	from 'angular2/core';
    import {User} 		from './user';
    import {NgForm}		from 'angular2/common';
    import {Router}		from 'angular2/router';
    
    @Component({
      templateUrl: 'template/app.connexion.html'
    })
    export class AppConnexion { 
    	data='...';
	    user = new User('', '');
	    
	   	constructor(
		    private _router: Router) { }
    
	    onSubmit(userConnexion:User) { 
	    	this.data='OK !';
	    	this.data=userConnexion.mail;
	    	this._router.navigate(['Home'] );
	    }
	    
	    }