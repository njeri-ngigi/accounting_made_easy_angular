import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { CustomersComponent } from './customers/customers.component';
import { StockComponent } from './stock/stock.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: HomeComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'stock', component: StockComponent },
      { path: 'orders', component: OrdersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }


