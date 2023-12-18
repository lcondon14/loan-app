/* 
    =========================================
    ;Title: app.component.ts
    ;Author: Laurel Condon
    ;Date: 12-17-2023
    ;Description: typescript app component
    =========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Welcome to the Loan Application!';
}
