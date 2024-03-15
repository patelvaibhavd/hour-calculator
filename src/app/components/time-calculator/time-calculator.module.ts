import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeCalculatorRoutingModule } from './time-calculator-routing.module';
import { TimeCalculatorComponent } from './time-calculator.component';


@NgModule({
  declarations: [
    TimeCalculatorComponent
  ],
  imports: [
    CommonModule,
    TimeCalculatorRoutingModule
  ]
})
export class TimeCalculatorModule { }
