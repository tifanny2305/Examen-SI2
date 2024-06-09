import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = "http://localhost:8000/api/"
  constructor(private http: HttpClient) { }

  login(Obj: any) {
    return this.http.post(this.apiUrl + 'login', Obj);
  }
  getAllUsers() {
    return this.http.get(this.apiUrl + 'user')
  }
}
