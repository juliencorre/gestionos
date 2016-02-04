System.register([], function(exports_1) {
    var Tache;
    return {
        setters:[],
        execute: function() {
            Tache = (function () {
                function Tache(id, nom, charge, activites) {
                    this.id = id;
                    this.nom = nom;
                    this.charge = charge;
                    this.activites = activites;
                }
                return Tache;
            })();
            exports_1("Tache", Tache);
        }
    }
});
//# sourceMappingURL=tache.js.map