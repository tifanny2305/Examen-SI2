import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-cm',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editar-cm.component.html',
  styleUrls: ['./editar-cm.component.css']
})
export class EditarCMComponent implements OnInit{
  carreramateriaForm: FormGroup;
  isLoading = false;
  materias: any[] = [];
  carreras: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //body de la consulta
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carreramateriaForm.patchValue({id});
      this.fetchCarreraMateria(id);
      this.fetchMaterias();
      this.fetchCarreras();
    } else {
      alert('ID del modulo no encontrado');
      this.router.navigate(['/carrera-materia']);
    }
  }

  fetchCarreraMateria(id: string): void {
    this.isLoading = true;
    this.apiService.getCarreraMateriaById(id).subscribe(
      (data: any) => {
        // Utiliza patchValue para establecer los valores recibidos en el formulario
        this.carreramateriaForm.patchValue(data); 
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener el horario', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener la carrera materia');
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
    if (this.carreramateriaForm.valid) {
      this.isLoading = true;
      const carreramateriaData = this.carreramateriaForm.value;
      console.log(carreramateriaData);
      this.apiService.updateCarreraMateria(carreramateriaData.id, carreramateriaData).subscribe({
        next: (response) => {
          alert('actualizada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/carrera-materia']);
        },
        error: (error) => {
          console.error('Error al actualizar ', error);
          this.isLoading = false;
          alert('Ocurrió un error al actualizar. Verifica los permisos.');
        }
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }
  
  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar');
    if (confirmDelete) {
      this.isLoading = true;
      const carreramateriaId = this.carreramateriaForm.value.id;
      console.log(carreramateriaId);
      this.apiService.deleteCarreraMateria(carreramateriaId).subscribe({
        next: (response) => {
          alert('eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/carrera-materia']);
        },
        error: (error) => {
          console.error('Error al eliminar:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar');
        }
      });
    }
  }
}