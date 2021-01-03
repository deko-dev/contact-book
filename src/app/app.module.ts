import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormContactsComponent } from './form-contacts/form-contacts.component';
import { LabelContactComponent } from './contacts/components/label-contact/label-contact.component';
import { FormComponent } from './form-contacts/components/form/form.component';
import { TotalContactsComponent } from './home/components/total-contacts/total-contacts.component';
import { TotalBirthdayComponent } from './home/components/total-birthday/total-birthday.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routes.module';
import { CargandoComponent } from './shared/cargando/cargando.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    NavbarComponent,
    FormContactsComponent,
    LabelContactComponent,
    FormComponent,
    TotalContactsComponent,
    TotalBirthdayComponent,
    CargandoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
