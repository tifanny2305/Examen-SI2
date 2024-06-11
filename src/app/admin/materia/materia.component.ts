import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-materia',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  materias: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchMaterias();
  }

  fetchMaterias(): void {
    this.isLoading = true; // Inicia el indicador de carga
    this.apiService.getAllMaterias().subscribe(
      (data: any) => {
        this.materias = data;
        this.isLoading = false; // Finaliza el indicador de carga
      },
      error => {
        console.error('Error al obtener las materias:', error);
        this.isLoading = false; // Finaliza el indicador de carga en caso de error
        alert('Ocurrió un error al obtener las materias');
      }
    );
  }
}
