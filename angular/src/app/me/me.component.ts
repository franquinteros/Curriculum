import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent {
  me: any;
  constructor(private serviciocv: CvService) {
    this.serviciocv.obtenerMe().subscribe(
      {
        next: (data) => {
          this.me = data["sobreMi"];
          console.log("sobreMi");
          console.log(this.me);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.error(err)
        }
      }
    )
  }
}

