    import {Tache} 	from './tache';
    import {Client} from './client';
    
    export class Projet {
    
    public taches:Tache[]=[];
    
      constructor(
      	public _id:string,
        public nom:string,
        public client_id:string,
        public avancement:number,
        public marge:number) {}
        
        setTaches(p_taches:Tache[]){
        	this.taches=p_taches;
         }
        
    }