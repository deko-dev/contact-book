import { Component, OnInit } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  cargando: Boolean = false;
  arrayContactos: Contacto[] = [];
  
  constructor() { 
    this.updateList("true");
  }

  ngOnInit(): void {
  }

  updateList(event: string){
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false;
      this.arrayContactos = JSON.parse(localStorage.getItem('contactos'));
    }, 1500)
  }

}
