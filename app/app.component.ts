import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <router-outlet></router-outlet>
    <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {

}
