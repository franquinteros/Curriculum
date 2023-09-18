import { Component } from '@angular/core';
import { CvService } from '../servicios/cv.service';
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent {
  me: any;
  constructor(private serviciocv: CvService) { }

  ngOnInit(): void {
    this.serviciocv.obtenerMe().subscribe(
      data => {
        console.log(data["sobreMi"][0]);
        this.me = data["sobremI"][0];
      }
    )
  }
}

