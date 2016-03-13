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
    var AppRessourceForm;
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
            AppRessourceForm = (function () {
                function AppRessourceForm(_router, _routeParams, _http) {
                    //recupere les clients
                    var _this = this;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.editRessource = new core_1.EventEmitter();
                    this.cancel = new core_1.EventEmitter();
                    this.log = '';
                    this._http.get('/test/roles.json').subscribe(function (res) {
                        console.log('roles' + res.json());
                        _this.roles = res.json();
                    });
                }
                AppRessourceForm.prototype.onCancel = function () {
                    var _this = this;
                    //recupere le projet
                    //recupere le projet
                    this._http.get('http://localhost:3000/api/v1/ressource/' + this.ressource._id).subscribe(function (res) {
                        _this.ressource = res.json().ressource;
                    });
                    //	        this._http.get('/test/ressource'+this.ressource._id +'.json').subscribe(res => {
                    //		   	   	this.ressource = res.json();
                    //		   	    });
                    console.log("onCancel form");
                    this.cancel.next(this.ressource);
                };
                AppRessourceForm.prototype.onEditRessource = function () {
                    console.log("onEditRessource form");
                    this.editRessource.next(this.ressource);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', ressource_1.Ressource)
                ], AppRessourceForm.prototype, "ressource", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AppRessourceForm.prototype, "editRessource", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], AppRessourceForm.prototype, "cancel", void 0);
                AppRessourceForm = __decorate([
                    core_1.Component({
                        selector: 'ressource-form',
                        templateUrl: 'template/app.ressource.form.html',
                        bindings: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, http_1.Http])
                ], AppRessourceForm);
                return AppRessourceForm;
            })();
            exports_1("AppRessourceForm", AppRessourceForm);
        }
    }
});
//# sourceMappingURL=app.ressource.form.js.map