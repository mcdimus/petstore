import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";
import {AppRepositoryService} from "./common/app-repository.service";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  RouterModule.forRoot([
		  {path: '', component: HomeComponent},
		  {path: 'login', component: LoginComponent}
	  ], {useHash: true}),
	  HomeModule
  ],
  providers: [AppRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
