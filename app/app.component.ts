    import {Component}	from 'angular2/core';
    import {NgForm}		from 'angular2/common';
    import {User} 		from './user';
    import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
    import {AppHome} from './app.home';
    import {AppConnexion} from './app.connexion';
    
    @Component({
        selector: 'my-app',
        templateUrl: 'template/app.menu.html',
  		directives: [ROUTER_DIRECTIVES]
    })
    
    @RouteConfig([
  		{path:'/accueil', name: 'Home', component: AppHome},
  		{path:'/connexion', name: 'Connexion', component: AppConnexion},
	])
    
    export class AppComponent { 
	    data='...';
	    user = new User('', '');
	    
	    onSubmit(userConnexion:User) { 
	    	this.data='OK !';
	    	this.data=userConnexion.mail;
	    	this.navigate( ['Home'] );
	    }
    
    }