import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-aul',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editar-aul.component.html',
  styleUrls: ['./editar-aul.component.css']
})
export class EditarAulComponent implements OnInit{
  aulaForm: FormGroup;
  isLoading = false;
  modulos: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //body de la consulta
    this.aulaForm = this.formBuilder.group({
      id: [''],
      numero: ['', Validators.required],
      modulo: this.formBuilder.group({
        id: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchAula(id);
      this.fetchModulos(); 
    } else {
      alert('ID de la aula no encontrado');
      this.router.navigate(['/aula']);
    }
  }

  fetchAula(id: string): void {
    this.isLoading = true;
    this.apiService.getAulaById(id).subscribe(
      (data: any) => {
        // Utiliza patchValue para establecer los valores recibidos en el formulario
        this.aulaForm.patchValue(data); 
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener el aula', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener el aula');
      }
    );
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

  update(): void {
    if (this.aulaForm.valid) {
      this.isLoading = true;
      const aulaData = this.aulaForm.value;
      console.log(aulaData);
      this.apiService.updateAula(aulaData.id, aulaData).subscribe({
        next: (response) => {
          alert('aula actualizada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/aula']);
        },
        error: (error) => {
          console.error('Error al actualizar el aula:', error);
          this.isLoading = false;
          alert('Ocurrió un error al actualizar el aula. Verifica los permisos.');
        }
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }
  
  onDelete(): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar esta aula?');
    if (confirmDelete) {
      this.isLoading = true;
      const aulaId = this.aulaForm.value.id;
      console.log(aulaId);
      this.apiService.deleteAula(aulaId).subscribe({
        next: (response) => {
          alert('Aula eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/aula']);
        },
        error: (error) => {
          console.error('Error al eliminar el aula:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar el aula');
        }
      });
    }
  }
}
