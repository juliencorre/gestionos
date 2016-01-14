System.register(['angular2/core', './projet'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, projet_1;
    var AppNouveauProjet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (projet_1_1) {
                projet_1 = projet_1_1;
            }],
        execute: function() {
            AppNouveauProjet = (function () {
                function AppNouveauProjet() {
                    this.log = 'ko';
                    this.projet = new projet_1.Projet('', '', 0, 0);
                }
                AppNouveauProjet.prototype.onCreationProjet = function (nouveauProjet) {
                    this.log = nouveauProjet.nom;
                };
                AppNouveauProjet = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.projet.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppNouveauProjet);
                return AppNouveauProjet;
            })();
            exports_1("AppNouveauProjet", AppNouveauProjet);
        }
    }
});
//# sourceMappingURL=app.nouveauProjet.js.map