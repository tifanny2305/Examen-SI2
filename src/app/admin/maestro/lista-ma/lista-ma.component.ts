import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-ma',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-ma.component.html',
  styleUrls: ['./lista-ma.component.css']
})

export class ListaMaComponent implements OnInit{
  maestros: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchDocentes();
  }

  fetchDocentes(): void {

    this.apiService.getAllDocentes().subscribe(
      (data: any) => {
        this.maestros = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener los maestros:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener los maestros');
      }
    );
  }
}