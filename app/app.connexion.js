System.register(['angular2/core', './user'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_1;
    var AppConnexion;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            AppConnexion = (function () {
                function AppConnexion() {
                    this.data = '...';
                    this.user = new user_1.User('', '');
                }
                AppConnexion.prototype.onSubmit = function (userConnexion) {
                    this.data = 'OK !';
                    this.data = userConnexion.mail;
                    this.navigate(['Home']);
                };
                AppConnexion = __decorate([
                    core_1.Component({
                        templateUrl: 'template/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppConnexion);
                return AppConnexion;
            })();
            exports_1("AppConnexion", AppConnexion);
        }
    }
});
//# sourceMappingURL=app.connexion.js.map