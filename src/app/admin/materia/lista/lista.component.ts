import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{
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
