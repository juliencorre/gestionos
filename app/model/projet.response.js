System.register([], function(exports_1) {
    var ProjetResponse;
    return {
        setters:[],
        execute: function() {
            ProjetResponse = (function () {
                function ProjetResponse(success, message, token, projet) {
                    this.success = success;
                    this.message = message;
                    this.token = token;
                    this.projet = projet;
                }
                return ProjetResponse;
            })();
            exports_1("ProjetResponse", ProjetResponse);
        }
    }
});
//# sourceMappingURL=projet.response.js.map