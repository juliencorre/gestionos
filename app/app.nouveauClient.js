System.register(['angular2/core', 'angular2/router', './client', 'angular2/http', './app.menu'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, client_1, http_1, app_menu_1;
    var AppNouveauClient;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (client_1_1) {
                client_1 = client_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_menu_1_1) {
                app_menu_1 = app_menu_1_1;
            }],
        execute: function() {
            AppNouveauClient = (function () {
                function AppNouveauClient(_router, _http) {
                    this._router = _router;
                    this._http = _http;
                    this.log = '';
                    this.client = new client_1.Client();
                    this._Url = 'http://localhost:3000/api/v1/client/new';
                }
                AppNouveauClient.prototype.onCreationClient = function (nouveauClient) {
                    this.log = nouveauClient.nom;
                    var body = JSON.stringify({ nouveauClient: nouveauClient });
                    console.log(body);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    this._http.post(this._Url, body, options).subscribe(function (res) {
                        console.log(res.json().projet);
                    });
                    this._router.navigate(['Clients']);
                };
                AppNouveauClient = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.nouveau.client.html',
                        directives: [app_menu_1.AppMenu]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], AppNouveauClient);
                return AppNouveauClient;
            })();
            exports_1("AppNouveauClient", AppNouveauClient);
        }
    }
});
//# sourceMappingURL=app.nouveauClient.js.map