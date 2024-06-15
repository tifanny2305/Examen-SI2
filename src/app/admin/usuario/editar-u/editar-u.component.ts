import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editar-u',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-u.component.html',
  styleUrls: ['./editar-u.component.css']
})
export class EditarUComponent implements OnInit {
  isLoading: boolean = false;
  user: any = {
    username: '',
    email: '',
    password: '',
    roles: ''
  };

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchUsuario(id);
    } else {
      alert('ID de usuario no encontrado');
      this.router.navigate(['/usuario']);
    }
  }

  fetchUsuario(id: string): void {
    this.isLoading = true;
    this.apiService.getUsuarioById(id).subscribe(
      (data: any) => {
        this.user = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener el usuario', error);
        this.isLoading = false;
        alert('Ocurrió un error al obtener el usuario');
      }
    );
  }

  onSubmit(): void {
    if (confirm('¿Estás seguro de que deseas actualizar este usuario?')) {
      this.isLoading = true;
      this.apiService.updateUsuario(this.user.id, this.user).subscribe({
        next: () => {
          alert('Usuario actualizado exitosamente');
          this.isLoading = false;
          this.router.navigate(['/usuario']);
        },
        error: (error) => {
          console.error('Error al actualizar el usuario:', error);
          alert('Ocurrió un error al actualizar el usuario: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }

  onDelete(): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.isLoading = true;
      this.apiService.deleteUsuario(this.user.id).subscribe({
        next: () => {
          alert('Usuario eliminado exitosamente');
          this.isLoading = false;
          this.router.navigate(['/usuario']);
        },
        error: (error) => {
          console.error('Error al eliminar el usuario:', error);
          alert('Ocurrió un error al eliminar el usuario: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }
}
