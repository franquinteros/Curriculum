import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {
  obtenerProyectos: any;
  constructor(private serviciocv: CvService) {
    this.serviciocv.obtenerProyectos().subscribe(
      {
        next: (data) => {
          this.obtenerProyectos = data["proyectos"];
          console.log("proyectos ");
          console.log(this.obtenerProyectos);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.error(err)
        }
      }
    )
  }
}

