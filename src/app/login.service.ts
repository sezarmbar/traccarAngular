import { Injectable }    from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private loggedIn = false;
    private loginUrl = 'http://localhost:8080/mpadmin/api/login.jsp';
    private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    constructor(private http: Http) {}

    login(username, password) {
        return this.http.post(this.loginUrl, {'username': username, 'password':  password}, this.headers)
            .map((response: Response) => {
                let user = response.json();
                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            }
        );
    }
}