import { Injectable } from '@angular/core';
import { customerUrls } from '../utils/urls';
import { ICustomerAdd, ICustomer } from '../models/customer.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  fetchAllCustomers() {
    return this.http.get<ICustomer[]>(customerUrls.customers);
  }

  fetchCustomerById(id) {
    return this.http.get<ICustomer>(customerUrls.getById(id));
  }

  addCustomer(customer: ICustomerAdd) {
    return this.http.post(customerUrls.customers, customer);
  }
}
