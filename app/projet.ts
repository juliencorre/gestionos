    import {Tache} 	from './tache';
    import {Client} from './client';
    
    export class Projet {
    
    public taches:Tache[]=[];
    
      constructor(
      	public id:number,
        public nom:string,
        public client:Client,
        public avancement:number,
        public marge:number) {}
        
        setTaches(p_taches:Tache[]){
        	this.taches=p_taches;
         }
         
         setClient(p_client:Client){
        	this.client=p_client;
         }
        
    }