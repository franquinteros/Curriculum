import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.css']
})
export class TrayectoriaComponent {
  trayectoria: any;
  constructor(private serviciocv: CvService) { }

  ngOnInit(): void {
    this.serviciocv.obtenerTrayectoria().subscribe(
      data => {
        console.log(data["trayectoria"][0]);
        this.trayectoria = data["trayectoria"][0];
      }
    )
  }
}
