import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listah',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listah.component.html',
  styleUrls: ['./listah.component.css']
})
export class ListahComponent implements OnInit{
  horarios: any[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchHorario();
  }

  fetchHorario(): void {

    this.apiService.getAllHorarios().subscribe(
      (data: any) => {
        this.horarios = data;
        this.isLoading = false; 
      },
      error => {
        console.error('Error al obtener los horarios:', error);
        this.isLoading = false; 
        alert('Ocurrió un error al obtener los horarios');
      }
    );
  }
}
