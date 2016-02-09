import {Injectable}     														from 'angular2/core'
import {User} 																	from './user';
import {HTTP_BINDINGS,Http, Response,Headers, RequestOptions} 					from 'angular2/http';
import {Observable}     														from 'rxjs/Observable';
import {Ressource} 																from './ressource';
import {LoginResponse} 															from './model/login.response';

@Injectable()
export class AppConnexionService{
	
	constructor(private http:Http){
		
	}

	
	
	private _Url = 'http://localhost:3000/api/v1/login';
	
	/** 
	 * Authentification d'un utilisateur
	 * 
	 */
	authenticate(user:User)
	{
        
		return this.http.get(this._Url)
        .map(res => <Ressource[]> res.json())
        .do(data => console.log(data)) // eyeball results in the console
        .catch(this.handleError);
  
	}

	/** 
	 * Authentification d'un utilisateur
	 * 
	 */
	authenticate2(user:User)
	{
		let body = JSON.stringify({ user });
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	    
		return this.http.post(this._Url, body, options)
        .map(res => <LoginResponse> res.json())
        .do(data => console.log(data)) // eyeball results in the console
        .catch(this.handleError);
  
	}
	
	private handleError (error: Response) {
	    // in a real world app, we may send the server to some remote logging infrastructure
	    // instead of just logging it to the console
	    console.error(error);
	    return Observable.throw(error.json().error || 'Server error');
	  }
}