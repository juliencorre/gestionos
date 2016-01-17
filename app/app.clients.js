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
    var AppClients;
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
            AppClients = (function () {
                function AppClients(_router, _http) {
                    var _this = this;
                    this._router = _router;
                    this._http = _http;
                    this.clients = [];
                    this._http.get('/test/clients.json').subscribe(function (res) {
                        console.log('projet', res.json());
                        _this.clients = res.json();
                    });
                }
                AppClients.prototype.onSelectClient = function (client) {
                    this._router.navigate(['AppClient', { id: client.id }]);
                };
                AppClients = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.clients.html',
                        bindings: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], AppClients);
                return AppClients;
            })();
            exports_1("AppClients", AppClients);
        }
    }
});
//# sourceMappingURL=app.clients.js.map