import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  obtenerContacto(): Observable<any> {
    return this.http.get("./assets/contacto.json");
  }
  obtenerExperiencia(): Observable<any> {
    return this.http.get("./assets/experiencia-laboral.json");
  }
  obtenerFooter(): Observable<any> {
    return this.http.get("./assets/footer.json");
  }
  obtenerHeader(): Observable<any> {
    return this.http.get("./assets/header.json");
  }
  obtenerMe(): Observable<any> {
    return this.http.get("./assets/me.json");
  }
  obtenerProyectos(): Observable<any> {
    return this.http.get("./assets/proyectos.json");
  }
  obtenerTrayectoria(): Observable<any> {
    return this.http.get("./assets/trayectoria.json");
  }
}
