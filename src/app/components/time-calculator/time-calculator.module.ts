import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeCalculatorRoutingModule } from './time-calculator-routing.module';
import { TimeCalculatorComponent } from './time-calculator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimeCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TimeCalculatorRoutingModule
  ]
})
export class TimeCalculatorModule { }
