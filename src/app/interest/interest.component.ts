/* 
    =========================================
    ;Title: interest.component.ts
    ;Author: Laurel Condon
    ;Date: 12-17-2023
    ;Description: typescript interest component
    =========================================
*/

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