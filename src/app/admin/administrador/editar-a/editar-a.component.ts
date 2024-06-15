import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-a',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editar-a.component.html',
  styleUrls: ['./editar-a.component.css']
})
export class EditarAComponent implements OnInit {
  administradorForm: FormGroup;
  isLoading = false;
  usuarios: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Inicialización del formulario
    this.administradorForm = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidoP: ['', Validators.required],
      apellidoM: ['', Validators.required],
      usuario: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.administradorForm.patchValue({ id });
      this.fetchAdmin(id);
      this.fetchUsuarios(); 
    } else {
      alert('ID de la aula no encontrado');
      this.router.navigate(['/administrador']);
    }
  }

  fetchAdmin(id: string): void {
    this.isLoading = true;
    this.apiService.getAdministradorById(id).subscribe(
      (data: any) => {
        this.administradorForm.patchValue(data); 
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener el administrador', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener el administrador');
      }
    );
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

  update(): void {
    if (this.administradorForm.valid) {
      this.isLoading = true;
      const adminData = this.administradorForm.value;
      console.log(adminData);
      this.apiService.updateAdministrador(adminData.id, adminData).subscribe({
        next: (response) => {
          alert('Administrador actualizado exitosamente');
          this.isLoading = false;
          this.router.navigate(['/administrador']);
        },
        error: (error) => {
          console.error('Error al actualizar el administrador:', error);
          this.isLoading = false;
          alert('Ocurrió un error al actualizar el administrador. Verifica los permisos.');
        }
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }

  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este administrador?');
    if (confirmDelete) {
      this.isLoading = true;
      const adminId = this.administradorForm.value.id;
      console.log(adminId);
      this.apiService.deleteAdministrador(adminId).subscribe({
        next: (response) => {
          alert('Administrador eliminado exitosamente');
          this.isLoading = false;
          this.router.navigate(['/administrador']);
        },
        error: (error) => {
          console.error('Error al eliminar el administrador:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar el administrador');
        }
      });
    }
  }
}
