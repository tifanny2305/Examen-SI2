import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listag',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listag.component.html',
  styleUrl: './listag.component.css'
})
export class ListagComponent implements OnInit{
  grupos: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchGrupos();
  }

  fetchGrupos(): void {
    this.isLoading = true; // Inicia el indicador de carga
    this.apiService.getAllGrupos().subscribe(
      (data: any) => {
        this.grupos = data;
        this.isLoading = false; // Finaliza el indicador de carga
      },
      error => {
        console.error('Error al obtener el grupo:', error);
        this.isLoading = false; // Finaliza el indicador de carga en caso de error
        alert('Ocurrió un error al obtener el grupo');
      }
    );
  }
}