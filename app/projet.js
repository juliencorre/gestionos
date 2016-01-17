System.register([], function(exports_1) {
    var Projet;
    return {
        setters:[],
        execute: function() {
            Projet = (function () {
                function Projet(id, nom, client, avancement, marge) {
                    this.id = id;
                    this.nom = nom;
                    this.client = client;
                    this.avancement = avancement;
                    this.marge = marge;
                    this.taches = [];
                }
                Projet.prototype.setTaches = function (p_taches) {
                    this.taches = p_taches;
                };
                Projet.prototype.setClient = function (p_client) {
                    this.client = p_client;
                };
                return Projet;
            })();
            exports_1("Projet", Projet);
        }
    }
});
//# sourceMappingURL=projet.js.map