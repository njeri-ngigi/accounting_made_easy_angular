import { Component, OnInit } from '@angular/core';
import { faImages, faCloudDownloadAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  faImages = faImages;
  faCloudDownloadAlt = faCloudDownloadAlt;
  faUserPlus = faUserPlus;

  constructor() { }

  ngOnInit() { }

  toggleCustomer(display, hide) {
    document.getElementById(display).style.display = 'flex';
    document.getElementById(hide).style.display = 'none';
  }

}
