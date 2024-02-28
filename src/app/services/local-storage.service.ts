import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Method to get the token from the local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Method to clear the token from the local storage
  clearToken(): void {
    localStorage.removeItem('token');
  }
}
