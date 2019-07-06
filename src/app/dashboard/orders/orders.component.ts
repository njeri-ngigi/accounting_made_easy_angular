import { Component, OnInit } from '@angular/core';
import { faUsers, faUserPlus, faChartLine, faCogs, faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faChartLine = faChartLine;
  faCogs = faCogs;
  faPowerOff = faPowerOff;

  constructor() { }

  ngOnInit() {
  }

}
