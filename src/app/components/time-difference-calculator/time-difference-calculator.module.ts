import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeDifferenceCalculatorRoutingModule } from './time-difference-calculator-routing.module';
import { TimeDifferenceCalculatorComponent } from './time-difference-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimeDifferenceCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TimeDifferenceCalculatorRoutingModule
  ]
})
export class TimeDifferenceCalculatorModule { }
