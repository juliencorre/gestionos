 import {Ressource} 	from '../ressource';
 
    export class LoginResponse {
      constructor(
      public success:boolean,
      public message:string,
      public token:string,
      public ressource:Ressource) { }
    }