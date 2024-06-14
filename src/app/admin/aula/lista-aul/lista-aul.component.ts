import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-aul',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-aul.component.html',
  styleUrls: ['./lista-aul.component.css']
})
export class ListaAulComponent implements OnInit{
  aulas: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAulas();
  }

  fetchAulas(): void {

    this.apiService.getAllAula().subscribe(
      (data: any) => {
        this.aulas = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener las aulas:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener las aulas');
      }
    );
  }
}
