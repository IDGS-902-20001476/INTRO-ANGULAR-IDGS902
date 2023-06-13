import { Component } from '@angular/core';

@Component({
    selector: 'app-idgs902',
    template: `
      <b>Practica:  {{alumno.practica}}</b>

     <div>
   <b>Matricula:</b> {{alumno.matricula}} 
  </div>
  <div>
    <b>Nombre:</b>{{alumno.nombre }}
  </div>
  <div>
    <b>Apellido Paterno:</b>{{alumno.apaterno }}   
  </div>
  <div>
    <b>Apellido Materno:</b>{{alumno.amaterno}}
  </div>

     `
})
export class alumno {
  //Objetos
  alumno = {
    practica: 1,
    matricula: 2001476,
    nombre: 'Adriana',
    apaterno: 'Barron',
    amaterno: 'Rico'
  };

}