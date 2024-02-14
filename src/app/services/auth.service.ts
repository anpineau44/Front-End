import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): boolean {
    // Vérifiez les informations d'identification de l'utilisateur ici
    // Retournez true si l'authentification réussit, sinon false
    return true; // Exemple de réussite d'authentification (à remplacer par la logique réelle)
  }
  // login(email: string, password: string): Observable<any> {
  //   const body = {
  //     email: email,
  //     password: password,
  //   };

  //   return this.httpClient.post(AUTH_API, body);
  // }
  isAuthenticated(): boolean {
    // Implémentez la logique de vérification de l'authentification ici
    // Par exemple, vérifiez si l'utilisateur a un jeton d'authentification valide
    return true; // Retourne true si l'utilisateur est authentifié, sinon false
  }
}
