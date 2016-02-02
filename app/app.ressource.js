System.register(['angular2/core', 'angular2/router', './ressource', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ressource_1, http_1;
    var AppRessource;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ressource_1_1) {
                ressource_1 = ressource_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppRessource = (function () {
                function AppRessource(_router, _routeParams, _http) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.log = '';
                    this.ressource = new ressource_1.Ressource(0, '', '', '', 0, '');
                    this.editable = false;
                }
                AppRessource.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.log = id;
                    //recupere le projet
                    this._http.get('/test/ressource' + parseInt(id) + '.json').subscribe(function (res) {
                        _this.ressource = res.json();
                    });
                    //recupere les clients
                    this._http.get('/test/roles.json').subscribe(function (res) {
                        console.log('roles', res.json());
                        _this.roles = res.json();
                    });
                };
                AppRessource.prototype.onEdit = function () {
                    this.editable = true;
                    this.log = "editable";
                };
                AppRessource.prototype.onCancel = function () {
                    var _this = this;
                    //recupere le projet
                    this._http.get('/test/ressource' + this.ressource.id + '.json').subscribe(function (res) {
                        _this.ressource = res.json();
                    });
                    this.editable = false;
                    this.log = "not editable";
                };
                AppRessource.prototype.onEditRessource = function (ressource) {
                    this.editable = false;
                    this.log = "not editable";
                };
                AppRessource.prototype.onBack = function () {
                    this._router.navigate(['Rh']);
                };
                AppRessource = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.ressource.html',
                        bindings: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, http_1.Http])
                ], AppRessource);
                return AppRessource;
            })();
            exports_1("AppRessource", AppRessource);
        }
    }
});
//# sourceMappingURL=app.ressource.js.map