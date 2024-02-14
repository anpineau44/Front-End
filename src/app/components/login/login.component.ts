import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  login(email: string, password: string): void {
    if (this.authService.login(email, password)) {
      // Authentification réussie, rediriger vers la page d'accueil
      this.router.navigate(['/home']);
    } else {
      // Authentification échouée, rester sur la page de connexion
      console.log("Login failed. Please try again.");
    }
  }
}
