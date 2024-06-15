import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-ges',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './editar-ges.component.html',
  styleUrls: ['./editar-ges.component.css'],
})
export class EditarGesComponent implements OnInit {
  gestionForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //body de la consulta
    this.gestionForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchGestion(id);
    } else {
      alert('ID de la gestion no fue encontrado');
      this.router.navigate(['/gestion']);
    }
  }

  fetchGestion(id: string): void {
    this.isLoading = true;
    this.apiService.getGestionById(id).subscribe(
      (data: any) => {
        // Utiliza patchValue para establecer los valores recibidos en el formulario
        data.fechaInicio = this.formatDate(data.fechaInicio);
        data.fechaFin = this.formatDate(data.fechaFin);
        this.gestionForm.patchValue(data);
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener el modulo', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener el modulo');
      }
    );
  }
  private formatDate(date: string): string {
    const newDate = new Date(date);
    // Asegúrate de obtener el formato yyyy-MM-dd
    const formattedDate = newDate.toISOString().substring(0, 10);
    return formattedDate;
  }
  update(): void {
    if (this.gestionForm.valid) {
      this.isLoading = true;
      const gestionData = this.gestionForm.value;
      console.log(gestionData);
      this.apiService.updateGestion(gestionData.id, gestionData).subscribe({
        next: (response) => {
          alert('gestion actualizada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/gestion']);
        },
        error: (error) => {
          console.error('Error al actualizar la gestion:', error);
          this.isLoading = false;
          alert(
            'Ocurrió un error al actualizar el gestion. Verifica los permisos.'
          );
        },
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }

  onDelete(): void {
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar esta gestion?'
    );
    if (confirmDelete) {
      this.isLoading = true;
      const gestionId = this.gestionForm.value.id;
      console.log(gestionId);
      this.apiService.deleteGestion(gestionId).subscribe({
        next: (response) => {
          alert('gestion eliminada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/gestion']);
        },
        error: (error) => {
          console.error('Error al eliminar la gestion:', error);
          this.isLoading = false;
          alert('Ocurrió un error al eliminar la gestion');
        },
      });
    }
  }
}
