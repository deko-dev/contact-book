import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../../interfaces/contacto.interface';

@Component({
  selector: 'app-total-birthday',
  templateUrl: './total-birthday.component.html',
  styleUrls: ['./total-birthday.component.scss']
})
export class TotalBirthdayComponent implements OnInit {

  cantBirthDay = 0;

  constructor() { 
    let arrayContactos: Contacto[] = JSON.parse(localStorage.getItem('contactos'));
    
    if(arrayContactos.length > 0){
      
      let arrayContactosBirthDay: Contacto[] = [];

      arrayContactosBirthDay = arrayContactos.filter(
        (contacto: Contacto) => {
          let cumpleanosArr = contacto.cumpleanos.split("-");
          let date = new Date();
          let month = (date.getMonth()+1);
          let day = date.getDate();

        if( parseInt(cumpleanosArr[1], 10) ==  month && parseInt(cumpleanosArr[2], 10) == day){
          return contacto;
        }

        }
      )

      this.cantBirthDay = arrayContactosBirthDay.length;
    } else {
      this.cantBirthDay = 0;
      return;
    }
  }

  ngOnInit(): void {
  }


  
  
}
