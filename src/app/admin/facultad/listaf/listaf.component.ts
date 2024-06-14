import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-listaf',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listaf.component.html',
  styleUrls: ['./listaf.component.css']
})
export class ListafComponent implements OnInit{
  facultades: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchFacultad();
  }

  fetchFacultad(): void {
 
    this.apiService.getAllFacultades().subscribe(
      (data: any) => {
        this.facultades = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener las facultades:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener las facultades');
      }
    );
  }



}
