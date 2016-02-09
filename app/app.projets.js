System.register(['angular2/core', 'angular2/router', 'angular2/http', './user.singleton'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, user_singleton_1;
    var AppProjets;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (user_singleton_1_1) {
                user_singleton_1 = user_singleton_1_1;
            }],
        execute: function() {
            AppProjets = (function () {
                function AppProjets(_router, _http, _userSingleton) {
                    var _this = this;
                    this._router = _router;
                    this._http = _http;
                    this._userSingleton = _userSingleton;
                    this.log = '';
                    this._http.get('/test/projets.json').subscribe(function (res) {
                        _this.projets = res.json();
                    });
                    console.log('AppProjets');
                    console.log('Token: ' + this._userSingleton.token);
                }
                AppProjets.prototype.ngOnInit = function () {
                    console.log('ngOnInit AppProjets');
                    console.log('Token: ' + this._userSingleton.token);
                };
                AppProjets.prototype.onClick = function () {
                    this.log = 'click';
                    this._router.navigate(['NouveauProjet']);
                };
                AppProjets.prototype.onSelectProjet = function (projet) {
                    this.log = projet.id.toString();
                    this._router.navigate(['AppProjet', { id: projet.id }]);
                };
                AppProjets.prototype.onSelectClient = function (client) {
                    this.log = client.id.toString();
                    this._router.navigate(['AppClient', { id: client.id }]);
                };
                AppProjets = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.projets.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http, user_singleton_1.UserSingleton])
                ], AppProjets);
                return AppProjets;
            })();
            exports_1("AppProjets", AppProjets);
        }
    }
});
//# sourceMappingURL=app.projets.js.map