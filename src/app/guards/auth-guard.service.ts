import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <boolean> | boolean {
    if (this.authService.isAuthenticated()) { return true; }

    this.router.navigate(['/login']);

    return false;
  }
}
