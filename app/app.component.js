System.register(['angular2/core', 'angular2/router', './app.projets', './app.connexion', './app.nouveauProjet', './app.projet', './app.clients', './app.client', './app.nouveauClient', './app.pwa', './app.rh', './app.ressource', './user.singleton'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_projets_1, app_connexion_1, app_nouveauProjet_1, app_projet_1, app_clients_1, app_client_1, app_nouveauClient_1, app_pwa_1, app_rh_1, app_ressource_1, user_singleton_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_projets_1_1) {
                app_projets_1 = app_projets_1_1;
            },
            function (app_connexion_1_1) {
                app_connexion_1 = app_connexion_1_1;
            },
            function (app_nouveauProjet_1_1) {
                app_nouveauProjet_1 = app_nouveauProjet_1_1;
            },
            function (app_projet_1_1) {
                app_projet_1 = app_projet_1_1;
            },
            function (app_clients_1_1) {
                app_clients_1 = app_clients_1_1;
            },
            function (app_client_1_1) {
                app_client_1 = app_client_1_1;
            },
            function (app_nouveauClient_1_1) {
                app_nouveauClient_1 = app_nouveauClient_1_1;
            },
            function (app_pwa_1_1) {
                app_pwa_1 = app_pwa_1_1;
            },
            function (app_rh_1_1) {
                app_rh_1 = app_rh_1_1;
            },
            function (app_ressource_1_1) {
                app_ressource_1 = app_ressource_1_1;
            },
            function (user_singleton_1_1) {
                user_singleton_1 = user_singleton_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_userSingleton) {
                    this._userSingleton = _userSingleton;
                    this.user = 'test';
                    this.user = this._userSingleton.token;
                    this.user = 'cool';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'template/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_singleton_1.UserSingleton]
                    }),
                    router_1.RouteConfig([
                        { path: '/projets', name: 'Projets', component: app_projets_1.AppProjets },
                        { path: '/connexion', name: 'Connexion', component: app_connexion_1.AppConnexion, useAsDefault: true },
                        { path: '/newprojet', name: 'NouveauProjet', component: app_nouveauProjet_1.AppNouveauProjet },
                        { path: '/projet/:id', name: 'AppProjet', component: app_projet_1.AppProjet },
                        { path: '/clients', name: 'Clients', component: app_clients_1.AppClients },
                        { path: '/client/:id', name: 'AppClient', component: app_client_1.AppClient },
                        { path: '/newclient', name: 'NouveauClient', component: app_nouveauClient_1.AppNouveauClient },
                        { path: '/saisie', name: 'Pwa', component: app_pwa_1.AppPwa },
                        { path: '/rh', name: 'Rh', component: app_rh_1.AppRh },
                        { path: '/ressource/:id', name: 'AppRessource', component: app_ressource_1.AppRessource },
                    ]), 
                    __metadata('design:paramtypes', [user_singleton_1.UserSingleton])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map