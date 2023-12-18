/* 
    =========================================
    ;Title: home.component.ts
    ;Author: Laurel Condon
    ;Date: 12-17-2023
    ;Description: typescript home
    =========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorMessage: string;
  loanDetailsForm: FormGroup;
  monthlyPayment: number = 0;
  interest: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loanDetailsForm = this.fb.group({
      loanAmount: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      interestRate: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9.]*$')])],
      numOfYears: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
    });

    this.loanDetailsForm.valueChanges.subscribe(() => {
      this.calculateResults();
    });
  }

  get form() { return this.loanDetailsForm.controls; }

  calculateResults(): void {
    let formDetails = this.loanDetailsForm.value;
    let loanAmount = parseFloat(formDetails.loanAmount);
    let interestRate = parseFloat(formDetails.interestRate);
    let numOfYears = parseFloat(formDetails.numOfYears);

    let months = numOfYears * 12;
    let ratePerPeriod = (interestRate / 100) / 12;

    this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), months))) / (Math.pow((1 + ratePerPeriod), months) - 1);
    this.interest = (this.monthlyPayment * months) - loanAmount;
  }

  resetEntries(): void {
    this.monthlyPayment = 0;
    this.interest = 0;
    this.loanDetailsForm.reset();
  }
}
