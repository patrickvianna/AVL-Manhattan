import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessComponent, ErrorComponent, Error404Component } from './error';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'access', component: AccessComponent },
  { path: 'error', component: ErrorComponent },
  { path: '404', component: Error404Component },

  { path: '', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
      { path: 'blank', loadChildren: './pages/blank-page/blank-page.module#BlankPageModule'},
    ]
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
