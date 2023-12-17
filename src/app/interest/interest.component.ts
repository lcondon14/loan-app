// interest.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interest',
  template: `
    <div>
      <h3>Total Interest Paid:</h3>
      <p>{{ interest | currency:'USD':'symbol':'1.2-2' }}</p>
    </div>
  `,
})
export class InterestComponent {
  @Input() interest: number;
}