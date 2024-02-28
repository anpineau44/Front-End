import { Injectable } from '@angular/core';
import { BackAuthService } from '../services/back/services/back-auth.service'
import { Login } from './back/models';
import { ApiAuthAuthenticatePost$Params } from './back/fn/auth/api-auth-authenticate-post';
import { LocalStorageService } from './local-storage.service';
import { ApiAuthValidateTokenGet$Params } from './back/fn/auth/api-auth-validate-token-get';
import { HttpClient, HttpContext, HttpContextToken, HttpHeaders } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private backAuthService: BackAuthService, private localStorageService: LocalStorageService, private http: HttpClient) { }

  async login(email: string, password: string): Promise<boolean> {
    const loginData: Login = {
      email: email,
      password: password
    };

    // Construire les paramètres de la requête
    const params: ApiAuthAuthenticatePost$Params = {
      body: loginData
    };

    return new Promise<boolean>((resolve, reject) => {
      this.backAuthService.apiAuthAuthenticatePost$Response(params).subscribe(
        (response) => {
          console.log('Authentification réussie');

          const responseBody = response.body;
          if (responseBody != null) {
            //recup le token
            const responseParse = JSON.parse(responseBody);
            const token = responseParse.token;
            //sauvegarde
            this.localStorageService.setToken(token);
            resolve(true);
          } else {
            console.error('Réponse sans corps.');
            reject(false);
          }
        },
        (error) => {
          console.error('Erreur lors de l\'authentification :', error);
          // En cas d'erreur d'authentification, rejeter la promesse avec false
          reject(false);
        }
      );
    });
  }

  async isAuthenticated(): Promise<boolean> {
    const token = this.localStorageService.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Construire l'URL de l'API
    const apiUrl = this.backAuthService.rootUrl + BackAuthService.ApiAuthValidateTokenGetPath;

    return new Promise<boolean>((resolve, reject) => {
      this.http.get<void>(apiUrl, { headers }).subscribe(
        () => {
          console.log('Token is valid');
          resolve(true);
        },
        (error) => {
          // Gérer l'erreur
          console.error('Error validating token:', error);
          this.router.navigate(['/login']);
          reject(false);
        }
      );
    });
  }
}
