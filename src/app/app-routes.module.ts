import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormContactsComponent } from './form-contacts/form-contacts.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contactos', component: ContactsComponent },
    { path: 'contactos/new', component: FormContactsComponent },
    { path: 'contactos/edit/:idContacto', component: FormContactsComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
