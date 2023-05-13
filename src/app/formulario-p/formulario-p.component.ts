import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-p',
  templateUrl: './formulario-p.component.html',
  styleUrls: ['./formulario-p.component.css']
})
export class FormularioPComponent {

  persona = {
    nombre: '',
    edad: ''
  }

  procesar () {
    console.log(this.persona)
  }

}
