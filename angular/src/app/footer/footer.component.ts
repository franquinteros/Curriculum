import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footer: any;
  constructor(private serviciocv: CvService) {
    this.serviciocv.obtenerFooter().subscribe(
      {
        next: (data) => {
          this.footer = data["datosFooter"];
          console.log("datosFooter");
          console.log(this.footer);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.error(err)
        }
      }
    )
  }
}
