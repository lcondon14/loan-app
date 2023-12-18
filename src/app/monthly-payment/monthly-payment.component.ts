/* 
    =========================================
    ;Title: monthly-payment.component.ts
    ;Author: Laurel Condon
    ;Date: 12-17-2023
    ;Description: typescript monthly payment
    =========================================
*/
import { Component, Input } from '@angular/core';

@Component({
    
  selector: 'app-monthly-payment',
  template: `
    <div>
      <h3>Your Monthly Payment:</h3>
      <p>{{ monthlyPayment | currency:'USD':'symbol':'1.2-2' }}</p>
    </div>
  `,
})
export class MonthlyPaymentComponent {
  @Input() monthlyPayment: number;
}