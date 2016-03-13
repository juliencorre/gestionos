System.register(['angular2/core', 'angular2/router', './ressource', './app.ressource.form', 'angular2/http', './app.menu'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ressource_1, app_ressource_form_1, http_1, app_menu_1;
    var AppRh;
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
            function (app_ressource_form_1_1) {
                app_ressource_form_1 = app_ressource_form_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_menu_1_1) {
                app_menu_1 = app_menu_1_1;
            }],
        execute: function() {
            AppRh = (function () {
                function AppRh(_router, _routeParams, _http) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.log = '';
                    this.isNewRessource = false;
                    this.ressource = new ressource_1.Ressource('', '', '', '', 0, '');
                    this._Url = 'http://localhost:3000/api/v1/ressource/new';
                }
                AppRh.prototype.ngOnInit = function () {
                    //	        // recupere les ressources de l'entreprise
                    //	        this._http.get('/test/ressources.json').subscribe(res => {
                    //		   	   	this.ressources = res.json();
                    //		   	   	this.log=res.json() ;
                    //		   	    });
                    var _this = this;
                    // recupere les ressources de l'entreprise
                    this._http.get('http://localhost:3000/api/v1/ressources').subscribe(function (res) {
                        _this.ressources = res.json().ressources;
                        _this.log = res.json();
                    });
                };
                AppRh.prototype.onSelectRessource = function (ressource) {
                    this._router.navigate(['AppRessource', { id: ressource._id }]);
                };
                AppRh.prototype.onClick = function () {
                    this.isNewRessource = true;
                    console.log("isNewRessource true");
                };
                AppRh.prototype.onCancel = function (ressource) {
                    console.log("onCancel");
                    this.isNewRessource = false;
                };
                // TODO: m:odifier nom
                AppRh.prototype.onEditRessource = function (newRessource) {
                    var _this = this;
                    console.log("onSaved:" + newRessource);
                    newRessource._id = null;
                    var body = JSON.stringify({ newRessource: newRessource });
                    console.log(body);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this._http.post(this._Url, body, options).subscribe(function (res) {
                        console.log(res.json().ressource);
                        // recupere les ressources de l'entreprise
                        _this._http.get('http://localhost:3000/api/v1/ressources').subscribe(function (res) {
                            _this.ressources = res.json().ressources;
                            _this.log = res.json();
                        });
                    });
                    this._router.navigate(['Rh']);
                    this.isNewRessource = false;
                };
                AppRh = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.rh.html',
                        bindings: [http_1.HTTP_PROVIDERS],
                        directives: [app_ressource_form_1.AppRessourceForm, app_menu_1.AppMenu]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, http_1.Http])
                ], AppRh);
                return AppRh;
            })();
            exports_1("AppRh", AppRh);
        }
    }
});
//# sourceMappingURL=app.rh.js.map