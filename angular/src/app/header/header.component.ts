import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header: any;
  constructor(private serviciocv: CvService) {
    this.serviciocv.obtenerHeader().subscribe(
      {
        next: (data) => {
          this.header = data["datosHeader"];
          console.log("datosHeader");
          console.log(this.header);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.error(err)
        }
      }
    )
  }
}

