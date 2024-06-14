import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-editarc',
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
    this.carreraForm = this.formBuilder.group({
      id: [''], // Se espera recibir el ID de la carrera desde la ruta, no se inicializa aquí
      nombre: ['', Validators.required],
      facultadId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchCarrera(id);
      this.fetchFacultades(); 
    } else {
      alert('ID de carrera no encontrado');
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
        alert('Ocurrió un error al obtener la carrera');
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
        alert('Ocurrió un error al obtener las facultades');
      }
    );
  }

  update(): void {
    if (this.carreraForm.valid) {
      this.isLoading = true;
      const carreraData = this.carreraForm.value;
      // Envía solo carreraData, no carreraData.id como primer argumento
      this.apiService.updateCarrera(carreraData.id, carreraData).subscribe({
        next: (response) => {
          alert('Carrera actualizada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/carrera']);
        },
        error: (error) => {
          console.error('Error al actualizar la carrera:', error);
          this.isLoading = false;
          alert('Ocurrió un error al actualizar la carrera');
        }
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }

  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta carrera?');
    if (confirmDelete) {
      this.isLoading = true;
      const carreraId = this.carreraForm.value.id;
      this.apiService.deleteCarrera(carreraId).subscribe({
        next: (response) => {
          alert('Carrera eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/carrera']);
        },
        error: (error) => {
          console.error('Error al eliminar la carrera:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar la carrera');
        }
      });
    }
  }
}
