import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editarf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editarf.component.html',
  styleUrl: './editarf.component.css'
})
export class EditarfComponent implements OnInit {
  facultad: any = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchFacultad(id);
    } else {
      alert('ID de facultad no encontrado');
      this.router.navigate(['/facultad']);
    }
  }

  fetchFacultad(id: string): void {
    this.isLoading = true;
    this.apiService.getFacultadById(id).subscribe(
      (data: any) => {
        this.facultad = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener la facultad:', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener la facultad');
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.apiService.updateFacultad(this.facultad.id, this.facultad).subscribe({
      next: (response) => {
        alert('facultad actualizada exitosamente');
        this.isLoading = false;
        this.router.navigate(['/facultad']);
      },
      error: (error) => {
        console.error('Error al actualizar la facultad:', error);
        this.isLoading = false;
        
      }
    });
  }

  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta facultad?');
    if (confirmDelete) {
      this.isLoading = true;
      this.apiService.deleteFacultad(this.facultad.id).subscribe({
        next: (response) => {
          alert('facultad eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/facultad']);
        },
        error: (error) => {
          console.error('Error al eliminar la facultad:', error);
          this.isLoading = false;
          
        }
      });
    }
  }
}
