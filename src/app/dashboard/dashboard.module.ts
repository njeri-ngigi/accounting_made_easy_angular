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

@NgModule({
  declarations: [
    DashboardComponent,
    CustomersComponent,
    StockComponent,
    OrdersComponent,
    CustomerCardComponent,
    HomeComponent
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
