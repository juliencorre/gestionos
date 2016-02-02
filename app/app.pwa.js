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
    var AppPwa;
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
            AppPwa = (function () {
                function AppPwa(_router, _routeParams, _http) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.log = '';
                    this.onToday();
                }
                AppPwa.prototype.ngOnInit = function () {
                    var _this = this;
                    //recupere le projet
                    this._http.get('/test/pwas1.json').subscribe(function (res) {
                        _this.pwas = res.json();
                    });
                };
                AppPwa.prototype.onClick = function () {
                };
                AppPwa.prototype.onPrecedente = function () {
                    this.log = 'onPrecedente';
                    var now = new Date(this.lundi);
                    this.lundi = new Date(now.getTime());
                    this.mardi = new Date(now.getTime());
                    this.mercredi = new Date(now.getTime());
                    this.jeudi = new Date(now.getTime());
                    this.vendredi = new Date(now.getTime());
                    this.lundi.setTime(now.getTime() - (1000 * 60 * 60 * 24 * 7));
                    this.mardi.setTime(now.getTime() - (1000 * 60 * 60 * 24 * 6));
                    this.mercredi.setTime(now.getTime() - (1000 * 60 * 60 * 24 * 5));
                    this.jeudi.setTime(now.getTime() + (1000 * 60 * 60 * 24 * 4));
                    this.vendredi.setTime(now.getTime() - (1000 * 60 * 60 * 24 * 3));
                };
                AppPwa.prototype.onSuivante = function () {
                    this.log = 'onSuivante';
                    var now = new Date(this.lundi);
                    this.lundi = new Date(now.getTime());
                    this.mardi = new Date(now.getTime());
                    this.mercredi = new Date(now.getTime());
                    this.jeudi = new Date(now.getTime());
                    this.vendredi = new Date(now.getTime());
                    this.lundi.setTime(now.getTime() + (1000 * 60 * 60 * 24 * 7));
                    this.mardi.setTime(now.getTime() + (1000 * 60 * 60 * 24 * 8));
                    this.mercredi.setTime(now.getTime() + (1000 * 60 * 60 * 24 * 9));
                    this.jeudi.setTime(now.getTime() + (1000 * 60 * 60 * 24 * 10));
                    this.vendredi.setTime(now.getTime() + (1000 * 60 * 60 * 24 * 11));
                };
                AppPwa.prototype.onToday = function () {
                    var now = new Date();
                    var diff = now.getDay() - 1;
                    this.lundi = now.setDate(now.getDate() - diff);
                    this.mardi = now.setDate(now.getDate() + 1);
                    this.mercredi = now.setDate(now.getDate() + 1);
                    this.jeudi = now.setDate(now.getDate() + 1);
                    this.vendredi = now.setDate(now.getDate() + 1);
                };
                AppPwa = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.pwa.html',
                        bindings: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, http_1.Http])
                ], AppPwa);
                return AppPwa;
            })();
            exports_1("AppPwa", AppPwa);
        }
    }
});
//# sourceMappingURL=app.pwa.js.map