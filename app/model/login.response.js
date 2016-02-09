System.register([], function(exports_1) {
    var LoginResponse;
    return {
        setters:[],
        execute: function() {
            LoginResponse = (function () {
                function LoginResponse(success, message, token, ressource) {
                    this.success = success;
                    this.message = message;
                    this.token = token;
                    this.ressource = ressource;
                }
                return LoginResponse;
            })();
            exports_1("LoginResponse", LoginResponse);
        }
    }
});
//# sourceMappingURL=login.response.js.map