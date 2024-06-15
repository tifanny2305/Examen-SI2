import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-asis',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-asis.component.html',
  styleUrls: ['./crear-asis.component.css']
})
export class CrearAsisComponent implements OnInit {
  asistenciaForm: FormGroup;
  isLoading = false;
  horarios: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    //body
    this.asistenciaForm = this.formBuilder.group({
      estado: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      observacion: ['', Validators.required],
      horario: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.fetchHorarios();
  }

  fetchHorarios(): void {
    this.apiService.getAllHorarios().subscribe(
      (data: any[]) => {
        this.horarios = data;
      },
      error => {
        console.error('Error al obtener los horarios', error);
        alert('Ocurrió un error al obtener los horarios');
      }
    );
  }
  
  onCreate(): void {
    if (this.asistenciaForm.invalid) {
      alert('Por favor completa el formulario correctamente');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear este horario?');
    if (confirmCreate) {
      this.isLoading = true;
      const asistenciaData = this.asistenciaForm.value;
      console.log(asistenciaData);
      this.apiService.createAsistencia(asistenciaData).subscribe({
        next: (response) => {
          alert('asistencia creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/asistencia']);
        },
        error: (error) => {
          console.error('Error al crear la asistencia:', error);
          alert('Ocurrió un error al crear la asistencia: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}