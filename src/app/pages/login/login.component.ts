import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };
  constructor(private roomSrv: ApiService, private router: Router) {}
  onLogin() {
    this.roomSrv.login(this.loginObj).subscribe(
      (res: any) => {
        if (res.email === this.loginObj.email) {
          localStorage.setItem('login', JSON.stringify(res.data));
          alert("Bienvenido")
          this.router.navigateByUrl('/dashboard');
        } else {
          alert('No se puede iniciar sesteión');
        }
      },
      error => {
        console.error('Error en el login:', error);
        alert('Ocurrió un error en el inicio de sesión');
      }
    );
  }
  /* loginObj: Login;

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
  } */
}
