import { Component, OnInit } from '@angular/core';
import { faUsers, faUserPlus, faChartLine, faCogs, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faChartLine = faChartLine;
  faCogs = faCogs;
  faPowerOff = faPowerOff;

  constructor() { }

  ngOnInit() { }
}
