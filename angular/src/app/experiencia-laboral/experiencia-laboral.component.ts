import { Component,} from '@angular/core';
import { CvService } from '../servicios/cv.service';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {
  experiencia: any;
  constructor(private serviciocv: CvService) {
    this.serviciocv.obtenerExperiencia().subscribe(
      {
        next: (data) => {
          this.experiencia = data["experienciaLaboral"];
          console.log("experienciaLaboral");
          console.log(this.experiencia);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.error(err)
        }
      }
    )
  }
}
