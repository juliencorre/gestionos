    import {Component,  OnInit} 	from 'angular2/core';
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
    import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
    import {UserSingleton} 				from './user.singleton';
    
    @Component({
    	selector: 'menu-app',
    	templateUrl: 'template/app.menu.html',
    	directives: [ROUTER_DIRECTIVES],
    	providers:[UserSingleton]
    })
    
    export class AppMenu {
 	
    	user='test';
    	
	   	constructor(private _userSingleton:UserSingleton) { }
	   	
	    ngOnInit() {  
	    	this.user=sessionStorage.getItem('username');
	    	console.log('this._userSingleton.token = '+this._userSingleton.token );
	    	console.log(sessionStorage.getItem('token'));
	    	console.log("username="+sessionStorage.getItem('username'))
	    	
	    }
	}