import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  proyectos: any;
  constructor(private serviciocv: CvService) {
    this.serviciocv.obtenerProyectos().subscribe(
      {
        next: (data) => {
          this.proyectos = data["proyectos"];
          console.log("proyectos ");
          console.log(this.proyectos);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.error(err)
        }
      }
    )
  }
}

