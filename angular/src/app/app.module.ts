import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MeComponent } from './me/me.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { TrayectoriaComponent } from './trayectoria/trayectoria.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactoComponent,
    MeComponent,
    HabilidadesComponent,
    ExperienciaLaboralComponent,
    TrayectoriaComponent,
    ProyectosComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
