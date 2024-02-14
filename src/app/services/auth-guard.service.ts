import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // L'utilisateur est authentifié, autoriser l'accès
    } else {
      this.router.navigate(['/login']); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
      return false; // Bloquer l'accès
    }
  }
}
