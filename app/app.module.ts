import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Routes
import { APP_ROUTES } from './app.routes';

//shared
import { HeaderComponent } from '../app/shared/header/header.component';
import { FooterComponent } from '../app/shared/footer/footer.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './page-not-found/page-not-found.component';

//Lazy loading
// const routes: Routes = [
//   { path: '', loadChildren: () => import(`./log-in/admin.module`).then(m => m.AdminModule) }
// ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    DashboardModule
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  // providers: [ AuthGuard, AuthService]


})
export class AppModule {}
