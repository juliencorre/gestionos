System.register([], function(exports_1) {
    var NewRessource;
    return {
        setters:[],
        execute: function() {
            NewRessource = (function () {
                function NewRessource(prenom, nom, mail, salaire, role) {
                    this.prenom = prenom;
                    this.nom = nom;
                    this.mail = mail;
                    this.salaire = salaire;
                    this.role = role;
                }
                return NewRessource;
            })();
            exports_1("NewRessource", NewRessource);
        }
    }
});
//# sourceMappingURL=NewRessource.js.map