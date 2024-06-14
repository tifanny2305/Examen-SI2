import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crearg',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crearg.component.html',
  styleUrl: './crearg.component.css'
})
export class CreargComponent implements OnInit {
  isLoading = false;
  nombreGrupo = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
  }

  onCreate(): void {
    if (this.nombreGrupo.trim() === '') {
      alert('El campo de nombre de la grupo no puede estar vacío');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear esta grupo?');
    if (confirmCreate) {
      this.isLoading = true;
      this.apiService.createGrupo(this.nombreGrupo).subscribe({
        next: (response) => {
          alert('grupo creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/grupo']);
        },
        error: (error) => {
          console.error('Error al crear la grupo:', error);
          alert('Ocurrió un error al crear la grupo: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}
