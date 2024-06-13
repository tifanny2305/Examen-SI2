import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editarg',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editarg.component.html',
  styleUrls: ['./editarg.component.css']
})
export class EditargComponent implements OnInit {
  grupo: any = null;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchGrupo(id);
    } else {
      alert('ID de grupo no encontrado');
      this.router.navigate(['/grupo']);
    }
  }

  fetchGrupo(id: string): void {
    this.isLoading = true;
    this.apiService.getGrupoById(id).subscribe(
      (data: any) => {
        this.grupo = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener el grupo', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener el grupo');
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.apiService.updateGrupo(this.grupo.id, this.grupo).subscribe({
      next: (response) => {
        alert('Grupo actualizada exitosamente');
        this.isLoading = false;
        this.router.navigate(['/grupo']);
      },
      error: (error) => {
        console.error('Error al actualizar el grupo:', error);
        this.isLoading = false;
        
      }
    });
  }

  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este grupo?');
    if (confirmDelete) {
      this.isLoading = true;
      this.apiService.deleteGrupo(this.grupo.id).subscribe({
        next: (response) => {
          alert('Grupo eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/grupo']);
        },
        error: (error) => {
          console.error('Error al eliminar la grupo:', error);
          this.isLoading = false;
          
        }
      });
    }
  }
}
