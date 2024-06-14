import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-mod',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-mod.component.html',
  styleUrls: ['./crear-mod.component.css']
})
export class CrearModComponent implements OnInit {
  moduloForm: FormGroup;
  isLoading = false;
  facultades: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    //body
    this.moduloForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      facultad: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.fetchFacultades();
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


  onCreate(): void {
    if (this.moduloForm.invalid) {
      alert('Por favor completa el formulario correctamente');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear este modulo?');
    if (confirmCreate) {
      this.isLoading = true;
      const moduloData = this.moduloForm.value;
      console.log(moduloData);
      this.apiService.createModulo(moduloData).subscribe({
        next: (response) => {
          alert('modulo creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/modulo']);
        },
        error: (error) => {
          console.error('Error al crear el modulo:', error);
          alert('Ocurrió un error al crear el modulo: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}
