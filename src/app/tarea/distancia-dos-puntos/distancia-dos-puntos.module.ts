import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { TareaComponent } from '../tarea.component';



@NgModule({
  declarations: [
    TareaComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule

  ],
   exports: [
    TareaComponent,

]
})
export class DistanciaDosPuntosModule { 


}
