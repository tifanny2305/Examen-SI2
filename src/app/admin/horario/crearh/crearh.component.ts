import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearh',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crearh.component.html',
  styleUrls: ['./crearh.component.css']
})
export class CrearhComponent implements OnInit {
  horarioForm: FormGroup;
  isLoading = false;
  materias: any[] = [];
  grupos: any[] = [];
  aulas: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    //body
    this.horarioForm = this.formBuilder.group({
      dia: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
      materia: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      grupo: this.formBuilder.group({
        id: ['', Validators.required]
      }),
      aula: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.fetchMaterias();
    this.fetchGrupos();
    this.fetchAulas();
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

  fetchAulas(): void {
    this.apiService.getAllAula().subscribe(
      (data: any[]) => {
        this.aulas = data;
      },
      error => {
        console.error('Error al obtener las aulas', error);
        alert('Ocurrió un error al obtener las aulas');
      }
    );
  }

  onCreate(): void {
    if (this.horarioForm.invalid) {
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
      const horarioData = this.horarioForm.value;
      console.log(horarioData);
      this.apiService.createHorario(horarioData).subscribe({
        next: (response) => {
          alert('horario creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/horario']);
        },
        error: (error) => {
          console.error('Error al crear el horario:', error);
          alert('Ocurrió un error al crear el horario: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}