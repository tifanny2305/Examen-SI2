import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent implements OnInit {
  isLoading = false;
  nombreMateria = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    if (this.nombreMateria.trim() === '') {
      alert('El campo de nombre de la materia no puede estar vacío');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear esta materia?');
    if (confirmCreate) {
      this.isLoading = true;
      this.apiService.createMateria(this.nombreMateria).subscribe({
        next: (response) => {
          alert('Materia creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/materia']);
        },
        error: (error) => {
          console.error('Error al crear la materia:', error);
          alert('Ocurrió un error al crear la materia: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}
