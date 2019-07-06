import { Component, OnInit } from '@angular/core';
import { faUserPlus, faChartLine, faCogs, faPowerOff, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faHome = faHome;
  faUserPlus = faUserPlus;
  faChartLine = faChartLine;
  faCogs = faCogs;
  faPowerOff = faPowerOff;

  constructor() { }

  ngOnInit() {
  }

}
