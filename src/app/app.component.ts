import { Component } from '@angular/core';
import { URLSearchParams , Http, Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies';
import { WebsocketService } from './services/websocket.service';
import { Subject, Observable, Subscription } from 'rxjs/Rx';
import { UserFactory } from './models/UserFacroty';
import { ServerFactory } from './models/ServerFactory';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any;
  cookies: Object;
  keys: Array<string>;
  cName: string;
  cValue: string;
  rName: string;
  checkName: string = 'email';
  user: any;
  server:any;

  constructor(private http: Http, private userFactory : UserFactory, private serverFactory:ServerFactory) { }

ngOnInit() {
  this.Server();
  this.login('sezar@yahoo.com', 'sezar', false);
}
Server(){
  this.http.get('http://localhost:8082/api/server?_dc=1490005447063')
            .subscribe(data => {
            this.server = this.serverFactory.create(JSON.parse(data.text()))
             console.log('Server (OK) ');
             console.log(JSON.parse(data.text()));
             
      }, error => {
          console.log('error.json()');
      });
}
login(username, password, und) {const me = this;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.append('email', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('undefined', und);

        const body = urlSearchParams.toString();
        this.http.post('http://localhost:8082/api/session', body, {headers: headers})
            .subscribe(data => {
            localStorage.setItem('user', username);
            localStorage.setItem('password', password);
            this.user =  this.userFactory.create(JSON.parse(data.text()));
            console.log('Session (OK) ');
            console.log(JSON.parse(data.text()));
            
      }, error => {
          console.log('error.json()');
      });


    }
  update() {
    this.cookies = Cookie.getAll();
    this.keys = Object.keys(this.cookies);
  }

  addCookie(cName: string, cValue: string) {
    console.log('Adding: ', cName, cValue);
    Cookie.set(cName, cValue);
    this.update();
  }
  checkCookie() {
    console.log('Checking: ', this.checkName);
    console.log(Cookie.check(this.checkName));
    // window.alert('Check cookie ' + this.checkName + ' returned ' + Cookie.check(this.checkName));
  }



}
