import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-contacts',
  templateUrl: './form-contacts.component.html',
  styleUrls: ['./form-contacts.component.scss']
})
export class FormContactsComponent implements OnInit {

  // Varibale que actualiza el titulo de la acción del Formulario
  actionForm: String = "Crear";

  constructor(
    private activateRoute: ActivatedRoute
  ) { 
    this.activateRoute.params
      .subscribe((param) => {
        if(param.idContacto){
          this.actionForm = "Actualizar";
        } 
      });
  }

  ngOnInit(): void {
  }

}
