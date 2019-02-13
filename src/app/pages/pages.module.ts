import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,

    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ]
})
export class PagesModule { }
