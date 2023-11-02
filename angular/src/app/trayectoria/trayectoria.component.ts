import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.css']
})
export class TrayectoriaComponent {
  trayectoria: any;
  constructor(private serviciocv: CvService) {
    this.serviciocv.obtenerTrayectoria().subscribe(
      {
        next: (data) => {
          this.trayectoria = data["trayectoria"];
          console.log("trayectoria");
          console.log(this. trayectoria);
        },
        error: (err) => {
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.error(err)
        }
      }
    )
  }
}
