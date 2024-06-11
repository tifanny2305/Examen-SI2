import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = "http://localhost:8080";
  tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        if (response.token) {
          console.log(response.token);
          this.setToken(response.token);
        }
      }),
      catchError(err => {
        console.error('Error en el login:', err);
        throw err;
      })
    );
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }
  
  private setToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  /*private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }*/

  /*getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }*/

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  //Materia
  
  getAllMaterias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/materia/findAll`);
  }

}
