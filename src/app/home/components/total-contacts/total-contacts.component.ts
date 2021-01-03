import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../../interfaces/contacto.interface';

@Component({
  selector: 'app-total-contacts',
  templateUrl: './total-contacts.component.html',
  styleUrls: ['./total-contacts.component.scss']
})
export class TotalContactsComponent implements OnInit {

  totalContacts: Number = 0;

  constructor() { 
    this.calcularTotalContactos();
  }

  ngOnInit(): void {
  }


  calcularTotalContactos() {

    if( !localStorage.getItem('contactos') ){
      this.totalContacts = 0;
      return;
    } else {
      let arrayContactos: Contacto[] = JSON.parse(localStorage.getItem('contactos'));
      this.totalContacts = arrayContactos.length;
    }

  }

}
