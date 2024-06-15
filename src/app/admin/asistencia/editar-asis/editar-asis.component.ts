import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-asis',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editar-asis.component.html',
  styleUrls: ['./editar-asis.component.css']
})
export class EditarAsisComponent implements OnInit{
  asistenciaForm: FormGroup;
  isLoading = false;
  horarios: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchAsistencia(id);
      this.fetchHorario();
    } else {
      alert('ID de la asistencia no encontrado');
      this.router.navigate(['/asistencia']);
    }
  }

  fetchAsistencia(id: string): void {
    this.isLoading = true;
    this.apiService.getAsistenciaById(id).subscribe(
      (data: any) => {
        // Utiliza patchValue para establecer los valores recibidos en el formulario
        this.asistenciaForm.patchValue(data); 
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener la asistencia', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener la asistencia');
      }
    );
  }

  fetchHorario(): void {
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

  update(): void {
    if (this.asistenciaForm.valid) {
      this.isLoading = true;
      const asistenciasData = this.asistenciaForm.value;
      console.log(asistenciasData);
      this.apiService.updateAsistencia(asistenciasData.id, asistenciasData).subscribe({
        next: (response) => {
          alert('asistencia actualizada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/asistencia']);
        },
        error: (error) => {
          console.error('Error al actualizar la asistencia:', error);
          this.isLoading = false;
          alert('Ocurrió un error al actualizar la asistencia. Verifica los permisos.');
        }
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }
  
  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este asistencia?');
    if (confirmDelete) {
      this.isLoading = true;
      const asistenciaId = this.asistenciaForm.value.id;
      console.log(asistenciaId);
      this.apiService.deleteAsistencia(asistenciaId).subscribe({
        next: (response) => {
          alert('asistencia eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/asistencia']);
        },
        error: (error) => {
          console.error('Error al eliminar la asistencia:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar la asistencia');
        }
      });
    }
  }
}
