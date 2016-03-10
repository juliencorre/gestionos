    import {Component}						from 'angular2/core';
    import {NgForm}							from 'angular2/common';
    import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
    import {AppProjets} 					from './app.projets';
    import {AppConnexion} 					from './app.connexion';
    import {AppNouveauProjet} 				from './app.nouveauProjet';
    import {AppProjet} 						from './app.projet';
    import {AppClients} 					from './app.clients';
    import {AppClient} 						from './app.client';
    import {AppNouveauClient} 				from './app.nouveauClient';
    import {AppPwa} 						from './app.pwa';
    import {AppRh} 							from './app.rh';
    import {AppRessource} 					from './app.ressource';
    import {UserSingleton} 				from './user.singleton';
                
    @Component({
        selector: 'my-app',
        templateUrl: 'template/app.html',
  		directives: [ROUTER_DIRECTIVES],
  		providers:[UserSingleton]
    })
    
    @RouteConfig([
  		{path:'/projets', name: 'Projets', component: AppProjets},
  		{path:'/connexion', name: 'Connexion', component: AppConnexion , useAsDefault: true},
  		{path:'/newprojet', name: 'NouveauProjet', component: AppNouveauProjet},
  		{path:'/projet/:id', name: 'AppProjet',   component: AppProjet},
  		{path:'/clients', name: 'Clients',   component: AppClients},
  		{path:'/client/:id', name: 'AppClient',   component: AppClient},
        {path:'/newclient', name: 'NouveauClient',   component: AppNouveauClient},
        {path:'/saisie', name: 'Pwa',   component: AppPwa},
        {path:'/rh', name: 'Rh',   component: AppRh},
        {path:'/ressource/:id', name: 'AppRessource',   component: AppRessource},
	])
    
    export class AppComponent { 
    
    user='test';
    
	    constructor(private _userSingleton:UserSingleton) { 
	    	this.user=this._userSingleton.token;
	    	this.user='cool';
	    }
    }