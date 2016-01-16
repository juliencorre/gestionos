System.register(['angular2/core', './projet', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, projet_1, router_1;
    var AppProjets;
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
            }],
        execute: function() {
            AppProjets = (function () {
                function AppProjets(_router) {
                    this._router = _router;
                    this.log = '';
                    this.projets = [
                        new projet_1.Projet(1, 'projet1', 'client1', 50, 23),
                        new projet_1.Projet(2, 'projet2', 'client2', 75, 53)
                    ];
                }
                AppProjets.prototype.onClick = function () {
                    this.log = 'click';
                    this._router.navigate(['NouveauProjet']);
                };
                AppProjets.prototype.onSelectProjet = function (projet) {
                    this.log = projet.id.toString();
                    this._router.navigate(['AppProjet', { id: projet.id }]);
                };
                AppProjets = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.projets.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppProjets);
                return AppProjets;
            })();
            exports_1("AppProjets", AppProjets);
        }
    }
});
//# sourceMappingURL=app.projets.js.map