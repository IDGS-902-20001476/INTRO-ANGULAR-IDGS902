import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NamesGrupos } from './utl/grupos.component';
import { alumno } from './utl/idgs902.componet';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';

import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { OperasModule } from './utl/formularios/operas/operas.module';

import { DistanciaDosPuntosModule } from './tarea/distancia-dos-puntos/distancia-dos-puntos.module';



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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DistanciaDosPuntosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
