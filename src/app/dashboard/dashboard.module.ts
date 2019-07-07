import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AuthGuardService } from '../guards/auth-guard.service';
import { CustomersComponent } from './customers/customers.component';
import { StockComponent } from './stock/stock.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerCardComponent } from './customers/customer-card/customer-card.component';
import { CustomersService } from '../services/customers.service';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomersHomeComponent } from './customers/customers-home/customers-home.component';
import { CustomerAnalyticsComponent } from './customers/customer-analytics/customer-analytics.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CustomersComponent,
    StockComponent,
    OrdersComponent,
    CustomerCardComponent,
    HomeComponent,
    CustomerComponent,
    AddCustomerComponent,
    CustomersHomeComponent,
    CustomerAnalyticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    AuthGuardService,
    CustomersService
  ]
})
export class DashboardModule { }
