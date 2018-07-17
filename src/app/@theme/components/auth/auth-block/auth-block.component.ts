import { Component } from '@angular/core';

@Component({
  selector: 'hft-auth-block',
  styleUrls: ['./auth-block.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
})
export class HftAuthBlockComponent {
}
