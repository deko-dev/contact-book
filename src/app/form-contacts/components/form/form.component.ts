import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../../../interfaces/contacto.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // Variable que captura el fomulario
  formContacto: FormGroup;
  // Variable que activa/desactiva el Loading
  cargando: Boolean = false;
  // Variable que avisa en que estado está el Fomulario
  estadoForm: String= "";
  // Constante para el tiempo del Loading
  private timeLoadignActive = 1500;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { 

    this.activateRoute.params
      .subscribe((param) => {
        if(param.idContacto){
          let contacto: Contacto = this.getContacto(param.idContacto);
          this.cargarData(contacto);
          this.estadoForm = "update";
        } else {
          this.crearFormulario();
          this.estadoForm = "create";
        }
      });
  }

  ngOnInit(): void {
  }

  // Método que crea el formulario
  crearFormulario(){
    // Creamos el Formulario
    this.formContacto = this.formBuilder.group({
      id: [this.crearId(), { disabled: true}],
      nid: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', Validators.required],
      cumpleanos: ['', Validators.required],
    });
  }

    // Método que crea el formulario
    cargarData(contacto: Contacto){
      // Creamos el Formulario
      this.formContacto = this.formBuilder.group({
        id: [contacto.id, { disabled: true}],
        nid: [contacto.nid, Validators.required],
        nombre: [contacto.nombre, Validators.required],
        direccion: [contacto.direccion, Validators.required],
        celular: [contacto.celular, Validators.required],
        cumpleanos: [contacto.cumpleanos, Validators.required],
      });
    }




  // Método que guarda un contacto
  guardarContacto() {

    // Creamos una variable para capturar los contactos
    let arrayContacts: Contacto[] = [];
    // Creamos una variable para capturar los datos del Fomulario
    let dataContacto: Contacto = this.formContacto.value;

    // Evaluamos si existe o no un item Llamado "contactos"
    if(!localStorage.getItem('contactos')){
      // Insertamos el nuevo contacto al Array
      arrayContacts.push(dataContacto);
      // Creamos el Item en el Local Storage
      localStorage.setItem('contactos', JSON.stringify(arrayContacts));
      this.redirigirContactosPage()
    } else {

      if(this.estadoForm === "create"){
        // Obtenemos todos los contactos que estan en el LocalStorage
        arrayContacts = JSON.parse(localStorage.getItem('contactos'));
        // Insertamos el nuevo contacto al Array
        arrayContacts.push(dataContacto);
        // Actualizamos el Item "contactos"
        localStorage.setItem('contactos', JSON.stringify(arrayContacts));
        this.redirigirContactosPage()
      } else if(this.estadoForm === "update"){
        // Obtenemos todos los contactos que estan en el LocalStorage
        arrayContacts = JSON.parse(localStorage.getItem('contactos'));
        // Recorremos el array para editar el contacto
        arrayContacts.forEach(
            (contacto: Contacto) => {
              if( contacto.id == dataContacto.id){
                contacto.nid = dataContacto.nid;
                contacto.nombre = dataContacto.nombre;
                contacto.celular = dataContacto.celular;
                contacto.direccion = dataContacto.direccion;
                contacto.cumpleanos = dataContacto.cumpleanos;
              }  
            })
        // Actualizamos el Item "contactos"
        localStorage.setItem('contactos', JSON.stringify(arrayContacts));
        this.redirigirContactosPage()
      }
    }

  }


  // Método que crea un ID 
  crearId(){
    const date = new Date()

    return date.getTime();
  }


  // Método para redirigir a contactos
  redirigirContactosPage(){
    this.router.navigateByUrl('contactos');
  }

  // Método para obtener un solo Contacto
  getContacto(idContacto: String){
    // cargamos los contactos a un array
    let arrayContactos: Contacto[] =  JSON.parse(localStorage.getItem('contactos'));

    // Creamos la variable para cargar el contacto encontrado
    let contactoEncontrado: Contacto;

    // Recorremos el Array para buscar el contacto
    arrayContactos.forEach((contacto: Contacto) => {
      if(contacto.id == idContacto){
        contactoEncontrado = contacto;
      }
    })

    // Retornamos el contacto
    return contactoEncontrado;
  }

  activarLoading(){
    this.cargando = true;

    setTimeout(() => {
      this.cargando = false;
      this.guardarContacto();
    }, this.timeLoadignActive)
  }


}