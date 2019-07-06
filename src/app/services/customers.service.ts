import { Injectable } from '@angular/core';
import axios from 'axios';
import { customerUrls } from '../utils/urls';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  fetchAllCustomers() {
    return axios.get(customerUrls.getAll)
      .then((results) => results.data);
  }
}
