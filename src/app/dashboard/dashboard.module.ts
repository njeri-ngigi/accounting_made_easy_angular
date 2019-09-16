import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';

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
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { AddStockComponent } from './stock/add-stock/add-stock.component';
import { StockAnalyticsComponent } from './stock/stock-analytics/stock-analytics.component';
import { StockCardComponent } from './stock/stock-card/stock-card.component';
import { StockService } from '../services/stock.service';
import { StockNotificationComponent } from './stock/stock-notification/stock-notification.component';
import { StockViewComponent } from './stock/stock-view/stock-view.component';

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
    CustomerAnalyticsComponent,
    StockHomeComponent,
    AddStockComponent,
    StockAnalyticsComponent,
    StockCardComponent,
    StockNotificationComponent,
    StockViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ChartsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    CustomersService,
    StockService,
    ToastrService
  ]
})
export class DashboardModule { }
