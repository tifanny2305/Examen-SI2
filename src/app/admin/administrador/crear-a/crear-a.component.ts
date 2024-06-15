import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-a',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-a.component.html',
  styleUrls: ['./crear-a.component.css']
})
export class CrearAComponent implements OnInit {
  administradorForm: FormGroup;
  isLoading = false;
  usuarios: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    //body
    this.administradorForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidoP: ['', Validators.required],
      apellidoM: ['', Validators.required],
      usuario: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.fetchUsuarios();
  }

  fetchUsuarios(): void {
    this.apiService.getAllUsuarios().subscribe(
      (data: any[]) => {
        this.usuarios = data;
      },
      error => {
        console.error('Error al obtener los usuarios', error);
        alert('Ocurrió un error al obtener los usuarios');
      }
    );
  }


  onCreate(): void {
    if (this.administradorForm.invalid) {
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
      const adminData = this.administradorForm.value;
      console.log(adminData);
      this.apiService.createAdministrador(adminData).subscribe({
        next: (response) => {
          alert('administrador creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/administrador']);
        },
        error: (error) => {
          console.error('Error al crear el administrador:', error);
          alert('Ocurrió un error al crear el administrador: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}
