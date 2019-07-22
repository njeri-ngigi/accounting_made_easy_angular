import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from 'src/app/models/customer.interface';
import { CustomersService } from 'src/app/services/customers.service';
import { imagePlaceholder } from 'src/app/utils/constants';

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
    private service: CustomersService
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(params => this.customerId = params.id);
    this.service.fetchCustomerById(this.customerId).subscribe((data) => {
      this.customer = data;
      this.isLoading = false;
      if (!this.customer.profile_picture) {
        this.customer.profile_picture = imagePlaceholder;
      }
    });
  }
}
