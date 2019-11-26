import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';

import { NotAllowed } from './not-allowed/not-allowed.component';



// containers
import { ProductDashboardComponent } from './product-dashboard/containers/product-dashboard/product-dashboard.component';
import { ProductViewerComponent } from './product-dashboard/containers/product-viewer/product-viewer.component';
import { ProductViewerNewComponent } from './product-dashboard/containers/product-viewer-new/product-viewer-new.component';

import { ProductOrderDashboardComponent } from './product-dashboard/containers/product-order-dashboard/product-order-dashboard.component';


export const dashboardRoutes: Routes = [

  { path: 'dashboard', component: LayoutComponent, canActivate: [AuthGuard],
  children: [
    { path: 'products',
      children: [ { path: '', component: ProductDashboardComponent }, { path: ':id', component: ProductViewerComponent } ]
    },
    {
      path: 'newProduct',
      children: [{ path: '', component: ProductViewerNewComponent }]
    },
    {
      path: 'orders',
      children: [{ path: '', component: ProductOrderDashboardComponent }]
    },
    { path: 'not-allowed', component: NotAllowed }
  ]
}
  // { path: 'dashboard', component: LayoutComponent, canActivate: [AuthGuard],
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     { path: 'home', component: HomeComponent},
  //     { path: 'admin', component: AdminComponent, data: { role: 'Admin' }, canActivate: [RoleGuard] },
  //     { path: 'not-allowed', component: NotAllowed }
  //   ]
  // }
];


//Lazy loading
// const routes: Routes = [
//   { path: '', loadChildren: () => import(`./log-in/admin.module`).then(m => m.AdminModule) }
// ];


    // loadChildren: () => import(`./product-dashboard/product-dashboard.module`).then(m => m.DashboardModule),
