import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-ges',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-ges.component.html',
  styleUrl: './crear-ges.component.css'
})
export class CrearGesComponent implements OnInit {
  gestionForm: FormGroup;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    //body
    this.gestionForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onCreate(): void {
    if (this.gestionForm.invalid) {
      alert('Por favor completa el formulario correctamente');
      return;
    }

    if (!this.apiService.isAuthenticated()) {
      alert('El token no es válido o ha expirado');
      return;
    }

    const confirmCreate = confirm('¿Estás seguro de que deseas crear esta gestion?');
    if (confirmCreate) {
      this.isLoading = true;
      const gestionData = this.gestionForm.value;
      console.log(gestionData);
      this.apiService.createGestion(gestionData).subscribe({
        next: (response) => {
          alert('gestion creada exitosamente');
          this.isLoading = false;
          this.router.navigate(['/gestion']);
        },
        error: (error) => {
          console.error('Error al crear la gestion:', error);
          alert('Ocurrió un error al crear la gestion: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}

