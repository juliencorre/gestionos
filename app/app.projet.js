System.register(['angular2/core', 'angular2/router', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1;
    var AppProjet;
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
            }],
        execute: function() {
            AppProjet = (function () {
                function AppProjet(_router, _routeParams, _http) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.log = '';
                    this.projet = '';
                    this.taches = [];
                    //	   	 this._http.get('/test/projet1.json').subscribe(res => {
                    //	   	      this.log = res.json();
                    //	   	    });
                }
                AppProjet.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    //	        this.projet=new Projet(parseInt(id),'nom','client',0,0);
                    //
                    //		    this.tache1=new Tache(1,'tache 1');
                    //		    this.tache2=new Tache(2,'tache 2');
                    //	        this.taches.push(this.tache1);
                    //	        this.taches.push(this.tache2);
                    //	        
                    //	        this.projet.setTaches(this.taches);
                    this._http.get('/test/projet' + parseInt(id) + '.json').subscribe(function (res) {
                        console.log('projet', res.json());
                        _this.projet = res.json();
                    });
                };
                AppProjet = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.projet.detail.html',
                        bindings: [http_1.HTTP_PROVIDERS]
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