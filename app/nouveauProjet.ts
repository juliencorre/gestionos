    import {Tache} 	from './tache';
    
    export class NouveauProjet {
    
    public taches:Tache[]=[];
    
      constructor(
        public nom:string,
        public client_id:string,
        public avancement:number,
        public marge:number) {}
        
        setTaches(p_taches:Tache[]){
        	this.taches=p_taches;
         }

        
    }