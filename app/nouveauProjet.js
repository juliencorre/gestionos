System.register([], function(exports_1) {
    var NouveauProjet;
    return {
        setters:[],
        execute: function() {
            NouveauProjet = (function () {
                function NouveauProjet(nom, client_id, avancement, marge) {
                    this.nom = nom;
                    this.client_id = client_id;
                    this.avancement = avancement;
                    this.marge = marge;
                    this.taches = [];
                }
                NouveauProjet.prototype.setTaches = function (p_taches) {
                    this.taches = p_taches;
                };
                return NouveauProjet;
            })();
            exports_1("NouveauProjet", NouveauProjet);
        }
    }
});
//# sourceMappingURL=nouveauProjet.js.map