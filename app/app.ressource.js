System.register(['angular2/core', 'angular2/router', './ressource', 'angular2/http', './app.ressource.form', './app.menu'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ressource_1, http_1, app_ressource_form_1, app_menu_1;
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
            },
            function (app_ressource_form_1_1) {
                app_ressource_form_1 = app_ressource_form_1_1;
            },
            function (app_menu_1_1) {
                app_menu_1 = app_menu_1_1;
            }],
        execute: function() {
            AppRessource = (function () {
                function AppRessource(_router, _routeParams, _http) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.log1 = '';
                    this.ressource = new ressource_1.Ressource('', '', '', '', 0, '');
                    this.editable = false;
                }
                AppRessource.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.log1 = id;
                    //recupere le projet
                    this._http.get('http://localhost:3000/api/v1/ressource/' + id).subscribe(function (res) {
                        _this.ressource = res.json().ressource;
                    });
                };
                AppRessource.prototype.onEdit = function () {
                    this.editable = true;
                    this.log1 = "editable";
                };
                AppRessource.prototype.onCancel = function (ressource) {
                    this.editable = false;
                    this.log1 = "not editable";
                };
                AppRessource.prototype.onSaved = function (ressource) {
                    this.editable = false;
                    this.log1 = "not editable";
                };
                AppRessource.prototype.onBack = function () {
                    this._router.navigate(['Rh']);
                };
                AppRessource = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.ressource.html',
                        bindings: [http_1.HTTP_PROVIDERS],
                        directives: [app_ressource_form_1.AppRessourceForm, app_menu_1.AppMenu]
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