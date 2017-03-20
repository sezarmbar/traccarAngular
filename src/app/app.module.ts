import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { UserFactory } from './models/UserFacroty';
import { ServerFactory } from './models/ServerFactory';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CookieService, UserFactory, ServerFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
