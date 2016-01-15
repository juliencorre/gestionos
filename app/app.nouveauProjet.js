System.register(['angular2/core', './projet', 'angular2/router', './client', './tache'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, projet_1, router_1, client_1, tache_1;
    var AppNouveauProjet;
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
            }],
        execute: function() {
            AppNouveauProjet = (function () {
                function AppNouveauProjet(_router) {
                    this._router = _router;
                    this.log = 'ko';
                    this.projet = new projet_1.Projet('', '', 0, 0);
                    this.index = 0;
                    this.clients = [
                        new client_1.Client(1, 'client1'),
                        new client_1.Client(2, 'client2')
                    ];
                    this.taches = [];
                }
                AppNouveauProjet.prototype.onCreationProjet = function (nouveauProjet) {
                    this.log = nouveauProjet.nom;
                    this._router.navigate(['Projets']);
                };
                AppNouveauProjet.prototype.onAddTache = function () {
                    this.log = 'Add tache';
                    this.index++;
                    this.taches.push(new tache_1.Tache(this.index, ''));
                };
                AppNouveauProjet.prototype.onRemoveTache = function (tache) {
                    this.log = 'Remove tache:' + tache.id;
                    var removeIndex = this.taches.indexOf(tache);
                    if (removeIndex > -1) {
                        this.taches.splice(removeIndex, 1);
                    }
                    this.log = 'remove index:' + removeIndex;
                };
                AppNouveauProjet = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.projet.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppNouveauProjet);
                return AppNouveauProjet;
            })();
            exports_1("AppNouveauProjet", AppNouveauProjet);
        }
    }
});
//# sourceMappingURL=app.nouveauProjet.js.map