import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input() title?: string;
  /* input le indica al componente que va a recibir algo */

  @Output() titleChange = new EventEmitter<string>();
  /* output le indica al componente que algo va a ser transmitido al Padre */

  emitTitleChange(){
    this.titleChange.emit(this.title);
    /* El argumento que recibe el metodo es en este caso, la informacion que esta cambiando */
  }
}
