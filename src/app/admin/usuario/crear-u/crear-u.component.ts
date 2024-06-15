import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-u',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-u.component.html',
  styleUrls: ['./crear-u.component.css']
})

export class CrearUComponent implements OnInit {

  isLoading: boolean = false;
  user: any = {
    username: '',
    email: '',
    password: '',
    roles: ''
  };

  constructor(private apiService: ApiService, private router: Router  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }
    const confirmCreate = confirm('¿Estás seguro de que deseas crear esta usuario?');
    if (confirmCreate) {
      this.isLoading = true;
      this.apiService.createUsuario(this.user).subscribe({
        next: (response) => {
          alert('usuario creada exitosamente');
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

