    import {Tache} 	from './tache';
    
    export class Projet {
    
    public taches:Tache[]=[];
    
      constructor(
      	public id:number,
        public nom:string,
        public client:string,
        public avancement:number,
        public marge:number) {}
        
        setTaches(p_taches:Tache[]){
        	this.taches=p_taches;
         }
        
    }