import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{
  materiaId: string =  '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.materiaId = params['id'];
      // Aquí puedes utilizar this.materiaId para cargar los datos de la materia con ese ID
    });
  }
}

