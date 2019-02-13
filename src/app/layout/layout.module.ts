import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RightpanelComponent } from './rightpanel/rightpanel.component';
import { MenuComponent, AppSubMenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    RightpanelComponent,
    MenuComponent,
    AppSubMenuComponent
  ],

  exports: [
    TopbarComponent,
    FooterComponent,
    RightpanelComponent,
    MenuComponent,
    AppSubMenuComponent

  ],

  imports: [
    CommonModule,

    ScrollPanelModule,
    BreadcrumbModule
  ]
})
export class LayoutModule { }
