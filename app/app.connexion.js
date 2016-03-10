System.register(['angular2/core', './user', 'angular2/router', './app.connexion.service', './user.singleton'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_1, router_1, app_connexion_service_1, user_singleton_1;
    var AppConnexion;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_connexion_service_1_1) {
                app_connexion_service_1 = app_connexion_service_1_1;
            },
            function (user_singleton_1_1) {
                user_singleton_1 = user_singleton_1_1;
            }],
        execute: function() {
            AppConnexion = (function () {
                // loginResponse:LoginResponse;
                function AppConnexion(_router, connexionService, _userSingleton) {
                    this._router = _router;
                    this.connexionService = connexionService;
                    this._userSingleton = _userSingleton;
                    this.data = '...';
                    this.user = new user_1.User('', '');
                }
                AppConnexion.prototype.onSubmit = function (userConnexion) {
                    var _this = this;
                    this.log = 'connexion';
                    this.data = 'OK !';
                    this.data = userConnexion.mail;
                    this.connexionService.authenticate2(userConnexion).subscribe(function (loginResponse) { return _this.success(loginResponse); }, function (error) { return _this.log = error; });
                };
                AppConnexion.prototype.success = function (loginResponse) {
                    this.ressource = loginResponse.ressource;
                    //this._userSingleton.token=loginResponse.token;
                    //console.log('userSingletonToken= '+this._userSingleton.token);
                    // Save data to sessionStorage
                    sessionStorage.setItem('token', loginResponse.token);
                    sessionStorage.setItem('username', loginResponse.ressource.nom);
                    this._router.navigate(['Projets']);
                };
                ;
                AppConnexion = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.connexion.html',
                        providers: [app_connexion_service_1.AppConnexionService, user_singleton_1.UserSingleton]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, app_connexion_service_1.AppConnexionService, user_singleton_1.UserSingleton])
                ], AppConnexion);
                return AppConnexion;
            })();
            exports_1("AppConnexion", AppConnexion);
        }
    }
});
//# sourceMappingURL=app.connexion.js.map