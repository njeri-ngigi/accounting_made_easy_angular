import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { CustomersComponent } from './customers/customers.component';
import { StockComponent } from './stock/stock.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomersHomeComponent } from './customers/customers-home/customers-home.component';
import { CustomerAnalyticsComponent } from './customers/customer-analytics/customer-analytics.component';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { AddStockComponent } from './stock/add-stock/add-stock.component';
import { StockAnalyticsComponent } from './stock/stock-analytics/stock-analytics.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'customers',
        component: CustomersComponent,
        children: [
          { path: '', component: CustomersHomeComponent },
          { path: 'addCustomer', component: AddCustomerComponent },
          { path: 'customer/:id', component: CustomerComponent },
          { path: 'analytics', component: CustomerAnalyticsComponent }
        ]
      },
      {
        path: 'stock',
        component: StockComponent,
        children: [
          { path: '', component: StockHomeComponent },
          { path: 'addStock', component: AddStockComponent },
          { path: 'analytics', component: StockAnalyticsComponent }
        ]
      },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders', component: OrdersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
