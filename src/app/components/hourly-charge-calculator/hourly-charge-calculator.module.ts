import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HourlyChargeCalculatorRoutingModule } from './hourly-charge-calculator-routing.module';
import { HourlyChargeCalculatorComponent } from './hourly-charge-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HourlyChargeCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HourlyChargeCalculatorRoutingModule
  ]
})
export class HourlyChargeCalculatorModule { }
