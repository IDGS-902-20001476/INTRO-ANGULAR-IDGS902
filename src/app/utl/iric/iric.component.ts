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

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:IAlumnosIric[]=[

  {
    matricula: 1234,
    nombre: 'Pedro',
    edad: 23,
    correo: 'pedro@gmail.com',
    foto:'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'
  },
  {
    matricula: 1235,
    nombre: 'Juan',
    edad: 24,
    correo: 'juan@gmail.com',
    foto:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpublicdomainvectors.org%2Fphotos%2Ffemale-user-icon.png&tbnid=sE4IDoFgK04TbM&vet=12ahUKEwjgme7T1cb_AhW_E94AHQwzBzgQMygCegUIARDNAQ..i&imgrefurl=https%3A%2F%2Fpublicdomainvectors.org%2Fes%2Fvectoriales-gratuitas%2FImagen-de-icono-de-usuario-femenino%2F71148.html&docid=EtA9mfBAWvaE_M&w=500&h=499&q=imagenes%20de%20usuarios%20femenino&ved=2ahUKEwjgme7T1cb_AhW_E94AHQwzBzgQMygCegUIARDNAQ'
  },
  {
    matricula: 1236,
    nombre: 'Maria',
    edad: 25,
    correo: 'maria@gmail.com',
    foto:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpublicdomainvectors.org%2Fphotos%2Ffemale-user-icon.png&tbnid=sE4IDoFgK04TbM&vet=12ahUKEwjgme7T1cb_AhW_E94AHQwzBzgQMygCegUIARDNAQ..i&imgrefurl=https%3A%2F%2Fpublicdomainvectors.org%2Fes%2Fvectoriales-gratuitas%2FImagen-de-icono-de-usuario-femenino%2F71148.html&docid=EtA9mfBAWvaE_M&w=500&h=499&q=imagenes%20de%20usuarios%20femenino&ved=2ahUKEwjgme7T1cb_AhW_E94AHQwzBzgQMygCegUIARDNAQ'
  },

];

}
