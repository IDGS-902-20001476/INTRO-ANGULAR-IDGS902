import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

registros: any[] = [];

alumnosForms!: FormGroup;
constructor(private readonly fb: FormBuilder) {
  this.alumnosForms = this.initForm();
}

onSubmit(): void {
//console.log('Forms-> ', this.alumnoForms.value);
this.obtenerValor();
}

obtenerValor(): void {

const mat = this.alumnosForms.get('matricula')?.value;
const nom = this.alumnosForms.get('nombre')?.value;
const edad = this.alumnosForms.get('edad')?.value;
const cor = this.alumnosForms.get('correo')?.value;
const cal = this.alumnosForms.get('calif')?.value;
const fot = this.alumnosForms.get('foto')?.value;

const registro = {
  matricula: mat,
  nombre: nom,
  edad: edad,
  correo: cor,
  calificacion: cal,
  foto: fot
};

this.registros.push(registro);

}

initForm(): FormGroup {
  return this.fb.group({
    matricula: ['',[Validators.required , Validators.minLength(3), Validators.maxLength(5)]],
    nombre: ['',[Validators.required]],
    edad: ['',[Validators.required]],
    correo: ['' ,[Validators.required]],
    calif: ['',[Validators.required]],
    foto: ['',[Validators.required]]
    });
  }
}