import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdatePwaService {

  constructor(
    private updates: SwUpdate
  ) { 
    this.updates.available.subscribe((event) => {
      this.showAppUpdateAlert();
    })
  }

  showAppUpdateAlert() {
    let response = confirm("Acutalización Disponible, Click en Aceptar para Instalarla");

    if(response ) {
      this.doAppUpdate();
    }
  }

  doAppUpdate(){
    this.updates.activateUpdate()
        .then(() => {
          document.location.reload();
        })
  }
}
