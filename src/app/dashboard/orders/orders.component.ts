import { Component, OnInit } from '@angular/core';
import { faChartLine, faCogs, faPowerOff, faShoppingBag, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  faShoppingBag = faShoppingBag;
  faPlusCircle = faPlusCircle;
  faChartLine = faChartLine;
  faCogs = faCogs;
  faPowerOff = faPowerOff;

  constructor() { }

  ngOnInit() {
  }

}
