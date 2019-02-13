import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './login/login.component';
import { AccessComponent } from './error/access/access.component';
import { ErrorComponent } from './error/error/error.component';
import { Error404Component } from './error/error404/error404.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccessComponent,
    ErrorComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    CoreModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
