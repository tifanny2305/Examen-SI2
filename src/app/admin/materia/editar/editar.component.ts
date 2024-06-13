import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  materia: any = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchMateria(id);
    } else {
      alert('ID de materia no encontrado');
      this.router.navigate(['/materia']);
    }
  }

  fetchMateria(id: string): void {
    this.isLoading = true;
    this.apiService.getMateriaById(id).subscribe(
      (data: any) => {
        this.materia = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener la materia:', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener la materia');
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.apiService.updateMateria(this.materia.id, this.materia).subscribe({
      next: (response) => {
        alert('Materia actualizada exitosamente');
        this.isLoading = false;
        this.router.navigate(['/materia']);
      },
      error: (error) => {
        console.error('Error al actualizar la materia:', error);
        this.isLoading = false;
        
      }
    });
  }

  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta materia?');
    if (confirmDelete) {
      this.isLoading = true;
      this.apiService.deleteMateria(this.materia.id).subscribe({
        next: (response) => {
          alert('Materia eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/materia']);
        },
        error: (error) => {
          console.error('Error al eliminar la materia:', error);
          this.isLoading = false;
          
        }
      });
    }
  }
}