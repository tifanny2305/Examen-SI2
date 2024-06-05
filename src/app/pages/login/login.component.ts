import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: Login;

  constructor(private http:HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    debugger;
    this.http.post('http://localhost:8000/api/login', this.loginObj).subscribe((res:any)=>{
      if (res.email === this.loginObj.email) {
        alert("Login Success")
        this.router.navigateByUrl('/dashboard')
      } else{
        alert(res.message)
      }
    });
  }

}

export class Login {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
