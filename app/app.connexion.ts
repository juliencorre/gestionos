    import {Component} from 'angular2/core';
    import {User} 		from './user';
    import {NgForm}		from 'angular2/common';
    
    @Component({
      templateUrl: 'template/app.component.html'
    })
    export class AppConnexion { 
    	data='...';
	    user = new User('', '');
	    
	    onSubmit(userConnexion:User) { 
	    	this.data='OK !';
	    	this.data=userConnexion.mail;
	    	this.navigate( ['Home'] );
	    }
	    }