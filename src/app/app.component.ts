import { Component } from '@angular/core';
import { UpdatePwaService } from './services/update-pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contact-book';

  constructor(
    private updateService: UpdatePwaService
  ) {

  }
}
