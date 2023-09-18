import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
proyectos: any;
  constructor(private serviciocv: CvService) { }

  ngOnInit(): void {
    this.serviciocv.obtenerProyectos().subscribe(
      data => {
        console.log(data["proyectos"][0]);
        this.proyectos = data["proyectos"][0];
      }
    )
  }
}

