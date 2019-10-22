import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


//components
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';


//shared
import { HeaderComponent } from '../app/shared/header/header.component';
import { FooterComponent } from '../app/shared/footer/footer.component';

import { DashboardModule } from './product-dashboard/dashboard.module';

import { ProductDashboardComponent } from '../app/product-dashboard/containers/product-dashboard/product-dashboard.component';


import { AdminModule } from './log-in/admin.module';

const routes: Routes = [
  { path: '', loadChildren: () => import(`./log-in/admin.module`).then(m => m.AdminModule) }
];


// const routes: Routes = [

//   { path: '', component: HomeComponent, pathMatch: 'full' },
//   { path: '**', component: NotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    DashboardModule,
    AdminModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  // providers: [ AuthGuard, AuthService]


})
export class AppModule {}
