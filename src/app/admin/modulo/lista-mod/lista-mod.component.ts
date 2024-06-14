import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-mod',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-mod.component.html',
  styleUrls: ['./lista-mod.component.css']
})
export class ListaModComponent implements OnInit{
  modulos: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchModulos();
  }

  fetchModulos(): void {

    this.apiService.getAllModulos().subscribe(
      (data: any) => {
        this.modulos = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener los modulos:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener los moduloss');
      }
    );
  }

}
