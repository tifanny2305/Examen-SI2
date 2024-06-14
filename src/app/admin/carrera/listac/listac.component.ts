import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listac',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listac.component.html',
  styleUrls: ['./listac.component.css']
})
export class ListacComponent implements OnInit{
  carreras: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchCarreras();
  }

  fetchCarreras(): void {

    this.apiService.getAllCarreras().subscribe(
      (data: any) => {
        this.carreras = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener las carreras:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener las carreras');
      }
    );
  }
}
