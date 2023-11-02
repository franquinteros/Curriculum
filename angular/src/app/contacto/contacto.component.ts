import { Component,} from '@angular/core';
import { CvService } from '../servicios/cv.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contacto: any;
  constructor(private serviciocv: CvService) {
    this.serviciocv.obtenerContacto().subscribe(
      {
        next: (data) => {
          this.contacto = data["contacto"];
          console.log(data);
        },
        error: (err) => {
          alert("Se ha producido un error, por favor, intente nuevamente");
          console.error(err);
        }
      }
    )
  }

}
