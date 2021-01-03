import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contacto } from '../../../interfaces/contacto.interface';

@Component({
  selector: 'app-label-contact',
  templateUrl: './label-contact.component.html',
  styleUrls: ['./label-contact.component.scss']
})
export class LabelContactComponent implements OnInit {

  @Input()
  contacto: Contacto;
  @Output() actualizarLista = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteContact(idContacto: String | Number){
    // Cargamos los contactos al Array
    let arrayContactos: Contacto[] = JSON.parse(localStorage.getItem('contactos'));
    
    // Variable para guardar la posicion del Contacto
    let positionContact = 0;

    arrayContactos.forEach(
      (contacto: Contacto, index) => {
        if (contacto.id == idContacto){
          positionContact = index;
        }
      })

    arrayContactos.splice(positionContact, 1);  

    localStorage.setItem('contactos', JSON.stringify(arrayContactos));

    console.log("ELIMINADO Y ACTUALIZADO");
    this.actualizarLista.emit("true");
  }

}
