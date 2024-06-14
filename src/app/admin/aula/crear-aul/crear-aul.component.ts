import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-aul',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-aul.component.html',
  styleUrls: ['./crear-aul.component.css']
})
export class CrearAulComponent implements OnInit {
  aulaForm: FormGroup;
  isLoading = false;
  modulos: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    //body
    this.aulaForm = this.formBuilder.group({
      numero: ['', Validators.required],
      modulo: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.fetchModulos();
  }

  fetchModulos(): void {
    this.apiService.getAllModulos().subscribe(
      (data: any[]) => {
        this.modulos = data;
      },
      error => {
        console.error('Error al obtener los modulos', error);
        alert('Ocurrió un error al obtener los modulos');
      }
    );
  }


  onCreate(): void {
    if (this.aulaForm.invalid) {
      alert('Por favor completa el formulario correctamente');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear esta aula?');
    if (confirmCreate) {
      this.isLoading = true;
      const aulaData = this.aulaForm.value;
      console.log(aulaData);
      this.apiService.createAula(aulaData).subscribe({
        next: (response) => {
          alert('aula creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/aula']);
        },
        error: (error) => {
          console.error('Error al crear el aula:', error);
          alert('Ocurrió un error al crear el aula: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}
