import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/models/customer.interface';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: ICustomer;

  constructor() { }

  ngOnInit() {
  }

}
