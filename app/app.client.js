System.register(['angular2/core', 'angular2/router', './client', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, client_1, http_1;
    var AppClient;
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
            }],
        execute: function() {
            AppClient = (function () {
                function AppClient(_router, _routeParams, _http) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._http = _http;
                    this.log = '';
                    this.client = new client_1.Client(0, '');
                    this.editable = false;
                }
                AppClient.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this.log = id;
                    this._http.get('/test/client' + parseInt(id) + '.json').subscribe(function (res) {
                        _this.client = res.json();
                    });
                };
                AppClient.prototype.onEdit = function () {
                    this.editable = true;
                    this.log = "editable";
                };
                AppClient.prototype.onCancel = function () {
                    var _this = this;
                    this._http.get('/test/client' + this.client.id + '.json').subscribe(function (res) {
                        _this.client = res.json();
                    });
                    this.editable = false;
                    this.log = "not editable";
                };
                AppClient.prototype.onEditClient = function (client) {
                    this.editable = false;
                    this.log = "not editable";
                };
                AppClient = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.client.detail.html',
                        bindings: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, http_1.Http])
                ], AppClient);
                return AppClient;
            })();
            exports_1("AppClient", AppClient);
        }
    }
});
//# sourceMappingURL=app.client.js.map