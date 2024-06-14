import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearc',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crearc.component.html',
  styleUrls: ['./crearc.component.css']
})

export class CrearcComponent implements OnInit {
  isLoading = false;
  carreraForm: FormGroup;
  facultades: any[] = [];

  constructor(private apiService: ApiService, private router: Router, private fb: FormBuilder){
    this.carreraForm = this.fb.group({
      nombre: ['', Validators.required],
      facultadId: [null, Validators.required]
    });
  } 

  ngOnInit(): void {
    this.fetchFacultades();
  }

  fetchFacultades(): void {
    this.apiService.getAllFacultades().subscribe(
      (data: any[]) => {
        this.facultades = data;
      },
      error => {
        console.error('Error al obtener las facultades:', error);
        alert('Ocurrió un error al obtener las facultades');
      }
    );
  }

  onSubmit(): void {
    if (this.carreraForm.valid) {
      this.isLoading = true;

      const carrera = {
        nombre: this.carreraForm.value.nombre,
        facultad: {
          id: this.carreraForm.value.facultadId
        }
      };

      this.apiService.createCarrera(carrera).subscribe({
        next: (response) => {
          alert('Carrera creada');
          this.isLoading = false;
          this.carreraForm.reset();
          this.router.navigate(['/carrera']);
        },
        error: (error) => {
          console.error('Error al crear la carrera:', error);
          alert('Ocurrió un error al crear la carrera: ' + error.message);
          this.isLoading = false;
        },
      });
    } else {
      console.error('Formulario inválido');
    }
  }
}
