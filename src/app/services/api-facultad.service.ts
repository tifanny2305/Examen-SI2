import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';  // Importa el servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class ApiFacultadService {
  apiUrl: string = "http://localhost:8081";

  constructor(private http: HttpClient, private apiService: ApiService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = this.apiService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getAllFacultades(): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/api/facultad/findAll`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getFacultadById(id: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.apiUrl}/api/facultad/find/${id}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  createFacultad(nombre: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(`${this.apiUrl}/api/facultad/save`, { nombre }, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  updateFacultad(id: string, facultad: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put<any>(`${this.apiUrl}/api/facultad/update/${id}`, facultad, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  deleteFacultad(id: string): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}/api/facultad/delete/${id}`, { headers, responseType: 'text' as 'json' }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error occurred:', error);
    return throwError('An error occurred; please try again later.');
  }
}
