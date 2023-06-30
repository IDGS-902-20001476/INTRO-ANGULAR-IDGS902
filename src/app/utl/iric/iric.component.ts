import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
  
})
export class IricComponent {

  imageWith:number=50;
  imageMargin:number=2; 
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!:string

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:IAlumnosIric[]=[

  {
    matricula: 1234,
    nombre: 'Pedro',
    edad: 23,
    correo: 'pedro@gmail.com',
    foto:'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
    calif: 6.7
  },
  {
    matricula: 1235,
    nombre: 'Juan',
    edad: 24,
    correo: 'juan@gmail.com',
    foto:'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
    calif: 10
  },
  {
    matricula: 1236,
    nombre: 'Maria',
    edad: 25,
    correo: 'maria@gmail.com',
    foto:'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
    calif: 3.7
   },

];

  onCalificaClick(message:string){
    this.alumnoTitle= `${message}`;
  }

}
