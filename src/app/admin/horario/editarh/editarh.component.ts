import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editarh',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editarh.component.html',
  styleUrls: ['./editarh.component.css']
})
export class EditarhComponent implements OnInit{
  horarioForm: FormGroup;
  isLoading = false;
  materias: any[] = [];
  grupos: any[] = []; 
  aulas: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //body de la consulta
    this.horarioForm = this.formBuilder.group({
      id: [''],
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchHorario(id);
      this.fetchMaterias();
      this.fetchGrupos();
      this.fetchAulas(); 
    } else {
      alert('ID del modulo no encontrado');
      this.router.navigate(['/horario']);
    }
  }

  fetchHorario(id: string): void {
    this.isLoading = true;
    this.apiService.getHorarioById(id).subscribe(
      (data: any) => {
        // Utiliza patchValue para establecer los valores recibidos en el formulario
        this.horarioForm.patchValue(data); 
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

  update(): void {
    if (this.horarioForm.valid) {
      this.isLoading = true;
      const horarioData = this.horarioForm.value;
      console.log(horarioData);
      this.apiService.updateHorario(horarioData.id, horarioData).subscribe({
        next: (response) => {
          alert('horaio actualizada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/horario']);
        },
        error: (error) => {
          console.error('Error al actualizar el horario:', error);
          this.isLoading = false;
          alert('Ocurrió un error al actualizar el horario. Verifica los permisos.');
        }
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }
  
  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este horario?');
    if (confirmDelete) {
      this.isLoading = true;
      const horarioId = this.horarioForm.value.id;
      console.log(horarioId);
      this.apiService.deleteHorario(horarioId).subscribe({
        next: (response) => {
          alert('horario eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/horario']);
        },
        error: (error) => {
          console.error('Error al eliminar el horario:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar el horario');
        }
      });
    }
  }
}