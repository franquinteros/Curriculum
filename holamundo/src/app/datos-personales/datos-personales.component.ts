import { Component } from '@angular/core';
import { DatospersonalesService } from '../services/datospersonales.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  mensaje="";
  constructor(private miServicio:DatospersonalesService)
{
  this.mensaje=this.miServicio.saludar();
  //alert (this.miServicio.saludar());
}
}
