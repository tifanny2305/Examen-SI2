import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-cm',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-cm.component.html',
  styleUrls: ['./lista-cm.component.css']
})
export class ListaCMComponent implements OnInit{
  carreramaterias: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchCarreraMaterias();
  }

  fetchCarreraMaterias(): void {
    this.apiService.getAllCarreraMateria().subscribe(
      (data: any) => {
        this.carreramaterias = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener los carrera materias:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener los carrera materias');
      }
    );
  }
}

