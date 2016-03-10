System.register(['angular2/core', 'angular2/router', './user.singleton'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, user_singleton_1;
    var AppMenu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_singleton_1_1) {
                user_singleton_1 = user_singleton_1_1;
            }],
        execute: function() {
            AppMenu = (function () {
                function AppMenu(_userSingleton) {
                    this._userSingleton = _userSingleton;
                    this.user = 'test';
                }
                AppMenu.prototype.ngOnInit = function () {
                    this.user = sessionStorage.getItem('username');
                    console.log('this._userSingleton.token = ' + this._userSingleton.token);
                    console.log(sessionStorage.getItem('token'));
                    console.log("username=" + sessionStorage.getItem('username'));
                };
                AppMenu = __decorate([
                    core_1.Component({
                        selector: 'menu-app',
                        templateUrl: 'template/app.menu.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [user_singleton_1.UserSingleton]
                    }), 
                    __metadata('design:paramtypes', [user_singleton_1.UserSingleton])
                ], AppMenu);
                return AppMenu;
            })();
            exports_1("AppMenu", AppMenu);
        }
    }
});
//# sourceMappingURL=app.menu.js.map