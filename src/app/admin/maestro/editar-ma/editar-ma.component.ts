import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-ma',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editar-ma.component.html',
  styleUrls: ['./editar-ma.component.css']
})
export class EditarMaComponent implements OnInit {
  maestroForm: FormGroup;
  isLoading = false;
  usuarios: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Inicialización del formulario
    this.maestroForm = this.formBuilder.group({
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
      this.maestroForm.patchValue({ id });
      this.fetchMaestro(id);
      this.fetchUsuarios(); 
    } else {
      alert('ID de la aula no encontrado');
      this.router.navigate(['/maestro']);
    }
  }

  fetchMaestro(id: string): void {
    this.isLoading = true;
    this.apiService.getDoceneteById(id).subscribe(
      (data: any) => {
        this.maestroForm.patchValue(data); 
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener el docente', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener el docente');
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
    if (this.maestroForm.valid) {
      this.isLoading = true;
      const docenteData = this.maestroForm.value;
      console.log(docenteData);
      this.apiService.updateDocente(docenteData.id, docenteData).subscribe({
        next: (response) => {
          alert('docente actualizado exitosamente');
          this.isLoading = false;
          this.router.navigate(['/maestro']);
        },
        error: (error) => {
          console.error('Error al actualizar el docente:', error);
          this.isLoading = false;
          alert('Ocurrió un error al actualizar el docente. Verifica los permisos.');
        }
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }

  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este docente?');
    if (confirmDelete) {
      this.isLoading = true;
      const DocenteId = this.maestroForm.value.id;
      console.log(DocenteId);
      this.apiService.deleteDocente(DocenteId).subscribe({
        next: (response) => {
          alert('docente eliminado exitosamente');
          this.isLoading = false;
          this.router.navigate(['/maestro']);
        },
        error: (error) => {
          console.error('Error al eliminar el docente:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar el docente');
        }
      });
    }
  }
}
