import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-u',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-u.component.html',
  styleUrl: './lista-u.component.css'
})
export class ListaUComponent implements OnInit{
  usuarios: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchUsuarios();
  }

  fetchUsuarios(): void {
    this.isLoading = true; // Inicia el indicador de carga
    this.apiService.getAllUsuarios().subscribe(
      (data: any) => {
        this.usuarios = data;
        this.isLoading = false; // Finaliza el indicador de carga
      },
      error => {
        console.error('Error al obtener los usuarios:', error);
        this.isLoading = false; // Finaliza el indicador de carga en caso de error
        alert('Ocurrió un error al obtener llos usuarios');
      }
    );
  }
}