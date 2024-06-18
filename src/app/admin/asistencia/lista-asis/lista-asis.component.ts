import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-asis',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-asis.component.html',
  styleUrls: ['./lista-asis.component.css'],
})
export class ListaAsisComponent implements OnInit {
  asistencias: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchAsistencias();
  }

  fetchAsistencias(): void {
    this.apiService.getAllAsistencias().subscribe(
      (data: any) => {
        this.asistencias = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener las asistencias:', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener las asistencias');
      }
    );
  }
  getEstadoClass(estado: string): string {
    switch (estado) {
      case 'L':
        return 'bg-blue-100 text-blue-800 text-sm me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300';
      case 'R':
        return 'bg-yellow-100 text-yellow-800 text-sm me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300';
      case 'F':
        return 'bg-red-100 text-red-800 text-sm  me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300';
      case 'P':
        return 'bg-green-100 text-green-800 text-sm  me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300';
      default:
        return '';
    }
  }
  getEstadoText(estado: string): string {
    switch (estado) {
      case 'L':
        return 'Licencia';
      case 'R':
        return 'Retraso';
      case 'F':
        return 'Falta';
      case 'P':
        return 'Presente';
      default:
        return '';
    }
  }
}
