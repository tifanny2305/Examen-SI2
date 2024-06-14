import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-a',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-a.component.html',
  styleUrls: ['./lista-a.component.css']
})
export class ListaAComponent implements OnInit{
  administradores: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAdministradores();
  }

  fetchAdministradores(): void {

    this.apiService.getAllAdministradores().subscribe(
      (data: any) => {
        this.administradores = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener los administradores:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener los administradores');
      }
    );
  }
}