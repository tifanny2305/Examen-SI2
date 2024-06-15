import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-u',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-u.component.html',
  styleUrl: './crear-u.component.css'
})
export class CrearUComponent {
  
}
