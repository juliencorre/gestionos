    import {Component} 					from 'angular2/core';
    import {User} 						from './user';
    import {NgForm}						from 'angular2/common';
    import {Router}						from 'angular2/router';
    import {AppConnexionService}        from './app.connexion.service';
    import {Ressource} 					from './ressource';
    import {LoginResponse} 				from './model/login.response';
    import {UserSingleton} 				from './user.singleton';
    
    @Component({
      templateUrl: 'template/app.connexion.html',
      providers:[AppConnexionService,UserSingleton]
    })
    export class AppConnexion { 
    	data='...';
	    user = new User('', '');
	    log;
	    ressource;
// loginResponse:LoginResponse;
	    
	   	constructor(
		    private _router: Router,
		    private connexionService:AppConnexionService,
		    private _userSingleton:UserSingleton) { }
    
	    onSubmit(userConnexion:User) { 
	    	this.log='connexion'
	    	this.data='OK !';
	    	this.data=userConnexion.mail;
	    	this.connexionService.authenticate2(userConnexion).subscribe(
	    			loginResponse => this.success(loginResponse),
                    error =>  this.log = <any>error);
	    	
	    }
	    
	    success(loginResponse:LoginResponse)
	    {
	    	this.ressource=loginResponse.ressource;
	    	//this._userSingleton.token=loginResponse.token;
	    	//console.log('userSingletonToken= '+this._userSingleton.token);
	    	// Save data to sessionStorage
	    	sessionStorage.setItem('token', loginResponse.token);
	    	sessionStorage.setItem('username', loginResponse.ressource.nom);
	    	this._router.navigate(['Projets'] );
	    };
	    
	    }