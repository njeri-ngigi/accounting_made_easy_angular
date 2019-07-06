import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/models/customer.interface';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-home',
  templateUrl: './customers-home.component.html',
  styleUrls: ['./customers-home.component.scss']
})
export class CustomersHomeComponent implements OnInit {
  customers: ICustomer[];

  constructor(private service: CustomersService) { }

  async ngOnInit() {
    this.customers = await this.service.fetchAllCustomers();
  }

}
