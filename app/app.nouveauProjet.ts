    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Router}		from 'angular2/router';
  	import {NgForm}		from 'angular2/common';
            
    @Component({
      templateUrl: 'template/app.projet.html'
    })
    
    export class AppNouveauProjet {
		
		log='ko';
		projet:Projet=new Projet('','',0,0);
	    
	    onCreationProjet(nouveauProjet:Projet) { 
	    	this.log=nouveauProjet.nom;
	    }

	}