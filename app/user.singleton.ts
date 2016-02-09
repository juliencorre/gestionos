    import {Injectable} from 'angular2/core';
	
	@Injectable()
    export class UserSingleton {
		public mail:string;
        public pwd:string;
        public token:string;
      constructor() { }

    }