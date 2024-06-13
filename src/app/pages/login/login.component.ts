import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin(): void {
    this.apiService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => {
        console.error('Error en el login:', err);
        this.errorMessage = 'Nombre de usuario o contraseña incorrectos';
      }
    });
  }


  /*
  will
  onLogin() {
    this.roomSrv.login(this.loginObj).subscribe(
      (res: any) => {
        if (res.username === this.loginObj.username) {
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
  
  */
  
  
  /* loginObj: Login; tiff

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
