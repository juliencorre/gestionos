System.register(['angular2/core', './nouveauProjet', 'angular2/router', './tache', 'angular2/http', './app.menu'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, nouveauProjet_1, router_1, tache_1, http_1, app_menu_1;
    var AppNouveauProjet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nouveauProjet_1_1) {
                nouveauProjet_1 = nouveauProjet_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            AppNouveauProjet = (function () {
                function AppNouveauProjet(_router, _http) {
                    var _this = this;
                    this._router = _router;
                    this._http = _http;
                    this.log = '';
                    this.projet = new nouveauProjet_1.NouveauProjet('', '', 0, 0);
                    this.index = 0;
                    this._Url = 'http://localhost:3000/api/v1/projet/new';
                    //recupere les clients
                    this._http.get('http://localhost:3000/api/v1/clients').subscribe(function (res) {
                        console.log('projets', res.json().clients);
                        _this.clients = res.json().clients;
                        _this.projet.client_id = _this.clients[0]._id;
                    });
                }
                AppNouveauProjet.prototype.ngOnInit = function () {
                };
                AppNouveauProjet.prototype.onCreationProjet = function (nouveauProjet) {
                    console.log(nouveauProjet);
                    console.log(nouveauProjet.client_id);
                    var body = JSON.stringify({ nouveauProjet: nouveauProjet });
                    console.log(body);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this._http.post(this._Url, body, options).subscribe(function (res) {
                        console.log(res.json().projet);
                    });
                    this._router.navigate(['Projets']);
                };
                AppNouveauProjet.prototype.onAddTache = function () {
                    this.log = 'Add tache';
                    this.index++;
                    this.projet.taches.push(new tache_1.Tache(this.index, '', 0, null));
                };
                AppNouveauProjet.prototype.onRemoveTache = function (tache) {
                    this.log = 'Remove tache:' + tache._id;
                    var removeIndex = this.projet.taches.indexOf(tache);
                    if (removeIndex > -1) {
                        this.projet.taches.splice(removeIndex, 1);
                    }
                    this.log = 'remove index:' + removeIndex;
                };
                AppNouveauProjet = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.projet.html',
                        inputs: ['projet'],
                        directives: [app_menu_1.AppMenu]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], AppNouveauProjet);
                return AppNouveauProjet;
            })();
            exports_1("AppNouveauProjet", AppNouveauProjet);
        }
    }
});
//# sourceMappingURL=app.nouveauProjet.js.map