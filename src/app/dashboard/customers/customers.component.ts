import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { ICustomer } from '../../models/customer.interface';
import { faUsers, faUserPlus, faChartLine, faCogs, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: ICustomer[];
  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faChartLine = faChartLine;
  faCogs = faCogs;
  faPowerOff = faPowerOff;

  constructor(private service: CustomersService) { }

  async ngOnInit() {
    this.customers = await this.service.fetchAllCustomers();
  }
}
