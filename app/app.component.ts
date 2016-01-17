    import {Component}						from 'angular2/core';
    import {NgForm}							from 'angular2/common';
    import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
    import {AppProjets} 					from './app.projets';
    import {AppConnexion} 					from './app.connexion';
    import {AppNouveauProjet} 				from './app.nouveauProjet';
    import {AppProjet} 						from './app.projet';
    import {AppClients} 					from './app.clients';
    import {AppClient} 						from './app.client';
    
    @Component({
        selector: 'my-app',
        templateUrl: 'template/app.menu.html',
  		directives: [ROUTER_DIRECTIVES]
    })
    
    @RouteConfig([
  		{path:'/projets', name: 'Projets', component: AppProjets},
  		{path:'/connexion', name: 'Connexion', component: AppConnexion , useAsDefault: true},
  		{path:'/newprojet', name: 'NouveauProjet', component: AppNouveauProjet},
  		{path:'/projet/:id', name: 'AppProjet',   component: AppProjet},
  		{path:'/clients', name: 'Clients',   component: AppClients},
  		{path:'/client/:id', name: 'AppClient',   component: AppClient},
	])
    
    export class AppComponent { 
    
    }