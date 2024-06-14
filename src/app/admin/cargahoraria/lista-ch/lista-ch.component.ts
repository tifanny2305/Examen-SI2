import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-ch',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-ch.component.html',
  styleUrls: ['./lista-ch.component.css']
})
export class ListaChComponent implements OnInit{
  cargas: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchCargaHoraria();
  }

  fetchCargaHoraria(): void {
    this.isLoading = true;
    this.apiService.getAllCargaHorarias().subscribe(
      (data: any) => {
        this.cargas = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener la carga horaria:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener la carga horaria');
      }
    );
  }
}
