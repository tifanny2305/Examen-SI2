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
  usuario: any = { username: '', email: '', password: '' };
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

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
        this.usuario = data;
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isLoading = true;
      this.apiService.updateUsuario(id, this.usuario.username, this.usuario.email, this.usuario.password).subscribe({
        next: (response) => {
          alert('Usuario actualizado exitosamente');
          this.isLoading = false;
          this.router.navigate(['/usuario']);
        },
        error: (error) => {
          console.error('Error al actualizar el usuario:', error);
          console.log(error);
          this.isLoading = false;
        }
      });
    }
  }

  onDelete(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este usuario?');
      if (confirmDelete) {
        this.isLoading = true;
        this.apiService.deleteUsuario(id).subscribe({
          next: (response) => {
            alert('Usuario eliminado exitosamente');
            this.isLoading = false;
            this.router.navigate(['/usuario']);
          },
          error: (error) => {
            console.error('Error al eliminar el usuario:', error);
            this.isLoading = false;
          }
        });
      }
    }
  }
}