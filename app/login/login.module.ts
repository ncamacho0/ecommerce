import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// components
import { AuthFormComponent } from './components/auth-form/auth-form.component';

// service
import { UserDashboardService } from './login.service';

const routes: Routes = [
  {
    path: '/login',
    children: [
    { path: '', component: AuthFormComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserDashboardService
  ]
})
export class UserDashboardModule {}