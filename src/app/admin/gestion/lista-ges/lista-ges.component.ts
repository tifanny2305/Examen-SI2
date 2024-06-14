import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-ges',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-ges.component.html',
  styleUrls: ['./lista-ges.component.css']
})
export class ListaGesComponent implements OnInit{
  gestiones: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchGestiones();
  }

  fetchGestiones(): void {

    this.apiService.getAllGestiones().subscribe(
      (data: any) => {
        this.gestiones = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener las gestiones:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener las gestiones');
      }
    );
  }

}