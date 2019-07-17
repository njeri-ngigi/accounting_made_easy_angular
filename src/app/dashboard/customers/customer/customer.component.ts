import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from 'src/app/models/customer.interface';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerId: number;
  customer: ICustomer;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private service: CustomersService) { }

  async ngOnInit() {
    this.route.params.subscribe(params => this.customerId = params.id);
    this.customer = await this.service.fetchCustomerById(this.customerId);
    this.isLoading = false;
  }
}
