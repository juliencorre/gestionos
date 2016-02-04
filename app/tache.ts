 import {Activite}	from './activite';
        
    export class Tache {
      constructor(
        public id:number,
        public nom:string,
        public charge:number,
        public activites:Activite[]) { }
    }