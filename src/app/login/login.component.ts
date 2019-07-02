import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const welcomeMessage = document.getElementById('app-welcome-message');
    const loginMessage = document.getElementById('app-login');

    setTimeout(() => {
      welcomeMessage.style.display = 'none';
      loginMessage.style.display = 'flex';
    }, 2000);

  }

}
