    import {Component} 	from 'angular2/core';
    import {Projet}		from './projet';
    import {Router}		from 'angular2/router';
          
    @Component({
      templateUrl: 'template/app.projets.html'
    })
    
    export class AppProjets {
		
		projets:Projet[];
		log='';
		  
		constructor(private _router: Router) {
	      this.projets = [
		    new Projet('projet1','client1',50,23),
		    new Projet('projet2','client2',75,53)
		  ];
	    }
	    
	    onClick(){
	    	this.log='click';
	    	this._router.navigate(['NouveauProjet'] );
	    }

	}