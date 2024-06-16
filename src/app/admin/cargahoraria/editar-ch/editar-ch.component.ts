import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-ch',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editar-ch.component.html',
  styleUrls: ['./editar-ch.component.css']
})
export class EditarChComponent implements OnInit{
  cargahorariaForm: FormGroup;
  isLoading = false;
  materias: any[] = [];
  grupos: any[] = [];
  docentes: any[] = [];
  administradores: any[] = [];
  gestiones: any[] = [];
  carreras: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //body de la consulta
    this.cargahorariaForm = this.formBuilder.group({
      id: [''],
      fecha: ['', Validators.required],

      materia: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      grupo: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      docente: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      administrador: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      carrera: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      gestion: this.formBuilder.group({
        id: ['', Validators.required]
      }),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchCargaHoraria(id);

      this.fetchMaterias();
      this.fetchGrupos();
      this.fetchDocentes();
      this.fetchAdministradores();
      this.fetchCarreras();
      this.fetchGestiones();
    } else {
      alert('ID del modulo no encontrado');
      this.router.navigate(['/carga-horaria']);
    }
  }

  fetchCargaHoraria(id: string): void {
    this.isLoading = true;
    this.apiService.getCargaHorariaById(id).subscribe(
      (data: any) => {
        // Utiliza patchValue para establecer los valores recibidos en el formulario
        this.cargahorariaForm.patchValue(data);
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener el horario', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener el horario');
      }
    );
  }

  fetchGrupos(): void {
    this.apiService.getAllGrupos().subscribe(
      (data: any[]) => {
        this.grupos = data;
      },
      error => {
        console.error('Error al obtener los grupos', error);
        alert('Ocurrió un error al obtener los grupos');
      }
    );
  }

  fetchGestiones(): void {
    this.apiService.getAllGestiones().subscribe(
      (data: any[]) => {
        this.gestiones = data;
      },
      error => {
        console.error('Error al obtener los gestion', error);
        alert('Ocurrió un error al obtener los gestion');
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
        alert('Ocurrió un error al obtener las materia');
      }
    );
  }

  fetchDocentes(): void {
    this.apiService.getAllDocentes().subscribe(
      (data: any[]) => {
        this.docentes = data;
      },
      error => {
        console.error('Error al obtener los docentes', error);
        alert('Ocurrió un error al obtener los docentes');
      }
    );
  }

  fetchAdministradores(): void {
    this.apiService.getAllAdministradores().subscribe(
      (data: any[]) => {
        this.administradores = data;
      },
      error => {
        console.error('Error al obtener los administradores', error);
        alert('Ocurrió un error al obtener los administradores');
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

  update(): void {
    if (this.cargahorariaForm.valid) {
      this.isLoading = true;
      const cargahorariaoData = this.cargahorariaForm.value;
      console.log(cargahorariaoData);
      this.apiService.updateCargaHoraria(cargahorariaoData.id, cargahorariaoData).subscribe({
        next: (response) => {
          alert('horaio actualizada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/carga-horaria']);
        },
        error: (error) => {
          console.error('Error al actualizar el carga-horaria:', error);
          this.isLoading = false;
          alert('Ocurrió un error al actualizar el carga-horaria. Verifica los permisos.');
        }
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }

  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este carga-horaria?');
    if (confirmDelete) {
      this.isLoading = true;
      const cargahorariaId = this.cargahorariaForm.value.id;
      console.log(cargahorariaId);
      this.apiService.deleteCargaHoraria(cargahorariaId).subscribe({
        next: (response) => {
          alert('horario eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/carga-horaria']);
        },
        error: (error) => {
          console.error('Error al eliminar el carga-horaria:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar el carga-horaria');
        }
      });
    }
  }
}
