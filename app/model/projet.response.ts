    import {Projet}		from '../projet';
 
    export class ProjetResponse {
      constructor(
      public success:boolean,
      public message:string,
      public token:string,
      public projet:Projet) { }
    }