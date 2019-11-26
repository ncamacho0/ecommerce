import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HttpClientModule  } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { dashboardRoutes } from './dashboard.routes';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';
import { NotAllowed } from './not-allowed/not-allowed.component';


// components
import { ProductCountComponent } from './product-dashboard/components/product-count/product-count.component';
import { ProductDetailComponent } from './product-dashboard/components/product-detail/product-detail.component';
import { ProductFormComponent } from './product-dashboard/components/product-form/product-form.component';
import { ProductFormNewComponent } from './product-dashboard/components/product-form-new/product-form-new.component';
import { ProductOrderDetailComponent } from './product-dashboard/components/product-order-detail/product-order-detail.component';

// service
import { ApiService } from '../services/api.service';

// containers
import { ProductDashboardComponent } from './product-dashboard/containers/product-dashboard/product-dashboard.component';
import { ProductViewerComponent } from './product-dashboard/containers/product-viewer/product-viewer.component';
import { ProductViewerNewComponent } from './product-dashboard/containers/product-viewer-new/product-viewer-new.component';

import { ProductOrderDashboardComponent } from './product-dashboard/containers/product-order-dashboard/product-order-dashboard.component';

//shared
import { HeaderComponent } from '../../app/shared/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [
    AuthGuard,
    RoleGuard,
    ApiService
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    LayoutComponent,
    NotAllowed,
    ProductDashboardComponent,
    ProductViewerComponent,
    ProductViewerNewComponent,
    ProductOrderDashboardComponent,
    ProductCountComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductFormNewComponent,
    ProductOrderDetailComponent
  ]
})
export class DashboardModule { }
