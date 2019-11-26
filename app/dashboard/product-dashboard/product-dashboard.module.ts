import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// containers
import { ProductDashboardComponent } from './containers/product-dashboard/product-dashboard.component';
import { ProductViewerComponent } from './containers/product-viewer/product-viewer.component';
import { ProductViewerNewComponent } from './containers/product-viewer-new/product-viewer-new.component';

import { ProductOrderDashboardComponent } from './containers/product-order-dashboard/product-order-dashboard.component';

// components
import { ProductCountComponent } from './components/product-count/product-count.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormNewComponent } from './components/product-form-new/product-form-new.component';
import { ProductOrderDetailComponent } from './components/product-order-detail/product-order-detail.component';

// service
import { ApiService } from '../../services/api.service';

const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductDashboardComponent },
      { path: ':id', component: ProductViewerComponent }
    ]
  },
  {
    path: 'newProduct',
    children: [{ path: '', component: ProductViewerNewComponent }]
  },
  {
    path: 'orders',
    children: [{ path: '', component: ProductOrderDashboardComponent }]
  }
];

@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductViewerComponent,
    ProductViewerNewComponent,
    ProductCountComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductFormNewComponent,
    ProductOrderDashboardComponent,
    ProductOrderDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [ApiService]
})
export class DashboardModule {}
