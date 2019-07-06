import { Component, OnInit } from '@angular/core';
import { faUsers, faUserPlus, faChartLine, faCogs, faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faChartLine = faChartLine;
  faCogs = faCogs;
  faPowerOff = faPowerOff;

  constructor() { }

  ngOnInit() {
  }

}
