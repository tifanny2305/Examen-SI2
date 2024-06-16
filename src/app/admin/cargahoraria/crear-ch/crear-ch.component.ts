import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-ch',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-ch.component.html',
  styleUrls: ['./crear-ch.component.css']
})
export class CrearChComponent  implements OnInit {
  cargahorariaForm: FormGroup;
  isLoading = false;
  docentes: any[] = [];
  administradores: any[] = [];
  gestiones: any[] = [];
  materias: any[] = [];
  grupos: any[] = [];
  carreras: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    //body
    this.cargahorariaForm = this.formBuilder.group({
      fecha: ['', Validators.required],
      docente: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      administrador: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      gestion: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      materia: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      grupo: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      carrera: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.fetchDocentes();
    this.fetchAdministradores();
    this.fetchGestiones();
    this.fetchMaterias();
    this.fetchGrupos();
    this.fetchCarreras();
  }

  fetchDocentes(): void {
    this.apiService.getAllDocentes().subscribe(
      (data: any[]) => {
        this.docentes = data;
      },
      error => {
        console.error('Error al obtener las docentes', error);
        alert('Ocurrió un error al obtener las docentes');
      }
    );
  }

  fetchAdministradores(): void {
    this.apiService.getAllAdministradores().subscribe(
      (data: any[]) => {
        this.administradores = data;
      },
      error => {
        console.error('Error al obtener las administradores', error);
        alert('Ocurrió un error al obtener las administradores');
      }
    );
  }

  fetchGestiones(): void {
    this.apiService.getAllGestiones().subscribe(
      (data: any[]) => {
        this.gestiones = data;
      },
      error => {
        console.error('Error al obtener las gestiones', error);
        alert('Ocurrió un error al obtener las gestiones');
      }
    );
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

  fetchGrupos(): void {
    this.apiService.getAllGrupos().subscribe(
      (data: any[]) => {
        this.grupos = data;
      },
      error => {
        console.error('Error al obtener los grupo', error);
        alert('Ocurrió un error al obtener los grupos');
      }
    );
  }

  fetchCarreras(): void {
    this.apiService.getAllCarreras().subscribe(
      (data: any[]) => {
        this.carreras = data;
      },
      error => {
        console.error('Error al obtener las carreras', error);
        alert('Ocurrió un error al obtener las carreras');
      }
    );
  }

  onCreate(): void {
    if (this.cargahorariaForm.invalid) {
      alert('Por favor completa el formulario correctamente');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear este carga horaria?');
    if (confirmCreate) {
      this.isLoading = true;
      const cargahorariaData = this.cargahorariaForm.value;
      console.log(cargahorariaData);
      this.apiService.createCargaHoraria(cargahorariaData).subscribe({
        next: (response) => {
          alert('carga horario creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/carga-horaria']);
        },
        error: (error) => {
          console.error('Error al crear el carga horaria:', error);
          alert('Ocurrió un error al crear el carga horaria: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}
