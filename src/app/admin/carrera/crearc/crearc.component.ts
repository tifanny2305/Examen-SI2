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
  carreraForm: FormGroup;
  isLoading = false;
  facultades: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    //body
    this.carreraForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      facultad: this.formBuilder.group({
        id: ['', Validators.required]
      })
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
        console.error('Error al obtener las facultades', error);
        alert('Ocurrió un error al obtener las facultades');
      }
    );
  }


  onCreate(): void {
    if (this.carreraForm.invalid) {
      alert('Por favor completa el formulario correctamente');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear esta carrera?');
    if (confirmCreate) {
      this.isLoading = true;
      const carreraData = this.carreraForm.value;
      console.log(carreraData);
      this.apiService.createCarrera(carreraData).subscribe({
        next: (response) => {
          alert('Carrera creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/carrera']);
        },
        error: (error) => {
          console.error('Error al crear la carrera:', error);
          alert('Ocurrió un error al crear la carrera: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}
