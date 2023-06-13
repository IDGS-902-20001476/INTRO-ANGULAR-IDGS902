import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs902';
//funciones
  duplicaN(n: number): number {
    return n * 2;
  }

  //Objetos
  alumno = {
    matricula: 201910000,
    nombre: 'Adriana',
    apaterno: 'Barron',
    amaterno: 'Rico',
    Inscrito:'Si',
    fechaNacimiento :new Date()
  };

}
