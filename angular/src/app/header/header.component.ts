import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header: any;
  constructor(private serviciocv: CvService) { }

  ngOnInit(): void {
    this.serviciocv.obtenerHeader().subscribe(
      data => {
        console.log(data["datosHeader"][0]);
        this.header = data["datosHeader"][0];
      }
    )
  }
}

