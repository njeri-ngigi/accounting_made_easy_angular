import { Component, OnInit } from '@angular/core';
import { faChartLine, faCogs, faPowerOff, faStore, faPlusCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  faStore = faStore;
  faPlusCircle = faPlusCircle;
  faChartLine = faChartLine;
  faCogs = faCogs;
  faPowerOff = faPowerOff;

  constructor() { }

  ngOnInit() {
  }

}
