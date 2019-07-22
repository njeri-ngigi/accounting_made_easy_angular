import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/models/customer.interface';
import { imagePlaceholder } from 'src/app/utils/constants';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: ICustomer;

  constructor() { }

  ngOnInit() {
    if (!this.customer.profile_picture) {
      this.customer.profile_picture = imagePlaceholder;
    }
  }

}
