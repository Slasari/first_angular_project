import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-plantilla',
  templateUrl: './formulario-plantilla.component.html',
  styleUrls: ['./formulario-plantilla.component.css']
})
export class FormularioPlantillaComponent {

  persona = {
    nombre: '',
    edad: ''
  }

  procesar () {
    console.log(this.persona)
  }

}
