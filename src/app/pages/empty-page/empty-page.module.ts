import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyPageRoutingModule } from './empty-page-routing.module';
import { EmptyPageComponent } from './empty-page.component';

@NgModule({
  declarations: [EmptyPageComponent],
  imports: [
    CommonModule,
    EmptyPageRoutingModule
  ]
})
export class EmptyPageModule { }
