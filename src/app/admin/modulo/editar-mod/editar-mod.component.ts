import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-mod',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editar-mod.component.html',
  styleUrls: ['./editar-mod.component.css']
})
export class EditarModComponent implements OnInit{
  moduloForm: FormGroup;
  isLoading = false;
  facultades: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //body de la consulta
    this.moduloForm = this.formBuilder.group({
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
      this.fetchModulo(id);
      this.fetchFacultades(); 
    } else {
      alert('ID del modulo no encontrado');
      this.router.navigate(['/modulo']);
    }
  }

  fetchModulo(id: string): void {
    this.isLoading = true;
    this.apiService.getModuloById(id).subscribe(
      (data: any) => {
        // Utiliza patchValue para establecer los valores recibidos en el formulario
        this.moduloForm.patchValue(data); 
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener el modulo', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener el modulo');
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
    if (this.moduloForm.valid) {
      this.isLoading = true;
      const moduloData = this.moduloForm.value;
      console.log(moduloData);
      this.apiService.updateModulo(moduloData.id, moduloData).subscribe({
        next: (response) => {
          alert('modulo actualizada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/modulo']);
        },
        error: (error) => {
          console.error('Error al actualizar el modulo:', error);
          this.isLoading = false;
          alert('Ocurrió un error al actualizar el modulo. Verifica los permisos.');
        }
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }
  
  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este modulo?');
    if (confirmDelete) {
      this.isLoading = true;
      const moduloId = this.moduloForm.value.id;
      console.log(moduloId);
      this.apiService.deleteModulo(moduloId).subscribe({
        next: (response) => {
          alert('Modulo eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/modulo']);
        },
        error: (error) => {
          console.error('Error al eliminar el modulo:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar el modulo');
        }
      });
    }
  }
}