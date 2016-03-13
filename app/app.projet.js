System.register(['angular2/core', './projet', 'angular2/router', './client', './tache', 'angular2/http', './app.menu'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, projet_1, router_1, client_1, tache_1, http_1, app_menu_1;
    var AppProjet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projet_1_1) {
                projet_1 = projet_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (client_1_1) {
                client_1 = client_1_1;
            },
            function (tache_1_1) {
                tache_1 = tache_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_menu_1_1) {
                app_menu_1 = app_menu_1_1;
            }],
        execute: function() {
            AppProjet = (function () {
                function AppProjet(_router, _routeParams, _http) {
                    var _this = this;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.log = '';
                    this.projet = new projet_1.Projet('', '', new client_1.Client(), 0, 0);
                    this.clients = null;
                    this.editable = false;
                    var id = this._routeParams.get('id');
                    this.log = id;
                    //recupere le projet
                    this._http.get('http://localhost:3000/api/v1/projet/' + id).subscribe(function (res) {
                        _this.projet = res.json().projet;
                    });
                }
                AppProjet.prototype.ngOnInit = function () {
                };
                AppProjet.prototype.onEdit = function () {
                    var _this = this;
                    //recupere les clients
                    this._http.get('http://localhost:3000/api/v1/clients').subscribe(function (res) {
                        console.log('clients', res.json().clients);
                        _this.clients = res.json().clients;
                    });
                    this.editable = true;
                    this.log = "editable";
                };
                AppProjet.prototype.onCancel = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    //recupere le projet
                    this._http.get('http://localhost:3000/api/v1/projet/' + id).subscribe(function (res) {
                        _this.projet = res.json().projet;
                    });
                    this.editable = false;
                    this.log = "not editable";
                };
                AppProjet.prototype.onEditProjet = function (projet) {
                    this.editable = false;
                    this.log = "not editable";
                };
                AppProjet.prototype.onAddTache = function () {
                    this.log = 'Add tache';
                    this.projet.taches.push(new tache_1.Tache('', '', 0, null));
                };
                AppProjet.prototype.onRemoveTache = function (tache) {
                    this.log = 'Remove tache:' + tache._id;
                    var removeIndex = this.projet.taches.indexOf(tache);
                    if (removeIndex > -1) {
                        this.projet.taches.splice(removeIndex, 1);
                    }
                    this.log = 'remove index:' + removeIndex;
                };
                AppProjet.prototype.onBack = function () {
                    this._router.navigate(['Projets']);
                };
                AppProjet = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.projet.detail.html',
                        bindings: [http_1.HTTP_PROVIDERS],
                        directives: [app_menu_1.AppMenu]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, http_1.Http])
                ], AppProjet);
                return AppProjet;
            })();
            exports_1("AppProjet", AppProjet);
        }
    }
});
//# sourceMappingURL=app.projet.js.map