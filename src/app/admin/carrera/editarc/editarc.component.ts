import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editarc',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editarc.component.html',
  styleUrls: ['./editarc.component.css']
})
export class EditarcComponent implements OnInit {
  carreraForm: FormGroup;
  isLoading = false;
  facultades: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //body de la consulta
    this.carreraForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      facultad: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchCarrera(id);
      this.fetchFacultades();
    } else {
      /* alert('ID de carrera no encontrado'); */
      this.router.navigate(['/carrera']);
    }
  }

  fetchCarrera(id: string): void {
    this.isLoading = true;
    this.apiService.getCarreraById(id).subscribe(
      (data: any) => {
        // Utiliza patchValue para establecer los valores recibidos en el formulario
        this.carreraForm.patchValue(data);
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener la carrera', error);
        this.isLoading = false;
        /* alert('Ocurrió un error al obtener la carrera'); */
      }
    );
  }

  fetchFacultades(): void {
    this.apiService.getAllFacultades().subscribe(
      (data: any[]) => {
        this.facultades = data;
      },
      error => {
        console.error('Error al obtener las facultades', error);
        /* alert('Ocurrió un error al obtener las facultades'); */
      }
    );
  }

  update(): void {
    if (this.carreraForm.valid) {
      this.isLoading = true;
      const carreraData = this.carreraForm.value;
      console.log(carreraData);
      this.apiService.updateCarrera(carreraData.id, carreraData).subscribe({
        next: (response) => {
          /* alert('Carrera actualizada exitosamente'); */
          this.isLoading = false;
          this.router.navigate(['/carrera']);
        },
        error: (error) => {
          console.error('Error al actualizar la carrera:', error);
          this.isLoading = false;
          /* alert('Ocurrió un error al actualizar la carrera. Verifica los permisos.'); */
        }
      });
    } else {
      /* alert('Por favor completa el formulario correctamente'); */
    }
  }

  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta carrera?');
    if (confirmDelete) {
      this.isLoading = true;
      const carreraId = this.carreraForm.value.id;
      console.log(carreraId);
      this.apiService.deleteCarrera(carreraId).subscribe({
        next: (response) => {
          /* alert('Carrera eliminada exitosamente'); */
          this.isLoading = false;
          this.router.navigate(['/carrera']);
        },
        error: (error) => {
          console.error('Error al eliminar la carrera:', error);
          this.isLoading = false;
          /* alert('Ocurrió un error al eliminar la carrera'); */
        }
      });
    }
  }
}
