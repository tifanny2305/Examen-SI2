import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crearf.component.html',
  styleUrl: './crearf.component.css'
})
export class CrearfComponent implements OnInit {
  isLoading = false;
  nombreFacultad = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    if (this.nombreFacultad.trim() === '') {
      alert('El campo de nombre de la facultad no puede estar vacío');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear esta facultad?');
    if (confirmCreate) {
      this.isLoading = true;
      this.apiService.createFacultad(this.nombreFacultad).subscribe({
        next: (response) => {
          alert('facultad creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/facultad']);
        },
        error: (error) => {
          console.error('Error al crear la facultad:', error);
          alert('Ocurrió un error al crear la facultad: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}

