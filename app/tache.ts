 import {Activite}	from './activite';
        
    export class Tache {
      constructor(
        public _id:string,
        public nom:string,
        public charge:number,
        public activites:Activite[]) { }
    }