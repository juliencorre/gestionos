System.register([], function(exports_1) {
    var Ressource;
    return {
        setters:[],
        execute: function() {
            Ressource = (function () {
                function Ressource(id, prenom, nom, mail, salaire, role) {
                    this.id = id;
                    this.prenom = prenom;
                    this.nom = nom;
                    this.mail = mail;
                    this.salaire = salaire;
                    this.role = role;
                }
                return Ressource;
            })();
            exports_1("Ressource", Ressource);
        }
    }
});
//# sourceMappingURL=ressource.js.map