import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { faUsers, faUserPlus, faChartLine, faCogs, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faChartLine = faChartLine;
  faCogs = faCogs;
  faPowerOff = faPowerOff;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(() => {

    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  onActivate() {
    console.log('activated>>>>>>>>');
  }
}
