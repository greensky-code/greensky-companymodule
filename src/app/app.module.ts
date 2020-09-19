import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import {DataTablesModule} from 'angular-datatables';

import { SimpleNotificationsModule } from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent ,   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
