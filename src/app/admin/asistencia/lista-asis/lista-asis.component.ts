import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-asis',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-asis.component.html',
  styleUrls: ['./lista-asis.component.css']
})

export class ListaAsisComponent implements OnInit{
  asistencias: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAsistencias();
  }

  fetchAsistencias(): void {

    this.apiService.getAllAsistencias().subscribe(
      (data: any) => {
        this.asistencias = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener las asistencias:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener las asistencias');
      }
    );
  }
}