import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-cm',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-cm.component.html',
  styleUrls: ['./crear-cm.component.css']
})
export class CrearCMComponent implements OnInit {
  carreramateriaForm: FormGroup;
  isLoading = false;
  materias: any[] = [];
  carreras: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    //body
    this.carreramateriaForm = this.formBuilder.group({
      materia: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      carrera: this.formBuilder.group({
        id: ['', Validators.required]
      }),
    });
  }

  ngOnInit(): void {
    this.fetchMaterias();
    this.fetchCarreras();
  }

  fetchMaterias(): void {
    this.apiService.getAllMaterias().subscribe(
      (data: any[]) => {
        this.materias = data;
      },
      error => {
        console.error('Error al obtener las materias', error);
        alert('Ocurrió un error al obtener las materias');
      }
    );
  }

  fetchCarreras(): void {
    this.apiService.getAllCarreras().subscribe(
      (data: any[]) => {
        this.carreras = data;
      },
      error => {
        console.error('Error al obtener los carreras', error);
        alert('Ocurrió un error al obtener los carreras');
      }
    );
  }

  onCreate(): void {
    if (this.carreramateriaForm.invalid) {
      alert('Por favor completa el formulario correctamente');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear?');
    if (confirmCreate) {
      this.isLoading = true;
      const carreramateriaData = this.carreramateriaForm.value;
      console.log(carreramateriaData);
      this.apiService.createCarreraMateria(carreramateriaData).subscribe({
        next: (response) => {
          alert('creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/carrera-materia']);
        },
        error: (error) => {
          console.error('Error al crear:', error);
          alert('Ocurrió un error al crear: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}