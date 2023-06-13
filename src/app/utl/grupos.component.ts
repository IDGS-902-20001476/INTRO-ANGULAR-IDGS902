import { Component } from '@angular/core';

@Component({
    selector: 'app-grupos',
    template: `
     <h1>Grupos</h1>
     <form>
        <label>Numero: </label>
        <input type="text" name="numero" value="" />
        <br/>
        <button class="btn-brn-primary">Calcular</button>
     </form>
     `
})
export class NamesGrupos {
  constructor() { }

}