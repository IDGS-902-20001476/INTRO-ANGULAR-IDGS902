import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamesGrupos } from './utl/grupos.component';
import { alumno } from './utl/idgs902.componet';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasComponent } from './utl/formularios/operas-bas/operas-bas.component';
import {MatInputModule} from '@angular/material/input';
//import { IdgsComponent } from './utl/idgs/idgs.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesGrupos,
    alumno,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    OperasBasComponent,
    //IdgsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
