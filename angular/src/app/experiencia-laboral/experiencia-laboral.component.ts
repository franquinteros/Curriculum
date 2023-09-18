import { Component, OnInit } from '@angular/core';
import { CvService } from '../servicios/cv.service';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  experiencia: any;
  constructor(private serviciocv: CvService) { }

  ngOnInit(): void {
    this.serviciocv.obtenerExperiencia().subscribe(
      data => {
        console.log(data["experienciaLaboral"][0]);
        this.experiencia = data["experienciaLaboral"][0];
      }
    )
  }
}
