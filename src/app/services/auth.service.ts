import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login() {
    // TODO: call login method from the backend server
    console.log('call meee????');
    localStorage.setItem('token', 'true');
  }

  logout = () => localStorage.removeItem('token');

  isAuthenticated = () => (localStorage.getItem('token') === 'true');
}
