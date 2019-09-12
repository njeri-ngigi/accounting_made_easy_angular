import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    const welcomeMessage = document.getElementById('app-welcome-message');
    const loginMessage = document.getElementById('app-login');

    setTimeout(() => {
      welcomeMessage.style.display = 'none';
      loginMessage.style.display = 'flex';
    }, 2000);
  }

  login() {
    this.authService.login();
    this.router.navigateByUrl('/dashboard');
  }

  candDeactivate() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    console.log('I deactivated this');

    return true;
  }

}
