import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login() {
    // TODO: call login method from the backend server
    localStorage.setItem('token', 'true');
  }

  logout = () => {
    console.log('Are you talking to me!');
    localStorage.removeItem('token');
  }

  isAuthenticated = () => (localStorage.getItem('token') === 'true');
}
