import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-u',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-u.component.html',
  styleUrl: './crear-u.component.css'
})
export class CrearUComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    if (this.username.trim() === '' && this.email.trim() === '' && this.password.trim() === '') {
      alert('Los campos no puede estar vacío');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear este usuario?');
    if (confirmCreate) {
      this.isLoading = true;
      this.apiService.createUsuario(this.username, this.email, this.password).subscribe({
        next: (response) => {
          alert('Materia creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/usuario']);
        },
        error: (error) => {
          console.error('Error al crear el usuario:', error);
          alert('Ocurrió un error al crear el usuario: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
  
}