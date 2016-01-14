System.register([], function(exports_1) {
    var Projet;
    return {
        setters:[],
        execute: function() {
            Projet = (function () {
                function Projet(nom, client, avancement, marge) {
                    this.nom = nom;
                    this.client = client;
                    this.avancement = avancement;
                    this.marge = marge;
                }
                return Projet;
            })();
            exports_1("Projet", Projet);
        }
    }
});
//# sourceMappingURL=projet.js.map