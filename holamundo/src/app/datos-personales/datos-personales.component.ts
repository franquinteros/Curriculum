import { Component } from '@angular/core';
import { DatospersonalesService } from '../services/datospersonales.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  constructor(private miServicio:DatospersonalesService)
{
alert (this.miServicio.saludar());
}
}
