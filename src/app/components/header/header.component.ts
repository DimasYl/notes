import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      :host {
        ::ng-deep .p-card-body {
          border: 1px solid lightgray;
        }
      }
    `
  ]
})
export class HeaderComponent {
}
