    import {Component,  OnInit} 	from 'angular2/core';
    import {Projet}					from './projet';
    import {RouteParams, Router}	from 'angular2/router';
  	import {NgForm}					from 'angular2/common';
    import {Client} 				from './client';
    import {Tache} 					from './tache';
    import {HTTP_PROVIDERS, Http} from 'angular2/http';
            
    @Component({
    	templateUrl: 'template/app.pwa.html',
    	bindings: [HTTP_PROVIDERS]
    })
    
    export class AppPwa {

    	log='';
    	
    	lundi;
    	mardi;
    	mercredi;
    	jeudi;
    	vendredi;
 	
    	people: Object[];
	   	
	   	constructor(private _router: Router,
	   				private _routeParams:RouteParams,private _http:Http) { 
	   		
	   		var now = new Date();
	   		
	   		var diff =now.getDay()-1;
	   		
	   		this.lundi=now.setDate(now.getDate()-diff);
	   		this.mardi=now.setDate(now.getDate()+1);
	   		this.mercredi=now.setDate(now.getDate()+1);
	   		this.jeudi=now.setDate(now.getDate()+1);
	   		this.vendredi=now.setDate(now.getDate()+1);
	   		
				   	}
	   	
	    ngOnInit() {
	    	
	      }
	    
	    onClick(){
	   		
	   		
	    }
	    onPrecedente(){
	    	this.log='onPrecedente';
	    	var now=new Date(this.lundi);
	    	
	    	this.lundi=new Date(now.getTime());
	    	this.mardi=new Date(now.getTime());
	    	this.mercredi=new Date(now.getTime());
	    	this.jeudi=new Date(now.getTime());
	    	this.vendredi= new Date(now.getTime());
	    	
	    	this.lundi.setTime(now.getTime()-(1000*60*60*24*7));
	    	this.mardi.setTime(now.getTime()-(1000*60*60*24*6));
	    	this.mercredi.setTime(now.getTime()-(1000*60*60*24*5));
	    	this.jeudi.setTime(now.getTime()+(1000*60*60*24*4));
	    	this.vendredi.setTime(now.getTime()-(1000*60*60*24*3));	
	    }
	    
	    onSuivante(){
	    	this.log='onSuivante';
	    	var now=new Date(this.lundi);
	    	
	    	this.lundi=new Date(now.getTime());
	    	this.mardi=new Date(now.getTime());
	    	this.mercredi=new Date(now.getTime());
	    	this.jeudi=new Date(now.getTime());
	    	this.vendredi= new Date(now.getTime());
	    	
	    	this.lundi.setTime(now.getTime()+(1000*60*60*24*7));
	    	this.mardi.setTime(now.getTime()+(1000*60*60*24*8));
	    	this.mercredi.setTime(now.getTime()+(1000*60*60*24*9));
	    	this.jeudi.setTime(now.getTime()+(1000*60*60*24*10));
	    	this.vendredi.setTime(now.getTime()+(1000*60*60*24*11));	    	
	    }
	

	}